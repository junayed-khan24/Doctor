import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import img from "../src/assets/img2.png"

const FutureHealth = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-4 md:pt-20">
      <div className="max-w-7xl mx-auto">

        {/* ===== Top Content ===== */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Text */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
              The Future <br />
              of <span className="text-primary">Quality Health</span>
            </h2>

           <p className="text-gray-600 mb-4">
  We are committed to delivering modern and high-quality healthcare services
  that prioritize patient comfort, safety, and faster recovery. Our experienced
  medical team uses advanced technology to ensure accurate diagnosis and
  effective treatment for every individual.
</p>

<p className="text-gray-600 mb-4">
  From routine checkups to specialized care, we focus on personalized health
  solutions that meet your unique needs. Our goal is to create a trusted
  environment where patients feel supported, informed, and confident about
  their treatment journey.
</p>

<p className="text-gray-600 mb-6">
  Discover the future of healthcare with compassionate service, innovative
  methods, and a commitment to improving lives every single day.
</p>


            <button className="btn btn-link text-primary p-0">
              Learn More <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left">
            <img
              src={img}
              alt="health"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>

        {/* ===== Newsletter Card ===== */}
        <div
          data-aos="zoom-in"
          className="bg-primary text-white mt-16 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="text-center text-xl md:text-2xl font-semibold mb-6">
            Subscribe To Our Newsletter
          </h3>

          <div className="flex  gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full text-black rounded-full"
            />

            <button className="btn rounded-full bg-white text-primary hover:bg-gray-100">
              <FaArrowRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FutureHealth;
