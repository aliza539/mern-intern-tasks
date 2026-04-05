import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Yahan hum real orders save nahi kar rahe (kyunki DB nahi hai), 
    // bas Admin dashboard ko 'Success' ka signal bhej rahe hain.
    return NextResponse.json({ success: true, message: "Order placed successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to place order" }, { status: 500 });
  }
}