import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import WhatsAppChat from "./components/WhatsAppChat";
import NotFound from "./pages/NotFound";

// About Pages
import About from "./pages/About";
import ClinicHistory from "./pages/about-pages/ClinicHistory";
import MissionVision from "./pages/about-pages/MissionVision";
import MeetTheTeam from "./pages/about-pages/MeetTheTeam";

// Service Pages
import EyeExams from "./pages/services-pages/EyeExams";
import GlassesContacts from "./pages/services-pages/GlassesContacts";
import CataractGlaucoma from "./pages/services-pages/CataractGlaucoma";
import DoorToDoor from "./pages/services-pages/DoorToDoor";

// Patient Resources subpages
import PatientResources from "./pages/PatientResources";
import FirstVisit from "./pages/patient-resources/FirstVisit";
import InsurancePayment from "./pages/patient-resources/InsurancePayment";
import DownloadableForms from "./pages/patient-resources/DownloadableForms";
import FAQs from "./pages/patient-resources/FAQs";
import PatientTestimonials from "./pages/about-pages/PatientTestimonials";

// promo page
import PromoPage from "./pages/PromoPage";

// eye health videos
import { EyeHealthVideos } from "./pages/EyeHealthVideos";
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route
              path="/booking/confirmation/:id"
              element={<BookingConfirmation />}
            />
            <Route path="/contact" element={<Contact />} />

            {/* About page with nested routes */}
            <Route path="/about" element={<About />}>
              <Route index element={<ClinicHistory />} />{" "}
              {/* Default sub-page */}
              <Route path="clinic-history" element={<ClinicHistory />} />
              <Route path="mission-vision" element={<MissionVision />} />
              <Route path="meet-the-team" element={<MeetTheTeam />} />
              <Route
                path="patient-testimonials"
                element={<PatientTestimonials />}
              />
            </Route>

            {/* Services Subpages */}
            <Route path="/services" element={<Services />}>
              <Route index element={<EyeExams />} />{" "}
              <Route path="/services/eye-exams" element={<EyeExams />} />
              <Route
                path="/services/glasses-contacts"
                element={<GlassesContacts />}
              />
              <Route
                path="/services/cataract-glaucoma"
                element={<CataractGlaucoma />}
              />
              <Route path="/services/door-to-door" element={<DoorToDoor />} />
            </Route>

            {/* Patient Resources subpages  */}
            <Route path="/patient-resources" element={<PatientResources />}>
              <Route index element={<FirstVisit />} /> {/* Default page */}
              <Route path="first-visit" element={<FirstVisit />} />
              <Route path="insurance-payment" element={<InsurancePayment />} />
              <Route
                path="downloadable-forms"
                element={<DownloadableForms />}
              />
              <Route path="faqs" element={<FAQs />} />
            </Route>

            {/* promo page */}
            <Route path="/promo" element={<PromoPage />} />

            {/* eye health videos */}
            <Route path="/eye-health-videos" element={<EyeHealthVideos />} />
            
            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Chat */}
        <WhatsAppChat />
      </div>
    </Router>
  );
}
