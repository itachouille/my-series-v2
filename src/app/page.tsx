"use client";
import { buttonVariants } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {
  return (
    <div>
      <LoginLink className={buttonVariants({ variant: "outline" })}>
        Login
      </LoginLink>
      <RegisterLink className={buttonVariants({ variant: "default" })}>
        Sign up
      </RegisterLink>
    </div>
  );
}
