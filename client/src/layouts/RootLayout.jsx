import { Navbar } from "../components/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <header>
        <NavLink to="/">
          <img src={logo} alt="" width="85px" />
        </NavLink>
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};
