import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { purpleBox, alphabet, button } from './YearNavigator.css.ts';

const YearNavigator2: FC = () => {
  const navigate = useNavigate();
  const { yearmonth } = useParams<{ yearmonth: string }>();

  if (!yearmonth) return null;

  const parsedYear = parseInt(yearmonth.substring(0, 4), 10);
  const parsedMonth = parseInt(yearmonth.substring(4, 6), 10);

  const incrementYear = () => {
    const newYear = parsedYear + 1;
    navigate(`/month/${newYear}${parsedMonth.toString().padStart(2, '0')}`);
  };

  const decrementYear = () => {
    const newYear = parsedYear - 1;
    navigate(`/month/${newYear}${parsedMonth.toString().padStart(2, '0')}`);
  };

  return (
    <div className={purpleBox}>
      <button className={button} onClick={decrementYear}>&lt;</button>
      <div className={alphabet}>
        <span>{parsedYear}</span>
      </div>
      <button className={button} onClick={incrementYear}>&gt;</button>
    </div>
  );
};

export default YearNavigator2;