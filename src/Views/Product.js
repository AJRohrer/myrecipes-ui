import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Product() {
  const { id } = useParams();
  const productUrl = `https://5f13ae592710570016b37857.mockapi.io/products/${id}`;

  let content = null;
  let product = useAxiosGet(productUrl);

  if (product.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.avatar} alt={product.data.name}></img>
        </div>
        <div className="text-m mb-3">{product.data.description}</div>
        <div></div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;