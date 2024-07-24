import { create } from 'zustand';
import { TMinusHistory, TPlusHistory } from '../types/history.type';

type TUseMonthHistoriesStore = {
  month: number;
  monthPlusTotal: number;
  monthMinusTotal: number;
  monthPlusHistories: TPlusHistory[];
  monthMinusHistories: TMinusHistory[];
  setMonth: (month: number) => void;
  updateMonthPlusTotal: (amount: number) => void;
  updateMonthMinusTotal: (amount: number) => void;
  setMonthPlusHistories: (pluses: TPlusHistory[]) => void;
  setMonthMinusHistories: (minuses: TMinusHistory[]) => void;
  updateMonthPlusHistory: (plus: TPlusHistory) => void;
  updateMonthMinusHistory: (minus: TMinusHistory) => void;
}

const useMonthHistoriesStore = create<TUseMonthHistoriesStore>(set => ({
  month: 1,
  monthPlusTotal: 0,
  monthMinusTotal: 0,
  monthPlusHistories: [],
  monthMinusHistories: [],

  setMonth: (month) => set(() => ({
    month: month
  })),

  updateMonthPlusTotal: (amount) => set((state) => ({
    monthPlusTotal: state.monthPlusTotal + amount
  })),

  updateMonthMinusTotal: (amount) => set((state) => ({
    monthMinusTotal: state.monthMinusTotal + amount
  })),

  setMonthPlusHistories: (pluses) => set(() => ({
    monthPlusHistories: pluses
  })),

  setMonthMinusHistories: (minuses) => set(() => ({
    monthMinusHistories: minuses
  })),

  updateMonthPlusHistory: (plus) => set((state) => ({
    monthPlusHistories: [
      ...state.monthPlusHistories,
      plus
    ]
  })),

  updateMonthMinusHistory: (minus) => set((state) => ({
    monthMinusHistories: [
      ...state.monthMinusHistories,
      minus
    ]
  }))
}))

export default useMonthHistoriesStore;

