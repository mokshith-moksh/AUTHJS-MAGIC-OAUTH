import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { prisma } from "./utils/db";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { sendVerificationRequest } from "./lib/authSendRequest";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
    verifyRequest: "/auth/verifyRequest",
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      // If there's a user object, add the userId to the JWT token
      if (user) {
        token.userId = user.id; // Assuming user.id exists
      }
      return token; // Return the token with the userId
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session; // Return the modified session
    },
  },
  providers: [
    Google,
    Github,
    Resend({
      from: "no-reply@educlout.com",
      sendVerificationRequest,
    }),
  ],
});
