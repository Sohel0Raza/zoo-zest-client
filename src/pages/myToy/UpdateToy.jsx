import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  console.log(toy);
  const { _id, price, quantity, description } = toy;
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const description = form.description.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const updatedToy = { price, quantity, description };

    //send data to server
    fetch(`https://sports-verse-toys-server.vercel.app/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Update Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className="md:w-10/12 mx-auto my-10 p-5">
      <h2 className="font-thin text-center text-3xl">{toy.toyName}</h2>
      <hr className="h-1 mb-5 mt-3 w-2/6 bg-amber-500 mx-auto" />
      <form onSubmit={handleUpdateToy}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price (USD)</span>
          </label>
          <input
            type="text"
            name="price"
            defaultValue={price}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="text"
            name="quantity"
            defaultValue={quantity}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <input
            type="text"
            name="description"
            defaultValue={description}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-8">
          <input
            type="submit"
            value="Update Toy"
            className="btn-outlined w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
