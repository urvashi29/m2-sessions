import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then(async (res) => {
        let response = await res.data.products;
        setProducts(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //   React List
  const productList = products.map((product) => {
    return <Card product={product} bgColor="purple" flag="product" />;
  });

  return <>{productList}</>;
};

export default Products;
