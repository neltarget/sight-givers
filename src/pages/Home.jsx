import Hero from "../components/Hero";
import TrustFactors from "../components/TrustFactors";
import InsuranceScroll from "../components/InsuranceScroll";
import Testimonials from "../components/Testimonials";
import Services from "./Services";
import Shop from "./Shop";
import AboutSummary from "../components/AboutSummary";
import ServiceSummary from "../components/ServiceSummary";

export default function Home() {
  return (
    <section className="space-y-6">
      <Hero />
      <TrustFactors />
      <InsuranceScroll />
      <AboutSummary />
      <ServiceSummary />
      <Testimonials />
      {/* <Shop /> */}
    </section>
  );
}
