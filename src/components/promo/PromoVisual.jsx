// src/components/promo/PromoVisual.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import all glass images (keep these hardcoded)
import glass1 from "../../assets/images/glass1.jpg";
import glass2 from "../../assets/images/glass2.jpg";
import glass3 from "../../assets/images/glass3.jpg";
import glass4 from "../../assets/images/glass4.jpg";
import glass5 from "../../assets/images/glass5.jpg";
import glass6 from "../../assets/images/glass6.jpg";
import glass7 from "../../assets/images/glass7.jpg";
import glass8 from "../../assets/images/glass8.jpg";
import glass9 from "../../assets/images/glass9.jpg";
import glass10 from "../../assets/images/glass10.jpg";
import glass11 from "../../assets/images/glass11.jpg";
import glass12 from "../../assets/images/glass12.jpg";
import glass13 from "../../assets/images/glass13.jpg";
import glass14 from "../../assets/images/glass14.jpg";
import glass15 from "../../assets/images/glass15.jpg";
import glass16 from "../../assets/images/glass16.jpg";
import glass17 from "../../assets/images/glass17.jpg";
import glass18 from "../../assets/images/glass18.jpg";
import glass19 from "../../assets/images/glass19.jpg";
import glass20 from "../../assets/images/glass20.jpg";

const PromoVisual = ({ mainGraphic, promoText }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // All 20 glass/frame images (keep this hardcoded)
  const carouselItems = [
    { image: glass1, alt: "Modern Frame Design" },
    { image: glass2, alt: "Classic Eyewear" },
    { image: glass3, alt: "Trendy Glasses" },
    { image: glass4, alt: "Premium Frames" },
    { image: glass5, alt: "Designer Glasses" },
    { image: glass6, alt: "Stylish Frames" },
    { image: glass7, alt: "Elegant Eyewear" },
    { image: glass8, alt: "Contemporary Design" },
    { image: glass9, alt: "Fashion Glasses" },
    { image: glass10, alt: "Luxury Frames" },
    { image: glass11, alt: "Modern Style" },
    { image: glass12, alt: "Classic Design" },
    { image: glass13, alt: "Trendy Frames" },
    { image: glass14, alt: "Premium Glasses" },
    { image: glass15, alt: "Designer Frames" },
    { image: glass16, alt: "Stylish Eyewear" },
    { image: glass17, alt: "Elegant Glasses" },
    { image: glass18, alt: "Contemporary Frames" },
    { image: glass19, alt: "Fashion Eyewear" },
    { image: glass20, alt: "Luxury Glasses" },
  ];

  // Auto-advance carousel - 3 seconds as requested
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <section className="mb-8 xs:mb-10 sm:mb-12 lg:mb-16 px-3">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8">
            {/* Left Column - Dynamic Promo Image */}
            <div className="p-6 xs:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
              <div className="text-center w-full max-w-sm">
                <div className="bg-white rounded-lg xs:rounded-xl p-4 xs:p-6 shadow-md">
                  {/* Container with 3:4 aspect ratio matching 780x1040 */}
                  <div className="aspect-[3/4] rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                    {mainGraphic ? (
                      <img
                        src={mainGraphic}
                        alt="Special Promotional Offer"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Promotional Image
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm xs:text-base mt-4">
                  {promoText || "Special Offer - Limited Time Only"}
                </p>
              </div>
            </div>

            {/* Right Column - Hardcoded Glasses Carousel */}
            <div className="p-6 xs:p-8 bg-gray-50 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="text-center mb-4 xs:mb-6">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Our Collection
                  </h3>
                  <p className="text-gray-600 text-sm xs:text-base">
                    Browse our wide variety of glasses and frames
                  </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                  {/* Carousel */}
                  <div className="overflow-hidden rounded-lg xs:rounded-xl bg-white shadow-md">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                      }}
                    >
                      {carouselItems.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                          <div className="aspect-square bg-white flex items-center justify-center p-8">
                            <img
                              src={item.image}
                              alt={item.alt}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                  >
                    <ChevronLeft className="h-4 w-4 xs:h-5 xs:w-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 xs:h-5 xs:w-5" />
                  </button>

                  {/* Minimal Indicators - Only show a few dots for better appearance */}
                  <div className="flex justify-center mt-4 space-x-1">
                    {carouselItems.slice(0, 5).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          index === currentSlide % 5
                            ? "bg-blue-600 w-3"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVisual;
