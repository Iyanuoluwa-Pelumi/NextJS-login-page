"use client";

import AuthForm from "@/components/Auth/AuthForm"

export default function SignupPage() {
  const handleSignup = (data: { name?: string; email: string; password: string }) => {
    console.log("Signup data:", data);
  };

  return (
    <AuthForm formType="signup" onSubmit={handleSignup} />
  );
}
