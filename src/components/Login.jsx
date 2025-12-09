import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import google from "../assets/google.png";

const Login = () => {
  const [phone, setPhone] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Attempting login with phone:", phone);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { phone },
        { withCredentials: true }
      );

      console.log("Login successful:", res.data.message);
      window.location.href = "/";
    } catch (err) {
      console.error(
        "Login failed:",
        err.response?.data?.message || err.message
      );
    }
  };

  const handleGoogleLogin = () => {
    console.log("Redirecting to Google login…");
    window.open("http://localhost:5000/api/auth/google", "_self");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-10">
      <div className="w-full max-w-md flex flex-col items-center border rounded-2xl bg-[#F8F8F8] p-8">
        {/* Logo */}
        <img src={logo} className="w-24 mb-4" alt="Gemlay Logo" />
        <h2 className="text-sm text-gray-600 mb-6 tracking-wide">
          LOGIN / SIGN UP
        </h2>

        {/* Phone Login */}
        <form onSubmit={handleLogin} className="w-full">
          <div className="flex items-center bg-white border rounded-full px-4 py-3 shadow-sm mb-4">
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="India Flag"
              className="w-5 h-5 mr-3 rounded-sm"
            />
            <input
              type="text"
              placeholder="+91"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full outline-none text-gray-700"
            />
          </div>

          <p className="text-xs text-gray-500 text-center mb-4 w-64 leading-relaxed mx-auto">
            By continuing, I agree to the{" "}
            <span className="text-green-700">Terms of Use</span> &
            <span className="text-green-700"> Privacy Policy</span>.
          </p>

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-3 rounded-full font-medium tracking-wide hover:bg-green-900 transition mb-3"
          >
            GET OTP
          </button>
        </form>

        {/* Signup */}
        <div className="flex items-center mb-3">
          <p className="text-sm text-gray-600">Do not have an account?</p>
          <button
            className="ml-1 text-green-800 font-medium text-sm"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign up
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center w-full my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="text-xs text-gray-500 mx-3">Or</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center bg-white border rounded-full shadow-sm w-12 h-12 mb-4"
        >
          <img src={google} className="w-6 h-6" alt="Google Icon" />
        </button>

        {/* Help */}
        <p className="text-xs text-gray-500">
          Having trouble logging in?{" "}
          <span className="text-green-700">Get Help</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
