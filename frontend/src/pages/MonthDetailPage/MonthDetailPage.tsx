import { useEffect, useState } from 'react';
import CategoryPieChart from '../../components/CategoryPieChart/CategoryPieChart';
import MonthCalendarSmall from '../../components/MonthCalendarSmall/MonthCalendarSmall';
import MonthDetailView from '../../components/MonthDetailView/MonthDetailView';
import { addButton, bodyContents, container, titleBar } from './MonthDetailPage.css';
import { useNavigate } from 'react-router-dom';
import { getMinus, getPlus } from '../../apis/total';
import { dateFormatter } from '../../utils/dateFormatter';
import { TMinusHistory, TPlusHistory } from '../../types/history.type';


const MonthDetailPage = () => {
  const date: string = location.pathname.split('/')[2];
  const year: string = date.slice(0, 4);
  const month: string = date.slice(4);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/month/:year'); 
  };
    
  useEffect(() => {
    const date = dateFormatter(2024, 7, 1);
    getPlus(date, '2024-07-30').then((res) => console.log(res))
    getMinus('2024-07-01', '2024-07-30').then((res) => console.log(res))
  }, [])

  return(
    <div className={container}>
      <div className={titleBar}>
        <div>
          <div>{parseInt(month)}월</div>
          <div>월간 입출금 내역 상세 조회</div>
        </div>

        <button className={addButton} onClick={handleButtonClick}>캘린더 전체 화면</button>
      </div>

      <div className={bodyContents}>
        <CategoryPieChart year={year} month={month}/>
      </div>

      <MonthDetailView year={year} month={month} />
    </div>
  );
}    

export default MonthDetailPage;