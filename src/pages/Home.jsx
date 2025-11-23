import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center 
    py-16 px-4 min-h-screen 
    bg-gray-50 dark:bg-gray-900 
    text-gray-800 dark:text-white transition">

      {/* Logo */}
      <img
        src="/log.png"
        alt="E-Learning Logo"
        className="w-40 h-40 rounded-full object-cover shadow-lg mb-6"
      />

      {/* Title & Description */}
      <h1 className="text-4xl font-bold">
        Welcome to Edunova 🎓
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-lg">
        Start your journey of learning with our interactive and engaging courses!
      </p>

      {/* Explore Courses Button */}
      <Link
        to="/explore"
        className="mt-8 bg-blue-600 dark:bg-blue-700 
        text-white px-8 py-3 rounded-lg shadow-md 
        hover:bg-blue-700 dark:hover:bg-blue-600 
        transition duration-300"
      >
        Explore Courses
      </Link>
    </div>
  );
}
