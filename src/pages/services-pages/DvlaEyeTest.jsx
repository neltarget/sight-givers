export default function DvlaEyeTest() {
  return (
    <section className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">DVLA Eye Test</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We provide certified DVLA eye examinations for drivers and applicants
          who need vision clearance for driver’s license processing, renewal, or
          other official requirements. Our team ensures a smooth, professional,
          and accurate assessment of your visual fitness for the road.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Certified vision screening for DVLA requirements</li>
          <li>Assessment of visual acuity and clarity</li>
          <li>Professional guidance on meeting licensing standards</li>
          <li>Fast and convenient service for new and renewing drivers</li>
        </ul>
      </div>

      <div>
        <img
          src="https://via.placeholder.com/600x400"
          alt="DVLA eye test service"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>
    </section>
  );
}
