import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "../../../components/Card";

const ShopCategory = () => {
  //teddy dataload
  const [teddys, setTeddys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category/teddy")
      .then((res) => res.json())
      .then((data) => setTeddys(data));
  }, []);

  //horse dataload
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category/horse")
      .then((res) => res.json())
      .then((data) => setHorses(data));
  }, []);

  //dinosaur dataload
  const [dinosaurs, setDinosaurs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category/dinosaur")
      .then((res) => res.json())
      .then((data) => setDinosaurs(data));
  }, []);
  return (
    <div className="my-10 md:w-10/12 mx-auto p-3">
      <h2 className="font-thin text-center text-3xl">SHOP BY CATEGORY</h2>
      <hr className="h-1 mb-5 md:mb-10 mt-3 w-2/6 bg-[#ffa791] mx-auto" />
      <Tabs>
        <TabList className="bg-slate-300 p-3 font-bold md:space-x-10 text-center">
          <Tab>Teddy Bear</Tab>
          <Tab>Horse</Tab>
          <Tab>Dinosaur</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
            {teddys.map(teddy => (
              <Card key={teddy._id} product={teddy} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
            {horses.map(horse => (
              <Card key={horse._id} product={horse} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
            {dinosaurs.map(dinosaur => (
              <Card key={dinosaur._id} product={dinosaur} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
