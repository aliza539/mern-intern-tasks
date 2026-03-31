import { addToCart } from "@/lib/actions/cartActions";

export default function AddButton({ id }: { id: number }) {
  return (
    <form action={addToCart.bind(null, id, 1)}>
      <button className="bg-black text-white px-3 py-1">
        Add to Cart
      </button>
    </form>
  );
}