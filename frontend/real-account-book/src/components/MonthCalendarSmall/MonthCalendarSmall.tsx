import { useState } from 'react';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs }from 'dayjs';
import dayjs from 'dayjs';
import DayDetailModal from '../../modals/DayDetailModal/DayDetailModal';

const MonthCalendarSmall = () => {
  const [dayModalOpen, setDayModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [value, setValue] = useState(() => dayjs('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));

  const { token } = theme.useToken();

  const showLoading = () => {
    setDayModalOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
    showLoading();
    console.log(newValue);
  };

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return(
    <>
      <div style={wrapperStyle}>
        <Calendar 
          fullscreen={false} 
          value={value} 
          onSelect={onSelect} 
          headerRender={() => null}
        />
      </div>
      <DayDetailModal dayModalOpen={dayModalOpen} setDayModalOpen={setDayModalOpen} loading={loading}/>
    </>
  );
}

export default MonthCalendarSmall;