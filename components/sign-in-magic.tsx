"use client";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import React from "react";

export function SignInMagic() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const email = formData.get("email");
    await signIn("resend", { email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <Input name="email" className="w-[30vw] h-10" />
        <Button type="submit">Sign In With Email</Button>
      </div>
    </form>
  );
}
