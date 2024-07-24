import { PlusOutlined } from "@ant-design/icons";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  addButton,
  blueText,
  header,
  priceContainer,
  redText,
  textAlign,
} from "./MonthHeader.css";

const MonthHeader: FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/detail/202407");
  };

  return (
    <header className={header}>
      <div className={priceContainer}>
        <div className={textAlign}>5월 소비</div>
        <div className={redText}>-55,000</div>
        <div className={blueText}>+48,000</div>
        <div>합계 +7,000</div>
      </div>

      <button className={addButton} onClick={handleButtonClick}>
        <div>
          <PlusOutlined />
        </div>
        <div>월 소비 상세내역 보기</div>
      </button>
    </header>
  );
};

export default MonthHeader;
