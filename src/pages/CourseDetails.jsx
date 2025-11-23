import { useParams } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import { useState } from "react";

export default function CourseDetails() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === parseInt(id));
  const [showNotes, setShowNotes] = useState(false);

  if (!course)
    return (
      <h2 className="text-center text-red-500 dark:text-red-400 text-xl">
        Course not found 😢
      </h2>
    );

  return (
    <div className="min-h-screen 
    bg-gray-100 dark:bg-gray-900 
    text-gray-800 dark:text-gray-100 
    flex flex-col items-center py-10 px-5 transition">

      {/* Course Title */}
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl text-center">
        {course.description}
      </p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">

        {/* Left side: Video */}
        <div className="flex-1">
          <iframe
            className="w-full h-64 sm:h-96 rounded-xl shadow-md"
            src={course.videoUrl}
            title={course.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right side: Notes Section */}
        <div className="
          md:w-1/3 
          bg-white dark:bg-gray-800 
          shadow-lg dark:shadow-gray-700 
          rounded-xl p-5 transition
        ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              📘 Notes
            </h2>

            <button
              onClick={() => setShowNotes(!showNotes)}
              className="bg-blue-600 dark:bg-blue-700 
              text-white px-3 py-1 rounded-md text-sm 
              hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              {showNotes ? "Hide" : "Show"}
            </button>
          </div>

          {showNotes && (
            <ul className="space-y-3">
              {course.notes.map((note) => (
                <li
                  key={note.id}
                  className="
                    border border-gray-300 dark:border-gray-600 
                    p-3 rounded-md 
                    bg-gray-50 dark:bg-gray-700 
                    hover:bg-gray-100 dark:hover:bg-gray-600 
                    transition
                  "
                >
                  <h3 className="font-medium text-gray-700 dark:text-gray-200">
                    {note.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {note.content}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
