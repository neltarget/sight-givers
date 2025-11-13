import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  ChevronDown,
  Tag,
  Sparkles,
} from "lucide-react";
import logo from "../assets/images/sight-givers.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track which submenu is open

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      submenu: [
        { name: "Clinic History", path: "/about/clinic-history" },
        { name: "Mission & Vision", path: "/about/mission-vision" },
        { name: "Meet The Team", path: "/about/meet-the-team" },
        { name: "Patient Testimonials", path: "/about/patient-testimonials" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "Eye Exams", path: "/services/eye-exams" },
        {
          name: "Glasses & Contact Lenses",
          path: "/services/glasses-contacts",
        },
        {
          name: "Cataract Surgery & Glaucoma",
          path: "/services/cataract-glaucoma",
        },
        { name: "Door To Door Services", path: "/services/door-to-door" },
      ],
    },
    { name: "Patient Resources", path: "/patient-resources" },
    { name: "Promotions", path: "/promo" },
    { name: "Eye Health Videos", path: "/eye-health-videos" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top bar with Promo Marquee - Optimized layout */}
      <div className="bg-blue-600 text-white text-sm py-1 px-4 lg:px-6 hidden md:flex">
        <div className="w-full flex items-center justify-between gap-4">
          {/* Contact Info - Left - Now more compact */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <Phone size={14} />
                <a href="tel:+233240553897">+233 240 553 897</a>
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <Mail size={14} />
                <a href="mailto:info@sightgivers.com">info@sightgivers.com</a>
              </div>
            </div>
          </div>

          {/* Promo Marquee - Center - Adjusted spacing */}
          <div className="flex-1 min-w-0 flex justify-center">
            <Link
              to="/promo"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 px-3 py-1 rounded-full shadow-lg animate-pulse hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 cursor-pointer mx-2"
            >
              <div className="flex items-center gap-2 text-xs font-bold whitespace-nowrap">
                <Sparkles size={12} className="text-blue-700" />
                <span className="truncate">
                  FREE EYE SCREENING + 30% OFF FRAMES & LENSES!
                </span>
                <Tag size={12} className="text-blue-700" />
              </div>
            </Link>
          </div>

          {/* Social Media - Right - Compact */}
          <div className="flex-shrink-0">
            <div className="flex gap-2 items-center">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={16} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Top Bar Layout for Smaller Screens */}
      <div className="bg-blue-600 text-white text-sm py-1 px-3 md:hidden">
        <div className="flex flex-col gap-1">
          {/* Contact Info - More compact for mobile */}
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <Phone size={10} />
              <a href="tel:+233240553897" className="text-xs">
                +233 240 553 897
              </a>
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <Mail size={10} />
              <a href="mailto:info@sightgivers.com" className="text-xs">
                info@sightgivers
              </a>
            </div>
          </div>

          {/* Promo Banner for Mobile - More compact */}
          <Link
            to="/promo"
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 px-2 py-1 rounded-full text-center hover:from-yellow-300 hover:to-orange-300 transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-1 text-xs font-bold whitespace-nowrap">
              <Sparkles size={10} className="text-blue-700" />
              <span className="truncate text-xs">FREE SCREENING + 30% OFF</span>
              <Tag size={10} className="text-blue-700" />
            </div>
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          <img src={logo} className="w-24 h-12" alt="Sight Givers Logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) =>
            link.submenu ? (
              <div
                key={link.name}
                className="relative group flex items-center gap-1 cursor-pointer"
              >
                <span className="font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1 text-sm lg:text-base">
                  {link.name} <ChevronDown size={14} />
                </span>
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 invisible group-hover:visible min-w-[180px] z-50">
                  {link.submenu.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm ${
                          isActive ? "text-blue-600 font-semibold" : ""
                        }`
                      }
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition text-sm lg:text-base ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
          <Link
            to="/booking"
            className="ml-2 bg-blue-600 text-white px-3 py-2 rounded-lg shadow hover:bg-blue-700 transition text-sm"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md px-4 py-4 space-y-3">
          {/* Social Media Links */}
          <div className="flex gap-3 justify-center mb-2">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Instagram size={18} />
            </a>
          </div>

          {navLinks.map((link, idx) =>
            link.submenu ? (
              <div key={idx} className="flex flex-col gap-2">
                <button
                  className="flex justify-between w-full font-medium text-gray-700 text-sm"
                  onClick={() =>
                    setOpenSubmenu(openSubmenu === idx ? null : idx)
                  }
                >
                  {link.name}{" "}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      openSubmenu === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSubmenu === idx && (
                  <div className="flex flex-col pl-3 mt-1">
                    {link.submenu.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block py-1 text-gray-700 hover:text-blue-600 text-sm ${
                            isActive ? "text-blue-600 font-semibold" : ""
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block font-medium text-sm ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}

          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center mt-2 text-sm"
          >
            Book Appointment
          </Link>
        </nav>
      )}
    </header>
  );
}
