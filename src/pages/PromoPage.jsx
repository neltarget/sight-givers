// src/pages/PromoPage.jsx
import React, { useState, useEffect } from "react";
import { promotions } from "../data/promotions";
import { sortPromotions, groupPromotions, getStatusBadge } from "../utils/promoUtils";
import PromoCard from "../components/promo/PromoCard";
import PromoDetailPage from "../components/promo/PromoDetailPage";

const PromoPage = () => {
  const [allPromotions, setAllPromotions] = useState([]);
  const [groupedPromotions, setGroupedPromotions] = useState({ running: [], expired: [] });
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [view, setView] = useState('list'); // 'list' or 'detail'

  // Initialize and sort promotions
  useEffect(() => {
    const sortedPromos = sortPromotions(promotions);
    setAllPromotions(sortedPromos);
    setGroupedPromotions(groupPromotions(sortedPromos));
  }, []);

  const handlePromoSelect = (promo) => {
    setSelectedPromo(promo);
    setView('detail');
  };

  const handleBackToList = () => {
    setSelectedPromo(null);
    setView('list');
  };

  if (view === 'detail' && selectedPromo) {
    return (
      <PromoDetailPage 
        promo={selectedPromo} 
        onBack={handleBackToList}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Special Promotions
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our exclusive eye care offers and seasonal discounts
            </p>
          </div>

          {/* Running Promotions */}
          {groupedPromotions.running.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Current Promotions
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8">
                {groupedPromotions.running.map(promo => (
                  <PromoCard 
                    key={promo.id} 
                    promo={promo} 
                    onSelect={handlePromoSelect}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Expired Promotions */}
          {groupedPromotions.expired.length > 0 && (
            <section>
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
                Past Promotions
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8">
                {groupedPromotions.expired.map(promo => (
                  <PromoCard 
                    key={promo.id} 
                    promo={promo} 
                    onSelect={handlePromoSelect}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Empty State */}
          {allPromotions.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No Promotions Available
                </h3>
                <p className="text-gray-600">
                  Check back later for special offers and discounts.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromoPage;