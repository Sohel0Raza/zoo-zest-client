import useTitle from "../../hooks/useTitle";
import AboutUs from "./aboutUs/AboutUs";
import Banner from "./homeBanner/Banner";
import ShopBrand from "./shopBrand/shopBrand";
import ShopCategory from "./shopCategory/ShopCategory";
import ShopGallery from "./shopGallery/ShopGallery";
const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner/>
            <ShopCategory/>
           <ShopBrand/>
           <ShopGallery/>
           <AboutUs/>
        </div>
    );
};

export default Home;