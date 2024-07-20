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

const { RangePicker } = DatePicker;

const MonthDetailView = () => {
  const dateFormat = "YYYY/MM/DD";

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
          <h2>-113,504 원</h2>
        </div>
      </div>

      <BoardView />
    </div>
  );
};

export default MonthDetailView;
