import React from "react";
import {
  Eye,
  Glasses,
  Stethoscope,
  Home,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";

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
      icon: ClipboardCheck,
      title: "DVLA EYE TEST",
      description:
        "Certified eye examination for DVLA requirements and driver’s license processing.",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      link: "/services/dvla-eye-test",
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
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Comprehensive eye care services designed to meet all your vision
            needs with compassion and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                className={`group relative flex h-full flex-col rounded-xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${service.color}`}
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border bg-white shadow-sm transition-shadow group-hover:shadow-md">
                    <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-center text-lg font-semibold leading-tight text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="flex-grow text-center text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {/* Link */}
                <div className="mt-4 border-t border-gray-200 pt-4 text-center">
                  <a
                    href={service.link}
                    className="group/link inline-flex items-center text-sm font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;
