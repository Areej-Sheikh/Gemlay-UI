import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import google from "../assets/google.png";

const Login = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const backendURL =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_BACKEND_URL_PROD
      : import.meta.env.VITE_BACKEND_URL_DEV;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!phone.trim()) return toast.error("Please enter your phone number");
    if (phone.length !== 10)
      return toast.error("Phone number must be 10 digits");

    try {
      const res = await axios.post(
        `${backendURL}/api/auth/login`,
        { phone },
        { withCredentials: true }
      );
      console.log(res);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      toast.error(msg);
    }
  };

  const handleGoogleLogin = () => {
    window.open(`${backendURL}/api/auth/google`, "_self");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-10">
      <div className="w-full max-w-md flex flex-col items-center border rounded-2xl bg-[#F8F8F8] p-8">
        <img src={logo} className="w-24 mb-4" alt="Gemlay Logo" />
        <h2 className="text-sm text-gray-600 mb-6 tracking-wide">
          LOGIN / SIGN UP
        </h2>

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

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-3 rounded-full font-medium tracking-wide hover:bg-green-900 transition mb-3"
          >
            GET OTP
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center bg-white border rounded-full shadow-sm w-12 h-12 mb-4"
        >
          <img src={google} className="w-6 h-6" alt="Google Icon" />
        </button>
      </div>
    </div>
  );
};

export default Login;
