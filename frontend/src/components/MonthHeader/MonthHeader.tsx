import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { header, headerTitle, priceContainer, blueText, redText, addButton, buttonIcon, buttonText } from './MonthHeader.css';
import { getMinus, getPlus } from '../../apis/total';
import { dateFormatter } from '../../utils/dateFormatter';
import { PlusOutlined } from '@ant-design/icons';

interface MonthHeaderProps {
  year: number | null;
  month: number | null;
}

const MonthHeader: FC<MonthHeaderProps> = ({ year, month }) => {
  const navigate = useNavigate();
  const [totalPlus, setTotalPlus] = useState(0);
  const [totalMinus, setTotalMinus] = useState(0);

  useEffect(() => {
    const fetchTotals = async () => {
      if (year && month) {
        const startDate = dateFormatter(year, month, 1);
        const endDate = dateFormatter(year, month, new Date(year, month, 0).getDate());

        try {
          const plusData = await getPlus(startDate, endDate);
          const minusData = await getMinus(startDate, endDate);

          const plusTotal = plusData.reduce((acc: number, item: { plus: number }) => acc + item.plus, 0);
          const minusTotal = minusData.reduce((acc: number, item: { minus: number }) => acc + item.minus, 0);

          setTotalPlus(plusTotal);
          setTotalMinus(minusTotal);
        } catch (error) {
          console.error("Error fetching totals:", error);
        }
      }
    };

    fetchTotals();
  }, [year, month]);

  const handleButtonClick = () => {
    if (year && month) {
      const yearMonth = `${year}${month < 10 ? `0${month}` : month}`;
      navigate(`/detail/${yearMonth}`);
    }
  };

  return (
    <header className={header}>
      <div className={headerTitle}>{month}월 소비</div>
      <div className={priceContainer}>
        <div className={redText}>-{totalMinus.toLocaleString()}</div>
        <div className={blueText}>+{totalPlus.toLocaleString()}</div>
        <div>합계 {(totalPlus - totalMinus).toLocaleString()}</div>
      </div>
      <button className={addButton} onClick={handleButtonClick}>
        <div className={buttonIcon}>
          <PlusOutlined style={{ fontSize: '10px' }} />
        </div>
        <div className={buttonText}>상세내역</div>
      </button>
    </header>
  );
};

export default MonthHeader;