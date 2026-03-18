import glassesContact from "../../assets/images/glasses-contacts.png";
export default function GlassesContacts() {
  return (
    <section className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      {/* Image */}
      <div>
        <img
          src={glassesContact}
          alt="Glasses and contact lenses"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>

      {/* Text */}
      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Glasses & Contact Lenses
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We offer a wide range of high-quality frames, lenses, and contact
          lenses to suit your lifestyle, vision needs, and budget. Our team will
          guide you in choosing the best fit.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Fashionable frames for all ages</li>
          <li>Prescription and non-prescription lenses</li>
          <li>Soft and hard contact lenses</li>
          <li>Expert fitting and adjustments</li>
        </ul>
      </div>
    </section>
  );
}
