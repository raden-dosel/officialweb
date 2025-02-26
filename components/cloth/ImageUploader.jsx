"use client";
import React, { useState } from "react";
import { UploadCloud, CheckCircle2, ImageIcon, CircleX } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import usePaletteStore from "@store/paletteStore";
import HoverBackButton from "@components/seasonal-output/Back_Button";

const ImageUploader = () => {
  const { setTaskId, setStatus } = usePaletteStore();
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    // Validate file type and size
    const validTypes = ["image/jpeg", "image/png"];
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (!validTypes.includes(selectedFile.type) || selectedFile.size > maxSize) {
      console.error("Invalid file type or size");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/upload_image", {
        method: "POST",
        mode: "cors",
        body: formData,
      });

      if (response.ok) {
        let data;
        try {
          data = await response.json();
        } catch (parseError) {
          console.error("Error parsing JSON", parseError);
          return;
        }

        const user_task_id = data.task_id;
        if (data.message === "pending") {
          setTaskId(user_task_id);
          setStatus("PENDING");
          router.push("/transition");
        }
      } else {
        console.error("Failed to upload image:", response.statusText);
      }
    } catch (error) {
      console.error("Error in Frontend Image Upload", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <HoverBackButton
          onClick={handleBackClick}
          className="mb-8"
          buttonWidth="w-20"
          hoverBgColor="hover:bg-pink-600"
          bgColor="bg-pink-500"
        />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Upload Section */}
          <div className="w-full lg:max-w-md bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-pink-100 rounded-lg">
                <UploadCloud className="text-pink-600" size={28} />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">Image Upload</h1>
                <p className="text-sm text-gray-500">
                  Transform your image into color palettes
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="file-upload"
                  className={`group relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedFile
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-300 hover:border-pink-400 bg-gray-50"
                  }`}
                >
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="text-center">
                    {selectedFile ? (
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                        <span className="font-medium text-gray-700 truncate max-w-[200px]">
                          {selectedFile.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelectedFile(null)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <CircleX className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="mb-3 flex justify-center">
                          <div className="p-3 bg-white rounded-full shadow-md transition-shadow group-hover:shadow-lg">
                            <UploadCloud className="w-8 h-8 text-pink-600" />
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          Drag and drop or browse files
                        </p>
                        <p className="text-xs text-gray-400">
                          PNG, JPG up to 10MB
                        </p>
                      </>
                    )}
                  </div>
                </label>
              </div>

              <button
                type="submit"
                disabled={!selectedFile || isUploading}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center active:scale-95 ${
                  !selectedFile || isUploading
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                }`}
              >
                {isUploading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Generate Color Palette"
                )}
              </button>
            </form>
          </div>

          {/* Image Preview */}
          <div className="flex-1 w-full bg-white rounded-2xl shadow-lg p-6">
            <div className="h-full flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
              {selectedFile ? (
                <Image
                  alt="Uploaded preview"
                  width={400}
                  height={300}
                  src={URL.createObjectURL(selectedFile)}
                  className="max-h-[300px] w-auto object-contain rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg"
                />
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md mb-6">
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                  </div>
                  <p className="text-gray-500 font-medium">
                    Image preview will appear here
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Supported formats: PNG, JPG, JPEG
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
