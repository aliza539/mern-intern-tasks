import React from "react";
import ProductCard from "./productcard";
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