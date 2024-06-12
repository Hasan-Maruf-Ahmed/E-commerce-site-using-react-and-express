import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center items-center h-20 text-3xl font-bold bg-teal-600 text-white fixed top-0 left-0 right-0">Admin Panel</div>
      <div className="flex flex-grow pt-20">
      <div className="flex flex-col gap-8 pt-16 items-center bg-teal-700 h-full w-56">
        <NavLink to="/admin/addproducts">
          <p className="px-7 py-4 rounded-xl bg-orange-500 text-white font-bold">Add Product</p>
        </NavLink>
        <NavLink to="/admin/productlist">
          <p className="px-7 py-4 rounded-xl bg-orange-500 text-white font-bold">Product List</p>
        </NavLink>
      </div>
      <div className="flex-grow">
      <Outlet />
      </div>
      </div>
    </div>
  );
};
