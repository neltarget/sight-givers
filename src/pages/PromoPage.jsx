// src/pages/PromoPage.jsx
import React, { useState } from "react";
import HeroPromo from "../components/promo/HeroPromo.jsx";
// import VerticalVideoShowcase from "../components/promo/VerticalVideoShowcase.jsx";
import HowItWorks from "../components/promo/HowItWorks.jsx";
import PromoVisual from "../components/promo/PromoVisual.jsx";
import VoucherForm from "../components/promo/VoucherForm.jsx";
import VoucherDisplay from "../components/promo/VoucherDisplay.jsx";
import CountdownTimer from "../components/promo/CountdownTimer.jsx";

const PromoPage = () => {
  const [voucherGenerated, setVoucherGenerated] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto">
          <HeroPromo />
          <HowItWorks />
          <PromoVisual />

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
          {/* <VerticalVideoShowcase /> */}

          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default PromoPage;
