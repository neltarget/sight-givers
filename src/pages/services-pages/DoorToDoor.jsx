export default function DoorToDoor() {
  return (
    <section className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      {/* Image */}
      <div>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Door-to-door services"
          className="rounded-xl shadow-md w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Door-to-Door Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We understand that some patients may face challenges visiting our
          clinic. That’s why we provide convenient door-to-door services to
          ensure everyone gets the care they deserve.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Services for people with disabilities</li>
          <li>Care for elderly patients who cannot travel</li>
          <li>Support for patients living far from the clinic</li>
          <li>Personalized at-home eye checkups</li>
        </ul>
      </div>
    </section>
  );
}
