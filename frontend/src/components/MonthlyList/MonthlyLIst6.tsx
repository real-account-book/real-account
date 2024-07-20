import React, { FC } from 'react';
import { alphabet, MonthlyBox2 } from './MonthlyList.css.ts';

const MonthlyList : FC = () => {
  return(
    <button className={MonthlyBox2}>
        <div className={alphabet}>
            <span>6월 (+75000)/(-23000) 내역</span>
        </div>
    </button>
  );
}

export default MonthlyList;