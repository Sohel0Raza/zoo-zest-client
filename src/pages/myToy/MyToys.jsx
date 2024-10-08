import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Authprovider";

import MyToy from "./MyToy";
import useTitle from "../../hooks/useTitle";
const MyToys = () => {
  const { user } = useContext(AuthContext);
  useTitle('Mytoys')
  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:5000/toys?sellerEmail=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);
  return (
    <div className="md:w-10/12 mx-auto pb-10 pt-20 px-5 md:px-0">
      <h2 className="font-thin text-center text-3xl">MY TOY</h2>
      <hr className="h-1 mb-5 mt-3 w-2/6 bg-[#ffa791] mx-auto" />
      <div className="overflow-x-auto ">
        <table className="table w-full text-center">
          {/* head*/}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          {myToys.map((toy) => (
            <MyToy
              key={toy._id}
              toy={toy}
              myToys={myToys}
              setMyToys={setMyToys}
            ></MyToy>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToys;
