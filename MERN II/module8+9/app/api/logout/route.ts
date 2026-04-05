import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Dono cookies clear kar dein
  response.cookies.set("session", "", { expires: new Date(0), path: "/" });
  response.cookies.set("role", "", { expires: new Date(0), path: "/" });

  return response;
}