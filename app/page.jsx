import CanvasModel from "@components/model_canvas";
import Features from "@components/home/Features";
import Footer from "@components/home/Footer";
import Hero from "@components/home/Hero";

import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-600 via-pink-600 to-[#FFFAF0] text-primary-foreground min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />

      {/* Call-to-Action Section */}
      <Footer />
    </div>
  );
};

export default Home;
