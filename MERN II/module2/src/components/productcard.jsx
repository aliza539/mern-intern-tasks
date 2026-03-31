import React from "react";
import { useState } from "react";

function ProductCard({ title, price, image, rating }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="card">
      <img src={image ? image : "/images/placeholder.png"} alt={title} />
      <h2>{title}</h2>
      <p className="price">Price: ${price}</p>
      <p className="rating">Rating: {rating ? rating.rate : "N/A"} ⭐</p>

       <button
        className={`btn ${added ? "added" : ""}`}
        onClick={() => setAdded(!added)}
      >
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
    
  );
}
export default ProductCard;
