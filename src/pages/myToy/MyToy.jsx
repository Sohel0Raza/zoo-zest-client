import { Link } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MyToy = ({ toy, myToys, setMyToys }) => {
  const { _id, sellerName, toyName, category, price, quantity } = toy;

  const handleDetete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== _id);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  return (
    <tbody key={toy._id}>
      <tr>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>$ {price}</td>
        <td>{quantity}</td>
        <div className="space-x-4 mt-3">
          <Link to={`/toys/${toy._id}`}>
            <button className="p-1 rounded-md hover:btn-success">
              <FcViewDetails />
            </button>
          </Link>
          <Link to={`/updateToy/${_id}`}>
            {" "}
            <button className="p-1 rounded-md hover:btn-accent">
              <GrUpdate />
            </button>
          </Link>
          <button
            onClick={() => handleDetete(_id)}
            className="p-1 rounded-md hover:btn-error"
          >
            <AiFillDelete />
          </button>
        </div>
      </tr>
    </tbody>
  );
};

export default MyToy;
