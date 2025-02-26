"use client";
import usePaletteStore from '@store/paletteStore';
import React from 'react'
import ColorMenu from './ColorMenu';
import ColorSwatches from './ColorSwatches';

const ColorDiv = () => {
     const {
        paletteName,
        selectedPalette,
      } = usePaletteStore();

    
  return (
    <div>
      <ColorSwatches colorType={`${paletteName}`} colorSwatch={selectedPalette}/>
    </div>
  )
}

export default ColorDiv
