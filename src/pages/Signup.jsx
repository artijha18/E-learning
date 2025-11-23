import React from "react";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Sign Up 📝
        </h1>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
          >
            Create Account
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
