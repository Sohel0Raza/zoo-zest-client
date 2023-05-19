import img1 from "../../../assets/gallery/bat.jpg";
import img2 from "../../../assets/gallery/images66.jpg";
import img3 from "../../../assets/gallery/imagesbat.jpg";
import img4 from "../../../assets/gallery/images.jpg";
import img5 from "../../../assets/gallery/images89.jpg";
import img6 from "../../../assets/gallery/images 44.jpg";
import img7 from "../../../assets/gallery/download.jpg";
import img8 from "../../../assets/gallery/images (5).jpg";
import img9 from "../../../assets/gallery/fhkk.jpg";
import img10 from "../../../assets/gallery/images (3).jpg";
import img11 from "../../../assets/gallery/images (4).jpg";
import img12 from "../../../assets/gallery/images (2).jpg";
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
      <div data-aos="fade-right" data-aos-easing="linear">
        <img className="w-full h-full" src={img1} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <img className="w-full h-full" src={img5} alt="" />
      </div>
      <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
        <img className="w-full h-full" src={img3} alt="" />
      </div>
      <div data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="linear">
        <img className="w-full h-full" src={img9} alt="" />
      </div>
      <div data-aos="zoom-out-up">
        <img className="w-full h-full" src={img2} alt="" />
      </div>
      <div data-aos="fade-right" data-aos-duration="3000">
        <img className="w-full h-full" src={img6} alt="" />
      </div>
      <div data-aos="flip-up" data-aos-anchor-placement="center-bottom">
        <img className="w-full h-full" src={img11} alt="" />
      </div>
      <div data-aos="fade-up">
        <img className="w-full h-full" src={img8} alt="" />
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img className="w-full h-full" src={img4} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img className="w-full h-full" src={img10} alt="" />
      </div>
      <div data-aos="zoom-in-right">
        <img className="w-full h-full" src={img7} alt="" />
      </div>
      <div data-aos="flip-up" data-aos-duration="1500" data-aos-easing="linear">
        <img className="w-full h-full" src={img12} alt="" />
      </div>
    </div>
    </div>
  );
};

export default ShopGallery;
