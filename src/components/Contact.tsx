import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface ContactProps {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  showMap?: boolean;
  mapEmbedUrl?: string;
}

const Contact: React.FC<ContactProps> = ({ linkedin, github, twitter }) => {
  return (
    <div id="contact" className="  py-12 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Get in Touch
        </h2>

        {/* Contact Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 text-2xl hover:text-indigo-900 transition"
            >
              <FaLinkedin />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:text-black transition"
            >
              <FaGithub />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-2xl hover:text-blue-700 transition"
            >
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
