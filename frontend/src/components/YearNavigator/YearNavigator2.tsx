import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { purpleBox, alphabet, button } from './YearNavigator.css.ts';

interface YearNavigatorProps {
  year: number;
  month: number;
  onDateChange?: (year: number, month: number) => void;
}

const YearNavigator2: FC<YearNavigatorProps> = ({ year, month, onDateChange }) => {
  const navigate = useNavigate();

  const incrementYear = () => {
    const newYear = year + 1;
    onDateChange(newYear, month);
    // navigate(`/month/${newYear}${month.toString().padStart(2, '0')}`);
  };

  const decrementYear = () => {
    const newYear = year - 1;
    onDateChange(newYear, month);
    // navigate(`/month/${newYear}${month.toString().padStart(2, '0')}`);
  };

  return (
    <div className={purpleBox}>
      <button className={button} onClick={decrementYear}>&lt;</button>
      <div className={alphabet}>
        <span>{year}</span>
      </div>
      <button className={button} onClick={incrementYear}>&gt;</button>
    </div>
  );
};

export default YearNavigator2;