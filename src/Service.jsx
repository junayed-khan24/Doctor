import React from "react";
import {
  FaVirus,
  FaHeartbeat,
  FaCapsules,
  FaBrain,
  FaCheckCircle,
} from "react-icons/fa";



const Service = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* ================= Title ================= */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Consulting Specialists
        </h2>

   
      {/* ================= Top Section ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Service Item */}
          <div>
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:bg-primary hover:text-white transition duration-300 border border-gray-200">
              <FaVirus className=" p-2 rounded-full text-primary bg-secondary text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Infectious Diseases</h3>
              <p className="">
                Expert care for infectious diseases, ensuring accurate diagnosis and effective treatment.
              </p>
            </div>
          </div>
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
