import  usePaletteStore  from "@store/paletteStore";



const ColorPickerModal = ({ isVisible, onClose }) => {
    const { 
        initialPalette, 
        setPaletteColors,
        paletteColors,
        selectedColorIndex, 
        setSelectedColorIndex,
        replaceColorIndex,
        setReplaceColorIndex
    } = usePaletteStore();

    const array = paletteColors;

    const setNewArray = (index, color) => {
        array.splice(index, 1);
        array.push(color)
        return array;
    }
      

    const handleColorSelect = (index) => {
        if (selectedColorIndex !== null) {
            setReplaceColorIndex(index);
        }
    };

    if (!isVisible) {
        return null;
    }


    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 transform animate-slideIn">
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-2xl font-semibold text-gray-800">
                        Choose Replacement Color
                    </h3>
                </div>

                {/* Color Grid */}
                <div className="p-6 max-h-96 overflow-y-auto">
                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                        {initialPalette.map((color, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    handleColorSelect(index);
                                }}
                                title={color.Name}
                                className="group relative aspect-square rounded-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            >
                                <div
                                    className="w-full h-full"
                                    style={{ backgroundColor: color.Hex }}
                                />
                                {/* Hover overlay with color name */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white text-xs font-medium px-2 text-center">
                                        {color.Name}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 flex justify-between">
                    
                    <button
                        onClick={() => {
                                const newPalette = setNewArray( selectedColorIndex, initialPalette[replaceColorIndex]);
                                setPaletteColors(newPalette)
                                setSelectedColorIndex(null);
                                setReplaceColorIndex(null);
                                onClose();
                            }}
                        className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={() => {
                            setSelectedColorIndex(null)
                            setReplaceColorIndex(null)
                            onClose();
                        }}
                        className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ColorPickerModal
