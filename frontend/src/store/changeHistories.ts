import { create } from 'zustand';

type TChangeHistories = {
  historyFlag: boolean;
  categoryFlag: boolean;
  handleHistoryFlag: () => void;
  handleCategoryFlag: () => void;
}

const useChangeHistoriesStore= create<TChangeHistories>(set => ({
  historyFlag: false,
  categoryFlag: false,

  handleHistoryFlag: () => set((state) => ({historyFlag: !state.historyFlag})),
  handleCategoryFlag: () => set((state) => ({categoryFlag: !state.categoryFlag}))
}))

export default useChangeHistoriesStore;