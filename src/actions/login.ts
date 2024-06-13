"use server";

import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";

export const credentialsLogin = async (email: string, password: string) => {
  try {
    await signIn("credentials", {
      email,
      password,
    });
  } catch (err) {
    const error = err as AuthError;
    return error?.cause;
  }
};
