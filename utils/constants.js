

const generateSeasonArray = (length) => {
  const seasons = ['spring', 'summer', 'autumn', 'winter'];
  const baseCount = Math.floor(length / 4);
  let remainder = length % 4;
  
  let arr = [];
  // Create base equal distribution
  seasons.forEach(season => {
    arr.push(...Array(baseCount).fill(season));
  });

  // Add remaining items with random seasons
  for (let i = 0; i < remainder; i++) {
    arr.push(seasons[Math.floor(Math.random() * 4)]);
  }

  // Shuffle the array
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  return arr;
};


export const GARMENT_SEASONS = {
    dress: {
      skirt: generateSeasonArray(141),         // Creates 141 seasonal entries
      long_sleeve_dress: generateSeasonArray(13),  // 13 entries
      short_sleeve_dress: generateSeasonArray(36), // 36 entries
      no_sleeve_dress: generateSeasonArray(30)     // 30 entries
    },
    lower: {
      short_pants: generateSeasonArray(41),
      long_pants: generateSeasonArray(21)
    },
    upper: {
      long_sleeve_upper: generateSeasonArray(141),
      short_sleeve_upper: generateSeasonArray(89),
      no_sleeve_upper: generateSeasonArray(30)
    }
  };

  export const GARMENT_INDEX = {
      men: {
        autumn: {
          lower: {
            long_pants: 1,
            short_pants: 1
          },
          upper: {
            long_sleeve_upper: 43,
            short_sleeve_upper: 12,
            sleeveless_upper: 1,
          },
        },
        spring: {
          lower: {
            long_pants: 1,
            short_pants: 1
          },
          upper: {
            long_sleeve_upper: 3,
            short_sleeve_upper: 5,
            sleeveless_upper: 5
          },
        },
        summer: {
          lower: {
            long_pants: 3,
            short_pants: 17
          },
          upper: {
            long_sleeve_upper: 37,
            short_sleeve_upper: 23,
            sleeveless_upper: 6
          },
        },
        winter: {
          lower: {
            long_pants: 0,
            short_pants: 1
          },
          upper: {
            long_sleeve_upper: 2,
            short_sleeve_upper: 1,
            sleeveless_upper: 1,
          },
        },
      },
      women: {
        autumn: {
          dress: {
            long_sleeve_dress: 9,
            short_sleeve_dress: 14,
            sleeveless_dress: 11,
            
          },
          lower: {
            long_pants: 3,
            short_pants: 2,
            skirt: 67,
          },
          upper: {
            long_sleeve_upper: 30,
            short_sleeve_upper: 17,
            sleeveless_upper: 5,
          },
        },
        spring: {
          dress: {
          long_sleeve_dress: 1,
          short_sleeve_dress: 5,
          sleeveless_dress: 5,
          
        },
        lower: {
          long_pants: 1,
          short_pants: 2,
          skirt: 15,
        },
        upper: {
          long_sleeve_upper: 9,
          short_sleeve_upper: 9,
          sleeveless_upper: 1
        },
      },
        summer: {
          dress: {
          long_sleeve_dress: 4,
          short_sleeve_dress: 17,
          sleeveless_dress: 12,
          
        },
        lower: {
          long_pants: 13,
          short_pants: 18,
          skirt: 56,
        },
        upper: {
          long_sleeve_upper: 17,
          short_sleeve_upper: 23,
          sleeveless_upper: 14,
        },
      },
        winter: {
          dress: {
          long_sleeve_dress: 1,
          short_sleeve_dress: 1,
          sleeveless_dress: 1,
          
        },
        lower: {
          long_pants: 1,
          short_pants: 1,
          skirt: 3,
        },
        upper: {
          long_sleeve_upper: 1,
          short_sleeve_upper: 1,
          sleeveless_upper: 1
        },
      },
      },
  };

