import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../src/assets/pngtree-photo-men-doctor-physici.png"

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ===== Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

          {/* ========= Left Content ========= */}
          <div data-aos="fade-right">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              We Will Help <br />
              You To Improve <br />
              Your Mental Health
            </h1>

            <p className="text-gray-600 mb-8 max-w-lg">
              Our experienced doctors and specialists provide professional care,
              guidance, and treatment to support your mental well-being and help
              you live a happier, healthier life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-success text-white">
                Get Appointment
              </button>

              <button className="btn btn-outline btn-success">
                Find Specialist
              </button>
            </div>
          </div>

          {/* ========= Right Image ========= */}
          <div
            data-aos="fade-left"
            className="flex justify-center lg:justify-end"
          >
            <img
              src={img}   /* use your image path */
              alt="doctor"
              className="w-[260px] md:w-[380px] lg:w-[800px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
