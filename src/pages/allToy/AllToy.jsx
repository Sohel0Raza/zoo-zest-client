import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";
import useTitle from "../../hooks/useTitle";
import AllToyCard from "../../components/AllToyCard";

const AllToy = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const { user } = useContext(AuthContext);
  const allToy = useLoaderData();
  useTitle("AllToy");
  return (
    <div className="md:w-10/12 mx-auto py-20 px-5 md:px-0">
      <h2 className="font-thin text-center text-3xl">ALL TOY</h2>
      <hr className="h-1 mb-5 mt-3 w-2/6 bg-[#ffa791] mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-4">
        {allToy.map((toy) => (
          <AllToyCard key={toy._id} product={toy} />
        ))}
      </div>
    </div>
  );
};

export default AllToy;
