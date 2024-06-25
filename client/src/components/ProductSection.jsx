/* eslint-disable react/prop-types */
import { useProductContext } from "../hooks/useProductContext";
import { ProductCard } from "../components/ProductCard";

export const ProductSection = ({ category }) => {
  const { products } = useProductContext();
  // console.log(products);

  const filteredProducts = products
    .filter((product) => product.category === category)
    .slice(0, 10);
  return (
    <div>
      <div className="w-4/5 mx-auto my-10 px-12 py-10 bg-gray-300/60 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 justify-items-center sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} data={product}/>
            // <div
            //   key={product._id}
            //   className="bg-white w-52 shadow-md rounded-xl overflow-hidden hover:scale-105 duration-300"
            // >
            //   <div>
            //     <img
            //       src={product.image}
            //       alt=""
            //       className="h-52 w-52 object-cover border-b"
            //     />
            //   </div>
            //   <div className="px-4 py-3">
            //     <Link to={`/product/${product._id}`}>
            //       <p className="text-md font-bold block truncate capitalize hover:scale-105 duration-500">
            //         {product.name}
            //       </p>
            //     </Link>

            //     <div className="flex items-center">
            //       <p className="text-md font-semibold my-3">
            //         {formatPrice(product.price)}
            //       </p>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};
