/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { id, image, title, price } = product;

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          src={image}
          alt={`product-image-${title}`}
          className="hover:scale-110 transition ease-in-out w-60 h-60"
        />
        <p className="pt-3 pb-1 text-sm truncate hover:whitespace-normal">
          {title}
        </p>
        <p className="text-sm font-medium">$ {price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
