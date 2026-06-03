import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  Banknote,
  CreditCard,
  Smartphone,
  ClipboardCheck,
  Receipt,
  HeartHandshake,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import nhis from "../../assets/images/insurance/nhis.png";
import doshInsurance from "../../assets/images/insurance/dosh-insurance.png";
import vitalityHealth from "../../assets/images/insurance/vitality-health.png";
import apexHealth from "../../assets/images/insurance/apex-health.png";
import orangeHealth from "../../assets/images/insurance/orange-health.png";
import gapHealth from "../../assets/images/insurance/gap-health.png";
import starHealthInsurance from "../../assets/images/insurance/star-health-insurance.png";
import octaplusHealth from "../../assets/images/insurance/octaplus-health.png";
import equityHealth from "../../assets/images/insurance/equity-health.png";
import glicoHealthcare from "../../assets/images/insurance/glico-healthcare.jpeg";
import empleHealth from "../../assets/images/insurance/emple-health.png";
import premierHealthInsurance from "../../assets/images/insurance/premier-health-insurance.png";
import phoenixInsurance from "../../assets/images/insurance/phoenix-insurance.png";
import cosmopolitanHealthInsurance from "../../assets/images/insurance/cosmopolitan-health-insurance.png";
import aceMedical from "../../assets/images/insurance/ace-medical.png";
import acaciaHealth from "../../assets/images/insurance/acacia-health.png";
import nationwideMedical from "../../assets/images/insurance/nationwide-medical.png";

const insuranceLogos = [
  { name: "NHIS", src: nhis },
  { name: "DOSH Insurance", src: doshInsurance },
  { name: "Vitality Health", src: vitalityHealth },
  { name: "Apex Health", src: apexHealth },
  { name: "Orange Health", src: orangeHealth },
  { name: "Gap Health", src: gapHealth },
  { name: "Star Health Insurance", src: starHealthInsurance },
  { name: "Octaplus Health", src: octaplusHealth },
  { name: "Equity Health", src: equityHealth },
  { name: "Glico Healthcare", src: glicoHealthcare },
  { name: "Emple Health", src: empleHealth },
  { name: "Premier Health Insurance", src: premierHealthInsurance },
  { name: "Phoenix Insurance", src: phoenixInsurance },
  { name: "Cosmopolitan Health Insurance", src: cosmopolitanHealthInsurance },
  { name: "Ace Medical", src: aceMedical },
  { name: "Acacia Health", src: acaciaHealth },
  { name: "Nationwide Medical", src: nationwideMedical },
];

const paymentMethods = [
  {
    title: "Cash",
    description: "Pay conveniently with cash at our front desk.",
    icon: Banknote,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Credit & Debit Cards",
    description: "We accept all major credit and debit cards.",
    icon: CreditCard,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Mobile Money",
    description: "Pay via MTN MoMo, Vodafone Cash, or AirtelTigo.",
    icon: Smartphone,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Insurance Direct Billing",
    description: "We bill your insurance provider directly for eligible services.",
    icon: ShieldCheck,
    color: "bg-orange-100 text-orange-600",
  },
];

const billingPolicies = [
  {
    title: "Insurance Verification",
    description:
      "We verify your insurance coverage before your appointment so there are no surprises on the day.",
    icon: ClipboardCheck,
  },
  {
    title: "Co-pays & Deductibles",
    description:
      "Patients are responsible for applicable co-pays and deductibles at time of service.",
    icon: Receipt,
  },
  {
    title: "Financial Assistance",
    description:
      "We offer flexible payment plans for patients who qualify. Speak to our front desk for details.",
    icon: HeartHandshake,
  },
];

export default function InsurancePayment() {
  return (
    <div className="-mx-6 -mt-10">
      {/* ─── Section 1: Hero ─── */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-6 px-6 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-5">
            <div className="bg-blue-600 p-3 rounded-full text-white shadow-md">
              <ShieldCheck size={28} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Insurance & Payment Options
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with leading insurance providers to make quality eye care
            accessible and affordable for every patient.
          </p>
        </div>
      </section>

      {/* ─── Section 2: Accepted Insurance Providers ─── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Accepted Insurance Providers
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We work with a wide range of insurance companies to ensure you
              receive the care you need.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {insuranceLogos.map((logo) => (
              <div
                key={logo.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm h-24 flex items-center justify-center p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-14 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Don't See Your Insurance? ─── */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Don&apos;t see your insurance provider listed?
              </h3>
              <p className="text-gray-600 max-w-lg">
                Contact us — we may still be able to work with your plan or
                offer a direct billing arrangement.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              <MessageCircle size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Payment Options ─── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Payment Options
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Choose the payment method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${method.color}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {method.title}
                  </h4>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Billing & Financial Policy ─── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Billing & Financial Policy
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Transparency and fairness guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {billingPolicies.map((policy) => {
              const Icon = policy.icon;
              return (
                <div
                  key={policy.title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {policy.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {policy.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 6: Bottom CTA ─── */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-2xl py-12 px-8 md:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to book your appointment?
            </h2>
            <p className="text-gray-300 max-w-lg mx-auto mb-8">
              Bring your insurance card and a valid ID. We&apos;ll handle the
              rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
              >
                <CalendarDays size={18} />
                Book Appointment
              </Link>
              <a
                href="tel:+233596102159"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
