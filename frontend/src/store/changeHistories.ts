import { create } from 'zustand';

type TChangeHistories = {
  historyFlag: boolean;
  handleHistoryFlag: () => void;
}

const useChangeHistoriesStore= create<TChangeHistories>(set => ({
  historyFlag: false,
  handleHistoryFlag: () => set((state) => ({historyFlag: !state.historyFlag}))
}))

export default useChangeHistoriesStore;