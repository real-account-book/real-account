import React, { useEffect, useRef, useState } from 'react'
import {
  EventContentArg,
} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
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
      // const calendarApi = calendarRef.current.getApi();
      // calendarApi.gotoDate(`${year}-${month.toString().padStart(2, '0')}-01`);
      fetchEvents(year, month);
    }
  }, [year, month]);

  const fetchEvents = async (year: number, month: number) => {
    const startDate = `${year}-${month.toString().padStart(2, '0')}-01`;
    const endDate = `${year}-${month.toString().padStart(2, '0')}-${new Date(year, month, 0).getDate()}`;
    const fetchedEvents = await getEvents(startDate, endDate);
    setEvents(fetchedEvents);
  };

  const handleDatesSet = (arg: any) => {
    const date = arg.view.currentStart;
    const newYear = date.getFullYear();
    const newMonth = date.getMonth() + 1;
    // onDateChange(newYear, newMonth);
  }

  return (
    <div className='demo-app'>
      <div className='demo-app-main'>
        <FullCalendar
          initialDate={`${year}-${month.toString().padStart(2, '0')}-01`}
          ref={calendarRef}
          plugins={[dayGridPlugin]}
          headerToolbar={{
            left: '',
            center: 'title',
            right: 'today'
          }}
          initialView='dayGridMonth'
          editable={false}
          selectable={false}
          dayMaxEvents={true}
          events={events.map(event => ({
            title: `${event.plus ? '+' : '-'}${event.plus || event.minus}`,
            date: event.uploaded_at,
            extendedProps: { ...event }
          }))}
          eventContent={renderEventContent}
          datesSet={handleDatesSet}
        />
      </div>
    </div>
  )
}

function renderEventContent(eventContent: EventContentArg) {
  const { event } = eventContent;
  const isPlus = event.extendedProps.plus !== undefined;
  return (
    <div className={`fc-event-title ${isPlus ? 'plus' : 'minus'}`}>
      {event.title}
    </div>
  )
}

export default Calendar;