// import { DatePicker } from "antd";
import { useEffect, useState } from "react";
import { getMinus, getPlus } from "../../apis/total";
import { TMinusHistory, TPlusHistory } from "../../types/history.type";
import { dateFormatter } from "../../utils/dateFormatter";
import BoardView from "../BoardView/BoardView";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import {
  detailContainer,
  detailDateBar,
  dropDownBox,
  titleBar,
} from "./MonthDetailView.css";

type TMonthDetailViewProps = {
  year: string;
  month: string;
};

// const { RangePicker } = DatePicker;

const MonthDetailView = ({ year, month }: TMonthDetailViewProps) => {
  const [filterCategory, setFilterCategory] = useState<number>(0);
  const [filterHistory, setFilterHistory] = useState<string>("total");

  // const dateFormat = "YYYY/MM/DD";

  useEffect(() => {
    const startDate = dateFormatter(parseInt(year), parseInt(month), 1);
    const endDate = dateFormatter(parseInt(year), parseInt(month), 31);
    getData(startDate, endDate, filterHistory, filterCategory);
  }, [filterCategory, filterHistory]);

  const [histories, setHistories] = useState<(TPlusHistory | TMinusHistory)[]>(
    []
  );
  const [monthTotal, setMonthTotal] = useState<number>(0);

  // 월별 상세 페이지 진입시 데이터 초기 가공 로직
  const getData = async (
    start: string,
    end: string,
    historyKey: string,
    categoryKey: number
  ) => {
    if (categoryKey > 0) {
      let plusData = await getPlus(start, end);
      let minusData = await getMinus(start, end);
      if (categoryKey > 0) {
        minusData = minusData.filter((data: TMinusHistory) => {
          return data.category.category_id === categoryKey;
        });
      }
      console.log(minusData);
      plusData = [];
      await caculateTotal(plusData, minusData);
      let data: (TPlusHistory | TMinusHistory)[] = [...plusData, ...minusData];
      await sortDate(data);
    } else if (historyKey === "minus") {
      let plusData = await getPlus(start, end);
      let minusData = await getMinus(start, end);
      plusData = [];
      await caculateTotal(plusData, minusData);
      let data: (TPlusHistory | TMinusHistory)[] = [...plusData, ...minusData];
      await sortDate(data);
    } else if (historyKey === "plus") {
      let plusData = await getPlus(start, end);
      let minusData = await getMinus(start, end);
      minusData = [];
      await caculateTotal(plusData, minusData);
      let data: (TPlusHistory | TMinusHistory)[] = [...plusData, ...minusData];
      await sortDate(data);
    } else {
      let plusData = await getPlus(start, end);
      let minusData = await getMinus(start, end);
      await caculateTotal(plusData, minusData);
      let data: (TPlusHistory | TMinusHistory)[] = [...plusData, ...minusData];
      await sortDate(data);
    }
  };

  const caculateTotal = async (
    plusData: TPlusHistory[],
    minusData: TMinusHistory[]
  ) => {
    let monthTotal: number = 0;
    plusData.forEach((history: TPlusHistory) => {
      monthTotal += history.plus;
    });
    minusData.forEach((history: TMinusHistory) => {
      monthTotal -= history.minus;
    });
    setMonthTotal(monthTotal);
  };

  const sortDate = async (res: (TPlusHistory | TMinusHistory)[]) => {
    res.sort((a, b) => {
      return (
        new Date(a.uploaded_at).getTime() - new Date(b.uploaded_at).getTime()
      );
    });
    setHistories(res);
  };

  return (
    <div className={detailContainer}>
      <div className={titleBar}>
        <div>소비 내역</div>

        <div className={dropDownBox}>
          <FilterDropdown
            type="history"
            setFilterCategory={setFilterCategory}
            setFilterHistory={setFilterHistory}
          />
          <FilterDropdown
            type="categories"
            setFilterCategory={setFilterCategory}
            setFilterHistory={setFilterHistory}
          />
        </div>
      </div>

      <div className={detailDateBar}>
        <div>
          {/* <RangePicker
            defaultValue={[
              dayjs("2015/01/01", dateFormat),
              dayjs("2015/01/01", dateFormat),
            ]}
            format={dateFormat}
          /> */}
          <div>{`${dateFormatter(
            parseInt(year),
            parseInt(month),
            1
          )} ~ ${dateFormatter(parseInt(year), parseInt(month), 31)}`}</div>
        </div>
        <div>
          <h2>{monthTotal} 원</h2>
        </div>
      </div>

      <BoardView histories={histories} />
    </div>
  );
};

export default MonthDetailView;
