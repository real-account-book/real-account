import MonthHeader from '../../components/MonthHeader/MonthHeader.tsx';
import YearNavigator from '../../components/YearNavigator/YearNavigator.tsx';
import MonthNavigator from '../../components/MonthNavigator/MonthNavigator.tsx';
import Calendar from '../../components/Calendar/Calendar.tsx';

const MonthListPage = () => {
  return (
    <>
      <div>
        <YearNavigator/>
        <MonthNavigator/>
        <MonthHeader/>
        <Calendar year={2024} month={4} />
      </div>
    </>
  )
}

export default MonthListPage;