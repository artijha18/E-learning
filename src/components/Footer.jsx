import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="
      bg-gray-900 dark:bg-gray-950 
      text-gray-300 dark:text-gray-200 
      py-6 mt-10 transition
    ">
      <div className="container mx-auto px-4 text-center">

        {/* Website Name */}
        <h2 className="text-2xl font-semibold text-white dark:text-gray-100 mb-3">
          Edunova
        </h2>

        <p className="text-sm text-gray-400 dark:text-gray-400 mb-4">
          Learn. Build. Grow. Empower your skills with easy-to-understand courses.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition duration-300"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition duration-300"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100 transition duration-300"
          >
            <FaGithub size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Edunova. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
