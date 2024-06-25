/* eslint-disable react/prop-types */
import { formatPrice } from "../utils/formatePrice";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { toast } from "react-toastify"

export const ProductCard = ({ data }) => {
    const { addToCart } = useCartContext();
    const { user } = useAuthContext();

    const handleClick = () => {
        if (user) {
            addToCart(user.userId, data._id, 1);
          } else {
            // Handle the case when the user is not logged in, e.g., show a notification
            toast.error("User not logged in");
          }
    }
  return (
    <div className="bg-white w-52 shadow-md rounded-xl overflow-hidden hover:scale-105 duration-300">
      <div>
        <img
          src={data.image}
          alt=""
          className="h-52 w-52 object-cover border-b"
        />
      </div>
      <div className="px-4 py-3">
        <Link to={`/product/${data._id}`}>
          <p className="text-md font-bold block truncate capitalize hover:scale-105 duration-500">
            {data.name}
          </p>
        </Link>

        <div className="flex items-center justify-between">
          <p className="text-md font-semibold my-3 text-gray-500">
            {formatPrice(data.price)}
          </p>
          <button onClick={handleClick}><i className='bx bx-cart-add text-lg font-semibold text-orange-500'></i></button>
        </div>
      </div>
    </div>
  );
};
