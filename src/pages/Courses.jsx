import React, { useState } from "react";
import { Link } from "react-router-dom";
import { coursesData } from "../data/coursesData";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleFeedbackSubmit = () => {
    alert(`Thanks for your feedback on ${selectedCourse.title} 💬`);
    setFeedback("");
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen py-12 px-6 
    bg-gray-50 dark:bg-gray-900 
    text-gray-800 dark:text-gray-200 transition">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-6">
        📚 Available Free Courses
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Learn new skills with our free, beginner-friendly courses.  
        Rate your favorite course and help others choose wisely!
      </p>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="
            bg-white dark:bg-gray-800 
            rounded-2xl shadow-md hover:shadow-xl 
            transform hover:-translate-y-1 
            transition duration-300 p-5 text-gray-900 dark:text-gray-100"
          >
            {/* Thumbnail */}
            <img
              src={course.thumbnail || "/default-course.jpg"}
              alt={course.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Title */}
            <h2 className="text-xl font-semibold mb-1">
              {course.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {course.description}
            </p>

            {/* Ratings and Students */}
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
              <p>⭐ {course.rating || "4.8"} / 5</p>
              <p>👩‍🎓 {course.students || "1.2k"} students</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <Link
                to={`/courses/${course.id}`}
                className="bg-blue-600 dark:bg-blue-700 
                text-white px-4 py-2 rounded-lg 
                hover:bg-blue-700 dark:hover:bg-blue-600 transition"
              >
                View Details
              </Link>

              <button
                onClick={() => setSelectedCourse(course)}
                className="bg-yellow-500 text-white 
                px-4 py-2 rounded-lg 
                hover:bg-yellow-600 transition"
              >
                Feedback
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 flex items-center justify-center 
        bg-black bg-opacity-50 backdrop-blur-sm">

          <div className="bg-white dark:bg-gray-800 
          p-6 rounded-xl shadow-lg w-96 
          text-center text-gray-800 dark:text-gray-100">

            <h2 className="text-xl font-semibold mb-2">
              Feedback for {selectedCourse.title}
            </h2>

            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 
              bg-gray-50 dark:bg-gray-700 
              rounded-lg p-2 mt-2 focus:ring focus:ring-blue-300"
              rows="4"
              placeholder="Write your feedback..."
            ></textarea>

            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={handleFeedbackSubmit}
                className="bg-blue-600 dark:bg-blue-700 
                text-white px-4 py-2 rounded-lg 
                hover:bg-blue-700 dark:hover:bg-blue-600 transition"
              >
                Submit
              </button>

              <button
                onClick={() => setSelectedCourse(null)}
                className="bg-gray-400 dark:bg-gray-600 
                text-white px-4 py-2 rounded-lg 
                hover:bg-gray-500 dark:hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
