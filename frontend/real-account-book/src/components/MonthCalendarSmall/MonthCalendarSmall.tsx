import { useState } from 'react';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
import { Dayjs }from 'dayjs';
import dayjs from 'dayjs';
import DayDetailModal from '../../modals/DayDetailModal/DayDetailModal';
import { wrapperStyle } from './MonthCalendarSmall.css.ts';

const MonthCalendarSmall = () => {
  const [dayModalOpen, setDayModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number>(6)

  const { token } = theme.useToken();

  const showLoading = () => {
    setDayModalOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  const onSelect = (newValue: Dayjs) => {
    setSelectedDate(newValue.date());
    showLoading();
  };

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const cellStyle: React.CSSProperties = {
    background: 'transparent',
    color: 'rgba(0, 0, 0, 0.88)',
    fontWeight: 'normal',
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

  return(
    <>
      <div style={wrapperStyle}>
        <Calendar 
          fullscreen={false} 
          onSelect={onSelect} 
          headerRender={() => null}
          onPanelChange={() => {}}
          disabledDate={disabledDate}
          fullCellRender={dateFullCellRender}
        />
      </div>
      <DayDetailModal 
        dayModalOpen={dayModalOpen} 
        setDayModalOpen={setDayModalOpen} 
        loading={loading} 
        selectedDate={selectedDate}
        selectedMonth={selectedMonth}
      />
    </>
  );
}

export default MonthCalendarSmall;