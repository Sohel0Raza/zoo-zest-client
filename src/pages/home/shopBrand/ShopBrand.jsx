

import brand1 from "../../../assets/brand/0078436929027.webp";
import brand2 from "../../../assets/brand/download.png";
import brand3 from "../../../assets/brand/download.jpg";
import brand4 from "../../../assets/brand/download (2).png";
import brand5 from "../../../assets/brand/download (1).png";
import brand6 from "../../../assets/brand/brand_banner_logo_hartz_400x300.webp";
const ShopBrand = () => {
  return (
    <div className="my-10 md:w-10/12 mx-auto  ">
      <h2 className="font-thin text-center text-3xl">SHOP BRANDS</h2>
      <hr className="h-1 mb-5 mt-3 w-2/6 bg-amber-500 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand1} alt="" /></a>
        </div>
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand2} alt="" /></a>
        </div>
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand4} alt="" /></a>
        </div>
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand3} alt="" /></a>
        </div>
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand5} alt="" /></a>
        </div>
        <div className="w-44 h-40 mx-auto">
        <a href="">  <img className="w-full h-full" src={brand6} alt="" /></a>
        </div>
      </div>
      <div className="text-center">
      <button className="btn-primary ">Shop All Brand</button>
      </div>
    </div>
  );
};

export default ShopBrand;
