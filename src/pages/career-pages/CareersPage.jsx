import React from "react";
import { FilloutStandardEmbed } from "@fillout/react";
// import "@fillout/react/style.css";
import { useNavigate } from "react-router-dom";

const CareersPage = () => {
  const navigate = useNavigate();
  // Replace with your actual Form ID
  const FILLOUT_FORM_ID = "6QWTjccfpNus";

  const handleSubmit = () => {
    // Redirect to thank-you page after successful submission
    navigate("/careers/thank-you");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Join the Sight Givers Eye Clinic Team
        </h1>
        <p className="text-gray-600 mt-2">
          Located in Ho, Volta Region - Serving our community with excellence in
          eye care
        </p>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">
            📍 Positions available: Optometrists, Ophthalmic Nurses,
            Administrative Staff
          </p>
        </div>
      </div>

      {/* Fillout Form */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <FilloutStandardEmbed
          filloutId={FILLOUT_FORM_ID}
          dynamicResize
          onSubmit={handleSubmit} // Redirect on successful submission
        />
      </div>

      {/* Footer Information */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Applications are reviewed within 5-7 working days</p>
        <p className="mt-1">For questions: hr@sightgiversclinic.com</p>
      </div>
    </div>
  );
};

export default CareersPage;
