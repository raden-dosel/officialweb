import { create } from "zustand";

export const useDressTypeStore = create((set) => ({
  currentTypeIndex: "Dress",
  dressType: [
    "Dress",
    "Long Sleeve Dress",
    "No Sleeve Dress",
    "Short Sleeve Dress",
    "Skirt",
  ],
  switchType: (newTypeIndex) => {
    set({ currentTypeIndex: newTypeIndex });
  },
}));
