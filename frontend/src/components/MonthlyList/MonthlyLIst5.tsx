import React, { FC } from 'react';
import { alphabet, MonthlyBox5 } from './MonthlyList.css.ts';
import { useNavigate } from 'react-router-dom';

const MonthlyList : FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/month/:year');
  };

  return(
    <button className={MonthlyBox5} onClick={handleButtonClick}>
        <div className={alphabet}>
            <span>5월 (+48000)/(-55000) 내역</span>
        </div>
    </button>
  );
}

export default MonthlyList;