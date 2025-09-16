"use client";

import AuthForm from "@/components/Auth/AuthForm";

export default function LoginPage() {
  const handleLogin = (data: { name?: string; email: string; password: string }) => {
    console.log("Login data:", data);
  };

  return (
    <AuthForm formType="login" onSubmit={handleLogin} />
  );
}
