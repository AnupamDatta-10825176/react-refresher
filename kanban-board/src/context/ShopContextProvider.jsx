/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      var res = await fetch("https://fakestoreapi.com/products");
      var data = await res.json();
      setProducts(data);
      setLoading(false);
    }

    getProducts();
  }, []);

  const value = {
    products,
    loading,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
