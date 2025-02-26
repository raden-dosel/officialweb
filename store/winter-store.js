import { create } from "zustand";

export const useWinterStore = create((set) => ({
  hue: "Warm",
  saturation: "Bright",
  value: "Light",
  contrast: "High",
  setHue: (newHue) => set({ hue: newHue }),
  setSaturation: (newSaturation) => set({ saturation: newSaturation }),
  setValue: (newValue) => set({ value: newValue }),
  setContrast: (newContrast) => set({ contrast: newContrast }),
}));
