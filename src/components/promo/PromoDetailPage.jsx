// src/components/promo/PromoDetailPage.jsx
import React, { useState } from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import HeroPromo from "./HeroPromo";
import HowItWorks from "./HowItWorks";
import PromoVisual from "./PromoVisual";
import VoucherForm from "./VoucherForm";
import VoucherDisplay from "./VoucherDisplay";
import CountdownTimer from "./CountdownTimer";
import { getStatusBadge } from "../../utils/promoUtils";

const PromoDetailPage = ({ promo, onBack }) => {
  const [voucherGenerated, setVoucherGenerated] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [userName, setUserName] = useState("");

  const statusBadge = getStatusBadge(promo.status);
  const isExpired = promo.status === "expired";

  const handleVoucherGenerate = (code, name) => {
    setVoucherGenerated(true);
    setVoucherCode(code);
    setUserName(name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        {/* Back Button and Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to All Promotions
          </button>

          {/* Promo Header */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900">
                    {promo.hero.title}
                  </h1>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${statusBadge.color}`}
                  >
                    {statusBadge.label}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">
                    Valid: {promo.startDate.toLocaleDateString()} -{" "}
                    {promo.endDate.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Content */}
        <div className="max-w-6xl mx-auto space-y-12">
          <HeroPromo promo={promo} />
          <HowItWorks steps={promo.steps} />
          <PromoVisual
            mainGraphic={promo.mainGraphic}
            carouselImages={promo.carouselImages}
            theme={promo.theme}
          />

          {/* Voucher Section */}
          {voucherGenerated ? (
            <VoucherDisplay
              voucherCode={voucherCode}
              userName={userName}
              promo={promo}
            />
          ) : (
            <VoucherForm
              onVoucherGenerate={handleVoucherGenerate}
              promo={promo}
              isExpired={isExpired}
            />
          )}

          {/* Countdown Timer - Only show for running promos */}
          {!isExpired && (
            <CountdownTimer
              endDate={promo.endDate}
              startDate={promo.startDate}
              config={promo.countdown}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PromoDetailPage;
