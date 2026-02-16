import React from "react";
import { BsLungs } from "react-icons/bs";
import {
  FaVirus,
  FaHeartbeat,
  FaCapsules,
  FaBrain,
  FaCheckCircle,
} from "react-icons/fa";
import { FaVirusCovid } from "react-icons/fa6";
import { RiMentalHealthLine } from "react-icons/ri";



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
              <FaVirusCovid className=" p-3 rounded-full text-primary bg-secondary text-6xl  mb-4 mt-2" />
              <h3 className="text-xl font-semibold mb-2">Covid-19 Test</h3>
              <p className="text-xs font-medium">
                Covid-19 testing helps detect infection early and prevents the spread of coronavirus worldwide.
              </p>
            </div>
          </div>

            <div>
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:bg-primary hover:text-white transition duration-300 border border-gray-200">
              <BsLungs className=" p-3 rounded-full text-primary bg-secondary text-6xl  mb-4 mt-2" />
              <h3 className="text-xl font-semibold mb-2">Lung Health</h3>
              <p className="text-xs font-medium">
                Comprehensive lung health  assessments to  detect and  monitor respiratory conditions conditions.
              </p>
            </div>
          </div>  
          
          <div>
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:bg-primary hover:text-white transition duration-300 border border-gray-200">
              <FaCapsules className=" p-3 rounded-full text-primary bg-secondary text-6xl  mb-4 mt-2" />
              <h3 className="text-xl font-semibold mb-2">Suppliment</h3>
              <p className="text-xs font-medium">
                Dietary supplements provide essential vitamins and minerals to support overall health and immunity.
              </p>
            </div>
          </div> 
          
           <div>
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:bg-primary hover:text-white transition duration-300 border border-gray-200">
              <RiMentalHealthLine className=" p-3 rounded-full text-primary bg-secondary text-6xl  mb-4 mt-2" />
              <h3 className="text-xl font-semibold mb-2">Mental Health</h3>
              <p className="text-xs font-medium">
                Comprehensive mental health assessments to detect and monitor psychological conditions.
              </p>
            </div>
          </div>
        </div>

        {/* ================= Bottom Section ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10 md:mt-36 sm:mt-20">
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
