import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Calendar,
  Stethoscope,
  Shield,
  Car,
  Home,
  CreditCard,
  Users,
  Eye,
  Gift,
  MessageCircle,
} from "lucide-react";

const faqData = [
  {
    question: "What services does Sight Givers Eye Clinic offer?",
    answer:
      "We offer comprehensive eye exams, DVLA-approved eye tests, glasses & contact lens fitting, cataract surgery & glaucoma management, and door-to-door services for patients who cannot visit the clinic.",
    icon: Stethoscope,
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment easily through our online booking page, by calling us at +233 59 610 2159, or by visiting any of our branches in Ho or Accra. Walk-ins are also welcome during operating hours.",
    icon: Calendar,
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "Yes, we work with NHIS, DOSH Insurance, Vitality Health, Apex Health, Orange Health, Gap Health, Star Health Insurance, Octaplus Health, Equity Health, Glico Healthcare, Emple Health, Premier Health Insurance, Phoenix Insurance, Cosmopolitan Health Insurance, Ace Medical, Acacia Health, and Nationwide Medical. Contact us if your provider isn't listed.",
    icon: Shield,
  },
  {
    question: "What should I bring on my first visit?",
    answer:
      "Please bring a valid ID, your insurance card (if applicable), any current glasses or contact lenses, and a list of medications you're taking. Plan to spend about 60–90 minutes for a complete exam.",
    icon: Users,
  },
  {
    question: "Do you offer DVLA eye tests?",
    answer:
      "Absolutely. We are a certified DVLA-approved eye center. Our team performs the official vision screening required for driver's license applications and renewals, and provides the necessary documentation.",
    icon: Car,
  },
  {
    question: "What is your door-to-door service?",
    answer:
      "Our door-to-door service brings eye care directly to patients who are elderly, have disabilities, or cannot easily travel to our clinic. We offer eye exams, prescription updates, and basic screenings in the comfort of your home.",
    icon: Home,
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards (Visa, Mastercard), mobile money (MTN MoMo, Vodafone Cash, AirtelTigo), and direct insurance billing. We also offer flexible payment plans for eligible patients.",
    icon: CreditCard,
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes, we provide pediatric eye care for children of all ages, from routine vision screenings to diagnosis and management of common childhood eye conditions.",
    icon: Users,
  },
  {
    question: "How often should I get an eye exam?",
    answer:
      "Adults should have a comprehensive eye exam every 1–2 years, or more frequently if you have diabetes, glaucoma, or other risk factors. Children should have their first exam at 6 months, then annually once school starts.",
    icon: Eye,
  },
  {
    question: "Do you offer free eye screenings?",
    answer:
      "Yes! We regularly run promotions with free eye screenings. Check our Promotions page or follow us on social media for current offers. For example, we often have 'FREE EYE SCREENING + 20% OFF FRAMES & LENSES' promos.",
    icon: Gift,
  },
];

function FAQItem({ question, answer, isOpen, onClick, icon: Icon }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
      >
        <div className="flex items-start gap-3">
          {Icon && (
            <Icon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          )}
          <span className="text-lg font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
            {question}
          </span>
        </div>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-blue-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-5 pl-8 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full text-white shadow-md">
              <HelpCircle size={28} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our eye care services,
            appointments, insurance, and more.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden divide-y divide-gray-100 px-3 pb-2">
          {faqData.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => toggleFAQ(idx)}
              icon={faq.icon}
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our friendly team is here to help. Reach out to us anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm"
            >
              <MessageCircle size={18} />
              Contact Us
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              <Calendar size={18} />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}