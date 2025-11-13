// src/components/promo/HowItWorks.js
import React from "react";
import { ClipboardList, Download, Calendar, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Fill Form & Follow",
      description: "Enter your details and follow us on Facebook for updates",
    },
    {
      icon: Download,
      title: "Save Voucher",
      description: "Download or screenshot your digital voucher",
    },
    {
      icon: Calendar,
      title: "Visit Clinic",
      description: "Book appointment or walk in Nov 15th-30th",
    },
    {
      icon: Star,
      title: "Review & Get Gift",
      description: "Leave a Google review for a thank-you gift",
    },
  ];

  return (
    <section className="mb-8 xs:mb-10 sm:mb-12 lg:mb-16 px-3">
      <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 xs:mb-8 sm:mb-10 lg:mb-12">
        How To Claim Your Deal
      </h2>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 lg:gap-6">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="relative">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
                <step.icon className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 xs:-top-2 xs:-right-2 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs xs:text-sm font-bold">
                {index + 1}
              </div>
            </div>
            <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-1 xs:mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-xs xs:text-sm sm:text-base leading-relaxed px-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
