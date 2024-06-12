import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div>
      <div>Admin Panel</div>
      <div>
        <NavLink to="/addproducts">
          <p>Add Product</p>
        </NavLink>
        <NavLink to="/productlist">
          <p>Product List</p>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
