import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 px-4">
      
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center max-w-lg w-full border border-white/20">
        
        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold mb-4 drop-shadow-lg text-black">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2 text-black">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-black mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link to="/">
            <button className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-gray-100 transition">
              Go Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 border border-white text-black rounded-full hover:bg-white hover:text-indigo-600 transition"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;