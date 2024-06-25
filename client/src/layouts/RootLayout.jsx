import { Navbar } from "../components/Navbar";

import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

import { Cart } from "../components/Cart";
import { useState } from "react";


export const RootLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="bg-white shadow-lg">
        <div className="mx-56 my-1 text-sm flex justify-between">
            <span>Biggest Smart Gadget & Smartphone Collection</span>
            <div className="text-gray-500"><span>Call<span className="text-sky-500">+8801864180162</span></span></div>
        </div>
        <hr />
        <Navbar setCartOpen={setOpen}/>
        <hr />
      </header>
      <div>
        <div>
        <Outlet />
        <Footer />
        </div>
        <div>
          <Cart open={open} setOpen={setOpen}/>
        </div>
      </div>
    </div>
  );
};
