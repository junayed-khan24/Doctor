import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="navbar bg-secondary/90 backdrop-blur sticky top-0 z-50 px-6 lg:px-20"
    >
      {/* ===== Left Logo ===== */}
      <div className="navbar-start">
        <a className="text-2xl font-bold text-primary">oxcare</a>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div className="navbar-center lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52 text-gray-700"
          >
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Doctors</a></li>
            <li><a>Services</a></li>
            <li><a>Contact</a></li>
            <li className="mt-2"><button className="btn btn-success btn-sm text-white">Signup</button></li>
          </ul>
        </div>
      </div>

      {/* ===== Desktop Menu ===== */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-gray-700 font-medium">
          <li><a className="hover:text-success">Home</a></li>
          <li><a className="hover:text-success">About</a></li>
          <li><a className="hover:text-success">Doctors</a></li>
          <li><a className="hover:text-success">Services</a></li>
          <li><a className="hover:text-success">Contact</a></li>
        </ul>
      </div>

      {/* ===== Right Buttons ===== */}
      <div className="navbar-end gap-3 hidden lg:flex">
        <button className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white rounded-full">Login</button>
        <button className="btn btn-primary rounded-full text-white">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
