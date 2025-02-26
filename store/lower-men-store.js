import { create } from "zustand";

export const useLowerMenTypeStore = create((set) => ({
  currentLowerMenTypeIndex: "Shorts",
  lowerMenType: ["Shorts", "Pants"],
  switchLowerMenType: (newLowerMenTypeIndex) => {
    set({ currentLowerMenTypeIndex: newLowerMenTypeIndex });
  },
}));
