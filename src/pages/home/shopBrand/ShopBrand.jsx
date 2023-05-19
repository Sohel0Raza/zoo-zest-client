

import brand1 from "../../../assets/brand/adidas-logo-symbol-clothes-design-icon-abstract-football-illustration-free-vector.webp";
import brand2 from "../../../assets/brand/download (1).png";
import brand3 from "../../../assets/brand/download.jpg";
import brand4 from "../../../assets/brand/download.png";
import brand5 from "../../../assets/brand/new-balance-2-logo-png-transparent.png";
import brand6 from "../../../assets/brand/nike-logo-black-with-name-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg";
const ShopBrand = () => {
  return (
    <div className="my-10">
      <h2 className="font-thin text-center text-3xl">SHOP BRANDS</h2>
      <div className="md:w-10/12 mx-auto  grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand1} alt="" /></a>
        </div>
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand2} alt="" /></a>
        </div>
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand3} alt="" /></a>
        </div>
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand4} alt="" /></a>
        </div>
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand5} alt="" /></a>
        </div>
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand6} alt="" /></a>
        </div>
      </div>
      <div className="text-center">
      <button className="btn-outlined ">Shop All Brand</button>
      </div>
    </div>
  );
};

export default ShopBrand;
