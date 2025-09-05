"use client";

import AuthForm from "../auth/page";

export default function LoginPage() {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Login data:", data);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthForm formType="login" onSubmit={handleLogin} />
    </main>
  );
}
