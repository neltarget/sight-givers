import React from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  Glasses,
  Stethoscope,
  Home,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Eye Exams",
    description:
      "Early detection of eye conditions and vision problems with advanced diagnostics.",
    accent: "bg-blue-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    link: "/services/eye-exams",
  },
  {
    icon: ClipboardCheck,
    title: "DVLA Eye Test",
    description:
      "Certified eye examination for DVLA requirements and driver's license processing.",
    accent: "bg-red-500",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    link: "/services/dvla-eye-test",
  },
  {
    icon: Glasses,
    title: "Glasses & Contact Lenses",
    description:
      "A wide range of frames, lenses, and professional fitting services.",
    accent: "bg-emerald-500",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    link: "/services/glasses-contacts",
  },
  {
    icon: Stethoscope,
    title: "Cataract Surgery & Glaucoma",
    description:
      "Safe and effective cataract removal with premium lens options.",
    accent: "bg-purple-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    link: "/services/cataract-glaucoma",
  },
  {
    icon: Home,
    title: "Door to Door Services",
    description:
      "We provide door to door services to the disabled and those who cannot travel to us.",
    accent: "bg-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    link: "/services/door-to-door",
  },
];

const ServiceSummary = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            What we offer
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            Comprehensive eye care services designed to meet all your vision
            needs with compassion and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-gray-200"
              >
                {/* Top accent bar */}
                <div className={`h-1 w-full ${service.accent}`} />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Icon */}
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${service.iconBg} transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14`}
                  >
                    <IconComponent
                      className={`h-6 w-6 ${service.iconColor} sm:h-7 sm:w-7`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>

                  {/* Read more */}
                  <div className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors duration-200 group-hover:text-blue-700">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;
