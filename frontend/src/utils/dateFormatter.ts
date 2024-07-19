export const dateFormatter = (year: number, month: number, day: number) => {
  const formattedMonth: string = (month.toString().length === 1 ? '0' : '') + month.toString();
  const formattedDay: string = (day.toString().length === 1 ? '0' : '') + day.toString();
  return `${year.toString()}-${formattedMonth}-${formattedDay}`;
}