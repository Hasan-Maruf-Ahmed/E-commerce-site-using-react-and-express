/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { DropdownProfile } from "./DropdownProfile";
import { DropdownCategory } from "./DropdownCategory";
import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCartContext } from "../hooks/useCartContext";
import { SearchModal } from "./SearchModal";

export const Navbar = ({ setCartOpen, setFavOpen }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { getTotalItems } = useCartContext();
  const totalItem = getTotalItems();
  const [openProfile, setOpenProfile] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      setOpenProfile((prev) => !prev);
    }
  };

  let menuRef = useRef();
  let categoryRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleCategory = () => {
    setOpenCategory((prev) => !prev);
  };
  useEffect(() => {
    let handler = (e) => {
      if (!categoryRef.current.contains(e.target)) {
        setOpenCategory(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <nav className="mx-8 mb-2 py-4 text-xl flex justify-between items-center lg:mx-48">
      <NavLink to="/" className="-mr-14">
        <img src={logo} alt="" width={95} />
      </NavLink>
      {/* <i className='bx bx-menu'></i> */}
      <ul className="flex gap-5 w-2/5 justify-between items-center">
        <li
          className="hover:text-orange-500 hover:cursor-pointer"
          onClick={handleCategory}
        >
          Categories
        </li>
        <li className="hover:text-orange-500 hover:cursor-pointer">Brands</li>
        <li className="hover:text-orange-500 hover:cursor-pointer">Trending</li>
        {/* <li className="hover:text-orange-500 hover:cursor-pointer">Product</li> */}
      </ul>
      <i className="bx bx-search hover:text-orange-500 hover:cursor-pointer" onClick={() => setIsOpen(true)}></i>
      <i className="bx bx-heart hover:text-orange-500 hover:cursor-pointer" onClick={() => setFavOpen(true)}></i>
      <div className="relative">
        <i
          className="bx bx-cart hover:text-orange-500 hover:cursor-pointer"
          onClick={() => setCartOpen(true)}
        ></i>
        <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
          {totalItem}
        </span>
      </div>
      <i
        className="bx bx-user hover:text-orange-500 hover:cursor-pointer"
        onClick={handleClick}
      ></i>
      <div
        className={`dropDownProfile ${openProfile ? "active" : "inactive"}`}
        ref={menuRef}
      >
        <DropdownProfile setOpenProfile={setOpenProfile} />
      </div>
      <div
        className={`dropDownCategory ${openCategory ? "active" : "inactive"}`}
        ref={categoryRef}
      >
        <DropdownCategory setOpenCategory={setOpenCategory} />
      </div>
      <SearchModal open={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};
