import { NextResponse, NextRequest } from "next/server";
import { RegisterSchema } from "@/lib/schemas/auth";
import { addUser, userExists } from "@/lib/userstorage";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 1. Zod Validation (Isme email, password, confirmPassword teeno check honge)
    const result = RegisterSchema.safeParse(body);
    
    if (!result.success) {
      // Terminal mein check karein exact error kya hai
      console.log("ZOD ERROR:", result.error.flatten());
      return NextResponse.json({ 
        error: "Validation failed. Passwords must match and be at least 6 characters." 
      }, { status: 400 });
    }

    // 2. Data extraction (confirmPassword validation ke liye zaruri tha, save ke liye nahi)
    const { email, password } = result.data;

    // 3. User check
    if (userExists(email)) {
      return NextResponse.json({ error: "User already registered with this email." }, { status: 400 });
    }

    // 4. Role Logic
    const role = email.toLowerCase() === "admin%40store.com" ? "admin" : "user";
    
    // 5. Save to storage
    addUser(email, password, role);

    // 6. Response with Redirect Path
    const response = NextResponse.json({ 
      success: true, 
      message: "Registered!",
      role: role,
      redirectTo: role === "admin" ? "/dashboard" : "/home" 
    }, { status: 201 });
    
    // 7. Cookies Setup
    response.cookies.set("session", email, { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 });
    response.cookies.set("role", role, { 
      httpOnly: false, // Isay false rakha hai taake frontend Welcome page pe role parh sakay
      path: "/", 
      maxAge: 60 * 60 * 24 
    });

    return response;

  } catch (error) {
    console.error("REGISTER_ERROR:", error);
    return NextResponse.json({ error: "Something went wrong on the server." }, { status: 500 });
  }
}