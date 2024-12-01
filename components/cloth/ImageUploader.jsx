"use client";
import React, { useState } from "react";
import { UploadCloud, CheckCircle2, ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const ImageUploader = () => {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/image_upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data.status);
      if (data.success) {
        router.push("/text-input");
      }
    } catch (error) {
      console.error("Error in Frontend Image Upload", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex gap-6">
      {/* Image Uploader */}
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl border border-zinc-200 hover:shadow-xl transition-all duration-300 ease-in-out">
        <div className="flex items-center mb-4">
          <UploadCloud className="mr-2 text-blue-500" size={24} />
          <h1 className="text-xl font-semibold text-gray-800">Image Upload</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="file-upload"
              className={`flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg cursor-pointer ${
                selectedFile
                  ? "border-green-500 bg-green-50 text-green-600"
                  : "border-zinc-300 hover:border-blue-500 text-zinc-600 hover:text-blue-600"
              } transition-all duration-300 ease-in-out`}
            >
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              {selectedFile ? (
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-2" size={20} />
                    <span>{selectedFile.name}</span>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p>Drag and drop or click to upload</p>
                  <p className="text-xs text-zinc-500">PNG, JPG up to 10MB</p>
                </div>
              )}
            </label>
          </div>

          <button
            type="submit"
            disabled={!selectedFile || isUploading}
            className={`w-full py-3 rounded-lg text-white font-medium flex items-center justify-center transition-all duration-300 ease-in-out ${
              !selectedFile || isUploading
                ? "bg-zinc-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
            }`}
          >
            {isUploading ? (
              <span className="flex items-center">
                <svg className="animate-spin mr-2 h-5 w-5" viewBox="0 0 24 24">
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
                Uploading...
              </span>
            ) : (
              "Upload Image"
            )}
          </button>
        </form>
      </div>
      {/* Image Placeholder */}
      <div className="flex justify-center items-center w-full bg-gray-100 rounded-lg p-6">
        {selectedFile ? (
          <Image
            alt="Uploaded Image"
            width={500}
            height={400}
            src={URL.createObjectURL(selectedFile)}
            className="max-h-[400px] object-contain rounded-lg shadow-md"
          />
        ) : (
          <div className="flex flex-col items-center text-center text-zinc-500">
            <ImageIcon size={64} className="mb-4 text-zinc-400" />
            <p>Your uploaded image will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
