"use client";

import AuthForm from "@/components/AuthForm"

export default function SignupPage() {
  const handleSignup = (data: { name?: string; email: string; password: string }) => {
    console.log("Signup data:", data);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthForm formType="signup" onSubmit={handleSignup} />
    </main>
  );
}
