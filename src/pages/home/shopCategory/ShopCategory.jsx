import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FcAutomotive } from "react-icons/fc";

const ShopCategory = () => {
  const [teddys, setTeddys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category/teddy")
      .then((res) => res.json())
      .then((data) => setTeddys(data));
  }, []);
  return (
    <div className="my-10 md:w-10/12 mx-auto p-3">
      <h2 className="font-thin text-center text-3xl">SHOP BY CATEGORY</h2>
      <hr className="h-1 mb-5 mt-3 w-2/6 bg-amber-500 mx-auto" />
      <Tabs>
        <TabList className="bg-slate-300 p-3 font-bold md:space-x-10 text-center">
          <Tab>Teddy Bear</Tab>
          <Tab>Horse</Tab>
          <Tab>Dinosaur</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teddys.map((teddy) => (
            <div key={teddy._id}>
              <div className="card md:w-96 bg-base-100 shadow-xl">
                  <div className="h-56 mx-auto">
                  <img
                  className="w-full h-full"
                    src={teddy.picture}
                    alt="teddy"
                  />
                  </div>
                <div className="card-body">
                  <h2 className="card-title text-2xl">{teddy.name}</h2>
                  <p className="font-semibold">Price: $ {teddy.price}</p>
                  <p className="font-medium">Rating: {teddy.rating}<FcAutomotive/></p>
                  <div className="card-actions justify-end">
                    <button className="btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
          
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
