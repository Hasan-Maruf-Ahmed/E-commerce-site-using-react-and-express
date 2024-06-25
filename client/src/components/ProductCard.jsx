/* eslint-disable react/prop-types */
import { formatPrice } from "../utils/formatePrice";
import { Link } from "react-router-dom";

export const ProductCard = ({ data }) => {
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

        <div className="flex items-center">
          <p className="text-md font-semibold my-3">
            {formatPrice(data.price)}
          </p>
        </div>
      </div>
    </div>
  );
};
