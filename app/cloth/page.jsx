import ImageUploader from "@components/cloth/ImageUploader";

import { Upload } from "lucide-react";
import LocationToggle from "@components/cloth/LocationToggle";

const ClothProcessing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-200 to-purple-50 flex flex-col justify-center items-center px-4 py-12">

      <div className="relative max-w-7xl w-full bg-gray-50 shadow-xl rounded-2xl overflow-hidden border border-zinc-200 p-4">
        
        <div className="flex flex-col justify-center">
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-foreground">
              Selfie Processing Unit
            </h2>
          </div>
      <LocationToggle />  
          </div>
          
          

          <ImageUploader />
        </div>
      </div>

      
    </div>
  );
};

export default ClothProcessing;
