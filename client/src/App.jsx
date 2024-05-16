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
import { Login, loginAction } from "./pages/Login";
import { SignUp, signupAction } from "./pages/SignUp";

//* Layouts
import { RootLayout } from "./layouts/RootLayout";

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
      <Route path="login" element={<Login />} action={loginAction}/>
      <Route path="signup" element={<SignUp />} action={signupAction}/>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
