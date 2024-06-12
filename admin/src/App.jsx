import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"


//* Pages
import { AddProducts } from "./pages/AddProducts";
import { ProductList } from "./pages/ProductList";

//* Layouts
import { AdminLayout } from "./layouts/AdminLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<AdminLayout />}>
        <Route path="addproducts" element={<AddProducts/>} />
        <Route path="productlist" element={<ProductList/>} />
      </Route>
    </>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
