function hexToLAB(hex) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const rLinear = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  const gLinear = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  const bLinear = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  const x = rLinear * 0.4124 + gLinear * 0.3576 + bLinear * 0.1805;
  const y = rLinear * 0.2126 + gLinear * 0.7152 + bLinear * 0.0722;
  const z = rLinear * 0.0193 + gLinear * 0.1192 + bLinear * 0.9505;

  const refX = 0.95047;
  const refY = 1.0;
  const refZ = 1.08883;

  const xNorm = x / refX;
  const yNorm = y / refY;
  const zNorm = z / refZ;

  const xCube =
    xNorm > 0.008856 ? Math.pow(xNorm, 1 / 3) : 7.787 * xNorm + 16 / 116;
  const yCube =
    yNorm > 0.008856 ? Math.pow(yNorm, 1 / 3) : 7.787 * yNorm + 16 / 116;
  const zCube =
    zNorm > 0.008856 ? Math.pow(zNorm, 1 / 3) : 7.787 * zNorm + 16 / 116;

  const L = 116 * yCube - 16;
  const A = 500 * (xCube - yCube);
  const B = 200 * (yCube - zCube);

  return { L, A, B };
}

function calculateDeltaE(color1, color2) {
  const deltaL = color1.L - color2.L;
  const deltaA = color1.A - color2.A;
  const deltaB = color1.B - color2.B;

  return Math.sqrt(deltaL ** 2 + deltaA ** 2 + deltaB ** 2);
}

export function findMostDistinctColors(colors, count = 10) {
  if (colors.length <= count) return colors;

  const labColors = colors.map((color) => ({
    ...color,
    lab: hexToLAB(color.Hex),
  }));

  const selectedColors = [];
  selectedColors.push(labColors[0]);

  while (selectedColors.length < count) {
    const candidateColors = labColors.filter(
      (color) =>
        !selectedColors.some((selected) => selected.Name === color.Name)
    );

    const colorWithMaxMinDistance = candidateColors.reduce(
      (maxDistColor, candidateColor) => {
        const minDistance = selectedColors.reduce((minDist, selectedColor) => {
          const distance = calculateDeltaE(
            selectedColor.lab,
            candidateColor.lab
          );
          return Math.min(minDist, distance);
        }, Infinity);

        return minDistance > maxDistColor.minDistance
          ? { color: candidateColor, minDistance }
          : maxDistColor;
      },
      { color: candidateColors[0], minDistance: -Infinity }
    ).color;

    selectedColors.push(colorWithMaxMinDistance);
  }

  return selectedColors.map(({ lab, ...color }) => color);
}

export function filterBySeason(data, season) {
  return data.filter((item) => item.SeasonalGroup === season);
}
