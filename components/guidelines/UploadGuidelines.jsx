
import React from 'react';
import { 
  Camera, Sun, FileImage, CheckSquare, 
  CircleSlash, Image as ImageIcon,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';


const UploadGuidelines = () => {

  const guidelines = [
    {
      icon: <Camera className="w-6 h-6 text-pink-600" />,
      title: "Image Type: Full Face",
      points: [
        {
          subtitle: "Definition",
          description: "A full face image should clearly show your entire face from forehead to chin, including both ears, without any obstructions."
        },
        {
          subtitle: "Pose",
          description: "Ensure your face is centered in the frame, looking directly at the camera. Your expression should be neutral, allowing for natural color representation."
        }
      ]
    },
    {
      icon: <Sun className="w-6 h-6 text-pink-600" />,
      title: "Lighting Requirements",
      points: [
        {
          subtitle: "Quality",
          description: "Use clear, natural lighting for the best results. Avoid harsh shadows or overly bright spots."
        },
        {
          subtitle: "Location",
          description: "Take the photo in a well-lit area, preferably near a window during the day. Avoid backlighting or fluorescent lighting, which can alter skin tones."
        }
      ]
    },
    {
      icon: <CircleSlash className="w-6 h-6 text-pink-600" />,
      title: "Makeup and Accessories",
      points: [
        {
          subtitle: "No Makeup",
          description: "Please submit the image with no makeup applied. This will help us accurately analyze your natural skin tone."
        },
        {
          subtitle: "Accessories",
          description: "Remove any glasses, hats, or other accessories that might obstruct your face."
        }
      ]
    },
    {
      icon: <FileImage className="w-6 h-6 text-pink-600" />,
      title: "Image File Size",
      points: [
        {
          subtitle: "Maximum Size",
          description: "The image file size should not exceed 1000 KB. If your image is larger, consider resizing it using a photo editing tool."
        }
      ]
    },
    {
      icon: <ImageIcon className="w-6 h-6 text-pink-600" />,
      title: "Image File Type",
      points: [
        {
          subtitle: "Accepted Formats",
          description: "Please upload your photo in one of the following formats: JPEG (.jpg, .jpeg) or PNG (.png)"
        },
        {
          subtitle: "Note",
          description: "Ensure the file format is compatible; other formats may not be accepted."
        }
      ]
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-pink-600" />,
      title: "Final Check",
      points: [
        {
          subtitle: "",
          description: "Before uploading, double-check that the image meets all guidelines. Clear images will lead to better outcomes in our analysis, enhancing your experience on our platform."
        }
      ]
    }
  ];

 

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white py-16">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="text-center space-y-6">
          <div className="inline-block p-2 bg-pink-100 rounded-2xl mb-4">
            <FileImage className="w-8 h-8 text-pink-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Image Upload Guidelines
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            To ensure the best quality and consistency for user images on our website, 
            please adhere to the following guidelines when uploading your photo:
          </p>
        </div>
      </div>

      {/* Guidelines Grid */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid gap-8">
          {guidelines.map((guideline, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-white hover:bg-pink-50/50 border-2 border-pink-100/50 
                hover:border-pink-200 hover:shadow-lg transition-all duration-300 rounded-2xl"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-pink-100 rounded-xl text-pink-600 group-hover:scale-110 transition-transform duration-300">
                    {guideline.icon}
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 text-sm font-semibold 
                        bg-pink-100 text-pink-600 rounded-full">
                        {index + 1}
                      </span>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {guideline.title}
                      </h2>
                    </div>
                    <div className="space-y-6 pl-11">
                      {guideline.points.map((point, pIndex) => (
                        <div key={pIndex} className="group/point">
                          {point.subtitle && (
                            <div className="flex items-center gap-2 mb-2">
                              <ArrowRight className="w-4 h-4 text-pink-400 group-hover/point:translate-x-1 transition-transform" />
                              <h3 className="font-medium text-gray-700">
                                {point.subtitle}
                              </h3>
                            </div>
                          )}
                          <p className="text-gray-600 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Thank You Note */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-none shadow-lg">
            <CardContent className="p-8">
              <div className="max-w-2xl mx-auto">
                <CheckSquare className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium text-lg">
                  Thank you for your cooperation! Your adherence to these guidelines helps us maintain 
                  a high standard for all user submissions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UploadGuidelines;