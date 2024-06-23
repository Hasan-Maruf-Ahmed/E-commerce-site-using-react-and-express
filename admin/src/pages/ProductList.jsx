import { useState } from "react"


export const ProductList = () => {
  const [products, setProducts] = useState([]);
  
  return (
    <div>
      <h4>Products List</h4>
      <div>
        <table className="w-full mx-auto">
          <thead>
            <tr>
              <th className="p-2">Products</th>
              <th className="p-2">Name</th>
              <th className="p-2">Category</th>
              <th className="p-2">Price</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Rating</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  )
}
