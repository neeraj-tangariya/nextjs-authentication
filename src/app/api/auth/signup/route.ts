import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  const requestBody: any = {
    name,
    email,
    password,
  };

  const res = await fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const data = await res.json();

  return NextResponse.json(
    { message: data?.message, status: data?.status },
    { status: 201 }
  );
}
