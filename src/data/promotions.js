// src/data/promotions.js
import promoImage from "../assets/images/promo-image.jpg";
import christmasPromoImage from "../assets/images/christmas-promo-image.png"; 
import glass1 from "../assets/images/glass1.jpg";
import glass2 from "../assets/images/glass2.jpg";
import glass3 from "../assets/images/glass3.jpg";
import glass4 from "../assets/images/glass4.jpg";
import glass5 from "../assets/images/glass5.jpg";
import glass6 from "../assets/images/glass6.jpg";
import glass7 from "../assets/images/glass7.jpg";
import glass8 from "../assets/images/glass8.jpg";
import glass9 from "../assets/images/glass9.jpg";
import glass10 from "../assets/images/glass10.jpg";
import glass11 from "../assets/images/glass11.jpg";
import glass12 from "../assets/images/glass12.jpg";
import glass13 from "../assets/images/glass13.jpg";
import glass14 from "../assets/images/glass14.jpg";
import glass15 from "../assets/images/glass15.jpg";
import glass16 from "../assets/images/glass16.jpg";
import glass17 from "../assets/images/glass17.jpg";
import glass18 from "../assets/images/glass18.jpg";
import glass19 from "../assets/images/glass19.jpg";
import glass20 from "../assets/images/glass20.jpg";

export const promotions = [
  {
    // Core Identification
    id: "black-friday-2025",
    type: "seasonal",
    status: "expired",
    order: 1,

    // Dates & Timing
    startDate: new Date("2025-11-15T00:00:00"),
    endDate: new Date("2025-11-30T23:59:59"),

    // Visual Assets
    mainGraphic: promoImage,
    carouselImages: [
      glass1,
      glass2,
      glass3,
      glass4,
      glass5,
      glass6,
      glass7,
      glass8,
      glass9,
      glass10,
      glass11,
      glass12,
      glass13,
      glass14,
      glass15,
      glass16,
      glass17,
      glass18,
      glass19,
      glass20,
    ],
    theme: {
      primaryGradient: "from-blue-600 to-purple-600",
      secondaryGradient: "from-blue-50 to-cyan-50",
      accentColor: "blue",
    },

    // Content - Hero Section
    hero: {
      title: "Black Friday Eye Care Deal!",
      description: `Experience the gift of clear vision this Black Friday. At Sight Givers, we believe in our mission to "Give Sight, Save Lives". Don't miss this incredible opportunity to prioritize your eye health.`,
      benefits: [
        {
          icon: "Stethoscope",
          value: "FREE",
          description: "Comprehensive Eye Screening",
          color: "green",
        },
        {
          icon: "Percent",
          value: "30% OFF",
          description: "All Glasses & Frames",
          color: "blue",
        },
        {
          icon: "Gift",
          value: "Bonus Gift",
          description: "Free Cleaning Spray with Review",
          color: "purple",
        },
      ],
    },

    // How It Works Section
    steps: [
      {
        icon: "ClipboardList",
        title: "Fill Form & Follow",
        description:
          "Enter your details and follow us on Facebook for exclusive deals and updates",
      },
      {
        icon: "Download",
        title: "Save Voucher",
        description: "Print or screenshot your digital voucher",
      },
      {
        icon: "Calendar",
        title: "Visit Clinic",
        description: "Walk in to our eye clinic from November 15th - 30th",
      },
      {
        icon: "Star",
        title: "Review & Get Gift",
        description: "Leave a review for a free cleaning spray",
      },
    ],

    // Voucher System
    voucher: {
      prefix: "SG-NOV",
      benefits: [
        "FREE Comprehensive Eye Screening",
        "30% OFF All Glasses & Frames",
        "Free Cleaning Spray with Review",
      ],
      instructions: [
        "Present this voucher at reception",
        "Walk in to our Eye Clinic",
        "Show review for bonus gift",
      ],
      validity: "November 15th - 30th, 2025",
      terms: [
        "Voucher must be presented at time of service",
        "Cannot be combined with other offers",
        "Show your review receipt for free cleaning spray",
        "Clinic hours: Mon-Fri 8AM-5PM, Sat 9AM-5PM",
      ],
    },

    // Countdown Timer
    countdown: {
      message: "⏰ Limited Time Offer Ends Soon!",
      urgencyText: "🔥 FREE eye screening + Last chance for 30% OFF!",
      progressBar: {
        color: "from-yellow-400 to-orange-500",
      },
    },

    // Form Configuration
    form: {
      facebookUrl: "https://www.facebook.com/profile.php?id=100082925554469",
      requiresFacebook: true,
      googleScriptUrl:
        "https://script.google.com/macros/s/AKfycbzK4b0GJVfXHOUyshkOsxMcd4dfq2JdqG7rQVGQlWgMt7iUlb6412MW3eFRsfNziMA/exec",
    },
  },
  {
    // Christmas Promo
    id: "christmas-2025",
    type: "seasonal",
    status: "running",
    order: 2,

    // Dates & Timing
    startDate: new Date("2025-12-01T00:00:00"),
    endDate: new Date("2025-12-31T23:59:59"),

    // Visual Assets
    mainGraphic: christmasPromoImage,
    carouselImages: [
      glass1,
      glass2,
      glass3,
      glass4,
      glass5,
      glass6,
      glass7,
      glass8,
      glass9,
      glass10,
      glass11,
      glass12,
      glass13,
      glass14,
      glass15,
      glass16,
      glass17,
      glass18,
      glass19,
      glass20,
    ],
    theme: {
      primaryGradient: "from-green-600 to-red-600",
      secondaryGradient: "from-green-50 to-red-50",
      accentColor: "green",
    },

    // Content - Hero Section
    hero: {
      title: "Christmas Holiday Special!",
      description: `Spread the joy of clear vision this Christmas season. At Sight Givers, we believe in our mission to "Give Sight, Save Lives". Perfect your vision for the holidays and start the new year with clarity.`,
      benefits: [
        {
          icon: "Eye",
          value: "FREE",
          description: "Complete Eye Examination",
          color: "green",
        },
        {
          icon: "Percent",
          value: "20% OFF",
          description: "Premium Frames Collection",
          color: "red",
        },
        {
          icon: "Gift",
          value: "Christmas Gift",
          description: "Free Lens Cleaner & Case",
          color: "yellow",
        },
      ],
    },

    // How It Works Section
    steps: [
      {
        icon: "ClipboardList",
        title: "Complete Form",
        description: "Fill in your details to generate your Christmas voucher",
      },
      {
        icon: "Download",
        title: "Save Your Voucher",
        description: "Download or screenshot your special Christmas offer",
      },
      {
        icon: "Calendar",
        title: "Visit in December",
        description: "Come to our clinic any time in December 2025",
      },
      {
        icon: "Star",
        title: "Share & Get Bonus",
        description: "Share your experience for an extra Christmas surprise",
      },
    ],

    // Voucher System
    voucher: {
      prefix: "SG-DEC",
      benefits: [
        "FREE Complete Eye Examination",
        "20% OFF Premium Frames Collection",
        "Free Lens Cleaner & Christmas Case",
      ],
      instructions: [
        "Present this Christmas voucher",
        "Visit during December 2025",
        "Share your experience for bonus gift",
      ],
      validity: "December 1st - 31st, 2025",
      terms: [
        "Christmas voucher valid throughout December",
        "Cannot be combined with other seasonal offers",
        "Bonus gift requires social media share",
        "Extended holiday hours available",
      ],
    },

    // Countdown Timer
    countdown: {
      message: "🎄 Christmas Special - Limited Time!",
      urgencyText: "⭐ FREE eye exam + 20% OFF premium frames & lenses!",
      progressBar: {
        color: "from-green-400 to-red-500",
      },
    },

    // Form Configuration
    form: {
      facebookUrl: "https://www.facebook.com/profile.php?id=100082925554469",
      requiresFacebook: true,
      googleScriptUrl:
        "https://script.google.com/macros/s/AKfycbzK4b0GJVfXHOUyshkOsxMcd4dfq2JdqG7rQVGQlWgMt7iUlb6412MW3eFRsfNziMA/exec",
    },
  },
];
