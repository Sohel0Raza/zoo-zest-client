import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Toy = () => {
  const toy = useLoaderData();
  const {
    photo,
    sellerName,
    sellerEmail,
    toyName,
    price,
    description,
    rating,
    quantity,
  } = toy;
  const discount = (price * 15) / 100;
  const offerPrice = (price - discount).toFixed(2);
  return (
    <div className="md:w-9/12 mx-auto pt-20">
      <div className="md:flex items-center">
        <div className="py-5 md:w-1/2 text-center">
          <img className="shadow-sm mx-auto rounded-xl" src={photo} alt="" />
          <h2 className="font-semibold pt-3">{toyName}</h2>
          <h2 className="font-medium py-1 text-red-500">
            Price: ${offerPrice}
          </h2>
        </div>
        <div className="md:w-1/2 px-7 pb-5 md:p-0">
          <p>
            <span className="font-semibold">Description: </span>
            {description}
          </p>
          <p className="flex items-center">
            <span className="font-semibold flex items-center space-x-4">
              <span>Rating:</span>
              <ReactStars
                count={rating}
                size={24}
                activeColor="#ffd700"
                value={rating}
                edit={false}
              />
            </span>
          </p>
          <p>
            <span className="font-semibold">Available Quantity: </span>{" "}
            {quantity}
          </p>
          <h2 className="text-lg mt-3">
            <span className="font-semibold">Seller Name:</span> {sellerName}
          </h2>
          <h2 className="text-lg">
            <span className="font-semibold">Email:</span> {sellerEmail}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Toy;
