import React from 'react';
import { Sun, PaintBucket, Contrast, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SCADisplay = () => {
  const scaInfo = [
    {
      icon: <Sun className="w-6 h-6 text-white" />,
      title: "Hue",
      description: "Warm or cool based on the lips color's closeness to peach or purple (using CIELab color space).",
      gradient: "from-orange-400 to-purple-600"
    },
    {
      icon: <PaintBucket className="w-6 h-6 text-white" />,
      title: "Saturation",
      description: "Skin color saturation - bright or muted based on a threshold.",
      gradient: "from-blue-400 to-emerald-600"
    },
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "Value",
      description: "Average brightness of skin, hair, and eyes (skin & eyes only for bald people). Light or dark based on a threshold.",
      gradient: "from-amber-400 to-red-600"
    },
    {
      icon: <Contrast className="w-6 h-6 text-white" />,
      title: "Contrast",
      description: "Brightness difference between hair and eyes (not computed for bald people). High or low based on a threshold.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="bg-background py-8 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Seasonal Color Analysis
          </h1>
          <p className="text-lg text-zinc-600/90 max-w-2xl mx-auto">
            Scientific breakdown of your personal color characteristics through advanced CIELab analysis
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {scaInfo.map((item, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden transition-transform duration-300 shadow-lg hover:shadow-xl border-0"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${item.gradient} w-full transition-all duration-500`} />
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-md group-hover:rotate-12 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-800">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-zinc-600/90 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SCADisplay;