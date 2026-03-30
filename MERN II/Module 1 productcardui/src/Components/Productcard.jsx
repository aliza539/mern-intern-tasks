import { useState } from "react";

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <img src={product.image} alt={product.name} width="150" />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating} ⭐</p>

      <button onClick={() => setAdded(!added)}>
        {added ? "Added ✅" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;