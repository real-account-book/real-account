import { useEffect, useState } from 'react';
import CategoryPieChart from '../../components/CategoryPieChart/CategoryPieChart';
import MonthCalendarSmall from '../../components/MonthCalendarSmall/MonthCalendarSmall';
import MonthDetailView from '../../components/MonthDetailView/MonthDetailView';
import { bodyContents, container, titleBar } from './MonthDetailPage.css';
import { getMinus, getPlus } from '../../apis/total';
import { dateFormatter } from '../../utils/dateFormatter';
import { TMinusHistory, TPlusHistory } from '../../types/history.type';

const MonthDetailPage = () => {
  const date: string = location.pathname.split('/')[2];
  const year: string = date.slice(0, 4);
  const month: string = date.slice(4);

  return(
    <div className={container}>
      <div className={titleBar}>
        <div>
          <div>{parseInt(month)}월</div>
          <div>월간 입출금 내역 상세 조회</div>
        </div>

        <button>캘린더 전체 화면</button>
      </div>

      <div className={bodyContents}>
        <CategoryPieChart />

        <div>
          <MonthCalendarSmall dateY={year} dateM={month}/>
          <div>
            <div></div>
            <div>-1111</div>
            <div>월별 최대 지출 카테고리</div>
          </div>
        </div>
      </div>

      <MonthDetailView year={year} month={month} />
    </div>
  );
}    

export default MonthDetailPage;