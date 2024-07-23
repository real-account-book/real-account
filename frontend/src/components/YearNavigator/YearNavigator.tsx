import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { purpleBox, alphabet, button } from './YearNavigator.css.ts';

const YearNavigator: FC = () => {
  const navigate = useNavigate();
  const { year } = useParams<{ year: string }>();
  const currentYear = parseInt(year ?? '2024', 10);

  const incrementYear = () => {
    navigate(`/${currentYear + 1}`);
  };

  const decrementYear = () => {
    navigate(`/${currentYear - 1}`);
  };

  return (
    <div className={purpleBox}>
      <button className={button} onClick={decrementYear}>&lt;</button>
      <div className={alphabet}>
        <span>{currentYear}</span>
      </div>
      <button className={button} onClick={incrementYear}>&gt;</button>
    </div>
  );
}

export default YearNavigator;