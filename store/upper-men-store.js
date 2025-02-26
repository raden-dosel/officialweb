import { create } from "zustand";

export const useUpperMenTypeStore = create((set) => ({
  currentUpperMenTypeIndex: "Short Sleeve",
  upperMenType: ["Long Sleeve", "No Sleeve", "Short Sleeve"],
  switchUpperMenType: (newUpperMenTypeIndex) => {
    set({ currentUpperMenTypeIndex: newUpperMenTypeIndex });
  },
}));
