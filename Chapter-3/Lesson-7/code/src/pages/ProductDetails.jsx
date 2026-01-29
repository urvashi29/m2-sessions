import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  console.log(params.id);

  const fetchProducts = () => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then(async (res) => {
        let response = await res.data;
        setProduct(response);
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
      <p>Product Detail page</p>
      {product && product.title}
    </>
  );
};

export default ProductDetails;
