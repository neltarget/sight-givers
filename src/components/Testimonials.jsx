// src/components/TestimonialsScroller.jsx
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alhaji Umar",
    quote:
      "Best Eye Clinic in Ho. Excellent service, affordable frames, and a highly experienced doctor.",
    rating: 5,
  },
  {
    name: "Marie Kettor",
    quote:
      "Very welcoming and professional. Their services are top notch. Highly recommended.",
    rating: 5,
  },
  {
    name: "Majestik Dagnram",
    quote:
      "After my eye test, I was impressed by the doctor’s humility and expertise. High quality care.",
    rating: 5,
  },
  {
    name: "Edem Richlove",
    quote:
      "I used to have severe eye pain, but after visiting Sight Givers, I finally got relief.",
    rating: 5,
  },
  {
    name: "Victoria Amedzekor",
    quote:
      "Clean office, modern equipment, and a very caring doctor. Highly recommend.",
    rating: 5,
  },
  {
    name: "Debora Deyamevor",
    quote:
      "The doctor is super amazing and the workers are very friendly. Look nowhere else.",
    rating: 5,
  },
  {
    name: "Jennifer Akpadey",
    quote:
      "Excellent customer service and high quality affordable products. Number 1 eye clinic!",
    rating: 5,
  },
  {
    name: "Truth Boso",
    quote:
      "Doctor explained my condition clearly. Staff were friendly and professional.",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex justify-center mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

export default function TestimonialsScroller() {
  return (
    <div className="bg-gray-100 mb-3 py-6 overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-4">
        What Our Patients Say
      </h2>
      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="min-w-[280px] max-w-[300px] bg-white shadow-md rounded-xl p-4 flex-shrink-0"
            >
              <StarRating count={t.rating} />
              <p className="text-sm italic mb-3">“{t.quote}”</p>
              <p className="font-semibold text-blue-700">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
