import { useContext } from "react";
import { AuthContext } from "../context/authContext";

import logo from "../assets/logo.png";
import nav1 from "../assets/nav1.png";
import nav2 from "../assets/nav2.png";
import nav3 from "../assets/nav3.png";
import nav4 from "../assets/nav4.png";
import nav5 from "../assets/nav5.png";
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
        <div className="flex items-center justify-center w-[40%]">
          {[
            { img: nav1, label: "GSP" },
            { img: nav2, label: "OFFERS" },
            { img: nav3, label: "WISHLIST" },
            { img: nav4, label: "CART" },
            { img: nav5, label: "VERIFY" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center text-center 
             cursor-pointer hover:scale-105 transition w-16 
             border-r border-gray-200 last:border-r-0"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-10 h-10 object-contain"
              />
              <span className="text-[10px] mt-1">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3 items-center min-[769px]:hidden">
          <i className="ri-heart-3-line text-2xl"></i>
          <i className="ri-shopping-cart-line text-2xl"></i>
          <i className="ri-search-2-line text-2xl"></i>
        </div>

        <div className="max-[769px]:hidden">
          {!user ? (
            <div className="flex items-center gap-4 text-sm mr-4">
              <button
                onClick={() => (window.location.href = "/login")}
                className="px-4 py-2 rounded-lg border  bg-green-700 border-green-700 text-white hover:bg-green-600 transition shadow-sm"
              >
                Login
              </button>

              <button
                onClick={() => (window.location.href = "/signup")}
                className="px-4 py-2 rounded-lg bg-green-700 text-white font-medium hover:bg-green-600 transition shadow-sm"
              >
                Signup
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 mr-3">
              <img src={profile} alt="" className="w-10 rounded-full" />

              <div className="flex flex-col">
                <div className="text-md max-w-[120px] overflow-hidden whitespace-nowrap text-ellipsis">
                  {user.name}
                </div>

                <div className="h-1 bg-[#007A64] rounded-full w-full mt-1"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
