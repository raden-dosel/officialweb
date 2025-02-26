import COLOR_LIBRARY from "@lib/color_library";
import usePaletteStore from "@store/paletteStore";



export const mapPalette = (season) => {
    if (!COLOR_LIBRARY.hasOwnProperty(season)) {
        throw new Error(`Season ${season} not found in COLOR_LIBRARY`);
    }
    const seasonPalette = COLOR_LIBRARY[season];
    return seasonPalette;
};

export const mapColors = (paletteColors, type) =>  {
    
    const specificPalette = paletteColors[type];
    return specificPalette;
};