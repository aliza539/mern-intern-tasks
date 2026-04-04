/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse, NextRequest } from "next/server";
import { LoginSchema } from "@/lib/schemas/auth";
import { getUsers } from "@/lib/userstorage"; // Hum getUsers use karenge user dhoondne ke liye

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = LoginSchema.safeParse(body);

    // 1. Validation Check
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.flatten().fieldErrors }, 
        { status: 400 }
      );
    }

    const { email, password } = result.data;

    // 2. User ko JSON file mein dhoondna (findUser ki jagah ye logic)
    const users = getUsers();
    const user = users.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (u: any) => u.email === email.toLowerCase() && u.password === password
    );

    // 3. Agar user nahi mila
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password. Please check your credentials." }, 
        { status: 401 }
      );
    }

    // 4. Success Response aur Cookies Setting
    // Hum role database se utha rahe hain (jo register ke waqt save hua tha)
    const response = NextResponse.json({ 
      success: true, 
      role: user.role, // Frontend ko batane ke liye ke ye admin hai ya user
      redirectTo: user.role === "admin" ? "/dashboard" : "/home"
    });

    // Session Cookie
    response.cookies.set("session", user.email, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 din tak login rahega
      path: "/" 
    });

    // Role Cookie (For Middleware and Navbar)
    response.cookies.set("role", user.role, { 
      httpOnly: false, // Isay false rakha hai taake Frontend (JS) isay parh sakay 
      path: "/" 
    });

    return response;

  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong on the server" }, 
      { status: 500 }
    );
  }
}