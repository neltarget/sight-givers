// src/components/promo/PromoCard.jsx
import React from "react";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { getStatusBadge } from "../../utils/promoUtils";

const PromoCard = ({ promo, onSelect }) => {
  const statusBadge = getStatusBadge(promo.status);
  const isExpired = promo.status === "expired";

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${
        isExpired ? "opacity-75" : "hover:scale-[1.02]"
      }`}
      onClick={() => onSelect(promo)}
    >
      {/* Header with Image and Status */}
      <div className="relative">
        <img
          src={promo.mainGraphic}
          alt={promo.hero.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold border ${statusBadge.color}`}
          >
            {statusBadge.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {promo.hero.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {promo.hero.description}
        </p>

        {/* Benefits Preview */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {promo.hero.benefits.slice(0, 2).map((benefit, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm"
            >
              <Tag className="h-3 w-3" />
              {benefit.value} {benefit.description.split(" ")[0]}
            </span>
          ))}
          {promo.hero.benefits.length > 2 && (
            <span className="text-gray-500 text-sm">
              +{promo.hero.benefits.length - 2} more
            </span>
          )}
        </div>

        {/* Date Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>
              {promo.startDate.toLocaleDateString()} -{" "}
              {promo.endDate.toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition ${
            isExpired
              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          disabled={isExpired}
        >
          {isExpired ? "Offer Expired" : "View Details"}
          {!isExpired && <ArrowRight className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
