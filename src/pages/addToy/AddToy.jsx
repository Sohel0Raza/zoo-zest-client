import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = event =>{
    event.preventDefault()
    const form = event.target

    const sellerName = form.sellerName.value;
    const sellerEmail =  form.email.value;
    const category =  form.category.value;
    const description =  form.description.value;
    const toyName =  form.toyName.value;
    const price =  form.price.value;
    const quantity =  form.quantity.value;
    const rating =  form.rating.value;
    const photo =  form.photo.value;
    console.log(sellerName, sellerEmail, category, description, toyName, price, quantity, rating, photo)
     const newToy = {sellerName, sellerEmail, toyName, category, photo, price, quantity, rating, description}

     //send data to server
     fetch('http://localhost:5000/toys',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newToy)
     })
     .then(res=> res.json())
     .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Toy Added Successfully',
              icon: 'success',
              confirmButtonText: 'OK'
            })
          }
     })
  }
  return (
    <div className="md:w-10/12 mx-auto my-10">
      <h2 className="font-thin text-center text-3xl">ADD NEW TOY</h2>
      <hr className="h-1 mb-5 mt-3 w-2/6 bg-amber-500 mx-auto" />
      <form onSubmit={handleAddToy} className=" bg-slate-100 p-2 md:p-5 rounded-lg">
        <div className="md:flex">
          <div className="md:w-1/2 px-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Teddy or horse or dinosaur"
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
                placeholder="Detail description"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:w-1/2 px-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                name="toyName"
                placeholder="Toy name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price (USD)</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="price"
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
                placeholder="Quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-control px-5">
          <label className="label">
            <span className="label-text">Toy Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control px-5 mt-8">
          <input
            type="submit"
            value="Add Toy"
            className="btn-outlined w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
