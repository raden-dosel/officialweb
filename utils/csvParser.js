// csv-to-json.js
const fs = require('fs');
const csv = require('csv-parser');

function processCSV(inputPath, outputPath) {
  const garments = {};
  
  fs.createReadStream(inputPath)
    .pipe(csv({
      headers: [
        'ImageFile',
        'DominantColor',
        'ColorPercentage', 
        'Hue',
        'Saturation',
        'Lightness',
        'Season',
        'Confidence',
        'ProcessingNotes'
      ],
      skipLines: 1
    }))
    .on('data', (row) => {
      const pathParts = row.ImageFile.split(/[\\/]/);
      const type = pathParts[pathParts.length - 4]; // women/men
      const category = pathParts[pathParts.length - 3]; // dress
      const subtype = pathParts[pathParts.length - 2]; // short_sleeve
      
      if (!garments[type]) garments[type] = {};
      if (!garments[type][category]) garments[type][category] = {};
      if (!garments[type][category][subtype]) garments[type][category][subtype] = {};
      
      const garmentKey = pathParts[pathParts.length - 1].split('.')[0];
      
      if (!garments[type][category][subtype][garmentKey]) {
        garments[type][category][subtype][garmentKey] = {
          image: `/${pathParts.slice(-4).join('/')}`,
          colors: [],
          seasons: {},
          analysis: []
        };
      }
      
      const colorData = {
        hex: row.DominantColor,
        percentage: parseFloat(row.ColorPercentage),
        hsl: {
          h: parseFloat(row.Hue),
          s: parseFloat(row.Saturation),
          l: parseFloat(row.Lightness)
        },
        season: row.Season.toLowerCase(),
        confidence: row.Confidence.toLowerCase()
      };
      
      garments[type][category][subtype][garmentKey].colors.push(colorData);
      
      // Track seasons with highest confidence
      if (!garments[type][category][subtype][garmentKey].seasons[colorData.season] || 
          colorData.confidence === 'high') {
        garments[type][category][subtype][garmentKey].seasons[colorData.season] = {
          confidence: colorData.confidence
          
        };
      }
      
      garments[type][category][subtype][garmentKey].analysis.push({
        notes: row.ProcessingNotes,
        timestamp: new Date().toISOString()
      });
    })
    .on('end', () => {
      fs.writeFileSync(outputPath, JSON.stringify(garments, null, 2));
      console.log(`JSON saved to ${outputPath}`);
    });
}

// Usage
processCSV(
  'sleeveless_upper_sca_report.csv', 
  'women_sleeveless_upper.json'
);