import { create } from 'zustand';
import { TMinusHistory, TPlusHistory } from '../types/history.type';

type TUseDayHistoriesStore = {
  plusHistories: TPlusHistory[];
  minusHistories: TMinusHistory[];
  setPlusHistories: (pluses: TPlusHistory[]) => void;
  setMinusHistories: (minuses: TMinusHistory[]) => void;
  updatePlusHistories: (plus: TPlusHistory) => void;
  updateMinusHistories: (minus: TMinusHistory) => void;
}

const useDayHistoriesStore = create<TUseDayHistoriesStore>(set => ({
  plusHistories: [],
  minusHistories: [],

  setPlusHistories: (pluses) => set(() => ({
    plusHistories: [...pluses]
  })),
  setMinusHistories: (minuses) => set(() => ({
    minusHistories: [...minuses]
  })),
  updatePlusHistories: (plus) => set((state) => ({
    plusHistories: [
      ...state.plusHistories,
      plus
    ]
  })),
  updateMinusHistories: (minus) => set((state) => ({
    minusHistories: [
      ...state.minusHistories,
      minus
    ]
  }))
}))

export default useDayHistoriesStore;

