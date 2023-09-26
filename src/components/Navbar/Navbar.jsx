import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <div className="navbar flex lg:flex-row justify-between py-5 px-5 lg:px-32">
        <div className="flex items-center">
          <img className="w-52" src="/public/image/Logo.png" alt="" />
        </div>
        <div>
          <div className="navbar-center flex-1 hidden lg:flex space-x-10 text-lg">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Donation
            </NavLink>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </div>
          <div>
            <div className="dropdown -mr-4">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu dropdown-content p-5 shadow bg-base-100 rounded-box absolute -mb-1 -ml-28 w-40 space-y-2"
              >
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline font-bold"
                      : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/Donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline font-bold"
                      : ""
                  }
                >
                  Donation
                </NavLink>
                <NavLink
                  to="/Statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline font-bold"
                      : ""
                  }
                >
                  Statistics
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
