import { useLoaderData } from "react-router-dom";

const AllToy = () => {
    const allToy = useLoaderData()
    console.log(allToy)
  return (
    <div className="md:w-10/12 mx-auto">
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
          {
            allToy.map(toy =>{
                return (
                <tbody key={toy._id}>
                <tr>
                  <td>{toy.sellerName}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.category}</td>
                  <td>$ {toy.price}</td>
                  <td>{toy.quantity}</td>
                  <button className="btn-secondary">View Detail</button>
                </tr>
              </tbody>)
            })
          }
        </table>
      </div>
    </div>
  );
};

export default AllToy;
