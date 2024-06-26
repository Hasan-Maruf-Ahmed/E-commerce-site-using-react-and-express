import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//* Pages
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Brands } from "./pages/Brands";
import { Trending } from "./pages/Trending";
import { Product } from "./pages/Product";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Checkout } from "./pages/Checkout";

//* Layouts
import { RootLayout } from "./layouts/RootLayout";

//* Context
import { AuthContextProvider } from "./context/AuthContext";
import { ProductContextProvider } from "./context/ProductContext";
import { CartContextProvider } from "./context/CartContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="category">
          <Route path="smartwatch" element={<Category category="Smart Watch"/>} />
          <Route path="headphones" element={<Category category="Headphones"/>} />
          <Route path="speakers" element={<Category category="Speakers"/>} />
          <Route path="chargingaccessories" element={<Category category="Charging Accessories"/>} />
          <Route path="security" element={<Category category="Security"/>} />
          <Route path="powerbanks" element={<Category category="Powerbanks"/>} />
          <Route path="monitor" element={<Category category="Monitor"/>} />
        </Route>
        <Route path="brands" element={<Brands />} />
        <Route path="trending" element={<Trending />} />
        <Route path="product/:id" element={<Product />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="checkout" element={<Checkout />} />
    </>
  )
);

function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
        <RouterProvider router={router} />
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;
