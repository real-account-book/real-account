import { create } from "zustand";


type TYearlyData = {
  minuses: number;
  pluses: number;
};


type TYearTotalStore = {
  year: number;
  yearlyData: TYearlyData;
  setYear: (year: number) => void;
  setMinuses: (amount: number) => void;
  setPluses: (amount: number) => void;
  updateMinuses: (amount: number) => void;
  updatePluses: (amount: number) => void;
};

const useYearTotalStore = create<TYearTotalStore>(set => ({
  year: new Date().getFullYear(),
  yearlyData: { minuses: 0, pluses: 0 },
  
  setYear: (year) => set(() => ({
    year: year,
  })),
  setMinuses: (amount) => set((state) => ({
    yearlyData: {
      ...state.yearlyData,
      minuses: amount
    }
  })),
  setPluses: (amount) => set((state) => ({
    yearlyData: {
      ...state.yearlyData,
      pluses: amount
    }
  })),
  
  updateMinuses: (amount) => set((state) => ({
    yearlyData: {
      ...state.yearlyData,
      minuses: state.yearlyData.minuses + amount
    }
  })),
  
  updatePluses: (amount) => set((state) => ({
    yearlyData: {
      ...state.yearlyData,
      pluses: state.yearlyData.pluses + amount
    }
  }))
}))

export default useYearTotalStore;