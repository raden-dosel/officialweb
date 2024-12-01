import ImageUploader from "@components/cloth/ImageUploader";

import { Upload, ImageIcon, MapPin, Globe } from "lucide-react";
import LocationToggle from "@components/cloth/LocationToggle";

const ClothProcessing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-200 to-purple-50 flex flex-col justify-center items-center px-4 py-12">
      <div className="absolute -bottom-12 -right-12 z-0 w-64 h-64 bg-pink-500 rounded-full blur-2xl opacity-50"></div>
      <div className="relative z-10 max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden border border-zinc-200 gap-6 p-6">
        <div className="flex flex-col space-y-6 justify-center">
          <div className="flex items-center space-x-3 mb-4">
            <Upload className="text-blue-500" size={24} />
            <h2 className="text-2xl font-semibold text-gray-800">
              Step 1: Upload Image
            </h2>
          </div>

          <ImageUploader className="w-full" />
        </div>
      </div>

      <LocationToggle />
      <div className="absolute top-12 -left-12 z-0 w-48 h-48 bg-pink-500 rounded-full blur-2xl opacity-50"></div>
    </div>
  );
};

export default ClothProcessing;
