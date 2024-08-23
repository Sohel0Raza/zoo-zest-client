import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const discount = (product.price * 15) / 100;
  const offerPrice = (product.price - discount).toFixed(2);
  console.log("✌️offerPrice --->", offerPrice);
  return (
    <Link to="/allToy">
      <div className="card bg-base-100">
        <div className="h-56 mx-auto">
          <img
            className="w-full h-full px-5 pt-5 hover:scale-110"
            src={product.picture}
            alt="teddy"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title text-xl text-[#348691] uppercase">{product.name}</h2>
          <p className="font-semibold text-base text-[#cc3030] flex justify-start items-center">
            $ {offerPrice}{" "}
            <span className="text-gray-700 line-through ml-5">
              ${product.price}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
