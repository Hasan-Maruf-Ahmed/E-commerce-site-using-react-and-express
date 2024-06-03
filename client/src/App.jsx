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

//* Layouts
import { RootLayout } from "./layouts/RootLayout";

//* Context
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="brands" element={<Brands />} />
        <Route path="trending" element={<Trending />} />
        <Route path="product" element={<Product />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </>
  )
);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
