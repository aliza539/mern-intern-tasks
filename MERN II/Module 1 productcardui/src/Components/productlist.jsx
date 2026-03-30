import React from "react";
import ProductCard from "./Productcard";
import "../styles/productlist.css";

function ProductList({ products }) {
  return (
    <div className="container">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}


export default ProductList;