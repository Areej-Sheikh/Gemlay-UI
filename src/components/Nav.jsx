import logo from "../assets/logo.png";
import navItems from "../assets/navItems.png";
import profile from "../assets/profile.png";

const Nav = () => {
  return (
    <div>
      <div className="bg-[#009278] w-screen h-4.5 flex items-center justify-center">
        <p className="text-[13px] text-white font-light">
          Refer And Earn Extra <strong>Discount. </strong>
          <a href="" className="text-[#531cc6]">
            Click Here
          </a>
        </p>
      </div>
      <div className="w-screen flex items-center justify-between drop-shadow-xl h-25 bg-[#FAFEFD] px-4">
        <img src={logo} alt="Logo" className="w-45.5" />

        <div class="relative ">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-body"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            class="block w-md p-3 ps-9  border border-default-medium text-heading text-sm  rounded-4xl  focus:border-brand shadow-xs placeholder:text-body"
            placeholder="Search"
            required
          />
        </div>
        <img src={navItems} className="h-20.5" alt="navItems" />
        <div className="  w-50 h-15 flex-row items-center justify-center">
          <div className="flex items-center p-2">
            <img src={profile} alt="" className="w-10.5" />
            <div className="p-2">Username</div>
          </div>

          <div className="h-0.5 w-50 bg-[#007A64] rounded-full mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
