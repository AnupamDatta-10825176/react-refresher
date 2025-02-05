import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import Loading from "./Loading";

export const LatestCollection = () => {
  const { products, loading } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    // get the 8 products on load
    setLatestProducts(products.slice(0, 8));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LETEST" text2="COLLECTION " />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-grey-600">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Leo lacinia
          gravida quis aptent ornare felis facilisi. Commodo diam elementum
          tellus; ante gravida interdum dui. Volutpat penatibus feugiat pulvinar
          dictum conubia parturient. Sagittis tempus vehicula dolor convallis,
          montes fusce commodo senectus
        </p>
      </div>

      {/* rendering products */}
      <div className="grid grid-cols-3 gap-4 gap-y-6">
        {loading ? (
          <Loading />
        ) : (
          latestProducts &&
          latestProducts.map((lp) => <ProductItem product={lp} key={lp.id} />)
        )}
      </div>
    </div>
  );
};
