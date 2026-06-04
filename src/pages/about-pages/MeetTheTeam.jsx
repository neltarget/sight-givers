import React from "react";
import doctor1 from '../../assets/images/doctors/doctor1.png'
import doctor2 from '../../assets/images/doctors/doctor2.png'
import doctor3 from '../../assets/images/doctors/doctor3.png'
// import doctor4 from '../../assets/images/doctors/doctor4.png'
// Placeholder team data
const teamMembers = [
  {
    name: "Dr. Light Amedzekor",
    role: "Ophthalmologist & Founder",
    image: doctor1,
    bio: "Board-certified ophthalmologist with over 10 years of experience, specializing in advanced eye care and surgery.",
  },
  {
    name: "Dr. Ama Mensah",
    role: "Optometrist",
    image: doctor2,
    bio: "Expert in eye exams and vision correction, ensuring patients receive personalized care.",
  },
  {
    name: "Nana Yeboah",
    role: "Optician",
    image: doctor3,
    bio: "Provides stylish and precise eyewear fittings to enhance both vision and style.",
  },
  // Add more members as needed
];

export default function MeetTheTeam() {
  return (
    <section className="bg-gray-50 py-2 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-8">
          Meet the Team
        </h1>

        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-102 transition-transform"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover mb-4"
                loading="lazy"
              />
              <h2 className="text-xl font-semibold text-blue-600">
                {member.name}
              </h2>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
