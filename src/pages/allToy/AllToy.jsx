import { Link, useLoaderData } from "react-router-dom";

const AllToy = () => {
  const allToy = useLoaderData();
  return (
    <div className="md:w-10/12 mx-auto my-10 px-5 md:px-0">
      <h2 className="font-thin text-center text-3xl">ALL TOY</h2>
      <hr className="h-1 mb-5 mt-3 w-2/6 bg-amber-500 mx-auto" />
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          {allToy.map((toy) => {
            return (
              <tbody key={toy._id}>
                <tr>
                  <td>{toy.sellerName}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.category}</td>
                  <td>$ {toy.price}</td>
                  <td>{toy.quantity}</td>
                  <Link to={`/toys/${toy._id}`}><button className="btn-secondary">View Detail</button> </Link>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default AllToy;
