import { AuthError } from "next-auth";
import { NextResponse } from "next/server";

export const userRegister = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const requestBody = {
      name,
      email,
      password,
    };

    const result: any = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const res = await result?.json();

    console.log("signup register form>>>>>>>>>>", res);

    return NextResponse.json(
      { message: res?.message, status: res?.status },
      { status: 201 }
    );
  } catch (err) {
    const error = err as AuthError;
    return error?.cause;
  }
};
