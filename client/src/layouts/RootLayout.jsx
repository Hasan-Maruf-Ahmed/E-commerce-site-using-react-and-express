import { Navbar } from "../components/Navbar";

import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <header className="bg-white shadow-lg">
        <div className="mx-56 my-1 text-sm flex justify-between">
            <span>Biggest Smart Gadget & Smartphone Collection</span>
            <div className="text-gray-500"><span>Call<span className="text-sky-500">+8801864180162</span></span></div>
        </div>
        <hr />
        <Navbar />
        <hr />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};
