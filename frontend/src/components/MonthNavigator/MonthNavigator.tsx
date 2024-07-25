import { FC } from "react";
import { alphabet, button, purpleBoxSecond } from "./MonthNavigator.css.ts";

interface MonthNavigatorProps {
  year: number;
  month: number;
  onDateChange?: (year: number, month: number) => void;
}

const MonthNavigator: FC<MonthNavigatorProps> = ({ year, month, onDateChange }) => {
  console.log('MonthNavigator', year, month)
  const months = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ];

  const incrementMonth = () => {
    const newMonth = month === 12 ? 1 : month + 1;
    const newYear = newMonth === 1 ? year + 1 : year;
    onDateChange(newYear, newMonth);
  };

  const decrementMonth = () => {
    const newMonth = month === 1 ? 12 : month - 1;
    const newYear = newMonth === 12 ? year - 1 : year;
    onDateChange(newYear, newMonth);
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
};

export default MonthNavigator;
