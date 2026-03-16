import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ApplicationThankYou = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Application Submitted Successfully!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for applying to Sight Givers Eye Clinic. Your application
          has been received and will be reviewed by our HR team.
        </p>
        <p className="text-gray-500 mb-8">
          We typically respond within 5–7 working days. If your qualifications
          match our needs, we will contact you to schedule an interview.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Return to Home
          </Link>
          <Link
            to="/careers"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            View Other Openings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationThankYou;
