// src/components/promo/VoucherForm.js
import React, { useState } from "react";
import { Facebook, Download, Printer, MapPin } from "lucide-react";
import VoucherDisplay from "./VoucherDisplay";

const VoucherForm = ({ onVoucherGenerate, voucherGenerated, voucherCode }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    followedFacebook: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const generateVoucherCode = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `SG-Nov-${randomNum}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.followedFacebook) {
      alert(
        "Please confirm that you have followed us on Facebook to claim your voucher."
      );
      return;
    }

    if (!formData.location.trim()) {
      alert("Please enter your location to help us serve you better.");
      return;
    }

    setIsSubmitting(true);

    try {
      const voucherCode = generateVoucherCode();
      const timestamp = new Date().toISOString();

      // Prepare data for Google Sheets
      const sheetData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        voucherCode: voucherCode,
        timestamp: timestamp,
        redeemed: "FALSE",
      };

      // Replace with your Google Apps Script Web App URL
      const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetData),
      });

      if (response.ok) {
        onVoucherGenerate(voucherCode);
      } else {
        throw new Error("Failed to save data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error generating your voucher. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (voucherGenerated) {
    return <VoucherDisplay voucherCode={voucherCode} />;
  }

  return (
    <section className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 xs:p-5 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 text-center">
        Claim Your Voucher
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 xs:space-y-5 sm:space-y-6"
      >
        <div className="space-y-3 xs:space-y-4 sm:space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm xs:text-base font-medium text-gray-700 mb-1 xs:mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm xs:text-base font-medium text-gray-700 mb-1 xs:mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm xs:text-base font-medium text-gray-700 mb-1 xs:mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter your email address"
            />
          </div>

          {/* Location Field */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm xs:text-base font-medium text-gray-700 mb-1 xs:mb-2"
            >
              Your Location *
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 xs:h-5 xs:w-5 text-gray-400" />
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full pl-10 xs:pl-12 pr-3 xs:pr-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter your city or area"
              />
            </div>
            <p className="text-xs xs:text-sm text-gray-500 mt-1 xs:mt-2">
              This helps us understand where our customers are coming from
            </p>
          </div>
        </div>

        {/* Facebook Follow - Honor System */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 xs:p-4 sm:p-5">
          <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
            <Facebook className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 text-blue-600 mt-0.5 xs:mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1 xs:mb-2 text-sm xs:text-base sm:text-lg">
                Stay Connected for Future Deals!
              </h3>
              <p className="text-gray-600 text-xs xs:text-sm sm:text-base mb-2 xs:mb-3 sm:mb-4 leading-relaxed">
                Follow us on Facebook to claim your voucher and be the first to
                hear about exclusive promotions and eye care tips.
              </p>
              <a
                href="https://facebook.com/sightgivers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 xs:gap-2 bg-blue-600 text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg hover:bg-blue-700 transition text-xs xs:text-sm mb-2 xs:mb-3"
              >
                <Facebook className="h-3 w-3 xs:h-4 xs:w-4" />
                Follow Us on Facebook
              </a>
              <div className="flex items-center gap-2 xs:gap-3">
                <input
                  type="checkbox"
                  id="followedFacebook"
                  name="followedFacebook"
                  checked={formData.followedFacebook}
                  onChange={handleChange}
                  className="w-4 h-4 xs:w-5 xs:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
                />
                <label
                  htmlFor="followedFacebook"
                  className="text-xs xs:text-sm sm:text-base text-gray-700"
                >
                  I have followed Sight Givers on Facebook
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 xs:py-4 px-6 rounded-lg font-semibold text-base xs:text-lg sm:text-xl hover:from-blue-700 hover:to-cyan-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Generating Voucher..." : "Generate My Voucher"}
        </button>

        <p className="text-xs xs:text-sm text-gray-500 text-center">
          By claiming this voucher, you agree to our terms and conditions.
          Voucher valid from November 15th to 30th, 2024.
        </p>
      </form>
    </section>
  );
};

export default VoucherForm;
