import React from "react";
import "../Styles/Productcard.css";
import { useState } from "react";

function ProductCard({name, price, image, rating }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="card">
      <img src={image ? image : "/images/placeholder.png"} alt={name} />
<h2>{name}</h2>
<p className="price">Price: ${price}</p>
<p className="rating">Rating: {rating} ⭐</p>

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