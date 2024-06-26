import { useProductContext } from "../hooks/useProductContext";
import { useState } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products } = useProductContext();

  const handleChange = (value) => {
    setInput(value);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className="flex items-center w-full bg-white h-12 px-5 rounded-xl shadow-xl">
      <i className="bx bx-search-alt text-orange-500"></i>
      <input
        className="w-full ml-2"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
