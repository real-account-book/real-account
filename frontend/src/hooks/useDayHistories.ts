import { getMinus, getPlus } from "../apis/total";
import { TMinusHistory, TPlusHistory } from "../types/history.type";

type TUseDayHistories = {
  date: string;
  setHistories: TSetHistories
}

type TSetHistories = (data: (TPlusHistory | TMinusHistory)[] | []) => void;

export const useDayHistories = async ({ date, setHistories }: TUseDayHistories) => {
  const plusData = await getPlus(date, date);
  const minusData = await getMinus(date, date);
  await setData(plusData, minusData, setHistories)
}

const setData = async (plusData: TPlusHistory[], minusData: TMinusHistory[], setHistories: TSetHistories) => {
  let data: (TPlusHistory | TMinusHistory)[] = [...plusData, ...minusData];
  setHistories(data)
};