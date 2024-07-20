import React, { FC } from 'react';
import {
  calendarContainer,
  calendarBody,
  calendarDay,
  calendarDayNames,
} from './Calendar.css.ts';

interface Props {
  year: number;
  month: number;
}

const Calendar: FC<Props> = ({ year, month }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = getDaysInMonth(year, month);
  const startDay = new Date(year, month, 1).getDay();

  function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  function renderDays() {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className={calendarDay}></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(<div key={i} className={calendarDay}>{i}</div>);
    }
    return days;
  }

  return (
    <div className={calendarContainer}>
      <div className={calendarBody}>
        {daysOfWeek.map((day) => (
          <div key={day} className={calendarDayNames}>{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar;