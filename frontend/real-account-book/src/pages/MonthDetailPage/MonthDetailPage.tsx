import MonthCalendarSmall from '../../components/MonthCalendarSmall/MonthCalendarSmall';

const MonthDetailPage = () => {
  const date: string = location.pathname.split('/')[2];
  const year: string = date.slice(0, 4);
  const month: string = date.slice(4);

  return(
    <>
      <MonthCalendarSmall dateY={year} dateM={month}/>
    </>
  );
}

export default MonthDetailPage;