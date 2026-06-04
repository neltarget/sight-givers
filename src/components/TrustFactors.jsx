import { User, ShieldCheck, Star, Stethoscope } from "lucide-react";

export default function TrustFactors() {
  const factors = [
    {
      icon: <ShieldCheck size={32} className="text-emerald-600" />,
      title: "DVLA Approved",
      desc: "Certified eye center authorized for DVLA vision testing.",
    },
    {
      icon: <Stethoscope size={32} className="text-emerald-600" />,
      title: "Certified Specialist",
      desc: "Experienced ophthalmologist you can trust.",
    },
    {
      icon: <Star size={32} className="text-emerald-600" />,
      title: "Highly Rated",
      desc: "Hundreds of satisfied patients with 5-star reviews.",
    },
    {
      icon: <User size={32} className="text-emerald-600" />,
      title: "Personalized Care",
      desc: "Tailored treatment plans for each patient.",
    },
  ];

  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold md:text-3xl mb-4">
        Why patients trust Sight Givers
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {factors.map((f, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm p-6 text-center"
          >
            <div className="mb-3 flex justify-center">{f.icon}</div>
            <h3 className="font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
