import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const Review = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-slate-200 py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center py-12">

        {/* ========= Left Content ========= */}
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-primary">Our Member’s</span>
            <br /> Saying About Us
          </h2>

          <p className="text-gray-600 mb-6">
            We value every patient’s feedback. Our members share their
            experiences about our trusted care, professional doctors, and
            friendly service that make healthcare easier and more comfortable.
          </p>

          {/* Avatar Group */}
          <div className="flex items-center gap-4">
            <div className="avatar-group -space-x-4">
              <div className="avatar">
                <div className="w-10">
                  <img src="https://i.pravatar.cc/100?img=1" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10">
                  <img src="https://i.pravatar.cc/100?img=2" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10">
                  <img src="https://i.pravatar.cc/100?img=3" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-primary text-white w-10 text-xs rounded-full">
                  100+
                </div>
              </div>
            </div>

            <span className="text-sm text-gray-600 font-medium">
              100+ Reviews
            </span>
          </div>
        </div>

        {/* ========= Right Card ========= */}
        <div data-aos="fade-left">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">

            {/* Top Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/100?img=5"
                  alt="user"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Jane Cooper</h4>
                  <p className="text-xs text-gray-500">12/4/17</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-yellow-400 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 leading-relaxed">
              The medical service was excellent and very professional. The staff
              was friendly, and the doctors explained everything clearly. I felt
              comfortable and well cared for throughout my visit. Highly
              recommended healthcare center.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Review;
