import React, { useEffect, useRef, useState } from 'react'
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
import { getEvents, Event } from '../../apis/events'

interface CalendarProps {
  year: number,
  month: number,
  onDateChange: (year: number, month: number) => void
}

const Calendar: React.FC<CalendarProps> = ({ year, month, onDateChange }) => {
  const calendarRef = useRef<FullCalendar>(null);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(`${year}-${month.toString().padStart(2, '0')}-01`);
      fetchEvents(year, month);
    }
  }, [year, month]);

  const fetchEvents = async (year: number, month: number) => {
    const startDate = `${year}-${month.toString().padStart(2, '0')}-01`;
    const endDate = `${year}-${month.toString().padStart(2, '0')}-${new Date(year, month, 0).getDate()}`;
    const fetchedEvents = await getEvents(startDate, endDate);
    setEvents(fetchedEvents);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (events: EventApi[]) => {
  }

  const handleDatesSet = (arg: any) => {
    const date = arg.view.currentStart;
    const newYear = date.getFullYear();
    const newMonth = date.getMonth() + 1;
    onDateChange(newYear, newMonth);
  }

  return (
    <div className='demo-app'>
      <div className='demo-app-main'>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: '',
            center: 'title',
            right: 'today'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          events={events.map(event => ({
            title: `${event.plus ? '+' : '-'}${event.plus || event.minus}`,
            date: event.uploaded_at,
            extendedProps: { ...event }
          }))}
          select={handleDateSelect}
          eventContent={renderEventContent} 
          eventClick={handleEventClick}
          datesSet={handleDatesSet}
        />
      </div>
    </div>
  )
}

function renderEventContent(eventContent: EventContentArg) {
  const { event } = eventContent;
  const isPlus = event.extendedProps.plus !== undefined;
  const amount = isPlus ? event.extendedProps.plus : event.extendedProps.minus;

  return (
    <div className={`fc-event-title ${isPlus ? 'plus' : 'minus'}`}>
      {event.title}
=======
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


  function renderDays() {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className={calendarDay}></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className={calendarDay}>
          {i}
        </div>
      );
    }
    return days;
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
  );
};

export default Calendar;
