import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FcRating } from "react-icons/fc";

const ShopCategory = () => {
  //teddy dataload
  const [teddys, setTeddys] = useState([]);

  useEffect(() => {
    fetch("https://sports-verse-toys-server.vercel.app/category/teddy")
      .then((res) => res.json())
      .then((data) => setTeddys(data));
  }, []);

  //horse dataload
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    fetch("https://sports-verse-toys-server.vercel.app/category/horse")
      .then((res) => res.json())
      .then((data) => setHorses(data));
  }, []);

  //dinosaur dataload
  const [dinosaurs, setDinosaurs] = useState([]);

  useEffect(() => {
    fetch("https://sports-verse-toys-server.vercel.app/category/dinosaur")
      .then((res) => res.json())
      .then((data) => setDinosaurs(data));
  }, []);
  return (
    <div className="my-10 md:w-10/12 mx-auto p-3">
      <h2 className="font-thin text-center text-3xl">SHOP BY CATEGORY</h2>
      <hr className="h-1 mb-5 md:mb-10 mt-3 w-2/6 bg-amber-500 mx-auto" />
      <Tabs>
        <TabList className="bg-slate-300 p-3 font-bold md:space-x-10 text-center">
          <Tab>Teddy Bear</Tab>
          <Tab>Horse</Tab>
          <Tab>Dinosaur</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
            {teddys.map((teddy) => (
              <div key={teddy._id}>
                <div className="card bg-base-100 shadow-xl">
                  <div className="h-56 mx-auto">
                    <img
                      className="w-full h-full p-5"
                      src={teddy.picture}
                      alt="teddy"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title text-2xl">{teddy.name}</h2>
                    <p className="font-semibold">Price: $ {teddy.price}</p>
                    <p className="font-medium flex items-center">
                      Rating: {teddy.rating}
                      <FcRating className="ml-1" />
                    </p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
            {horses.map((horse) => (
              <div key={horse._id}>
                <div className="card bg-base-100 shadow-xl">
                  <div className="h-56 mx-auto">
                    <img
                      className="w-full h-full p-5"
                      src={horse.picture}
                      alt="teddy"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title text-2xl">{horse.name}</h2>
                    <p className="font-semibold">Price: $ {horse.price}</p>
                    <p className="font-medium flex items-center">
                      Rating: {horse.rating} <FcRating className="ml-1" />
                    </p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
            {dinosaurs.map((dinosaur) => (
              <div key={dinosaur._id}>
                <div className="card bg-base-100 shadow-xl">
                  <div className="h-56 mx-auto">
                    <img
                      className="w-full h-full p-5"
                      src={dinosaur.picture}
                      alt="teddy"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title text-2xl">{dinosaur.name}</h2>
                    <p className="font-semibold">Price: $ {dinosaur.price}</p>
                    <p className="font-medium flex items-center">
                      Rating: {dinosaur.rating} <FcRating className="ml-1" />
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
