// src/utils/promoUtils.js
export const calculatePromoStatus = (startDate, endDate) => {
  const now = new Date();
  if (now < startDate) return "upcoming";
  if (now > endDate) return "expired";
  return "running";
};

export const sortPromotions = (promotions) => {
  return promotions
    .map((promo) => ({
      ...promo,
      status: calculatePromoStatus(promo.startDate, promo.endDate),
    }))
    .sort((a, b) => {
      // Running promos first, then by order
      if (a.status === "running" && b.status !== "running") return -1;
      if (a.status !== "running" && b.status === "running") return 1;
      return a.order - b.order;
    });
};

export const groupPromotions = (promotions) => {
  const running = promotions.filter((promo) => promo.status === "running");
  const expired = promotions.filter((promo) => promo.status === "expired");
  const upcoming = promotions.filter((promo) => promo.status === "upcoming");

  return { running, expired, upcoming };
};

export const getStatusBadge = (status) => {
  const statusConfig = {
    running: {
      label: "Running",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    expired: {
      label: "Expired",
      color: "bg-gray-100 text-gray-800 border-gray-200",
    },
    upcoming: {
      label: "Coming Soon",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
  };

  return statusConfig[status] || statusConfig.expired;
};
