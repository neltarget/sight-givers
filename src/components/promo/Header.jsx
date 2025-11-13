// src/components/promo/Header.js
import React from "react";
import { Eye, Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center mb-6 xs:mb-8 sm:mb-10 lg:mb-12">
      <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 mb-3 xs:mb-4">
        <Eye className="h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-600" />
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Sight Givers
        </h1>
      </div>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 xs:p-4 sm:p-5 mb-4 xs:mb-5 sm:mb-6">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-700" />
          <p className="text-sm xs:text-base sm:text-lg text-yellow-700 font-semibold">
            Promotion Period: November 15th - 30th, 2024
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
