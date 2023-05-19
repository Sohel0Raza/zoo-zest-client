import Banner from "./homeBanner/Banner";
import ShopBrand from "./shopBrand/shopBrand";
import ShopCategory from "./shopCategory/ShopCategory";
import ShopGallery from "./shopGallery/ShopGallery";
const Home = () => {
    return (
        <div>
           <Banner/>
            <ShopCategory/>
           <ShopBrand/>
           <ShopGallery/>
        </div>
    );
};

export default Home;