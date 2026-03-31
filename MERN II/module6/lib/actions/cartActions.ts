"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

type CartItem = {
  productId: number;
  qty: number;
};

// ADD TO CART
export async function addToCart(productId: number, qty: number) {
  const cookieStore = await cookies();
  const cart = cookieStore.get("cart");

  let items: CartItem[] = cart ? JSON.parse(cart.value) : [];

  items.push({ productId, qty });

  cookieStore.set("cart", JSON.stringify(items));

  revalidatePath("/cart");
}

// REMOVE FROM CART
export async function removeFromCart(productId: number) {
  const cookieStore = await cookies();
  const cart = cookieStore.get("cart");

  if (!cart) return;

  let items: CartItem[] = JSON.parse(cart.value);

  items = items.filter((item) => item.productId !== productId);

  cookieStore.set("cart", JSON.stringify(items));

  revalidatePath("/cart");
}