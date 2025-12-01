// src/components/promo/VoucherForm.jsx
import React, { useState } from "react";
import { Facebook, MapPin, Loader } from "lucide-react";

const VoucherForm = ({ onVoucherGenerate, promo, isExpired }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    followedFacebook: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [facebookLinkClicked, setFacebookLinkClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (submitError) setSubmitError("");
  };

  const handleFacebookLinkClick = () => {
    setFacebookLinkClicked(true);
    // Open in new tab
    window.open(
      "https://www.facebook.com/profile.php?id=100082925554469",
      "_blank"
    );
  };

  const generateVoucherCode = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    // Use the promo-specific prefix from the promo data
    return `${promo.voucher.prefix}-${randomNum}`;
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return "Please enter your full name";
    }
    if (!formData.phone.trim()) {
      return "Please enter your phone number";
    }
    if (!formData.email.trim()) {
      return "Please enter your email address";
    }
    if (!formData.location.trim()) {
      return "Please enter your location";
    }
    if (promo.form.requiresFacebook && !formData.followedFacebook) {
      return "Please confirm that you have followed us on Facebook";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Don't submit if expired
    if (isExpired) {
      setSubmitError(
        "This promotion has ended. Please check our current promotions for active offers."
      );
      return;
    }

    const validationError = validateForm();
    if (validationError) {
      setSubmitError(validationError);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const voucherCode = generateVoucherCode();
      const timestamp = new Date().toISOString();

      const sheetData = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        location: formData.location.trim(),
        voucherCode: voucherCode,
        timestamp: timestamp,
        redeemed: "FALSE",
        promotion: promo.id, // Track which promo this voucher is for
      };

      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbzK4b0GJVfXHOUyshkOsxMcd4dfq2JdqG7rQVGQlWgMt7iUlb6412MW3eFRsfNziMA/exec";

      try {
        const response = await fetch(SCRIPT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sheetData),
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            onVoucherGenerate(voucherCode, formData.name.trim());
            return;
          } else {
            throw new Error(result.error || "Failed to save voucher data");
          }
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (corsError) {
        console.log("CORS approach failed, trying no-cors:", corsError);

        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sheetData),
        });

        await new Promise((resolve) => setTimeout(resolve, 500));
        onVoucherGenerate(voucherCode, formData.name.trim());
      }
    } catch (error) {
      console.error("Error in voucher generation:", error);
      setSubmitError(
        "We encountered an issue saving your data, but your voucher has been generated. Please save it carefully."
      );

      const voucherCode = generateVoucherCode();
      onVoucherGenerate(voucherCode, formData.name.trim());
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 xs:p-5 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="text-center mb-4 xs:mb-5 sm:mb-6">
        <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 text-center">
          {isExpired ? "This Offer Has Expired" : "Claim Your Voucher"}
        </h2>

        {isExpired && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-700">
              This promotion has ended. Please check our current promotions for
              active offers.
            </p>
          </div>
        )}
      </div>

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
              placeholder="Enter your full name as on ID card"
              disabled={isExpired || isSubmitting}
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
              disabled={isExpired || isSubmitting}
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
              disabled={isExpired || isSubmitting}
            />
          </div>

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
                disabled={isExpired || isSubmitting}
              />
            </div>
            <p className="text-xs xs:text-sm text-gray-500 mt-1 xs:mt-2">
              This helps us understand where our customers are coming from
            </p>
          </div>
        </div>

        {promo.form.requiresFacebook && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 xs:p-4 sm:p-5">
            <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
              <Facebook className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 text-blue-600 mt-0.5 xs:mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1 xs:mb-2 text-sm xs:text-base sm:text-lg">
                  Stay Connected for Future Deals!
                </h3>
                <p className="text-gray-600 text-xs xs:text-sm sm:text-base mb-2 xs:mb-3 sm:mb-4 leading-relaxed">
                  Follow us on Facebook to claim your voucher and be the first
                  to hear about exclusive promotions and eye care tips.
                </p>
                <button
                  type="button"
                  onClick={handleFacebookLinkClick}
                  disabled={isExpired}
                  className="inline-flex items-center gap-1 xs:gap-2 bg-blue-600 text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg hover:bg-blue-700 transition text-xs xs:text-sm mb-2 xs:mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Facebook className="h-3 w-3 xs:h-4 xs:w-4" />
                  Follow Us on Facebook
                </button>
                <div className="flex items-center gap-2 xs:gap-3">
                  <input
                    type="checkbox"
                    id="followedFacebook"
                    name="followedFacebook"
                    checked={formData.followedFacebook}
                    onChange={handleChange}
                    disabled={!facebookLinkClicked || isExpired || isSubmitting}
                    className="w-4 h-4 xs:w-5 xs:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <label
                    htmlFor="followedFacebook"
                    className={`text-xs xs:text-sm sm:text-base ${
                      !facebookLinkClicked || isExpired
                        ? "text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    {facebookLinkClicked
                      ? "I have followed Sight Givers on Facebook"
                      : "Click the Facebook link above to enable this checkbox"}
                  </label>
                </div>
                {facebookLinkClicked && (
                  <p className="text-green-600 text-xs mt-2">
                    ✓ Facebook link opened! Please follow our page and then
                    check the box above.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isExpired || isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 xs:py-4 px-6 rounded-lg font-semibold text-base xs:text-lg sm:text-xl hover:from-blue-700 hover:to-cyan-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isExpired ? (
            "Offer Expired"
          ) : isSubmitting ? (
            <>
              <Loader className="h-5 w-5 animate-spin" />
              Generating Voucher...
            </>
          ) : (
            "Generate My Voucher"
          )}
        </button>

        <p className="text-xs xs:text-sm text-gray-500 text-center">
          By claiming this voucher, you agree to our terms and conditions.
          Voucher valid {promo.voucher.validity}.
        </p>
      </form>
    </section>
  );
};

export default VoucherForm;
