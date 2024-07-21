import { DatePicker } from "antd";
import dayjs from "dayjs";
import BoardView from "../BoardView/BoardView";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import {
  detailContainer,
  detailDateBar,
  dropDownBox,
  titleBar,
} from "./MonthDetailView.css";
import { TMinusHistory, TPlusHistory } from "../../types/history.type";
import { useEffect, useState } from "react";
import { dateFormatter } from "../../utils/dateFormatter";
import { getMinus, getPlus } from "../../apis/total";

type TMonthDetailViewProps = {
  year: string;
  month: string;
}

const { RangePicker } = DatePicker;

const MonthDetailView = ({ year, month }: TMonthDetailViewProps) => {
  const dateFormat = "YYYY/MM/DD";

  useEffect(() => {
    const startDate = dateFormatter(parseInt(year), parseInt(month), 1);
    const endDate = dateFormatter(parseInt(year), parseInt(month), 31);
    getData(startDate, endDate)
  }, [])

  const [histories, setHistories] = useState<(TPlusHistory | TMinusHistory)[]>([]);
  const [monthTotal, setMonthTotal] = useState<number>(0);

  const getData = async (start: string, end: string) => {
    const plusData = await getPlus(start, end);
    const minusData = await getMinus(start, end);
    await caculateTotal(plusData, minusData);
    let data: (TPlusHistory | TMinusHistory)[] = [...plusData, ...minusData];
    await sortDate(data);
  };

  const caculateTotal = async (plusData: TPlusHistory[], minusData: TMinusHistory[]) => {
    let monthTotal: number = 0;
    plusData.forEach((history: TPlusHistory) => {
      monthTotal += history.plus;
    });
    minusData.forEach((history: TMinusHistory) => {
      monthTotal -= history.minus;
    });
    setMonthTotal(monthTotal)
  }

  const sortDate = async (res: (TPlusHistory | TMinusHistory)[]) => {
    res.sort((a, b) => {
      return new Date(a.uploaded_at).getTime() - new Date(b.uploaded_at).getTime();
    })
    setHistories(res);
  }

  return (
    <div className={detailContainer}>
      <div className={titleBar}>
        <div>소비 내역</div>

        <div className={dropDownBox}>
          <FilterDropdown />
          <FilterDropdown />
        </div>
      </div>

      <div className={detailDateBar}>
        <div>
          <RangePicker
            defaultValue={[
              dayjs("2015/01/01", dateFormat),
              dayjs("2015/01/01", dateFormat),
            ]}
            format={dateFormat}
          />
        </div>
        <div>
          <h2>{monthTotal} 원</h2>
        </div>
      </div>

      <BoardView histories={histories}/>
    </div>
  );
};

export default MonthDetailView;
