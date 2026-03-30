import React from "react";
import { useMemo, useState } from "react";
import ProductList from "./Components/productlist";
import Filter from "./Components/filter";
import { products } from "./data/products";
import "./Styles/app.css";

function App() {
  const [category, setCategory] = useState("");

  const filteredProducts = useMemo(() => {
    if (!category) return products;
    return products.filter((p) => p.category === category);
  }, [category,products]);

  return (
    
    <div className="app" style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>Product Card UI</h1>
      <Filter category={category} setCategory={setCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );

}



export default App;
