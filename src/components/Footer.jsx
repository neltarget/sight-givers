import React from "react";
import logo from "../../src/assets/images/sight-givers.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white pt-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Clinic */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logo}
              alt="Sight Givers Logo"
              className="h-10 w-10 object-contain bg-white rounded-full p-0.5"
            />
            <h3 className="text-xl font-semibold">Sight Givers Eye Clinic</h3>
          </div>
          <p className="text-sm leading-relaxed text-blue-100">
            We are dedicated to providing comprehensive and accessible eye care
            with the highest standards. From eye exams to advanced surgeries, we
            ensure quality vision care for every patient.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} />{" "}
              <a href="tel:+233240553897" className="hover:underline">
                +233 24 055 3897
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp size={16} className="text-green-300" />{" "}
              <a
                href="https://wa.me/233240553897"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />{" "}
              <a href="mailto:info@sightgivers.com" className="hover:underline">
                info@sightgivers.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />{" "}
              <span>Near Municipal Assembly, Ho, Volta Region, Ghana</span>
            </li>
          </ul>
        </div>

        {/* Office Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Opening Hours</h4>
          <ul className="space-y-2 text-sm">
            <li>Mon – Fri: 8:00 AM – 5:00 PM</li>
            <li>Sat: 9:00 AM – 5:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
          <div className="mt-3">
            <a
              href="https://maps.google.com/maps?q=Sight%20Givers%20Eye%20Clinic%20Ho%20Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sm hover:text-blue-200"
            >
              Get Directions
            </a>{" "}
            |{" "}
            <a
              href="/booking"
              className="underline text-sm hover:text-blue-200"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100082925554469"
              className="hover:text-gray-200"
            >
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram size={20} />
            </a>
          </div>
          <p className="mt-4 text-sm text-blue-100">
            P.O. Box HP 47, Ho – Volta Region
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-1 mb-3 border-t border-blue-500 pt-4 text-center text-sm text-blue-100">
        &copy; {new Date().getFullYear()} Sight Givers Eye Clinic. All rights
        reserved.
      </div>
    </footer>
  );
}
