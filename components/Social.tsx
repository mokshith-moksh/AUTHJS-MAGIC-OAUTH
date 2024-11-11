"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex flex-col justify-center items-center w-[30%] gap-y-3">
      <Button
        className="w-full"
        variant={"outline"}
        size={"lg"}
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-20 w-20" />
      </Button>
      <Button
        className="w-full"
        variant={"outline"}
        size={"lg"}
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-20 w-20" />
      </Button>
    </div>
  );
};
