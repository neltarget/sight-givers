// src/components/promo/VoucherDisplay.js
import React, { useRef } from "react";
import { Download, Printer, Calendar, Eye, Share2 } from "lucide-react";
import logo from "../../assets/images/sight-givers.png";

const VoucherDisplay = ({ voucherCode, userName }) => {
  const voucherRef = useRef();

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Sight Givers Voucher - ${userName}</title>
          <style>
            @media print {
              body { 
                margin: 0; 
                padding: 15px;
                font-family: Arial, sans-serif;
              }
              .voucher-container { 
                border: 3px dashed #3b82f6; 
                padding: 20px; 
                background: linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%);
                border-radius: 12px;
                max-width: 600px;
                margin: 0 auto;
                text-align: center;
              }
              .logo-section { 
                display: flex; 
                align-items: center; 
                justify-content: center;
                gap: 10px;
                margin-bottom: 15px;
              }
              .logo { 
                width: 100px; 
                height: auto; 
              }
              .clinic-info {
                text-align: left;
              }
              .clinic-name {
                font-size: 20px;
                font-weight: bold;
                color: #1f2937;
                margin: 0;
                line-height: 1.2;
              }
              .tagline {
                font-size: 12px;
                color: #2563eb;
                font-weight: 600;
                margin: 0;
                line-height: 1.2;
              }
              .user-name {
                font-size: 16px;
                color: #4b5563;
                margin: 10px 0;
                font-weight: 500;
              }
              .voucher-code { 
                font-size: 24px; 
                font-weight: bold; 
                color: #2563eb; 
                margin: 15px 0;
                letter-spacing: 2px;
                background: white;
                padding: 10px;
                border-radius: 8px;
                border: 1px solid #d1d5db;
              }
              .benefits { 
                display: grid; 
                grid-template-columns: 1fr 1fr; 
                gap: 15px; 
                margin: 20px 0; 
              }
              .benefit-box { 
                background: white; 
                padding: 12px; 
                border-radius: 6px; 
                border: 1px solid #d1d5db;
                font-size: 12px;
              }
              .benefit-box h3 {
                margin: 0 0 8px 0;
                font-size: 13px;
                color: #1f2937;
              }
              .benefit-box ul {
                margin: 0;
                padding-left: 15px;
                text-align: left;
              }
              .benefit-box li {
                margin-bottom: 4px;
                color: #4b5563;
              }
              .valid-date { 
                color: #059669; 
                font-weight: bold; 
                margin: 12px 0; 
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
              }
              .instructions { 
                background: #fef3c7; 
                padding: 12px; 
                border-radius: 6px; 
                margin-top: 15px;
                border: 1px solid #f59e0b;
                font-size: 11px;
              }
              .instructions h4 {
                margin: 0 0 8px 0;
                color: #92400e;
                font-size: 12px;
              }
              .instructions ul {
                margin: 0;
                padding-left: 15px;
                text-align: left;
                color: #92400e;
              }
              .instructions li {
                margin-bottom: 3px;
              }
              @page { 
                margin: 0; 
                size: auto;
              }
            }
          </style>
        </head>
        <body>
          <div class="voucher-container">
            <div class="logo-section">
              <img src="${logo}" class="logo" alt="Sight Givers" />
              <div class="clinic-info">
                <h1 class="clinic-name">Sight Givers</h1>
                <p class="tagline">Give Sight, Save Lives</p>
              </div>
            </div>
            
            <div class="user-name">
              Issued to: <strong>${userName}</strong>
            </div>
            
            <div>
              <p style="color: #6b7280; margin: 0; font-size: 12px;">VOUCHER CODE</p>
              <div class="voucher-code">${voucherCode}</div>
              <div class="valid-date">
                Valid: November 15th - 30th, 2025
              </div>
            </div>
            
            <div class="benefits">
              <div class="benefit-box">
                <h3>What You Get:</h3>
                <ul>
                  <li>FREE Eye Screening</li>
                  <li>30% OFF Glasses & Frames</li>
                  <li>Free Cleaning Spray</li>
                </ul>
              </div>
              <div class="benefit-box">
                <h3>How to Use:</h3>
                <ul>
                  <li>Present this voucher</li>
                  <li>Book or walk in</li>
                  <li>Show review for gift</li>
                </ul>
              </div>
            </div>
            
            <div class="instructions">
              <h4>Important Notes:</h4>
              <ul>
                <li>Present voucher at reception</li>
                <li>Not combinable with other offers</li>
                <li>Show review for free cleaning spray</li>
                <li>New customers only</li>
              </ul>
            </div>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  const handleDownload = () => {
    if (window.innerWidth < 768) {
      alert(
        'Please take a screenshot of this voucher, or use the "Print" button to save as PDF.'
      );
      return;
    }
    handlePrint();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Sight Givers Black Friday Voucher",
          text: `Get FREE eye screening + 30% OFF glasses & frames with voucher code: ${voucherCode}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(voucherCode);
        alert("Voucher code copied to clipboard!");
      } catch (error) {
        prompt("Copy your voucher code:", voucherCode);
      }
    }
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
          Print or screenshot this voucher to claim your offer when you visit
          our clinic
        </p>
      </div>

      {/* Printable Voucher */}
      <div
        ref={voucherRef}
        className="border-2 border-dashed border-blue-300 rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 mb-4 xs:mb-5 sm:mb-6"
      >
        <div className="text-center">
          {/* Compact Logo Section */}
          <div className="flex items-center justify-center gap-3 mb-3 xs:mb-4">
            <img
              src={logo}
              className="w-12 h-12 xs:w-16 xs:h-16 object-contain"
              alt="Sight Givers Logo"
            />
            <div className="text-left">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900">
                Sight Givers
              </h3>
              <p className="text-blue-600 font-semibold text-xs xs:text-sm">
                Give Sight, Save Lives
              </p>
            </div>
          </div>

          {/* User Name */}
          <div className="bg-blue-50 rounded-lg p-2 mb-3 xs:mb-4">
            <p className="text-xs xs:text-sm text-gray-600">Issued to:</p>
            <p className="text-base xs:text-lg font-semibold text-gray-900">
              {userName}
            </p>
          </div>

          {/* Voucher Code */}
          <div className="bg-white rounded-lg p-3 xs:p-4 mb-3 xs:mb-4 shadow-sm">
            <p className="text-xs xs:text-sm text-gray-600 mb-1">
              VOUCHER CODE
            </p>
            <p className="text-2xl xs:text-3xl sm:text-4xl font-bold text-blue-600 mb-2 xs:mb-3 sm:mb-4 break-all tracking-wider">
              {voucherCode}
            </p>

            <div className="flex items-center justify-center gap-1 xs:gap-2 text-green-600 mb-2">
              <Calendar className="h-3 w-3 xs:h-4 xs:w-4" />
              <span className="font-semibold text-sm xs:text-base sm:text-lg">
                Valid: November 15th - 30th, 2025
              </span>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 text-left">
            <div className="bg-white rounded-lg p-3 xs:p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-1 xs:mb-2 text-sm xs:text-base sm:text-lg">
                What You Get:
              </h4>
              <ul className="text-xs xs:text-sm sm:text-base text-gray-600 space-y-1">
                <li>• FREE Comprehensive Eye Screening</li>
                <li>• 30% OFF All Glasses & Frames</li>
                <li>• Free Cleaning Spray with Review</li>
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
          className="flex items-center justify-center gap-1 xs:gap-2 bg-blue-600 text-white px-4 xs:px-6 py-2 xs:py-3 rounded-lg hover:bg-blue-700 transition text-sm xs:text-base sm:text-lg flex-1"
        >
          <Download className="h-4 w-4 xs:h-5 xs:w-5" />
          {window.innerWidth < 768 ? "Take Screenshot" : "Save Voucher"}
        </button>

        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-1 xs:gap-2 border border-gray-300 text-gray-700 px-4 xs:px-6 py-2 xs:py-3 rounded-lg hover:bg-gray-50 transition text-sm xs:text-base sm:text-lg flex-1"
        >
          <Printer className="h-4 w-4 xs:h-5 xs:w-5" />
          Print Voucher
        </button>

        {navigator.share && (
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-1 xs:gap-2 bg-green-600 text-white px-4 xs:px-6 py-2 xs:py-3 rounded-lg hover:bg-green-700 transition text-sm xs:text-base sm:text-lg flex-1"
          >
            <Share2 className="h-4 w-4 xs:h-5 xs:w-5" />
            Share
          </button>
        )}
      </div>

      <div className="mt-4 xs:mt-5 sm:mt-6 p-3 xs:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-1 xs:mb-2 text-sm xs:text-base sm:text-lg">
          Important Notes:
        </h4>
        <ul className="text-xs xs:text-sm sm:text-base text-yellow-700 space-y-1">
          <li>• Voucher must be presented at time of service</li>
          <li>• Cannot be combined with other offers</li>
          <li>• Show your Google review receipt for free cleaning spray</li>
          <li>• Promotion valid for new customers only</li>
          <li>• Clinic hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM</li>
        </ul>
      </div>
    </section>
  );
};

export default VoucherDisplay;
