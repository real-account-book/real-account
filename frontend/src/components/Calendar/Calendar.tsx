import React, { useEffect, useRef, useState } from 'react'
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
import { createEventId } from './event-utils'

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
    </div>
  )
}

export default Calendar;
