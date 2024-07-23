import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMinus, getPlus } from "../../apis/total";
import CategoryPieChart from "../../components/CategoryPieChart/CategoryPieChart";
import MonthDetailView from "../../components/MonthDetailView/MonthDetailView";
import { dateFormatter } from "../../utils/dateFormatter";
import {
  addButton,
  bodyContents,
  buttonFont,
  container,
  sideTitle,
  title,
  titleBar,
  titleBox,
} from "./MonthDetailPage.css";
import { RightOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";

const MonthDetailPage = () => {
  const date: string = location.pathname.split("/")[2];
  const year: string = date.slice(0, 4);
  const month: string = date.slice(4);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/month/${year}`);
  };

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 700);

    return () => clearTimeout(timer);
  }, [])

  // 렌더링 되는 시간 늦춰줌
  if (!shouldRender) { }

  return (
    <div className={container}>
      <div className={titleBar}>
        <div className={titleBox}>
          <div className={title}>{parseInt(month)}월</div>
          <div className={sideTitle}>월간 입출금 내역 상세 조회</div>
        </div>

        <button className={addButton} onClick={handleButtonClick}>
          <div className={buttonFont}>캘린더 전체 화면</div>
          <RightOutlined />
        </button>
      </div>

      {!shouldRender ? (
        <>
          <div style={{display: 'flex', marginBottom: '20px'}}>
            <Skeleton paragraph={{ rows: 8 }}/>
            <Skeleton paragraph={{ rows: 8 }}/>
          </div>
          <Skeleton paragraph={{ rows: 6 }}/>
        </>
      ): (
        <>
          <div className={bodyContents}>
            <CategoryPieChart year={year} month={month} />
          </div>
    
          <MonthDetailView year={year} month={month} />
        </>
      )}

    </div>
  );
};

export default MonthDetailPage;
