import React, { FC } from 'react';
import { alphabet, MonthlyBox2 } from './MonthlyList.css.ts';

const MonthlyList : FC = () => {
  return(
    <button className={MonthlyBox2}>
        <div className={alphabet}>
            <span>2월 (+50000)/(-35000) 내역</span>
        </div>
    </button>
  );
}

export default MonthlyList;