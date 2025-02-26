"use client";
import React, { useState, useRef, useEffect } from 'react';
import usePaletteStore from '@store/paletteStore';
import { ChevronDown } from 'lucide-react';

const menu = [
    { id: 'trueColor', name: 'True Colors', gradient: 'from-violet-500 to-purple-500' },
    { id: 's4Colors', name: 'Saturation Level 4 Colors', gradient: 'from-fuchsia-500/80 to-pink-500/80' },
    { id: 's3Colors', name: 'Saturation Level 3 Colors', gradient: 'from-rose-500/60 to-red-500/60' },
    { id: 's2Colors', name: 'Saturation Level 2 Colors', gradient: 'from-orange-500/40 to-amber-500/40' },
    { id: 's1Colors', name: 'Saturation Level 1 Colors', gradient: 'from-lime-500/20 to-green-500/20' },
    { id: 'neutral', name: 'Neutral Colors', gradient: 'from-gray-500 to-slate-500' },
    { id: 'v4Colors', name: 'Value Level 4 Colors', gradient: 'from-blue-500 to-cyan-500' },
    { id: 'v3Colors', name: 'Value Level 3 Colors', gradient: 'from-yellow-500 to-orange-500' },
    { id: 'v2Colors', name: 'Value Level 2 Colors', gradient: 'from-green-700 to-brown-500' },
    { id: 'v1Colors', name: 'Value Level 1 Colors', gradient: 'from-pink-300 to-purple-300' },
    { id: 'bColors', name: 'Black/Close-to-black Colors', gradient: 'from-gray-600 to-slate-700' },
];

const ColorMenu = () => {
    const {
        neutralColors,
        s4Colors,
        s3Colors,
        s2Colors,
        s1Colors,
        bColors,
        v1Colors,
        v2Colors,
        v3Colors,
        v4Colors,
        trueColors,
        setSelectedPalette, 
        setPaletteName
    } = usePaletteStore();
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(0);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleColorSelection = (index) => {
        setSelectedColor(index);
        setPaletteName(menu[index].name);
        setIsOpen(false);

        switch (index) {
            case 0: setSelectedPalette(trueColors); break;
            case 1: setSelectedPalette(s4Colors); break;
            case 2: setSelectedPalette(s3Colors); break;
            case 3: setSelectedPalette(s2Colors); break;
            case 4: setSelectedPalette(s1Colors); break;
            case 5: setSelectedPalette(neutralColors); break;
            case 6: setSelectedPalette(v4Colors); break;
            case 7: setSelectedPalette(v3Colors); break;
            case 8: setSelectedPalette(v2Colors); break;
            case 9: setSelectedPalette(v1Colors); break;
            case 10: setSelectedPalette(bColors); break;
            default: setSelectedPalette(trueColors); break;
        }
    };

    return (
        <div className="w-full max-w-xs mx-auto">
            <div className="relative" ref={dropdownRef}>
                {/* Minimal Label */}
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Choose a Palette</span>
                </div>
                
                {/* Dropdown Trigger */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between group"
                >
                    <div className="flex items-center space-x-3">
                        {/* Color Preview */}
                        <div 
                            className={`w-6 h-6 rounded-full bg-gradient-to-r ${menu[selectedColor].gradient} shadow-sm`}
                            aria-hidden="true"
                        />
                        
                        {/* Color Name */}
                        <span className="text-sm font-medium text-gray-800">
                            {menu[selectedColor].name}
                        </span>
                    </div>
                    
                    {/* Chevron */}
                    <ChevronDown 
                        size={16}
                        className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'group-hover:text-gray-600'}`}
                    />
                </button>

                
                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute left-0 right-0 mt-1 py-1 bg-white rounded-md shadow-lg border border-gray-100 z-10 max-h-60 overflow-y-auto">
                        {menu.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleColorSelection(index)}
                                className="w-full flex items-center px-3 py-2 text-sm hover:bg-gray-50 transition-colors"
                            >
                                <div 
                                    className={`w-4 h-4 rounded-full mr-3 bg-gradient-to-r ${item.gradient}`}
                                    aria-hidden="true"
                                />
                                <span className={selectedColor === index ? "font-medium text-gray-900" : "text-gray-700"}>
                                    {item.name}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
            
            {/* Optional: Selected Gradient Preview Bar */}
            <div className="mt-6">
                <div 
                    className={`h-1 w-full bg-gradient-to-r ${menu[selectedColor].gradient} rounded-full`}
                    aria-hidden="true"
                />
            </div>
        </div>
    );
};

export default ColorMenu;