import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronLeft, ChevronRight, MapPin, Award, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";

const slides = [
  {
    id: 1,
    image: hero1,
    badge: "Trusted Eye Care in Ghana",
    title: "Give Sight, Save Lives",
    text: "World-class eye care delivered with compassion — helping you see clearly and live fully.",
    actions: [
      {
        type: "tel",
        href: "tel:+233596102159",
        label: "Call Us",
        icon: <Phone size={18} />,
        variant: "success",
      },
      {
        type: "link",
        to: "/booking",
        label: "Book Appointment",
        variant: "primary",
      },
    ],
  },
  {
    id: 2,
    image: hero2,
    badge: "Globally Trained Specialists",
    title: "American & Ghanaian-Trained Expertise",
    text: "Our doctors bring global training and local commitment to every patient.",
    actions: [
      {
        type: "link",
        to: "/about",
        label: "Meet Our Doctors",
        variant: "primary",
      },
    ],
  },
  {
    id: 3,
    image: hero3,
    badge: "Accredited and Trusted",
    title: "DVLA Approved Eye Center",
    text: "Trusted by institutions and hundreds of satisfied patients across Ghana.",
    actions: [
      {
        type: "link",
        to: "/services",
        label: "View Services",
        variant: "primary",
      },
    ],
  },
  {
    id: 4,
    image: hero4,
    badge: "Affordable Vision Solutions",
    title: "Stylish Glasses & Contact Lenses",
    text: "Look good, feel good — with affordable lenses and designer frames.",
    actions: [
      {
        type: "link",
        to: "/services",
        label: "Explore Glasses",
        variant: "primary",
      },
    ],
  },
];

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

function CTAButton({ action }) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/70";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40",
    success:
      "border-2 border-white/70 text-white hover:bg-white/10",
  };

  const className = `${baseClasses} ${variants[action.variant] || variants.primary}`;

  if (action.type === "link") {
    return (
      <Link to={action.to} className={className}>
        {action.icon}
        {action.label}
      </Link>
    );
  }

  if (action.type === "tel") {
    return (
      <a href={action.href} className={className}>
        {action.icon}
        {action.label}
      </a>
    );
  }

  return null;
}

export default function HeroSlideshow() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDirection) => {
    setCurrent(([prev]) => [
      (prev + newDirection + slides.length) % slides.length,
      newDirection,
    ]);
  }, []);

  const goToSlide = (index) => {
    const newDirection = index > current ? 1 : -1;
    setCurrent([index, newDirection]);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [paginate, isPaused]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const bgVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 1.03,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.99,
    }),
  };

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[85vh] w-full overflow-hidden md:min-h-[90vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero slideshow"
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) paginate(1);
            else if (swipe > swipeConfidenceThreshold) paginate(-1);
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-1/4 top-1/3 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-16 right-1/4 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="max-w-xl text-left"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="mb-4 flex items-center gap-2 border-l-4 border-blue-400 pl-3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {slide.id === 1 && <MapPin size={14} className="text-blue-300" />}
                {slide.id === 2 && <Award size={14} className="text-blue-300" />}
                {slide.id === 3 && <ShieldCheck size={14} className="text-blue-300" />}
                {slide.id === 4 && <MapPin size={14} className="text-blue-300" />}
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                  {slide.badge}
                </span>
              </motion.div>

              <motion.h1
                className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)] md:text-6xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className="mb-8 max-w-lg text-lg leading-relaxed text-white/85 md:text-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                {slide.text}
              </motion.p>

              <motion.div
                className="flex flex-row items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {slide.actions.map((action, index) => (
                  <CTAButton key={index} action={action} />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.button
        onClick={() => paginate(-1)}
        className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-800 shadow-xl transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/70 md:left-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.button
        onClick={() => paginate(1)}
        className="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-800 shadow-xl transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/70 md:right-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </motion.button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-white shadow-md"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.12 }}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 z-20 h-0.5 w-full bg-white/10">
        {!isPaused && (
          <motion.div
            key={current}
            className="h-full bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        )}
      </div>
    </section>
  );
}
