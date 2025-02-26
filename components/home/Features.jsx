import React from "react";

const Features = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Revolutionizing your virtual shopping experience with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-pink-100/50 p-2">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl w-fit group-hover:-translate-y-2 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-zinc-800 mb-3 text-center">
              Hyper-Realistic 3D Models
            </h3>
            <p className="text-zinc-600 text-center leading-relaxed">
              Immerse yourself in lifelike virtual try-ons powered by photorealistic 3D rendering technology
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-pink-100/50 p-2">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl w-fit group-hover:-translate-y-2 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-zinc-800 mb-3 text-center">
              Intuitive Interface
            </h3>
            <p className="text-zinc-600 text-center leading-relaxed">
              Fluid navigation with gesture controls and AI-powered personalization
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-pink-100/50 p-2">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl w-fit group-hover:-translate-y-2 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-zinc-800 mb-3 text-center">
              Smart Efficiency
            </h3>
            <p className="text-zinc-600 text-center leading-relaxed">
              AI-powered recommendations reduce decision fatigue by 65% on average
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;