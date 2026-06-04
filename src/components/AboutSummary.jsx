import { Link } from "react-router-dom";
import doctorImage from "../assets/images/dr-light.png";

export default function AboutSummary() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-4">
      {/* Doctor Image */}
      <div className="flex-shrink-0">
        <img
          src={doctorImage}
          alt="Dr. Light"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-xl ring-4 ring-blue-100"
          loading="lazy"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-2xl font-bold md:text-3xl text-gray-900">
          WELCOME MESSAGE FROM THE PRESIDENT & CEO
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Welcome to <strong>Sight Givers Eye Clinic</strong>, your trusted
          eye care center, committed to{" "}
          <strong>giving sight to save lives</strong>. Our eyes are the light
          to our body, and without them, our body will be full of darkness.
          For this reason, Sight Givers Eye Clinic is the{" "}
          <strong>#1 eye clinic in the heart of Ghana</strong> with branches
          in Ho, Volta Region, Accra, and still counting. We are dedicated
          to <strong>eradicating blindness and enhancing your vision</strong>.
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Our knowledgeable staff are friendly and competent in all aspects of
          eye care. Our finest eye doctors are{" "}
          <strong>American and Ghanaian trained</strong>, ready to serve you.
          We have exotic and stylish designer frames that will make you{" "}
          <strong>look good to feel good</strong>. Our staff will provide you
          with the <strong>best customer service guaranteed</strong>.
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Please stop by to receive the fresh, breathtaking experience from
          Sight Givers. <strong>See you there!</strong>
        </p>

        <Link
          to="/about"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
