import { create } from "zustand";
import { dress } from "@models/dressArray";

export const useDressStore = create((set) => ({
  currentCategoryIndex: 0,
  currentDressIndex: 0,
  dressTypes: [
    { type: "Dress" },
    { type: "Long Sleeve Dress" },
    // ... other dress types
  ],
  dresses: {
    Dress: [
      // ... dress models for Dress category
    ],
    "Long Sleeve Dress": [
      // ... dress models for Long Sleeve Dress category
    ],
    // ... other categories and their corresponding dresses
  },

  incrementDress: () => {
    const currentCategory = dressTypes[currentCategoryIndex];
    const nextIndex = (currentDressIndex + 1) % currentCategory.dresses.length;
    set({ currentDressIndex: nextIndex });
  },

  decrementDress: () => {
    const currentCategory = dressTypes[currentCategoryIndex];
    const prevIndex =
      (currentDressIndex - 1 + currentCategory.dresses.length) %
      currentCategory.dresses.length;
    set({ currentDressIndex: prevIndex });
  },

  randomDress: () => {
    const currentCategory = dressTypes[currentCategoryIndex];
    const randomIndex = Math.floor(
      Math.random() * currentCategory.dresses.length
    );
    set({ currentDressIndex: randomIndex });
  },

  switchCategory: (newCategoryIndex) => {
    set({ currentCategoryIndex: newCategoryIndex, currentDressIndex: 0 });
  },
}));
