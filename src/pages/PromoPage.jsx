// src/pages/PromoPage.js
import React, { useState } from "react";
import Header from "../components/promo/Header";
import Hero from "../components/promo/HeroPromo";
import HowItWorks from "../components/promo/HowItWorks";
import VoucherForm from "../components/promo/VoucherForm";
import AdSidebar from "../components/promo/AdSidebar";

const PromoPage = () => {
  const [voucherGenerated, setVoucherGenerated] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        {/* Mobile Ads - Above main content */}
        <div className="block xl:hidden mb-6 sm:mb-8">
          <AdSidebar />
        </div>

        <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Header />
            <Hero />
            <HowItWorks />
            <VoucherForm
              onVoucherGenerate={(code) => {
                setVoucherGenerated(true);
                setVoucherCode(code);
              }}
              voucherGenerated={voucherGenerated}
              voucherCode={voucherCode}
            />
          </div>

          {/* Desktop Sidebar with Ads - Hidden on mobile, shown on xl screens */}
          <div className="hidden xl:block xl:w-96 2xl:w-80">
            <AdSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPage;
