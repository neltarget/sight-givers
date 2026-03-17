import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";

const slides = [
  {
    id: 1,
    image: hero1,
    title: "Give Sight, Save Lives",
    text: "World-class eye care delivered with compassion — helping you see clearly and live fully.",
    ctas: (
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="tel:+233596102159"
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
        >
          <Phone size={18} />
          Call Us
        </a>
        <Link
          to="/booking"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
        >
          Book Appointment
        </Link>
      </div>
    ),
  },
  {
    id: 2,
    image: hero2,
    title: "American & Ghanaian-Trained Expertise",
    text: "Our doctors bring global training and local commitment to every patient.",
    ctas: (
      <Link
        to="/about"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
      >
        Meet Our Doctors
      </Link>
    ),
  },
  {
    id: 3,
    image: hero3,
    title: "DVLA Approved Eye Center",
    text: "Trusted by institutions and hundreds of satisfied patients across Ghana.",
    ctas: (
      <Link
        to="/services"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
      >
        View Services
      </Link>
    ),
  },
  {
    id: 4,
    image: hero4,
    title: "Stylish Glasses & Contact Lenses",
    text: "Look good, feel good — with affordable lenses and designer frames.",
    ctas: (
      <Link
        to="/services"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
      >
        Explore Glasses
      </Link>
    ),
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Animated content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative z-10 text-center px-6 bg-black/50 p-8 rounded-lg text-white mx-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl mb-6">{slides[current].text}</p>
            <div className="flex justify-center">{slides[current].ctas}</div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        whileHover={{ scale: 1.05 }}
      >
        <ChevronLeft size={28} />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        whileHover={{ scale: 1.05 }}
      >
        <ChevronRight size={28} />
      </motion.button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-white" : "bg-gray-400/70"
            }`}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </section>
  );
}
