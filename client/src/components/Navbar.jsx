import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { DropdownProfile } from "./DropdownProfile";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [openProfile, setOpenProfile] = useState(false);
  const handleClick = () => {
    if (!user) {
      navigate("/login");
    }
    else {
      setOpenProfile((prev)=> !prev);
    }
  }
  return (
    <nav className="mx-56 my-2 text-xl flex justify-between items-center">
      <NavLink to="/" className="-mr-14">
        <img src={logo} alt="" width={95} />
      </NavLink>
      {/* <i className='bx bx-menu'></i> */}
      <ul className="flex gap-5 w-2/5 justify-between">
        <li className="hover:text-orange-500 hover:cursor-pointer">Categories</li>
        <li className="hover:text-orange-500 hover:cursor-pointer">Brands</li>
        <li className="hover:text-orange-500 hover:cursor-pointer">Trending</li>
        <li className="hover:text-orange-500 hover:cursor-pointer">Product</li>
      </ul>
      <form action="">
        <div className="flex items-center relative text-orange-500/50 focus-within:text-orange-500">
          <i className="bx bx-search absolute ml-2 pointer-events-none"></i>
          <input
            type="text"
            name="search"
            placeholder="Search"
            aria-label="search"
            // className="px-4  border-solid border-2 rounded-full border-orange-500/50 focus:border-orange-500"
            className="pr-3 pl-8 ring-2 rounded-full ring-orange-500/50 focus:ring-orange-500 focus:outline-none"
          />
        </div>
      </form>
      <i className="bx bx-heart hover:text-orange-500 hover:cursor-pointer"></i>
      <i className="bx bx-cart hover:text-orange-500 hover:cursor-pointer"></i>
      <i className="bx bx-user hover:text-orange-500 hover:cursor-pointer" onClick={handleClick}></i>
      { openProfile && <DropdownProfile />}
    </nav>
  );
};
