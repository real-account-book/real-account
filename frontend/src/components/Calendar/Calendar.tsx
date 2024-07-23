import React from 'react'
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

interface CalendarState {
  currentEvents: EventApi[]
}

export default class Calendar extends React.Component<{ year: number, month: number }, CalendarState> {
  state: CalendarState = {
    currentEvents: []
  }

  render() {
    const { year, month } = this.props;
    const initialDate = `${year}-${month.toString().padStart(2, '0')}-01`;

    return (
      <div className='demo-app'>
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: 'today'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            initialEvents={INITIAL_EVENTS}
            select={this.handleDateSelect}
            eventContent={renderEventContent} 
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} 
            initialDate={initialDate}
          />
        </div>
      </div>
    )
  }

  handleDateSelect = (selectInfo: DateSelectArg) => {
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

  handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events: EventApi[]) => {
    this.setState({
      currentEvents: events
    })
  }
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  )
}