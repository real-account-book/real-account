import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import MonthHeader from '../../components/MonthHeader/MonthHeader';
import YearNavigator2 from '../../components/YearNavigator/YearNavigator2';
import MonthNavigator from '../../components/MonthNavigator/MonthNavigator';
import Calendar from '../../components/Calendar/Calendar';
import '../../components/Calendar/Calendar.css';

const MonthListPage = () => {
  const { yearmonth } = useParams<{ yearmonth: string }>();
  console.log('yearMonth', yearmonth)
  const navigate = useNavigate();
  const [year, setYear] = useState(parseInt(yearmonth?.substring(0, 4) || new Date().getFullYear().toString()));
  const [month, setMonth] = useState(parseInt(yearmonth?.substring(4, 6) || (new Date().getMonth() + 1).toString().padStart(2, '0')));

  useEffect(() => {
    if (yearmonth) {
      console.log('yearMonth', yearmonth)
      setYear(parseInt(yearmonth.substring(0, 4)));
      setMonth(parseInt(yearmonth.substring(4, 6)));
    }
  }, []);

  const handleDateChange = (newYear: number, newMonth: number) => {
    setYear(newYear);
    setMonth(newMonth);
    // navigate(`/month/${newYear}${newMonth.toString().padStart(2, '0')}`);
    console.log(newYear, newMonth)
  };

  return (
    <>
      <div>
        <YearNavigator2 year={year} month={month} onDateChange={handleDateChange}/>
        <MonthNavigator year={year} month={month} onDateChange={handleDateChange}/>
        <MonthHeader year={year} month={month} /> 
        <Calendar year={year} month={month} onDateChange={handleDateChange} /> 
      </div>
    </>
  );
}

export default MonthListPage;