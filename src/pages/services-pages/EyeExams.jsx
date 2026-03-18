import eyeExamsImage from "../../assets/images/eye-exams.jpg";
export default function EyeExams() {
  return (
    <section className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      {/* Text */}
      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Eye Exams</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Regular eye exams are essential for early detection of eye conditions
          and vision problems. Our clinic uses modern diagnostic tools to assess
          your eyesight, detect diseases early, and provide timely treatment.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Comprehensive vision tests</li>
          <li>Screening for glaucoma, cataracts, and other eye diseases</li>
          <li>Prescription updates for glasses and contact lenses</li>
          <li>Personalized eye health advice</li>
        </ul>
      </div>

      {/* Image */}
      <div>
        <img
          src={eyeExamsImage}
          alt="Eye exams"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>
    </section>
  );
}
