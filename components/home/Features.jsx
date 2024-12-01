import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md text-center">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 12H4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Realistic 3D Models</h3>
            <p>Try on items in real-time with hyper-realistic 3D assets.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md text-center">
            <div className="text-purple-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.5 0-4 1-4 4s2.5 4 4 4 4-1 4-4-2.5-4-4-4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
            <p>
              Seamlessly browse and try on items with an intuitive interface.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md text-center">
            <div className="text-pink-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12a7.5 7.5 0 0115 0M9.75 9.75a3.25 3.25 0 104.5 4.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Save Time</h3>
            <p>
              Shop smarter by eliminating the guesswork with accurate sizing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
