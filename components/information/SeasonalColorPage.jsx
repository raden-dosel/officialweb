"use client";
import React from 'react';
import { Sun, Flower, Leaf, Snowflake, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import HoverBackButton from '@components/seasonal-output/Back_Button';
import { useRouter } from "next/navigation";


const SeasonalColorPage = () => {
  const seasons = [
    {
      name: "Spring",
      icon: <Sun className="w-8 h-8" />,
      characteristics: "Warm, light, and vibrant",
      palette: "Soft pastels and lively hues like peach, coral, and mint green",
      bestFor: "Individuals with warm undertones and lighter features, radiating freshness and energy",
      gradient: "from-yellow-400 to-green-400",
      bgColor: "bg-yellow-50"
    },
    {
      name: "Summer",
      icon: <Flower className="w-8 h-8" />,
      characteristics: "Cool, muted, and sophisticated",
      palette: "Dusty pinks, lavender, and soft blues",
      bestFor: "Those with cool undertones and a softer, more delicate appearance, evoking calm and elegance",
      gradient: "from-pink-400 to-purple-400",
      bgColor: "bg-pink-50"
    },
    {
      name: "Autumn",
      icon: <Leaf className="w-8 h-8" />,
      characteristics: "Warm, rich, and earthy",
      palette: "Deep oranges, olive greens, and warm browns",
      bestFor: "Individuals with warm undertones and richer hair colors, embodying the warmth of fall foliage",
      gradient: "from-orange-400 to-red-400",
      bgColor: "bg-orange-50"
    },
    {
      name: "Winter",
      icon: <Snowflake className="w-8 h-8" />,
      characteristics: "Cool, bold, and striking",
      palette: "Black, white, jewel tones like sapphire and emerald",
      bestFor: "Those with cool undertones and dramatic contrasts, exuding confidence and vibrancy",
      gradient: "from-blue-400 to-indigo-400",
      bgColor: "bg-blue-50"
    }
  ];

  const benefits = [
    {
      title: "Confidence Boost",
      description: "Wearing colors that complement your natural features can drastically enhance your confidence."
    },
    {
      title: "Wardrobe Cohesion",
      description: "Create a versatile wardrobe where every piece works harmoniously together, making outfit selection a breeze."
    },
    {
      title: "Cost-Effective",
      description: "Invest in quality pieces that you'll love and wear more often, reducing the clutter in your closet."
    }
  ];

  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };

  const handleNextPage = () => {
    router.push("/guidelines");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-purple-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 py-24">
        <div className="absolute inset-0 opacity-20 animate-gradient-x" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold text-white/90">Color Analysis Toolkit</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-clip-text bg-gradient-to-r from-white to-pink-100">
            Discover Your Seasonal Palette
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Unleash your true colors with personalized seasonal analysis
          </p>
        </div>
      </div>

      {/* What is SCA Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-white/20 backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Seasonal Color Analysis
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 text-zinc-700 text-lg leading-relaxed">
              <p>
                Our advanced analysis categorizes your natural features into four seasons,
                helping you create perfect harmony between your appearance and wardrobe choices.
              </p>
              <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-blue-600 mb-2">Did you know?</h3>
                <p className="text-sm text-blue-700">
                  85% of people feel more confident when wearing their seasonal colors
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-pink-50/50 rounded-xl border border-pink-100">
                <Flower className="w-8 h-8 text-pink-600 mb-3" />
                <h3 className="font-semibold text-pink-600">Personalized Matching</h3>
              </div>
              <div className="p-6 bg-purple-50/50 rounded-xl border border-purple-100">
                <Leaf className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-purple-600">AI-Powered Analysis</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seasons Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          The Four Seasons
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season) => (
            <Card 
              key={season.name} 
              className={`group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${season.bgColor} hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${season.gradient} flex items-center justify-center text-white mb-6 transition-transform group-hover:scale-110`}>
                  {React.cloneElement(season.icon, { className: "w-10 h-10" })}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-zinc-800">{season.name}</h3>
                <div className="space-y-4 text-zinc-700">
                  {[
                    { label: "Characteristics", content: season.characteristics },
                    { label: "Palette", content: season.palette },
                    { label: "Best For", content: season.bestFor }
                  ].map((item) => (
                    <div key={item.label} className="border-l-2 border-pink-200 pl-3">
                      <h4 className="text-sm font-semibold text-zinc-600 mb-1">{item.label}</h4>
                      <p className="text-sm leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Why Choose Seasonal Analysis?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-pink-100"
            >
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-3">{benefit.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-pink-500 to-purple-600 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png')]" />
        <div className="max-w-2xl mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discover Your Colors?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Start your personalized color analysis journey in just 2 minutes
          </p>
          <button 
            onClick={handleNextPage}
            className="group px-8 py-4 bg-white/90 backdrop-blur-sm rounded-xl font-bold text-pink-600 
                     shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1
                     flex items-center gap-2 mx-auto hover:bg-white"
          >
            <span>Begin Analysis</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <HoverBackButton
        onClick={handleBackClick}
        buttonWidth="w-20"
        hoverBgColor="hover:bg-pink-600"
        bgColor="bg-pink-500"
      />
    </div>
  );
};

export default SeasonalColorPage;