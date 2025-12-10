  import React, { useState } from "react";
  import axios from "axios";
 import { toast } from "react-hot-toast";
  import { useNavigate } from "react-router-dom";

  import logo from "../assets/logo.png";
  import google from "../assets/google.png";

  const Signup = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const backendURL =
      import.meta.env.MODE === "production"
        ? import.meta.env.VITE_BACKEND_URL_PROD
        : import.meta.env.VITE_BACKEND_URL_DEV;

    const handleSignup = async (e) => {
      e.preventDefault();
      console.log("Signup attempt →", { name, phone });

      if (!name.trim()) {
        console.log("Name missing");
        toast.error("Please enter your full name");
        return;
      }

      if (!phone.trim()) {
        console.log("Phone missing");
        toast.error("Please enter your phone number");
        return;
      }

      if (phone.length !== 10) {
        console.log("Invalid phone length:", phone);
        toast.error("Phone number must be 10 digits");
        return;
      }

      try {
        const res = await axios.post(
          `${backendURL}/api/auth/signup`,
          { name, phone },
          { withCredentials: true }
        );

        console.log("Signup successful:", res.data.message);
        toast.success("Account created!");

        navigate("/");
      } catch (err) {
        const msg = err.response?.data?.message || "Signup failed";
        console.error("Signup failed:", msg);
        toast.error(msg);
      }
    };

    const handleGoogleSignup = () => {
      console.log("Redirecting to Google signup…");
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
            <div className="bg-white border rounded-full px-4 py-3 shadow-sm mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full outline-none text-gray-700"
              />
            </div>

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
              By signing up, you agree to the{" "}
              <span className="text-green-700">Terms</span> &{" "}
              <span className="text-green-700">Privacy Policy</span>.
            </p>

            <button
              type="submit"
              className="w-full bg-green-800 text-white py-3 rounded-full font-medium tracking-wide hover:bg-green-900 transition mb-3"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="flex items-center mb-3">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <button
              onClick={() => navigate("/login")}
              className="ml-1 text-green-800 font-medium text-sm"
            >
              Login
            </button>
          </div>

          <div className="flex items-center w-full my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-xs text-gray-500 mx-3">Or</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center bg-white border rounded-full shadow-sm w-12 h-12 mb-4"
          >
            <img src={google} className="w-6 h-6" alt="Google Icon" />
          </button>

          <p className="text-xs text-gray-500">
            Need help? <span className="text-green-700">Contact Support</span>
          </p>
        </div>
      </div>
    );
  };

  export default Signup;
