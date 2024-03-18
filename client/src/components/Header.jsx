import { Navbar } from "./Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";

export const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <Navbar />
    </header>
  );
};
