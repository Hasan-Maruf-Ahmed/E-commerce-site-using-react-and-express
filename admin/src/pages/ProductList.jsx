import { useEffect, useState } from "react"
import axios from "../axios"
import { toast } from "react-toastify"


export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      let response = await axios.get('/getproducts')
      setProducts(response.data);
      console.log(response.data);
    } catch (err) {
      toast.error(err.message);
    }
  }

  useEffect(()=> {
    fetchProducts();
  }, [])

  return (
    <div className="p-2 box-border bg-white mb-0 rounded-sm w-full mt-4">
      <h4 className="font-bold p-5 uppercase text-4xl">Products List</h4>
      <div className="max-h-[80vh] overflow-auto px-4 text-center">
        <table className="w-full mx-auto">
          <thead>
            <tr className="bg-orange-400 py-12">
              <th className="p-2">Products</th>
              <th className="p-2">Name</th>
              <th className="p-2">Category</th>
              <th className="p-2">Price</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Rating</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={i} className="border-b border-slate-900/20 text-gray-500 p-6 font-medium ">
                <td className="flex items-start sm:items-center">
                  <img src={product.image} alt="" height={73} width={73} className="rounded-lg ring-1 ring-slate-900/5 my-1"/>
                </td>
                <td>
                  <div className="line-clamp-3">{product.name}</div>          
                </td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.rating}</td>
                <td><i className='bx bx-trash text-2xl'></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
