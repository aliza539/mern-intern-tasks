'use client'

import { useState } from "react";

type Props = {
  name: string;
  price: number;
  image: string;
  rating: number;
};

export default function ProductCard({ name, price, image, rating }: Props) {
  const [added, setAdded] = useState(false);

  return (
    <div className="border p-4">
      <img src={image || "/placeholder.png"} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Rating: {rating} ⭐</p>

      <button onClick={() => setAdded(!added)}>
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}