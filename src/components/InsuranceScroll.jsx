import { ShieldCheck } from "lucide-react";

import nhis from "../assets/images/insurance/nhis.png";
import doshInsurance from "../assets/images/insurance/dosh-insurance.png";
import vitalityHealth from "../assets/images/insurance/vitality-health.png";
import apexHealth from "../assets/images/insurance/apex-health.png";
import orangeHealth from "../assets/images/insurance/orange-health.png";
import gapHealth from "../assets/images/insurance/gap-health.png";
import starHealthInsurance from "../assets/images/insurance/star-health-insurance.png";
import octaplusHealth from "../assets/images/insurance/octaplus-health.png";
import equityHealth from "../assets/images/insurance/equity-health.png";
import glicoHealthcare from "../assets/images/insurance/glico-healthcare.jpeg";
import empleHealth from "../assets/images/insurance/emple-health.png";
import premierHealthInsurance from "../assets/images/insurance/premier-health-insurance.png";
import phoenixInsurance from "../assets/images/insurance/phoenix-insurance.png";
import cosmopolitanHealthInsurance from "../assets/images/insurance/cosmopolitan-health-insurance.png";
import aceMedical from "../assets/images/insurance/ace-medical.png";
import acaciaHealth from "../assets/images/insurance/acacia-health.png";
import nationwideMedical from "../assets/images/insurance/nationwide-medical.png";

const logos = [
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

const row1Logos = logos.slice(0, 9);
const row2Logos = logos.slice(8);

export default function InsuranceScroll() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-12 px-4 md:py-16 overflow-hidden">
      <style>{`
        .insurance-scroll-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .insurance-scroll-track {
          display: flex;
          width: max-content;
          animation: insurance-scroll-left 30s linear infinite;
        }
        .insurance-scroll-track-reverse {
          display: flex;
          width: max-content;
          animation: insurance-scroll-right 35s linear infinite;
        }
        .insurance-scroll-track:hover,
        .insurance-scroll-track-reverse:hover {
          animation-play-state: paused;
        }
        @keyframes insurance-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes insurance-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-5xl mx-auto text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Accepted Insurance
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          We work with your insurance provider
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We partner with leading insurance companies to make quality eye care
          accessible and affordable for everyone.
        </p>
      </div>

      <div className="space-y-4">
        <div className="insurance-scroll-mask">
          <div className="insurance-scroll-track">
            {[...row1Logos, ...row1Logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-28 h-16 md:w-36 md:h-20 mx-2 md:mx-3 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-2 md:p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 max-w-20 md:max-h-[72px] md:max-w-[150px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="insurance-scroll-mask">
          <div className="insurance-scroll-track-reverse">
            {[...row2Logos, ...row2Logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-28 h-16 md:w-36 md:h-20 mx-2 md:mx-3 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-2 md:p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 max-w-20 md:max-h-[72px] md:max-w-[150px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
