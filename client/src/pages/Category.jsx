/* eslint-disable react/prop-types */
import { useProductContext } from "../hooks/useProductContext";
import { ProductCard } from "../components/ProductCard"

export const Category = ({category}) => {
  const { products } = useProductContext();
  // console.log(category);

  const filteredProducts = products.filter((product) => product.category === category);
  return (
    <div>
      <div className="w-4/5 mx-auto my-10 px-12 py-10 bg-gray-300/60 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 justify-items-center sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {filteredProducts.map((product) => (
              <ProductCard key={product._id} data={product}/>
            ))}
        </div>
      </div>
    </div>
  )
}
