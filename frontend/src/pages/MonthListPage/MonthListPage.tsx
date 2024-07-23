import React from 'react';
import { useParams } from 'react-router-dom'; 
import MonthHeader from '../../components/MonthHeader/MonthHeader';
import YearNavigator2 from '../../components/YearNavigator/YearNavigator2';
import MonthNavigator from '../../components/MonthNavigator/MonthNavigator';
import Calendar from '../../components/Calendar/Calendar';
import '../../components/Calendar/Calendar.css';

const MonthListPage = () => {
  const { yearmonth } = useParams<{ yearmonth: string }>();
  const year = parseInt(yearmonth.substring(0, 4));
  const month = parseInt(yearmonth.substring(4, 6));

  return (
    <>
      <div>
        <YearNavigator2 />
        <MonthNavigator />
        <MonthHeader year={year} month={month} /> 
        <Calendar year={year} month={month} /> 
      </div>
    </>
  );
}

export default MonthListPage;