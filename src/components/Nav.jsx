import { useContext } from "react";
import { AuthContext } from "../context/authContext";

import logo from "../assets/logo.png";
import navItems from "../assets/navItems.png";
import profile from "../assets/profile.png";

const Nav = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {/* Announcement Bar */}
      <div className="bg-[#009278] w-screen h-5 flex items-center justify-center max-[1024px]:flex min-[770px]:hidden">
        <p className="text-[13px] text-white font-light">
          Refer And Earn Extra <strong>Discount.</strong>{" "}
          <a href="#" className="text-[#531cc6]">
            Click Here
          </a>
        </p>
      </div>

      {/* Main Nav */}
      <div className="w-screen flex items-center justify-between drop-shadow-xl h-20 bg-[#FAFEFD] px-4">
        {/* Mobile Hamburger */}
        <button className="min-[770px]:hidden">
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <img src={logo} alt="Logo" className="w-40" />

        {/* Search Bar (Desktop Only) */}
        <div className="relative min-[770px]:block max-[769px]:hidden">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-md p-3 pl-9 border border-gray-300 text-sm rounded-3xl focus:border-brand shadow-sm placeholder:text-gray-500"
            placeholder="Search"
          />
        </div>

        {/* Nav Items (Desktop) */}
        <img
          src={navItems}
          className="h-20 min-[770px]:block max-[769px]:hidden"
          alt="navItems"
        />

        {/* Mobile Icons */}
        <div className="flex gap-3 items-center min-[769px]:hidden">
          <i className="ri-heart-3-line text-2xl"></i>
          <i className="ri-shopping-cart-line text-2xl"></i>
          <i className="ri-search-2-line text-2xl"></i>
        </div>

        {/* ⭐ Dynamic Login/Signup OR Username */}
        <div className="max-[769px]:hidden">
          {!user ? (
            /* User NOT logged in */
            <div className="flex items-center gap-4 text-sm">
              <button
                onClick={() => (window.location.href = "/login")}
                className="text-green-800 font-medium"
              >
                Login
              </button>

              <span className="text-gray-400">|</span>

              <button
                onClick={() => (window.location.href = "/signup")}
                className="text-green-800 font-medium"
              >
                Signup
              </button>
            </div>
          ) : (
            /* User Logged in */
            <div className="flex items-center gap-2">
              <img src={profile} alt="" className="w-10" />
              <div className="text-sm">{user.name}</div>

              <div className="h-1 w-full bg-[#007A64] rounded-full mt-1"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
