export default function CataractGlaucoma() {
  return (
    <section className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      {/* Text */}
      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Cataract Surgery & Glaucoma
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We provide safe and effective cataract removal procedures using
          premium lens options, as well as comprehensive management for glaucoma
          to preserve your vision.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Advanced cataract surgery with minimal recovery time</li>
          <li>Premium intraocular lens implants</li>
          <li>Comprehensive glaucoma screening and treatment</li>
          <li>Ongoing follow-up care to protect your vision</li>
        </ul>
      </div>

      {/* Image */}
      <div>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Cataract and glaucoma treatment"
          className="rounded-xl shadow-md w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}
