import { create } from "zustand"; // Update this line
import COLOR_LIBRARY from "@lib/color_library";

const INITIAL_PALETTE = "";
const INITIAL_TASK_ID = null;
const INITIAL_STATUS = "IDLE";

const usePaletteStore = create((set) => {
  const allowedStatuses = ["IDLE", "PENDING", "SUCCESS", "FAILED"];
  
  
  return {
    palette: INITIAL_PALETTE,
    taskId: INITIAL_TASK_ID,
    status: INITIAL_STATUS,
    selectedColorIndex: null,
    paletteName: "True Colors",

    selectedPalette: [],
    paletteColors: [],
    neutralColors:  [],
    s4Colors:  [],
    s3Colors:  [],
    s2Colors:  [],
    s1Colors:  [],
    bColors: [],
    v1Colors: [],
    v2Colors: [],
    v3Colors: [],
    v4Colors: [],
    trueColors: [],

    setSelectedPalette: (colors) => set({ selectedPalette: colors}),
    setPaletteColors: (colors) => set({ paletteColors: colors }),
    setNeutralColors: (colors) => set({ neutralColors: colors }),
    setTrueColors: (colors) => set({ trueColors: colors }),
    setBColors: (colors) => set({ bColors: colors }),
    setS4Colors: (colors) => set({ s4Colors: colors }), 
    setS3Colors: (colors) => set({ s3Colors: colors }),
    setS2Colors: (colors) => set({ s2Colors: colors }),
    setS1Colors: (colors) => set({ s1Colors: colors }),
    setV4Colors: (colors) => set({ v4Colors: colors }), 
    setV3Colors: (colors) => set({ v3Colors: colors }),
    setV2Colors: (colors) => set({ v2Colors: colors }),
    setV1Colors: (colors) => set({ v1Colors: colors }),

    
    setPaletteName: (name) => set({ paletteName: name }),

    setSelectedColorIndex: (index) => set({ selectedColorIndex: index }),
    setState: (newState) => set((state) => ({ ...state, ...newState })),
    setPalette: (palette) => set({ palette }),
    setTaskId: (taskId) => set({ taskId }),
    setStatus: (status) => {
      if (allowedStatuses.includes(status)) {
        set({ status });
      } else {
        console.warn(`Invalid status: ${status}`);
      }
    },
    reset: () => set({ palette: INITIAL_PALETTE, taskId: INITIAL_TASK_ID, status: INITIAL_STATUS }),
  };
});

export default usePaletteStore;
