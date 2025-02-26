export const CLOTHING_KEYWORDS = {
  types: {
    warm: ['sweater', 'cardigan', 'fleece', 'thermal', 'upper', 'lower', 'dress'],
    cold: ['parka', 'puffer', 'overcoat', 'turtleneck', 'upper', 'lower', 'dress'],
    hot: ['tank', 'camisole', 'halter', 'dress', 'upper'],
    cool: ['windbreaker', 'bomber', 'dress', 'upper', 'lower'],
    formal: ['blazer', 'suit', 'tuxedo', 'dress', 'lower', 'upper'], // Fixed typo
    casual: ['hoodie', 'tee', 'jeans', 'upper', 'lower', 'dress'],
    athletic: ['tank_top', 'leggings', 'joggers', 'performance_tee' ],
    loungewear: ['sweatpants', 'onesie', 'oversized_hoodie']
  },
  subtypes: {
    warm: [
      'knit_sweater', 
      'wool_cardigan',
      'thermal_underwear',
      'short_sleeve_upper',
      'short_pants'
    ],
    cold: [
      'down_jacket',
      'cashmere_scarf',
      'long_sleeve_upper',
      'long_pants'
    ],
    hot: [
      'strappy_top',
      'mesh_shirt',
      'sleeveless_upper',
      'short_pants'
    ],
    cool: [
      'denim_jacket',
      'linen_shirt',
      'short_sleeve_upper',
      'short_pants'
    ],
    formal: [
      'cocktail_dress',
      'tuxedo_shirt',
      'dress',
      'long_pants',
      'long_sleeve_upper'
    ],
    casual: [
      'graphic_tee',
      'distressed_jeans',
      'short_sleeve_upper',
      'short_pants'
    ],
    rain: [
      'trench_coat',
      'waterproof_jacket',
      'long_sleeve_upper',
      'long_pants'
    ],
    summer: [
      'tube_top',
      'sarong',
      'sleeveless_upper',
      'short_pants'
    ],
    winter: [
      'quilted_coat',
      'faux_fur_jacket',
      'long_sleeve_upper',
      'long_pants'
    ]
  },
  // NEW: Adjectives to describe clothing attributes
  adjectives: {
    fabric: [
      'stretchy', 'knit', 'woven', 'breathable', 
      'soft', 'textured', 'denim', 'silk'
    ],
    style: [
      'slim-fit', 'relaxed', 'tailored', 'oversized',
      'ruched', 'asymmetrical', 'high-waisted'
    ],
    comfort: [
      'lightweight', 'cozy', 'airy', 'non-restrictive',
      'moisture-wicking', 'temperature-regulating'
    ],
    seasonal: [
      'layered', 'insulated', 'ventilated', 
      'sun-protective', 'wind-resistant'
    ],
    occasion: [
      'office-ready', 'party', 'athleisure', 
      'outdoor', 'vacation', 'evening'
    ]
  },
  colors: {
    seasonal: {
      summer: [
        'seafoam', 'mango', 'lemonade', 
        'coral', 'turquoise', 'sunyellow'
      ],
      winter: [
        'eggplant', 'slate', 'pewter',
        'burgundy', 'navy', 'charcoal'
      ],
      spring: [
        'peach', 'buttercup', 'lilac',
        'pastelpink', 'mintgreen', 'lavender'
      ],
      autumn: [
        'rust', 'hunter', 'gingersnap',
        'burntorange', 'olivegreen', 'mustard'
      ]
    },
    universal: {
      neutral: [
        'taupe', 'stone', 'khaki',
        'black', 'white', 'gray'
      ],
      bright: [
        'cyber', 'razzmatazz', 'laser_lemon',
        'fireengine', 'sunflower', 'hotpink'
      ],
      pastel: [
        'powderblue', 'rosequartz', 'paleperiwinkle',
        'babyblue', 'blushpink', 'lavender'
      ],
      earth: [
        'cinnamon', 'adobe', 'peat',
        'sage', 'clay', 'sand'
      ],
      jewel: [
        'tanzanite', 'citrine', 'opal',
        'amethyst', 'topaz', 'ruby'
      ]
    }
  }
};

export const MATCHING_RULES = {
  and: ['paired', 'combined', 'with', 'and'],
  or: ['alternatively', 'optionally', 'or'],
  exclude: ['excluding', 'avoiding', 'without'],
  // Enhanced modifiers
  colorModifiers: {
    light: ['translucent', 'sheer', 'light', 'pale'],
    dark: ['inky', 'shadow', 'dark', 'deep'],
    metallic: ['chrome', 'platinum', 'metallic', 'shimmering'],
    muted: ['smoky', 'stonewashed', 'muted', 'dusty'],
    pattern: ['ombre', 'gradient', 'tie-dye', 'geometric']
  }
};