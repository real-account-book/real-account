import YearNavigator from '../../components/YearNavigator/YearNavigator.tsx';
import MonthlyList from '../../components/MonthlyList/MonthlyLIst.tsx';
import MonthlyList2 from '../../components/MonthlyList/MonthlyLIst2.tsx';
import MonthlyList3 from '../../components/MonthlyList/MonthlyLIst3.tsx';
import MonthlyList4 from '../../components/MonthlyList/MonthlyLIst4.tsx';
import MonthlyList5 from '../../components/MonthlyList/MonthlyLIst5.tsx';
import MonthlyList6 from '../../components/MonthlyList/MonthlyLIst6.tsx';
import MonthlyList7 from '../../components/MonthlyList/MonthlyLIst7.tsx';

const YearListPage = () => {
  return (
    <>
      <div>
      <YearNavigator/>
      <MonthlyList/>
      <MonthlyList2/>
      <MonthlyList3/>
      <MonthlyList4/>
      <MonthlyList5/>
      <MonthlyList6/>
      <MonthlyList7/>
      </div>
    </>
  )
}

export default YearListPage;
