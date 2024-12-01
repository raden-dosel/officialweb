import CanvasModel from "@components/model_canvas";
import ModelButtonOptions from "@components/output/ModelButtonOptions";
import ClothingPresets from "@components/output/ClothingPresets";
import ColorSwatches from "@components/output/ColorSwatches";
import HomeButton from "@components/output/HomeButton";

// Mock data - replace with your actual data

const ClothingModelPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-200 to-purple-50 py-12 px-4">
      {/* Home Button - Floating and Aesthetic */}
      <HomeButton />
      {/* END Home Button */}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* 3D Model Preview Container */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-xl border border-zinc-200 p-6 relative overflow-hidden">
          {/* Model Button Options */}
          <ModelButtonOptions />
          {/* END MBP */}

          <div className="flex mt-6 items-center justify-center  rounded-xl">
            {/* Placeholder for 3D Model - replace with actual 3D viewer */}
            <CanvasModel />
          </div>
        </div>

        {/* Sidebar for Presets and Color Selection */}
        <div className="space-y-8">
          {/* Clothing Presets */}
          <ClothingPresets />
          {/* END Clothing Presets */}

          {/* Color Swatches */}
          <ColorSwatches />
          {/* END Color Swatches */}
        </div>
      </div>
    </div>
  );
};

export default ClothingModelPage;
