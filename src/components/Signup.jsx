import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import { AuthContext } from "../context/context";

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const { fetchUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const backendURL =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_BACKEND_URL_PROD
      : import.meta.env.VITE_BACKEND_URL_DEV;

  // ------------------------ HANDLE SIGNUP ------------------------
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name.trim()) return toast.error("Please enter your full name");
    if (!phone.trim()) return toast.error("Please enter your phone number");

    if (phone.length !== 10 || !/^\d+$/.test(phone))
      return toast.error("Phone number must be a valid 10-digit number");

    try {
      await axios.post(
        `${backendURL}/api/auth/signup`,
        {
          name,
          phone: "+91" + phone,
        },
        { withCredentials: true }
      );

      toast.success("Signup successful!");

      await fetchUser();

      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  const handleGoogleSignup = () => {
    window.open(`${backendURL}/api/auth/google`, "_self");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-10">
      <div className="w-full max-w-md flex flex-col items-center border rounded-2xl bg-[#F8F8F8] p-8">
        <img src={logo} className="w-24 mb-4" alt="Gemlay Logo" />
        <h2 className="text-sm text-gray-600 mb-6 tracking-wide">
          CREATE ACCOUNT
        </h2>

        <form onSubmit={handleSignup} className="w-full">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-full border outline-none"
          />

          <div className="flex w-full mb-4">
            <span className="px-4 py-3 bg-gray-200 rounded-l-full border border-r-0 text-gray-700">
              +91
            </span>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              maxLength={10}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="w-full px-4 py-3 rounded-r-full border outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-3 rounded-full font-medium hover:bg-green-900 transition"
          >
            CREATE ACCOUNT
          </button>
        </form>

        <button
          onClick={handleGoogleSignup}
          className="flex items-center justify-center bg-white border rounded-full shadow-sm w-12 h-12 mt-4"
        >
          <img src={google} className="w-6 h-6" alt="Google Icon" />
        </button>
      </div>
    </div>
  );
};

export default Signup;
