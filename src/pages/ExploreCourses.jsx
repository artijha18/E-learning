import React from "react";

export default function ExploreCourses() {
  const paidCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Learn MERN stack from scratch to advanced level.",
      price: "₹4999",
    },
    {
      id: 2,
      title: "Data Science Mastery",
      description: "Master Python, ML & AI with hands-on projects.",
      price: "₹5999",
    },
    {
      id: 3,
      title: "Cyber Security Essentials",
      description: "Learn ethical hacking and system protection.",
      price: "₹3999",
    },
  ];

  return (
    <div className="
      min-h-screen py-12 px-6 text-center 
      bg-gray-50 dark:bg-gray-900 
      text-gray-800 dark:text-gray-100 transition
    ">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">
        💰 Paid Courses
      </h1>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {paidCourses.map((course) => (
          <div
            key={course.id}
            className="
              bg-white dark:bg-gray-800 
              p-6 rounded-2xl shadow-md dark:shadow-lg 
              hover:shadow-xl dark:hover:shadow-gray-700 
              transition duration-300
            "
          >
            <h2 className="text-xl font-semibold mb-2 
              text-gray-800 dark:text-gray-100">
              {course.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {course.description}
            </p>

            <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">
              {course.price}
            </p>

            <button className="
              mt-4 bg-blue-600 dark:bg-blue-700 
              text-white px-6 py-2 rounded-lg 
              hover:bg-blue-700 dark:hover:bg-blue-600 
              transition duration-300
            ">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
