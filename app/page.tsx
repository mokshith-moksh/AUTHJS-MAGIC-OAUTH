"use client";

import { SignInMagic } from "@/components/sign-in-magic";
import { Social } from "@/components/Social";

export default function Home() {
  return (
    <div>
      <Social />
      <SignInMagic />
    </div>
  );
}
