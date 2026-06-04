import React from "react";
import doctorImage from "../../assets/images/dr-light.png";
import { Stethoscope, Building2, BookOpen, Glasses } from "lucide-react";

export default function ClinicHistory() {
  return (
    <section className="bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Doctor Image and Highlights */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <img
            src={doctorImage}
            alt="Dr. Light - Sight Givers Eye Clinic"
            className="rounded-2xl shadow-lg w-80 h-80 object-cover mx-auto"
            loading="lazy"
          />

          {/* Doctor Highlights */}
          <ul className="space-y-3 text-gray-700 w-full">
            <li className="flex items-center gap-2">
              <Stethoscope className="text-blue-600" size={20} />
              <span>
                <strong>Specialty:</strong> Ophthalmologist & Optometry
                (American-trained)
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Building2 className="text-blue-600" size={20} />
              <span>
                <strong>Experience:</strong> Over 10 years in vision care
              </span>
            </li>
            <li className="flex items-center gap-2">
              <BookOpen className="text-blue-600" size={20} />
              <span>
                <strong>Approach:</strong> Patient-centered, professional, and
                compassionate
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Glasses className="text-blue-600" size={20} />
              <span>
                <strong>Services:</strong> Eye exams, surgery, prescriptions,
                glasses, contact lenses
              </span>
            </li>
          </ul>
        </div>

        {/* Clinic History Content */}
        <div className="text-gray-700 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Clinic History
          </h1>

          <p>
            At Sight Givers Eye Clinic we believe that healthy vision is key to
            a vibrant life. Our team of experienced ophthalmologists and
            optometrist are dedicated to providing comprehensive eye care using
            the latest diagnostic technology and treatment methods. Whether
            you’re here for a routine eye exam or a complex surgical procedure,
            you’re in safe hands.
          </p>

          <p>
            With over 10 years of quality experience in vision care of
            responding to patients’ demands and putting them first, Sight Givers
            pioneered a new philosophy in the eye care and eyewear industry. The
            vision of Sight Givers Eye Clinic was founded on three core
            principals: everyone who needed to wear prescription glasses or
            sunglasses should look flawless, spend less and receive an
            impeccable service.
          </p>

          <p>
            Sight Givers Eye Clinic provides services such as comprehensive eye
            examination, fitting of contact lenses, fixing of broken frames,
            door-to-door services to patients in the comfort of their homes with
            the lone intension of delivering exceptional and outstanding
            customer service.
          </p>

          <p>
            Dr. Light Amedzekor, born and raised in the United States of
            America, founded Sight Givers in 2015 while still completing his
            education to become an eye doctor due to the fact that his mother
            Victoria Amedzekor lost her left eye and suffered from glaucoma eye
            disease in the right eye before passing away. The company was
            providing door to door service at the comfort of patient’s home and
            quickly grew to a storefront in New York and now have several
            clinics in Ghana with the intention of saving blindness in
            impoverished communities.
          </p>
        </div>
      </div>
    </section>
  );
}
