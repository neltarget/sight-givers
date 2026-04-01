import { Outlet, NavLink } from "react-router-dom";

export default function Services() {
  const serviceLinks = [
    { name: "Eye Exams", path: "eye-exams" },
    { name: "DVLA Eye Test", path: "dvla-eye-test" },
    { name: "Glasses & Contact Lenses", path: "glasses-contacts" },
    { name: "Cataract Surgery & Glaucoma", path: "cataract-glaucoma" },
    { name: "Door to Door Services", path: "door-to-door" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
        Our Services
      </h1>

      <nav className="flex flex-wrap justify-center gap-4 mb-10">
        {serviceLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg shadow text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </section>
  );
}
