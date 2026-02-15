import React from "react";
import {
  FaVirus,
  FaHeartbeat,
  FaCapsules,
  FaBrain,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Covid-19 Test",
    icon: <FaVirus />,
  },
  {
    id: 2,
    title: "Heart Lungs",
    icon: <FaHeartbeat />,
    active: true,
  },
  {
    id: 3,
    title: "Supplement",
    icon: <FaCapsules />,
  },
  {
    id: 4,
    title: "Mental Health",
    icon: <FaBrain />,
  },
];

const Service = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* ================= Title ================= */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Consulting Specialists
        </h2>

        {/* ================= Top Cards ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`
              card border rounded-2xl transition-all duration-300 cursor-pointer
              ${
                service.active
                  ? "bg-primary text-white shadow-xl"
                  : "bg-white hover:bg-primary hover:text-white"
              }
              `}
            >
              <div className="card-body items-start">
                <div
                  className={`
                  text-3xl p-4 rounded-full mb-4
                  ${
                    service.active
                      ? "bg-white text-primary"
                      : "bg-primary/10 text-primary"
                  }
                  `}
                >
                 <div className="hover:text-white">
                     {service.icon}
                 </div>
                </div>

                <h3 className="text-lg font-semibold">{service.title}</h3>

                <p className="text-sm opacity-80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                  velit viverra amet faucibus.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= Bottom Section ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
              alt="doctor"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Why You Choose Us?</h3>

            <ul className="space-y-4 mb-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary mt-1" />
                  <span className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
              ))}
            </ul>

            <button className="btn btn-primary btn-sm rounded-full">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
