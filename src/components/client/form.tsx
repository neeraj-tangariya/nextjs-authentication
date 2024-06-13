"use client";

import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { credentialsLogin } from "@/actions/login";

const LoginForm = () => {
  return (
    <form
      action={async (formData) => {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (!email || !password) {
          return toast.error("Please provide all fields");
        }

        const toastId = toast.loading("Loggin in");

        const error: any = await credentialsLogin(email, password);

        if (!error) {
          toast.success("Login Successfull", {
            id: toastId,
          });
        } else {
          toast.error(error, {
            id: toastId,
          });
        }
      }}
    >
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="email" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Button type="submit">Login</Button>
        </div>
      </div>
    </form>
  );
};

export { LoginForm };
