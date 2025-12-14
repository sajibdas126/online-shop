import React, { useState } from "react";
import api from "../confige/api";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("Start loginnnnsns");

  const handleLogin = async (e) => {
    console.log("Start loginnnnsns");
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter username or password");
    }
    try {
      const response = await api.post("/auth/login", { email, password });
      console.log(response?.data);
      alert("Logged in");
    } catch (error) {
      console.log(error);
      alert("Failed to Login");
    } finally {
      return false;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form className="space-y-5" onSubmit={(e) => handleLogin(e)}>
          {/* Email Field */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            onClick={() => handleLogin()}
            className="w-full bg-blue-600 text-white py-3 rounded-xl mt-4 hover:bg-blue-700 transition font-semibold"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-5">
          Don't have an account?
          <a
            href="#"
            className="text-blue-600 font-medium ml-1 hover:underline"
          >
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
