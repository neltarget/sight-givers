// src/pages/PromoPage.js
import React, { useState } from "react";
import HeroPromo from "../components/promo/HeroPromo.jsx";
import HowItWorks from "../components/promo/HowItWorks.jsx";
import VoucherForm from "../components/promo/VoucherForm.jsx";
import VoucherDisplay from "../components/promo/VoucherDisplay.jsx";
// import AdSidebar from "../components/promo/AdSidebar.jsx";
import CountdownTimer from "../components/promo/CountdownTimer.jsx";

const PromoPage = () => {
  const [voucherGenerated, setVoucherGenerated] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        {/* Mobile Ads - Above main content */}
        <div className="block xl:hidden mb-6 sm:mb-8">
          {/* <AdSidebar /> */}
        </div>

        <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <HeroPromo />
            <HowItWorks />

            {voucherGenerated ? (
              <VoucherDisplay voucherCode={voucherCode} userName={userName} />
            ) : (
              <VoucherForm
                onVoucherGenerate={(code, name) => {
                  setVoucherGenerated(true);
                  setVoucherCode(code);
                  setUserName(name);
                }}
              />
            )}

            {/* Compact Countdown Timer */}
            <CountdownTimer />
          </div>

          {/* Desktop Sidebar with Ads - Hidden on mobile, shown on xl screens */}
          <div className="hidden xl:block xl:w-96 2xl:w-80">
            {/* <AdSidebar /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPage;
