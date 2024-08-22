
const ShopBrand = () => {
  return (
    <div className="my-10 md:w-10/12 mx-auto">
      <h2 className="font-thin text-center text-3xl">SHOP BRANDS</h2>
      <hr className="h-1 mb-5 mt-3 w-2/6 bg-[#ffa791] mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
        <div className="w-44 h-40 mx-auto">
          <a href="">
            {" "}
            <img
              className="w-full h-full"
              src="https://i.ibb.co/yfc9XHx/5yh.png"
              alt=""
            />
          </a>
        </div>
        <div className="w-44 h-40 mx-auto">
          <a href="">
            {" "}
            <img
              className="w-full h-full"
              src="https://i.ibb.co/Q8Cw4F5/67.png"
              alt=""
            />
          </a>
        </div>
        <div className="w-44 h-40 mx-auto">
          <a href="">
            {" "}
            <img
              className="w-full h-full"
              src="https://i.ibb.co/bP5RRGn/download-1-removebg-preview.png"
              alt=""
            />
          </a>
        </div>
        <div className="w-44 h-40 mx-auto">
          <a href="">
            {" "}
            <img
              className="w-full h-full"
              src="https://i.ibb.co/WsFFVTw/download-2-removebg-preview.png"
              alt=""
            />
          </a>
        </div>
        <div className="w-44 h-40 mx-auto">
          <a href="">
            {" "}
            <img className="w-full h-full" src="https://i.ibb.co/sqgtNzZ/Khulshi-Mart-removebg-preview.png" alt="" />
          </a>
        </div>
        <div className="w-44 h-40 mx-auto">
          <a href="">
            {" "}
            <img className="w-full h-full" src="https://i.ibb.co/LpfMY0R/unimart-removebg-preview.png" alt="" />
          </a>
        </div>
        <div className="w-44 h-40 mx-auto">
          <a href="">
            {" "}
            <img className="w-full h-full" src="https://i.ibb.co/18s7Xcv/shwapno-removebg-preview.png" alt="" />
          </a>
        </div>
        <div className="w-44 h-40 mx-auto">
          <a href="">
            {" "}
            <img className="w-full h-full" src="https://i.ibb.co/85sr1sG/kids-mom-removebg-preview.png" alt="" />
          </a>
        </div>
      </div>
      <div className="text-center">
        <button className="btn-primary ">Shop All Brand</button>
      </div>
    </div>
  );
};

export default ShopBrand;
