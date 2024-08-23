import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  useTitle("AddToy");
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const sellerName = form.sellerName.value;
    const sellerEmail = form.email.value;
    const category = form.category.value;
    const description = form.description.value;
    const toyName = form.toyName.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    console.log(
      sellerName,
      sellerEmail,
      category,
      description,
      toyName,
      price,
      quantity,
      rating,
      photo
    );
    const newToy = {
      sellerName,
      sellerEmail,
      toyName,
      category,
      photo,
      price,
      quantity,
      rating,
      description,
    };

    //send data to server
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className="md:w-10/12 mx-auto pb-10 pt-20 px-5">
      <h2 className="font-thin text-center text-3xl">ADD NEW TOY</h2>
      <hr className="h-1 mb-5 mt-3 w-2/6 bg-[#ffa791] mx-auto" />
      <form onSubmit={handleAddToy} className=" p-2 md:p-5">
        <div className="md:flex">
          <div className="md:w-1/2 px-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base text-[#348691] uppercase">
                  Seller Name
                </span>
              </label>
              <input
                type="text"
                name="sellerName"
                value={user?.displayName}
                disabled
                className="my-input"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base text-[#348691] uppercase">
                  Seller Email
                </span>
              </label>
              <input
                type="text"
                name="email"
                value={user?.email}
                disabled
                className="my-input"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base text-[#348691] uppercase">
                  Toy Category
                </span>
              </label>
              <select className="my-input" name="category" required >
                <option value="" disabled selected>Select Category</option>
                <option value="teddy">Teddy</option>
                <option value="horse">Horse</option>
                <option value="dinosaur">Dinosaur</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base text-[#348691] uppercase">
                  Toy description
                </span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Detail description"
                className="my-input"
                required
              />
            </div>
          </div>
          <div className="md:w-1/2 px-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base text-[#348691] uppercase">
                  Toy Name
                </span>
              </label>
              <input
                type="text"
                name="toyName"
                placeholder="Toy name"
                className="my-input"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base text-[#348691] uppercase">
                  Price (USD)
                </span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="price"
                className="my-input"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base text-[#348691] uppercase">
                  Available Quantity
                </span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="my-input"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base text-[#348691] uppercase">
                  Rating
                </span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="my-input"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-control px-5">
          <label className="label">
            <span className="label-text font-semibold text-base text-[#348691] uppercase">
              Toy Photo URL
            </span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo url"
            className="my-input"
            required
          />
        </div>
        <div className="form-control px-5 mt-8">
          <input type="submit" value="Add Toy" className="btn-primary w-full" />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
