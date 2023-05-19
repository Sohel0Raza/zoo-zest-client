import taddy1 from "../../../assets/gallery/download (1) (1).jpg";
import taddy2 from "../../../assets/gallery/download (1) (4).jpg";
import taddy3 from "../../../assets/gallery/download (1).jpg";
import taddy4 from "../../../assets/gallery/download (4).jpg";
import horse1 from "../../../assets/gallery/download (1) (2).jpg";
import horse2 from "../../../assets/gallery/download (1) (5).jpg";
import horse3 from "../../../assets/gallery/download (1) (6).jpg";
import horse4 from "../../../assets/gallery/download (1) (7).jpg";

import dragon1 from "../../../assets/gallery/download (1) (3).jpg";
import dragon2 from "../../../assets/gallery/download (2).jpg";
import dragon3 from "../../../assets/gallery/download (3).jpg";
import dragon4 from "../../../assets/gallery/download.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ShopGallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="md:w-10/12 mx-auto my-10 p-5 md:3">
     <h2 className="font-thin text-center text-3xl">SHOP GALLERY</h2>
      <hr className="h-1 mb-5 mt-3 w-2/6 bg-amber-500 mx-auto" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
      <div className="shadow-xl" data-aos="fade-right" data-aos-easing="linear">
        <img className="w-full h-full rounded-xl " src={taddy1} alt="" />
      </div>
      <div className="shadow-xl" data-aos="fade-up" data-aos-duration="1500">
        <img className="w-full h-full rounded-xl" src={taddy2} alt="" />
      </div>
      <div className="shadow-xl" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
        <img className="w-full h-full rounded-xl" src={taddy3} alt="" />
      </div>
      <div className="shadow-xl" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="linear">
        <img className="w-full h-full rounded-xl" src={taddy4} alt="" />
      </div>
      <div className="shadow-xl" data-aos="zoom-out-up">
        <img className="w-full h-full rounded-xl" src={horse1} alt="" />
      </div>
      <div className="shadow-xl" data-aos="fade-right" data-aos-duration="3000">
        <img className="w-full h-full rounded-xl" src={horse2} alt="" />
      </div>
      <div className="shadow-xl" data-aos="flip-up" data-aos-anchor-placement="center-bottom">
        <img className="w-full h-full rounded-xl" src={horse3} alt="" />
      </div>
      <div className="shadow-xl" data-aos="fade-up">
        <img className="w-full h-full rounded-xl" src={horse4} alt="" />
      </div>
      <div
        className="shadow-xl" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img className="w-full h-full rounded-xl" src={dragon1} alt="" />
      </div>
      <div className="shadow-xl" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img className="w-full h-full rounded-xl" src={dragon2} alt="" />
      </div>
      <div className="shadow-xl" data-aos="zoom-in-right">
        <img className="w-full h-full rounded-xl" src={dragon3} alt="" />
      </div>
      <div className="shadow-xl" data-aos="flip-up" data-aos-duration="1500" data-aos-easing="linear">
        <img className="w-full h-full rounded-xl" src={dragon4} alt="" />
      </div>
    </div>
    </div>
  );
};

export default ShopGallery;
