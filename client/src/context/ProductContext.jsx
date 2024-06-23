/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "../axios";
import { toast } from "react-toastify";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      let response = await axios.get("/getproducts");
      setProducts(response.data);
      console.log(response.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
