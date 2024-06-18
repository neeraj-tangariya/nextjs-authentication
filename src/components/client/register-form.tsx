"use client";

import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { userRegister } from "@/actions/signup";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const router = useRouter();

  const handleRegister = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
      return toast.error("Please provide all fields");
    }

    try {
      const result: any = await userRegister(name, email, password);
      const res = await result?.json();

      const toastId = toast.loading("processing...");

      if (res.status === 200) {
        toast.success(res?.message, {
          id: toastId,
        });
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(`Registration failed: ${error?.message}`);
    }
  };

  return (
    <form action={(formData) => handleRegister(formData)}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="name" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="email" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Button type="submit">Sign Up</Button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
