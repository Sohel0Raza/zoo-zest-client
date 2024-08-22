import taddy1 from "../../../../src/assets/banner/istockphoto-1193569086-612x612 (2).jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-10/12 mx-auto">
        <div
          id="slide1"
          className="carousel-item relative w-full md:h-[600px]"
        >
          <img
            src="https://i.ibb.co/wC72Lwq/world-photography-day-toys-black-background-980928-30708.jpg"
            className="w-full h-full"
          />
          <div className="absolute flex items-end left-0 top-0 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white px-6 md:space-y-5 md:p-10 md:ml-20">
              <h2 className="text-xl md:text-5xl mb-5 md:mb-0  font-bold ">
                Affordable Price <br /> For All Toys
              </h2>
              <p>
                We offer a wide range of sporting goods and equipment, carefully
                selected <br /> from top brands known for their durability,
                performance, and innovation.
              </p>
              <div className="my-3">
                <button className="btn-primary mb-5 md:mb-0">See More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full md:h-[600px]">
          <img
            src="https://i.ibb.co/wptKNMN/clear-plain-shiny-soft-vintage-bokeh-cloudy-wave-like-geometric-black-background-texture-1262705-111.jpg"
            className="w-full h-full "
          />
          <div className="absolute flex items-end left-0 top-0 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white px-6 md:space-y-5 md:p-10 md:ml-20">
              <h2 className="text-xl mb-5 md:mb-0 md:text-5xl font-bold ">
                Affordable Price <br /> For All Eequipment
              </h2>
              <p>
                We offer a wide range of sporting goods and equipment, carefully
                selected <br /> from top brands known for their durability,
                performance, and innovation.
              </p>
              <div className="my-3">
                <button className="btn-primary mb-5 md:mb-0">See More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full md:h-[600px]">
          <img
            src="https://i.ibb.co/VMrdgVG/world-book-day-toys-olive-green-background-980928-30840.jpg"
            className="w-full h-full"
          />
          <div className="absolute flex items-end left-0 top-0 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white px-6 md:space-y-5 md:p-10 md:ml-20">
              <h2 className="text-xl md:text-5xl mb-5 md:mb-0 font-bold ">
                Affordable Price <br /> For All Eequipment
              </h2>
              <p>
                We offer a wide range of sporting goods and equipment, carefully
                selected <br /> from top brands known for their durability,
                performance, and innovation.
              </p>
              <div className="my-3">
                <button className="btn-primary mb-5 md:mb-0">See More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
