import React from "react";

const Auth = () => {
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl mt-4 hover:bg-blue-700 transition font-semibold">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-5">
          Don't have an account?
          <a href="#" className="text-blue-600 font-medium ml-1 hover:underline">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
