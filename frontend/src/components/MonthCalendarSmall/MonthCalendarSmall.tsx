import { Calendar, theme } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDayHistories } from "../../hooks/useDayHistories";
import DayDetailModal from "../../modals/DayDetailModal/DayDetailModal";
import { TMinusHistory, TPlusHistory } from "../../types/history.type";
import { dateFormatter } from "../../utils/dateFormatter";

type TMonthCalendarSmall = {
  dateY: string;
  dateM: string;
};

const MonthCalendarSmall = ({ dateY, dateM }: TMonthCalendarSmall) => {
  const month: number = parseInt(dateM);
  const selectedMonth: number = month - 1;
  const defaultDate: Dayjs = dayjs(
    `${dateY}-${
      (month.toString().length === 1 ? "0" : "") + month.toString()
    }-01`
  );

  const [dayModalOpen, setDayModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<number>(1);
  const [histories, setHistories] = useState<(TPlusHistory | TMinusHistory)[]>(
    []
  );

  const { token } = theme.useToken();

  const showLoading = () => {
    setDayModalOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  const onSelect = (newValue: Dayjs) => {
    showLoading();
    setSelectedDate(newValue.date());

    const date: string = dateFormatter(2024, month, newValue.date());
    useDayHistories({ date, setHistories });
  };

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const cellStyle: React.CSSProperties = {
    background: "transparent",
    color: "rgba(0, 0, 0, 0.88)",
    fontWeight: "normal",
    border: `none !important`,
  };

  const disabledDate = (current: Dayjs) => {
    return current.month() !== selectedMonth;
  };

  const dateFullCellRender = (date: Dayjs) => {
    return (
      <div className="ant-picker-cell-inner" style={cellStyle}>
        {date.date()}
      </div>
    );
  };

  return (
    <>
      <div style={wrapperStyle}>
        <Calendar
          fullscreen={false}
          onSelect={onSelect}
          headerRender={() => null}
          onPanelChange={() => {}}
          disabledDate={disabledDate}
          defaultValue={defaultDate}
          fullCellRender={dateFullCellRender}
        />
      </div>
      <DayDetailModal
        dayModalOpen={dayModalOpen}
        setDayModalOpen={setDayModalOpen}
        loading={loading}
        selectedDate={selectedDate}
        selectedMonth={selectedMonth}
        histories={histories}
      />
    </>
  );
};

export default MonthCalendarSmall;
