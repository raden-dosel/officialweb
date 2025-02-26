import useModelStore from '@store/modelStore';
import dynamic from 'next/dynamic';
import { RotateCcw } from 'lucide-react';
import NavBar from './NavBar';

const ModelViewer = dynamic(() => import("@components/demo/ModelViewer"), { ssr: false });

export const OutputContent = () => {
    const {
        sex,
        currentSelections,
        subtypes,
        setSex,
        setSubType,
        resetSubTypes,
    } = useModelStore();

    const garmentTypes = sex === 'women' ? ['upper', 'lower', 'dress'] : ['upper', 'lower'];

    return (
        <div className="max-w-7xl mx-auto py-4">
            <div className=" ">
                {/* Header Section */}
                <div className="text-center mb-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">
                        3D Garment Viewer
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore and customize different garment types in our interactive 3D viewer
                    </p>
                </div>

                <NavBar />

                {/* Model Viewers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                    {garmentTypes.map((type) => (
                        <div key={type} 
                            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                            {/* Card Header */}
                            <div className="p-4 border-b border-gray-100">
                                <div className="flex justify-center items-center gap-2 mb-4">
                                    <h2 className="text-xl font-semibold capitalize text-gray-800">
                                        {type} Garment
                                    </h2>
                                </div>

                                {/* Subtype Selection */}
                                <div className="flex flex-wrap gap-2">
                                    {subtypes[type].map((subtype) => (
                                        <button
                                            key={subtype}
                                            onClick={() => setSubType(type, subtype)}
                                            className={`px-4 py-2 rounded-xl text-sm font-medium 
                                                transition-all duration-200 
                                                ${currentSelections[type].subtype === subtype
                                                    ? 'bg-pink-600 text-white shadow-md hover:bg-pink-700'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                } 
                                                active:scale-95`}
                                        >
                                            {subtype.replace(/_/g, ' ')}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Model Viewer Container */}
                            <div className="p-4 bg-gray-50">
                                <div className="rounded-xl overflow-hidden border border-gray-100 bg-white">
                                    <ModelViewer type={type} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Global Controls */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={resetSubTypes}
                        className="group px-6 py-3 bg-white text-gray-700 rounded-xl shadow-md 
                            hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5
                            active:translate-y-0 flex items-center gap-2 font-medium"
                    >
                        <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                        Reset All Selections
                    </button>
                </div>
            </div>
        </div>
    );
};