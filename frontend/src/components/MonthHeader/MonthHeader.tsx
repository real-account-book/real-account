import { PlusOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { addButton, header, priceContainer, blueText, redText, textAlign } from './MonthHeader.css';
import { useNavigate, useParams } from 'react-router-dom'; 

interface MonthHeaderProps {
  year: number | null;
  month: number | null;
}

const MonthHeader: FC<MonthHeaderProps> = ({ year, month }) => { 
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (year && month) {
      const yearMonth = `${year}${month < 10 ? `0${month}` : month}`;
      navigate(`/detail/${yearMonth}`); 
    }
  };

  return(
    <header className={header}>
      <div className={priceContainer}>
        {year && month ? ( 
          <>
            <div className={textAlign}>{month}월 소비</div>
            <div className={redText}>-55,000</div> 
            <div className={blueText}>+48,000</div> 
            <div>합계 +7,000</div> 
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <button className={addButton} onClick={handleButtonClick}>
        <div><PlusOutlined /></div>
        <div>월 소비 상세내역 보기</div>
      </button>
    </header>
  );
}

export default MonthHeader;