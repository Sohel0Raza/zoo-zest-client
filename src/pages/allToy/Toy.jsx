import { FcRating } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";

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
  return (
    <div className="md:w-9/12 mx-auto mt-10">
      <div className="md:flex items-center bg-base-100 shadow-xl">
        <div className="py-5 md:w-1/2 text-center">
          <img
            className="shadow-sm mx-auto rounded-xl"
            src={photo}
            alt="Movie"
          />
          <h2 className="font-bold pt-3">{toyName}</h2>
          <h2 className="font-semibold py-1 text-red-500">Price: ${price}</h2>
        </div>
        <div className="md:w-1/2 px-7 pb-5 md:p-0">
          <p>
            <span className="font-bold">Description: </span>
            {description}
          </p>
          <p className="flex items-center">
            <span className="font-bold">Rating: </span>
            {rating}
            <FcRating className="ml-1" />
          </p>
          <p>
            <span className="font-bold">Available Quantity</span> {quantity}
          </p>
          <h2 className="text-xl mt-3">
            <span className="font-semibold">Seller Name:</span> {sellerName}
          </h2>
          <h2 className="text-xl">
            <span className="font-semibold">Email:</span> {sellerEmail}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Toy;
