import { cookies } from "next/headers";
import { products } from "@/data/product";
import { removeFromCartAction } from "@/lib/actions/cartActions";
import Navbar from "../Component/Navbar";

export default async function CartPage() {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cart");
  const cartItems = cartCookie ? JSON.parse(cartCookie.value) : [];

  const cartProducts = cartItems.map((item: { productId: string; qty: number }) => {
    const p = products.find(p => p.id === parseInt(item.productId));
    return p ? { ...p, qty: item.qty } : null;
  }).filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cartProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartProducts.map((item: { id: number; name: string; price: number; qty: number }) => (
              <div key={item.id} className="bg-white p-4 flex justify-between shadow rounded">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>Qty: {item.qty} | Price: ${item.price * item.qty}</p>
                </div>
                {/* Server Action Form for Remove */}
                <form action={async () => {
                  'use server';
                  await removeFromCartAction(item.id);
                }}>
                  <button className="bg-red-500 text-white px-4 py-2 rounded">Remove</button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}