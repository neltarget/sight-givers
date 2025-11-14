// src/components/promo/VerticalVideoShowcase.jsx
import React from "react";
import { Play, Smartphone } from "lucide-react";

const VerticalVideoShowcase = () => {
  const videos = [
    {
      title: "Patient Experience",
      description: "See why our patients love us",
      youtubeEmbed: (
        <iframe
          className="w-full h-full rounded-lg xs:rounded-xl"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1?playsinline=1"
          title="Patient Experience at Sight Givers"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      title: "Clinic Tour",
      description: "Explore our modern facility",
      youtubeEmbed: (
        <iframe
          className="w-full h-full rounded-lg xs:rounded-xl"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2?playsinline=1"
          title="Sight Givers Clinic Tour"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
  ];

  return (
    <section className="mb-8 xs:mb-10 sm:mb-12 lg:mb-16 px-3">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 xs:mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Smartphone className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">
              See Why Patients Love Us
            </h2>
          </div>
          <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto">
            Watch these short vertical videos optimized for mobile viewing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6"
            >
              {/* Video Container - 9:16 Aspect Ratio */}
              <div className="relative mx-auto" style={{ maxWidth: "280px" }}>
                <div className="aspect-[9/16] bg-gray-900 rounded-lg xs:rounded-xl overflow-hidden">
                  {video.youtubeEmbed}
                </div>

                {/* Mobile Optimized Badge */}
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                  <Smartphone className="h-3 w-3" />
                  <span>Mobile</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900 text-base xs:text-lg mb-1">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm xs:text-base">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalVideoShowcase;
