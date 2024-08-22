import { Outlet } from "react-router-dom";
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";

const Main = () => {
  return (
    <div className="bg-[#eeeded]">
      <Navbar />
      <div className="md:min-h-[calc(100vh-190px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
