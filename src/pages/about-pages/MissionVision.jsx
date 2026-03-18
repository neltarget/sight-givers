import React from "react";
import missionVisionImage from "../../assets/images/mission-vision.jpg";
import coreValuesImage from "../../assets/images/core-values.jpg"; 

export default function MissionVision() {
  return (
    <section className="bg-white py-4 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center">
          Mission & Vision
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Sight Givers' vision is to provide an unparalleled experience as
              the most trusted eye clinic and become a one-stop eye hospital. We
              instill hope and possibility in people with blindness to help them
              find a cure through integrated clinical practice, education, and
              research.
            </p>
            <img
              src={missionVisionImage}
              alt="Clinic Vision"
              className="w-full h-64 md:h-full rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to prevent loss of sight and visual impairment
              through education and delivering comprehensive eye care
              examinations to help people worldwide receive quality service and
              save their sight from going blind.
            </p>
            <img
              src={coreValuesImage}
              alt="Clinic Mission"
              className="w-full h-64 md:h-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
