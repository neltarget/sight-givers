import React from "react";
import { Eye, Glasses, Stethoscope, Home, ArrowRight } from "lucide-react";

const ServiceSummary = () => {
  const services = [
    {
      icon: Eye,
      title: "EYE EXAMS",
      description: "Early detection of eye conditions and vision problems.",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      link: "/services/eye-exams",
    },
    {
      icon: Glasses,
      title: "GLASSES & CONTACT LENSES",
      description: "A wide range of frames, lenses and fitting services",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      link: "/services/glasses-contacts",
    },
    {
      icon: Stethoscope,
      title: "CATARACT SURGERY & GLAUCOMA",
      description:
        "Safe and effective cataract removal with premium lens options.",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      link: "/services/cataract-glaucoma",
    },
    {
      icon: Home,
      title: "DOOR TO DOOR SERVICES",
      description:
        "We provide door to door services to the disabled, people that due to distance cannot come to us.",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      link: "/services/door-to-door",
    },
  ];

  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive eye care services designed to meet all your vision
            needs with compassion and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`relative p-6 rounded-xl border-2 ${service.color} hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 group flex flex-col h-full`}
              >
                {/* Centered Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow border">
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Centered Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed text-center flex-grow">
                  {service.description}
                </p>

                {/* Read More Link - Centered */}
                <div className="text-center mt-4 pt-4 border-t border-gray-200">
                  <a
                    href={service.link}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 group/link"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;
