function convertToArray(jsonData) {
    const result = [];
  
    // Iterate through categories (e.g., "men", "women")
    for (const [category, categoryData] of Object.entries(jsonData)) {
      // Iterate through types (e.g., "lower", "upper")
      for (const [type, typeData] of Object.entries(categoryData)) {
        // Iterate through subtypes (e.g., "long_pants")
        for (const [subtype, subtypeData] of Object.entries(typeData)) {
          // Iterate through items (e.g., "long_pants (1)")
          for (const [itemId, itemData] of Object.entries(subtypeData)) {
            result.push({
              category,
              type,
              subtype,
              id: itemId,
              image: itemData.image,
              colors: itemData.colors,
              seasons: itemData.seasons,
              analysis: itemData.analysis
            });
          }
        }
      }
    }
  
    return result;
  }
  
  // Usage:
  const jsonData = "data/json/women/lower/men_long_pants.json";
  const clothingArray = convertToArray(jsonData);