// src/components/promo/VoucherDisplay.js
import React from "react";
import { Download, Printer, Calendar, Eye } from "lucide-react";

const VoucherDisplay = ({ voucherCode }) => {
  const handleDownload = () => {
    // For mobile, suggest screenshot instead of download
    if (window.innerWidth < 768) {
      alert(
        "Please take a screenshot of this voucher to save it to your phone."
      );
      return;
    }
    window.print();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 xs:p-5 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="text-center mb-4 xs:mb-5 sm:mb-6">
        <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
          <Eye className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 text-green-600" />
        </div>
        <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 xs:mb-2">
          Your Voucher is Ready!
        </h2>
        <p className="text-gray-600 text-sm xs:text-base sm:text-lg">
          Save or print this voucher and present it at our clinic
        </p>
      </div>

      {/* Voucher Design */}
      <div className="border-2 border-dashed border-blue-300 rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 mb-4 xs:mb-5 sm:mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 xs:gap-3 mb-3 xs:mb-4">
            <Eye className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 text-blue-600" />
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">
              Sight Givers
            </h3>
          </div>

          <div className="bg-white rounded-lg p-3 xs:p-4 mb-3 xs:mb-4 shadow-sm">
            <p className="text-xs xs:text-sm text-gray-600 mb-1">
              Voucher Code
            </p>
            <p className="text-2xl xs:text-3xl sm:text-4xl font-bold text-blue-600 mb-2 xs:mb-3 sm:mb-4 break-all">
              {voucherCode}
            </p>

            <div className="flex items-center justify-center gap-1 xs:gap-2 text-green-600 mb-2">
              <Calendar className="h-3 w-3 xs:h-4 xs:w-4" />
              <span className="font-semibold text-sm xs:text-base sm:text-lg">
                Valid: Nov 15th - 30th, 2024
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 text-left">
            <div className="bg-white rounded-lg p-3 xs:p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-1 xs:mb-2 text-sm xs:text-base sm:text-lg">
                What You Get:
              </h4>
              <ul className="text-xs xs:text-sm sm:text-base text-gray-600 space-y-1">
                <li>• 30% OFF All Frames & Lenses</li>
                <li>• FREE Comprehensive Eye Exam</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-3 xs:p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-1 xs:mb-2 text-sm xs:text-base sm:text-lg">
                How to Use:
              </h4>
              <ul className="text-xs xs:text-sm sm:text-base text-gray-600 space-y-1">
                <li>• Present this voucher at reception</li>
                <li>• Book appointment or walk in</li>
                <li>• Show Google review for bonus gift</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center">
        <button
          onClick={handleDownload}
          className="flex items-center justify-center gap-1 xs:gap-2 bg-blue-600 text-white px-4 xs:px-6 py-2 xs:py-3 rounded-lg hover:bg-blue-700 transition text-sm xs:text-base sm:text-lg"
        >
          <Download className="h-4 w-4 xs:h-5 xs:w-5" />
          {window.innerWidth < 768 ? "Take Screenshot" : "Save Voucher"}
        </button>

        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-1 xs:gap-2 border border-gray-300 text-gray-700 px-4 xs:px-6 py-2 xs:py-3 rounded-lg hover:bg-gray-50 transition text-sm xs:text-base sm:text-lg"
        >
          <Printer className="h-4 w-4 xs:h-5 xs:w-5" />
          Print Voucher
        </button>
      </div>

      <div className="mt-4 xs:mt-5 sm:mt-6 p-3 xs:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-1 xs:mb-2 text-sm xs:text-base sm:text-lg">
          Important Notes:
        </h4>
        <ul className="text-xs xs:text-sm sm:text-base text-yellow-700 space-y-1">
          <li>• Voucher must be presented at time of service</li>
          <li>• Cannot be combined with other offers</li>
          <li>• Show your Google review receipt for thank-you gift</li>
          <li>• Promotion valid for new customers only</li>
        </ul>
      </div>
    </section>
  );
};

export default VoucherDisplay;
