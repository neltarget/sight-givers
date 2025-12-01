// src/components/promo/AdSidebar.jsx
import React from "react";

const AdSidebar = () => {
  return (
    <aside className="space-y-4 xs:space-y-5 sm:space-y-6">
      {/* Image Ad */}
      <div className="bg-white rounded-lg xs:rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="p-3 xs:p-4 bg-blue-600">
          <h3 className="text-white font-semibold text-center text-sm xs:text-base">
            Premium Lenses
          </h3>
        </div>
        <div className="p-3 xs:p-4">
          <div className="bg-gray-200 h-32 xs:h-36 sm:h-40 lg:h-48 rounded-lg mb-3 xs:mb-4 flex items-center justify-center">
            <span className="text-gray-500 text-xs xs:text-sm">
              Premium Lenses Ad Image
            </span>
          </div>
          <p className="text-xs xs:text-sm text-gray-600 text-center mb-2 xs:mb-3">
            Experience crystal-clear vision with our scratch-resistant,
            anti-glare premium lenses.
          </p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-xs xs:text-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* Video Ad */}
      <div className="bg-white rounded-lg xs:rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="p-3 xs:p-4 bg-green-600">
          <h3 className="text-white font-semibold text-center text-sm xs:text-base">
            Clinic Tour
          </h3>
        </div>
        <div className="p-3 xs:p-4">
          <div className="bg-gray-200 h-32 xs:h-36 sm:h-40 lg:h-48 rounded-lg mb-3 xs:mb-4 flex items-center justify-center">
            <span className="text-gray-500 text-xs xs:text-sm">
              Video Placeholder
            </span>
          </div>
          <p className="text-xs xs:text-sm text-gray-600 text-center mb-2 xs:mb-3">
            Take a virtual tour of our state-of-the-art facility and meet our
            expert team.
          </p>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-xs xs:text-sm">
            Watch Video
          </button>
        </div>
      </div>

      {/* Testimonial - Only show on larger screens */}
      <div className="hidden sm:block bg-white rounded-lg xs:rounded-xl shadow-lg p-4 xs:p-5 border border-purple-200">
        <div className="flex items-center mb-3 xs:mb-4">
          <div className="w-10 h-10 xs:w-12 xs:h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3 xs:mr-4">
            <span className="text-purple-600 font-semibold text-sm xs:text-base">
              JS
            </span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm xs:text-base">
              John Smith
            </h4>
            <div className="flex text-yellow-400 text-sm xs:text-base">
              {"★".repeat(5)}
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-xs xs:text-sm italic">
          "Amazing service! The Black Friday deal was incredible, and the staff
          helped me find perfect frames. The free cleaning spray was a nice
          bonus!"
        </p>
      </div>
    </aside>
  );
};

export default AdSidebar;
