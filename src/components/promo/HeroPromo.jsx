// src/components/promo/Hero.js
import React from "react";
import { Percent, Stethoscope, Gift } from "lucide-react";

const HeroPromo = () => {
  return (
    <section className="text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 px-3">
        Black Friday Eye Care Deal!
      </h2>
      <p className="text-base xs:text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 xs:mb-7 sm:mb-8 max-w-4xl mx-auto px-4">
        Get ready for crystal-clear vision with our exclusive Black Friday
        offer. Don't miss this opportunity to upgrade your eye care at an
        incredible price.
      </p>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 lg:gap-6 mb-8 px-3">
        <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 lg:p-8 shadow-lg border border-blue-200">
          <Percent className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-blue-600 mx-auto mb-2 xs:mb-3 sm:mb-4" />
          <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 xs:mb-2">
            30% OFF
          </h3>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600">
            All Frames & Lenses
          </p>
        </div>

        <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 lg:p-8 shadow-lg border border-green-200">
          <Stethoscope className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-green-600 mx-auto mb-2 xs:mb-3 sm:mb-4" />
          <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 xs:mb-2">
            FREE
          </h3>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600">
            Comprehensive Eye Exam
          </p>
        </div>

        <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 lg:p-8 shadow-lg border border-purple-200">
          <Gift className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-purple-600 mx-auto mb-2 xs:mb-3 sm:mb-4" />
          <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 xs:mb-2">
            Bonus Gift
          </h3>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600">
            After Your Review
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroPromo
