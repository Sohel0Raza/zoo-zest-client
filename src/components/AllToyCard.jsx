import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllToyCard = ({ product }) => {
  const discount = (product.price * 15) / 100;
  const offerPrice = (product.price - discount).toFixed(2);
  return (
    <>
      <div className="card bg-base-100 rounded-none border-b-2 md:border-l-2">
        <div className="h-56 mx-auto">
          <img
            className="w-full h-full px-5 pt-6 hover:transition-scale hover:duration-500 hover:ease-linear hover:scale-125"
            src={product.photo}
            alt="teddy"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title text-lg text-[#348691] uppercase">
            {product.toyName}
          </h2>
          <p className="font-semibold text-base text-[#cc3030] flex justify-between items-center">
            <div>
              <span> $ {offerPrice}</span>
              <span className="text-gray-700 line-through ml-5">
                ${product.price}
              </span>
            </div>
            <Link to={`/toys/${product._id}`}>
              <div className="relative group">
                <span className="text-gray-700 hover:scale-110">
                  <FaArrowRightLong />
                </span>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max px-2 py-1 bg-[#f3f3f3] text-black text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-[1px] border-black">
                  View Detail
                </span>
              </div>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default AllToyCard;
