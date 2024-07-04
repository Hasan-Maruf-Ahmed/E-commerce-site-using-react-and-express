import { Navbar } from "../components/Navbar";

import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

import { Cart } from "../components/Cart";
import { Favourites } from "../components/Favourites";
import { useState } from "react";


export const RootLayout = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);
  return (
    <div>
      <header className="bg-white shadow-lg">
        {/* <div className="mx-56 my-1 text-sm flex justify-between">
            <span>Biggest Smart Gadget & Smartphone Collection</span>
            <div className="text-gray-500"><span>Call<span className="text-sky-500">+8801864180162</span></span></div>
        </div>
        <hr /> */}
        <Navbar setCartOpen={setCartOpen} setFavOpen={setFavOpen}/>
        <hr />
      </header>
      <div>
        <div>
        <Outlet />
        <Footer />
        </div>
        <div>
          <Cart open={cartOpen} setOpen={setCartOpen}/>
        </div>
        <div>
          <Favourites open={favOpen} setOpen={setFavOpen}/>
        </div>
      </div>
    </div>
  );
};
