import React, { FC } from 'react';
import { alphabet, MonthlyBox3 } from './MonthlyList.css.ts';

const MonthlyList : FC = () => {
  return(
    <button className={MonthlyBox3}>
        <div className={alphabet}>
            <span>7월 (+50000)/(-43000) 내역</span>
        </div>
    </button>
  );
}

export default MonthlyList;