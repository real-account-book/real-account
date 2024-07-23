import React, { useEffect, useState } from 'react'
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { getMinus, getPlus } from '../../apis/total'
import { dateFormatter } from '../../utils/dateFormatter'

interface CalendarProps {
  year: number;
  month: number;
}

export default function Calendar({ year, month }: CalendarProps) {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const [histories, setHistories] = useState<any>([])

  const handleEventClick = (clickInfo: EventClickArg) => {
    // 여기에 click 이벤트 작성
  }

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  }

  const initialDate = `${year}-${month.toString().padStart(2, '0')}-01`;

  const dataSorting = (data: any) => {
    const res = data.sort((a, b) => {
      return (
        new Date(a.uploaded_at).getTime() - new Date(b.uploaded_at).getTime()
      );
    })
    return res;
  }

  // 데이터 불러와서 총계 정리하는 로직
  const filterSameDay = (responses: any) => {
    const dayTotals: any = []
    responses.map((res: any) => {
      let flag = false;
      dayTotals.map((total: any, idx: number) => {
        if (total.date === res.uploaded_at) {
          if ('minus' in res) {
            dayTotals[idx] = { ...total, title: total.title + res.minus}
          } else if ('plus' in res) {
            dayTotals[idx] = { ...total, title: total.title + res.plus}
          }
          // 동일한 날짜를 찾아서 total 저장 완료
          flag = true;
        }
      })
      if (!flag) {
        if ('minus' in res) {
          dayTotals.push({ title: res.minus, date: res.uploaded_at})
        } else if ('plus' in res) {
          dayTotals.push({ title: res.plus, date: res.uploaded_at})
        }
      }
    })
    return dayTotals;
  }

  // 데이터 불러오는 로직
  useEffect(() => {
    const startedAt = dateFormatter(year, month, 1);
    const endedAt = dateFormatter(year, month, 31);

    getMinus(startedAt, endedAt).then((minuses) => {
      const totals = filterSameDay(minuses)
      setHistories([...totals])
    })
    getPlus(startedAt, endedAt).then((pluses) => {
      const totals = filterSameDay(pluses)
      setHistories((prev: any) => [...prev, ...totals])
    })
  }, [year, month])

  return (
    <div className='demo-app'>
      <div className='demo-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          // headerToolbar={{
          //   left: 'prev,next',
          //   center: 'title',
          //   right: 'today'
          // }}
          // initialView='dayGridMonth'
          // editable={false}
          // selectable={true}
          // selectMirror={true}
          // dayMaxEvents={true}
          // initialEvents={INITIAL_EVENTS}
          // select={handleDateSelect}
          // eventContent={renderEventContent} 
          eventClick={handleEventClick}
          // eventsSet={handleEvents} 
          // initialDate={initialDate}
          events={histories}
        />
      </div>
    </div>
  )
}