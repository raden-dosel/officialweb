import { create } from 'zustand';

// Utility function to create balanced seasonal distributions

const useModelStore = create((set, get) => ({

  capturedKeywords: {
    types: [],
    subtypes: [],
    colors: [],
    modifiers: [],
  },
  // Function to update the store (called elsewhere, e.g., in your NLP logic)
  setCapturedKeywords: (keywords) => set({ capturedKeywords: keywords }),
  temperature: "28", // Initialize with 2 decimal places
  humidity: "75",
  sex: 'women',
  season: 'summer',

  setSex: (sex) => set({ sex }),
  setSeason: (season) => set({ season }),
  setHumidity: (humidity) => set({ humidity }),
  setTemperature: (temperature) => set({ temperature: parseFloat(temperature).toFixed(2) }),

  currentSelections: {
    dress: { subtype: 'sleeveless_dress', modelIndex: 0 },
    lower: { subtype: 'short_pants', modelIndex: 0 },
    upper: { subtype: 'short_sleeve_upper', modelIndex: 0 }
  },
  subtypes: {
    dress: ['long_sleeve_dress', 'short_sleeve_dress', 'sleeveless_dress'],
    lower: ['skirt', 'short_pants', 'long_pants'],
    upper: ['long_sleeve_upper', 'short_sleeve_upper', 'sleeveless_upper']
  },

  
  nextModel: (type, max) => set(state => {
    const currentIndex = state.currentSelections[type].modelIndex;
    const nextIndex = (currentIndex + 1) % max;
    return {
      currentSelections: {
        ...state.currentSelections,
        [type]: {
          ...state.currentSelections[type],
          modelIndex: nextIndex
        }
      }
    };
  }),

  previousModel: (type, max) => set(state => {
    const currentIndex = state.currentSelections[type].modelIndex;
    const prevIndex = (currentIndex - 1 + max) % max;
    return {
      currentSelections: {
        ...state.currentSelections,
        [type]: {
          ...state.currentSelections[type],
          modelIndex: prevIndex
        }
      }
    };
  }),

  randomModel: (type, max) => set(state => {
    const randomIndex = Math.floor(Math.random() * max);
    return {
      currentSelections: {
        ...state.currentSelections,
        [type]: {
          ...state.currentSelections[type],
          modelIndex: randomIndex
        }
      }
    };
  }),

  setSubType: (type, subtype) => set(state => ({
    currentSelections: {
      ...state.currentSelections,
      [type]: { subtype, modelIndex: 0 }
    }
  })),

  resetSubTypes: () => set(state => {
    if (state.sex === 'men') {
      return {
        currentSelections: {
          ...state.currentSelections,
          lower: { subtype: 'short_pants', modelIndex: 0 },
          upper: { subtype: 'short_sleeve_upper', modelIndex: 0 },
        }
      };
    } else if (state.sex === 'women') {
      return {
        currentSelections: {
          ...state.currentSelections,
          dress: { subtype: 'short_sleeve_dress', modelIndex: 0 },
          lower: { subtype: 'short_pants', modelIndex: 0 },
          upper: { subtype: 'short_sleeve_upper', modelIndex: 0 }
        }
      };
    }
    return state;
  }),

  formalSubTypes: () => set(state => {
    if (state.sex === 'men') {
      return {
        currentSelections: {
          ...state.currentSelections,
          lower: { subtype: 'long_pants', modelIndex: 2 },
          upper: { subtype: 'long_sleeve_upper', modelIndex: 1 },
        }
      };
    } else if (state.sex === 'women') {
      return {
        currentSelections: {
          ...state.currentSelections,
          dress: { subtype: 'short_sleeve_dress', modelIndex: 0 },
          lower: { subtype: 'long_pants', modelIndex: 2 },
          upper: { subtype: 'long_sleeve_upper', modelIndex: 4 }
        }
      };
    }
    return state;
  }),

  casualSubTypes: () => set(state => {
    if (state.sex === 'men') {
      return {
        currentSelections: {
          ...state.currentSelections,
          upper: { subtype: 'short_sleeve_upper', modelIndex: 1 },
          lower: { subtype: 'short_pants', modelIndex: 1 }
        }
      };
    } else if (state.sex === 'women') {
      return {
        currentSelections: {
          ...state.currentSelections,
          dress: { subtype: 'sleeveless_dress', modelIndex: 1 },
          lower: { subtype: 'skirt', modelIndex: 1 },
          upper: { subtype: 'short_sleeve_upper', modelIndex: 0 }
        }
      };
    }
    return state;
  }),

  warmSubTypes: () => set(state => {
    if (state.sex === 'men') {
      return {
        currentSelections: {
          ...state.currentSelections,
          upper: { subtype: 'sleeveless_upper', modelIndex: 2 },
          lower: { subtype: 'short_pants', modelIndex: 2 }
        }
      };
    } else if (state.sex === 'women') {
      return {
        currentSelections: {
          ...state.currentSelections,
          dress: { subtype: 'sleeveless_dress', modelIndex: 3 },
          lower: { subtype: 'skirt', modelIndex: 1 },
          upper: { subtype: 'sleeveless_upper', modelIndex: 3 }
        }
      };
    }
    return state;
  }),

  coldSubTypes: () => set(state => {
    if (state.sex === 'men') {
      return {
        currentSelections: {
          ...state.currentSelections,
          upper: { subtype: 'long_sleeve_upper', modelIndex: 0 },
          lower: { subtype: 'long_pants', modelIndex: 0 }
        }
      };
    } else if (state.sex === 'women') {
      return {
        currentSelections: {
          ...state.currentSelections,
          dress: { subtype: 'long_sleeve_dress', modelIndex: 3 },
          lower: { subtype: 'long_pants', modelIndex: 1 },
          upper: { subtype: 'long_sleeve_upper', modelIndex: 1 }
        }
      };
    }
    return state;
  }),

  hotSubTypes: () => set(state => {
    if (state.sex === 'men') {
      return {
        currentSelections: {
          ...state.currentSelections,
          upper: { subtype: 'sleeveless_upper', modelIndex: 2 },
          lower: { subtype: 'short_pants', modelIndex: 2 }
        }
      };
    } else if (state.sex === 'women') {
      return {
        currentSelections: {
          ...state.currentSelections,
          dress: { subtype: 'sleeveless_dress', modelIndex: 4 },
          lower: { subtype: 'short_pants', modelIndex: 1 },
          upper: { subtype: 'sleeveless_upper', modelIndex: 1 }
        }
      };
    }
    return state;
  }),

  coolSubTypes: () => set(state => {
    if (state.sex === 'men') {
      return {
        currentSelections: {
          ...state.currentSelections,
          upper: { subtype: 'long_sleeve_upper', modelIndex: 2 },
          lower: { subtype: 'long_pants', modelIndex: 0 }
        }
      };
    } else if (state.sex === 'women') {
      return {
        currentSelections: {
          ...state.currentSelections,
          dress: { subtype: 'long_sleeve_dress', modelIndex: 4 },
          lower: { subtype: 'long_pants', modelIndex: 6 },
          upper: { subtype: 'long_sleeve_upper', modelIndex: 3 }
        }
      };
    }
    return state;
  }),

  rainSubTypes: () => set(state => {
    if (state.sex === 'men') {
      return {
        currentSelections: {
          ...state.currentSelections,
          upper: { subtype: 'long_sleeve_upper', modelIndex: 2 },
          lower: { subtype: 'long_pants', modelIndex: 0 }
        }
      };
    } else if (state.sex === 'women') {
      return {
        currentSelections: {
          ...state.currentSelections,
          dress: { subtype: 'long_sleeve_dress', modelIndex: 0},
          lower: { subtype: 'long_pants', modelIndex: 2 },
          upper: { subtype: 'long_sleeve_upper', modelIndex: 2 }
        }
      };
    }
    return state;
  }),

  summerSubTypes: () => set(state => {
    if (state.sex === 'men') {
      return {
        currentSelections: {
          ...state.currentSelections,
          upper: { subtype: 'sleeveless_upper', modelIndex: 2 },
          lower: { subtype: 'short_pants', modelIndex: 2 }
        }
      };
    } else if (state.sex === 'women') {
      return {
        currentSelections: {
          ...state.currentSelections,
          dress: { subtype: 'sleeveless_dress', modelIndex: 3 },
          lower: { subtype: 'skirt', modelIndex: 1 },
          upper: { subtype: 'sleeveless_upper', modelIndex: 3 }
        }
      };
    }
    return state;
  }),

  winterSubTypes: () => set(state => {
    if (state.sex === 'men') {
      return {
        currentSelections: {
          ...state.currentSelections,
          upper: { subtype: 'long_sleeve_upper', modelIndex: 2 },
          lower: { subtype: 'long_pants', modelIndex: 0 }
        }
      };
    } else if (state.sex === 'women') {
      return {
        currentSelections: {
          ...state.currentSelections,
          dress: { subtype: 'long_sleeve_dress', modelIndex: 3 },
          lower: { subtype: 'long_pants', modelIndex: 1 },
          upper: { subtype: 'long_sleeve_upper', modelIndex: 1 }
        }
      };
    }
    return state;
  }),
  

  

}));

export default useModelStore;