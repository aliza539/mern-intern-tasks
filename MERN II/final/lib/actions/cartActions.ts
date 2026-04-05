"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function addToCartAction(productId: number, qty: number) {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cart");
  
  const items: { productId: number; qty: number }[] = cartCookie 
    ? JSON.parse(cartCookie.value) 
    : [];

  // --- LOGIC START ---
  // 1. Check karo kya ye product pehle se cart mein hai?
  const existingItem = items.find((item) => item.productId === productId);

  if (existingItem) {
    // 2. Agar hai, to sirf uski quantity (qty) barha do
    existingItem.qty += qty;
  } else {
    // 3. Agar nahi hai, to naya item push karo
    items.push({ productId, qty });
  }
  // --- LOGIC END ---

  cookieStore.set("cart", JSON.stringify(items), { 
    path: "/", 
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7 // 1 week tak cart save rahega
  });

  revalidatePath("/cart"); // UI ko batane ke liye ke data change ho gaya hai
}

// Remove function wese hi rahega jese pehle tha
export async function removeFromCartAction(productId: number) {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cart");

  if (cartCookie) {
    let items: { productId: number; qty: number }[] = JSON.parse(cartCookie.value);
    items = items.filter((item) => item.productId !== productId);
    cookieStore.set("cart", JSON.stringify(items), { path: "/" });
  }
  revalidatePath("/cart");
}