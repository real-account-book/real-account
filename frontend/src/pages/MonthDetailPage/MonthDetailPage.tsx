import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";
import CategoryPieChart from "../../components/CategoryPieChart/CategoryPieChart";
import MonthDetailView from "../../components/MonthDetailView/MonthDetailView";
import useYearTotalStore from "../../store/yearTotalStore";
import useMonthHistoriesStore from "../../store/monthHistoriesStore";
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

const MonthDetailPage: React.FC = () => {
  const date: string = location.pathname.split("/")[2];
  const year: string = date.slice(0, 4);
  const month: string = date.slice(4);

  const { setYear } = useYearTotalStore();
  const { setMonth } = useMonthHistoriesStore();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/month/${year}${month}`);
  };

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 700);

    setYear(parseInt(year));
    setMonth(parseInt(month));

    return () => clearTimeout(timer);
  }, [year, month, setYear, setMonth]);

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
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <Skeleton paragraph={{ rows: 8 }} />
            <Skeleton paragraph={{ rows: 8 }} />
          </div>
          <Skeleton paragraph={{ rows: 6 }} />
        </>
      ) : (
        <>
          <div className={bodyContents}>
            <CategoryPieChart year={year} month={month} />
          </div>

          <MonthDetailView />
        </>
      )}
    </div>
  );
};

export default MonthDetailPage;