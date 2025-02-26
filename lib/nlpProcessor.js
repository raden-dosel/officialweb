import { CLOTHING_KEYWORDS, MATCHING_RULES } from './keywords.js';
import useModelStore from '@store/modelStore';

class NLPMatcher {
  constructor() {
    this.keywords = CLOTHING_KEYWORDS;
    this.rules = MATCHING_RULES;
  }

  // Function to find matches in the input text
  findMatches(inputText) {
    const matches = {
      types: [],
      subtypes: [],
      colors: [],
      modifiers: []
    };

    // Convert input text to lowercase for case-insensitive matching
    const lowerCaseInput = inputText.toLowerCase();

    // Match types
    for (const type in this.keywords.types) {
      if (lowerCaseInput.includes(type)) {
        matches.types.push(type);
      }
    }

    // Match subtypes
    for (const subtype in this.keywords.subtypes) {
      if (lowerCaseInput.includes(subtype)) {
        matches.subtypes.push(subtype);
      }
    }

    // Match colors
    for (const colorCategory in this.keywords.colors) {
      for (const color of this.keywords.colors[colorCategory].seasonal || []) {
        if (lowerCaseInput.includes(color)) {
          matches.colors.push(color);
        }
      }
      for (const color of this.keywords.colors[colorCategory].universal || []) {
        if (lowerCaseInput.includes(color)) {
          matches.colors.push(color);
        }
      }
    }

    // Match modifiers (e.g., light, dark, metallic)
    for (const modifierType in this.rules.colorModifiers) {
      for (const modifier of this.rules.colorModifiers[modifierType]) {
        if (lowerCaseInput.includes(modifier)) {
          matches.modifiers.push(modifier);
        }
      }
    }

    // Update the store with the matched keywords
    useModelStore.getState().setCapturedKeywords(matches);

    return matches;
  }
}

export default NLPMatcher;