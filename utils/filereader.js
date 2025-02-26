// import { join } from "path";
import modelPaths from "@models/modelPathJSON.js";
import dress from "@models/dressArray.js";
import long_pants from "@models/longPantsArray.js";
import long_sleeve_dress from "@models/longSleeveDressArray.js";
import long_sleeve_upper from "@models/longSleeveUpperArray.js";
import no_sleeve_dress from "@models/noSleeveDressArray.js";
import no_sleeve_upper from "@models/noSleeveUpperArray.js";
import short_pants from "@models/shortPantsArray.js";
import short_sleeve_dress from "@models/shortSleeveDressArray.js";
import short_sleeve_upper from "@models/shortSleeveUpperArray.js";
import { get } from "mongoose";

export function getPath(clothingType) {
  switch (clothingType) {
    case "dress":
      return getRandomFile(dress);
    case "long_pants":
      return getRandomFile(long_pants);
    case "long_sleeve_dress":
      return getRandomFile(long_sleeve_dress);
    case "long_sleeve_upper":
      return getRandomFile(long_sleeve_upper);
    case "no_sleeve_dress":
      return getRandomFile(no_sleeve_dress);
    case "no_sleeve_upper":
      return getRandomFile(no_sleeve_upper);
    case "short_pants":
      return getRandomFile(short_pants);
    case "short_sleeve_dress":
      return getRandomFile(short_sleeve_dress);
    case "short_sleeve_upper":
      return getRandomFile(short_sleeve_upper);
    default:
      return null;
  }
}

export function getFile(clothingType) {
  switch (clothingType) {
    case "dress":
      return short_sleeve_upper[5];
    case "long_pants":
      return short_sleeve_upper[5];
    case "long_sleeve_dress":
      return short_sleeve_upper[5];
    case "long_sleeve_upper":
      return short_sleeve_upper[5];
    case "no_sleeve_dress":
      return short_sleeve_upper[5];
    case "no_sleeve_upper":
      return short_sleeve_upper[5];
    case "short_pants":
      return short_sleeve_upper[5];
    case "short_sleeve_dress":
      return short_sleeve_upper[5];
    case "short_sleeve_upper":
      return short_sleeve_upper[5];
    default:
      return [];
  }
}

export function getRandomFile(files) {
  const randomIndex = Math.floor(Math.random() * files.length);
  return files[randomIndex];
}

export function getModelPath(clothingType) {
  return modelPaths[clothingType];
}
