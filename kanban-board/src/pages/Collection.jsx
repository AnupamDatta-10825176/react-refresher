import { useCallback, useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import Loading from "../components/Loading";
import ProductItem from "../components/ProductItem";
import { categories, sortByCategores } from "../data/constants";

const Collection = () => {
  const { products, loading } = useContext(ShopContext);
  const [filterProducts, setFilterProduct] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [category, setCategory] = useState("");

  const toggleCatagory = useCallback(() => {
    setFilterProduct(
      products.slice().filter((item) => item.category == category)
    );
  }, [category, products]);

  const sortProduct = useCallback(() => {
    switch (sortType) {
      case sortByCategores[1]:
        setFilterProduct(() =>
          filterProducts.slice().sort((a, b) => a.price - b.price)
        );
        break;
      case sortByCategores[2]:
        setFilterProduct(() =>
          filterProducts.slice().sort((a, b) => b.price - a.price)
        );
        break;
      default:
        toggleCatagory();
    }
  }, [sortType, toggleCatagory]);

  useEffect(() => {
    sortProduct();
  }, [sortProduct]);

  useEffect(() => {
    toggleCatagory();
  }, [toggleCatagory]);

  return (
    <div className="flex flex-col gap-1 pt-10 border-t">
      {/* filter options */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
        </p>
        {/* Catagory filter */}
        <div className="border border-gray-300 pl-5 py-3 mt-6">
          {/* <p className="mb-3 text-sm font-medium">CATAGORIES</p> */}
          <fieldset className="mb-3 text-sm font-medium">
            <legend>CATEGORIES</legend>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2"
            >
              {categories.map((c) => (
                <option value={c} key={c}>
                  {c}
                </option>
              ))}
            </select>
          </fieldset>
          {/* <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label>
              <p className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="men's clothing"
                  className="w-3"
                  onChange={(e) => toggleCatagory(e)}
                />
                Men
              </p>
            </label>
            <label>
              <p className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="women's clothing"
                  className="w-3"
                  onChange={(e) => toggleCatagory(e)}
                />
                Women
              </p>
            </label>
            <label>
              <p className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="jewelery"
                  className="w-3"
                  onChange={(e) => toggleCatagory(e)}
                />
                Jewelery
              </p>
            </label>
            <label>
              <p className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="electronics"
                  className="w-3"
                  onChange={(e) => toggleCatagory(e)}
                />
                Electronics
              </p>
            </label>
          </div> */}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* Product Sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => setSortType(e.target.value)}
          >
            {sortByCategores.map((category) => (
              <option value={category} key={category}>
                Sort by:{category}
              </option>
            ))}
          </select>
        </div>

        {/* show all products */}
        <div className="grid grid-cols-3 gap-4 gap-y-6 ml-4">
          {loading ? (
            <Loading />
          ) : filterProducts.length > 0 ? (
            filterProducts.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))
          ) : (
            products &&
            products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
