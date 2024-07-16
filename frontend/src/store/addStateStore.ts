import { create } from 'zustand';

type TAddState = {
  addModalState: boolean;
  handleAddModalState: () => void;
};

const useAddStateStore = create<TAddState>(set => ({
  addModalState: false,
  handleAddModalState: () => set((state) => ({addModalState: !state.addModalState}))
}))

export default useAddStateStore;