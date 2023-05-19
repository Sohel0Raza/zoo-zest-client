import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopCategory = () => {
  return (
    <div className="my-10 md:w-10/12 mx-auto p-3">
      <h2 className="font-thin text-center text-3xl">SHOP BY CATEGORY</h2>
      <hr className="h-1 mb-5 mt-3 w-2/6 bg-amber-500 mx-auto" />
      <Tabs className="text-center">
        <TabList className="bg-slate-300 p-3 font-bold space-x-10">
          <Tab>Teddy Bear</Tab>
          <Tab>Horse</Tab>
          <Tab>Dinosaur</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
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
