import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <>
      {products.map((product) => {
        return (
          <p style={{ fontSize: "20px", color: "teal" }}>{product.title}</p>
        );
      })}
    </>
  );
};

export default Products;
