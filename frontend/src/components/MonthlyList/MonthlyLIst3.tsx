import React, { FC } from 'react';
import { alphabet, MonthlyBox3 } from './MonthlyList.css.ts';

const MonthlyList : FC = () => {
  return(
    <button className={MonthlyBox3}>
        <div className={alphabet}>
            <span>3월 (+50000)/(-12000) 내역</span>
        </div>
    </button>
  );
}

export default MonthlyList;