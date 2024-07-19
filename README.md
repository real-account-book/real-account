### MonthList보기
# app.tsx에
import React, { FC } from 'react';
import Header from './components/Header/Header.tsx';
import MonthHeader from './components/MonthHeader/MonthHeader.tsx';
import YearNavigator from './components/YearNavigator/YearNavigator.tsx';
import MonthNavigator from './components/MonthNavigator/MonthNavigator.tsx';
import Calendar from './components/Calendar/Calendar.tsx';
import './App.css'

const App: FC = () => {
	return (
    <div>
      <Header/>
      <YearNavigator/>
      <MonthNavigator/>
      <MonthHeader/>
      <Calendar year={2024} month={4} />
    </div>
  );
};

export default App;



### YearList보기
# app.tsx에
import React, { FC } from 'react';
import Header from './components/Header/Header.tsx';
import YearNavigator from './components/YearNavigator/YearNavigator.tsx';
import './App.css'
import MonthlyList from './components/MonthlyList/MonthlyLIst.tsx';
import MonthlyList2 from './components/MonthlyList/MonthlyLIst2.tsx';
import MonthlyList3 from './components/MonthlyList/MonthlyLIst3.tsx';
import MonthlyList4 from './components/MonthlyList/MonthlyLIst4.tsx';
import MonthlyList5 from './components/MonthlyList/MonthlyLIst5.tsx';
import MonthlyList6 from './components/MonthlyList/MonthlyLIst6.tsx';
import MonthlyList7 from './components/MonthlyList/MonthlyLIst7.tsx';


const App: FC = () => {
	return (
    <div>
      <Header/>
      <YearNavigator/>
      <MonthlyList/>
      <MonthlyList2/>
      <MonthlyList3/>
      <MonthlyList4/>
      <MonthlyList5/>
      <MonthlyList6/>
      <MonthlyList7/>
    </div>
  );
};

export default App;
