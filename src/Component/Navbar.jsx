import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-blue-800 text-white py-6 px-8">
      {/* Header Content */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-widest">LF Furniture</h1>

        {/* Navigation Links (Top Right Corner) */}
        <div className="flex items-center space-x-8 ml-auto">
          <Link
            to="/"
            className="text-lg font-medium hover:text-teal-100 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium hover:text-teal-100 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium hover:text-teal-100 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="text-lg font-medium hover:text-teal-100 transition duration-300 ease-in-out"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-lg font-medium hover:text-teal-100 transition duration-300 ease-in-out"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="block md:hidden rounded bg-gray-100 p-2 text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Additional Header Text (Optional) */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold">
          Explore Our Collection of Premium Furniture
        </h2>
        <p className="text-lg mt-2 text-teal-100">
          Browse through our exquisite collection of furniture that suits every
          style and home.
        </p>
      </div>
    </header>
  );
};

export default Navbar;
