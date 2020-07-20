import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
  const productUrl = `https://5f13ae592710570016b37857.mockapi.io/products?page=1&limit=10`;

  let products = useAxiosGet(productUrl);

  let content = null;

  if (products.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.map((product, key) => (
      <div key={key}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Products</h1>
      {content}
    </div>
  );
}

export default Home;
