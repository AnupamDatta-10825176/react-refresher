import { Link, NavLink } from "react-router-dom";

import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="website logo" className="w-36" />
      </Link>

      <ul className="flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 bg-auto">
        <img
          src={assets.search}
          alt="search-icon"
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <img
            src={assets.user}
            alt="user-icon"
            className="w-5 cursor-pointer"
          />

          <div className=" group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-b-xl">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <Link to="/orders" className="cursor-pointer hover:text-black">
                Orders
              </Link>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart} alt="cart-icon" className="w-5 min-w-5" />
          <p className="absolute right-[-7px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-xs">
            10
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
