import { cookies } from "next/headers";
import { products } from "@/data/product";
import { removeFromCart } from "@/lib/actions/cartActions";

export default async function CartPage() {
  const cookieStore = await cookies();
  const cart = cookieStore.get("cart");

  let items = cart ? JSON.parse(cart.value) : [];

  const cartProducts = items.map((item: any) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...product, qty: item.qty };
  });

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Cart</h1>

      {cartProducts.map((item: any) => (
        <div key={item.id} className="border p-4 my-2">
          <p>{item.name}</p>
          <p>Qty: {item.qty}</p>

          <form action={removeFromCart.bind(null, item.id)}>
            <button className="bg-red-500 text-white px-2 py-1">
              Remove
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}