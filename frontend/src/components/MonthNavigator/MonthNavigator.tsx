import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { purpleBoxSecond, alphabet, button } from './MonthNavigator.css.ts';

const MonthNavigator: FC = () => {
  const navigate = useNavigate();
  const { yearmonth } = useParams<{ yearmonth: string }>();

  if (!yearmonth) return null;

  const year = parseInt(yearmonth.substring(0, 4), 10);
  const month = parseInt(yearmonth.substring(4, 6), 10);

  const months = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ];

  const incrementMonth = () => {
    const newMonth = month === 12 ? 1 : month + 1;
    const newYear = newMonth === 1 ? year + 1 : year;
    const formattedMonth = newMonth.toString().padStart(2, '0');
    navigate(`/month/${newYear}${formattedMonth}`);
  };

  const decrementMonth = () => {
    const newMonth = month === 1 ? 12 : month - 1;
    const newYear = newMonth === 12 ? year - 1 : year;
    const formattedMonth = newMonth.toString().padStart(2, '0');
    navigate(`/month/${newYear}${formattedMonth}`);
  };

  return (
    <div className={purpleBoxSecond}>
      <button className={button} onClick={decrementMonth}>&lt;</button>
      <div className={alphabet}>
        <span>{months[month - 1]}</span>
      </div>
      <button className={button} onClick={incrementMonth}>&gt;</button>
    </div>
  );
}

export default MonthNavigator;