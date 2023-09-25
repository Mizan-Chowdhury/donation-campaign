import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-5 lg:px-32" >
        <div>
          <img className="w-52" src="/public/image/Logo.png" alt="" />
        </div>
        <div className="space-x-10">
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
      </div>
    </div>
  );
};

export default Navbar;