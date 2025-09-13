"use client";

import { useState } from "react";
import Link from "next/link";
import { BiUser, BiEnvelope, BiLock, BiShow, BiHide } from "react-icons/bi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FoxHubForm } from "@/types/AuthTypes";


export default function AuthForm({ formType, onSubmit }: FoxHubForm) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (

    <>
    <div className="flex flex-col items-center justify-around min-h-screen w-full bg-[rgba(249,249,250,1)] p-6">
      

      <div className="flex justify-around items-center w-full">
        <Link href="/" className="flex items-center text-[rgba(66,66,66,1)] no-underline">
          <MdKeyboardArrowLeft size={20} className="mr-1" />
          Return Home
        </Link>
        <p className="text-sm text-center text-[rgba(66,66,66,1)] mt-2">
          {formType === "signup" ? "Already a member? " : "Not a member yet? "}
          <Link
            href={formType === "signup" ? "/auth/login" : "/auth/signup"}
            className=" text-[rgba(66,66,66,1)] underline"
          >
            {formType === "signup" ? "LOGIN NOW" : "JOIN NOW"}
          </Link>
        </p>
      </div>

      <form
        className="flex flex-col items-center justify-around gap-[20px] p-6"
        onSubmit={handleSubmit}
      >

        <div className="flex flex-col items-center gap-[10px] mb-2 text-center">
          <h1 className="font-[600] text-[rgba(33,33,33,1)] text-[25px]">{formType === "signup" ? "BECOME AN EXCLUSIVE MEMBER" : "WELCOME BACK EXCLUSIVE MEMBER"}</h1>
          <small className="text-[rgba(66,66,66,1)] text-[16px]">{formType === "signup" ? "SIGN UP AND JOIN THE PARTNERSHIP" : "LOGIN TO CONTINUE"}</small>
        </div>

        {formType === "signup" && (
          <div className="relative">
            <BiUser className="absolute left-[10px] top-1/2 -translate-y-1/2 text-[rgba(66,66,66,1)]" size={20} />
            <input
              type="text"
              placeholder="Johnson Doe"
              value={formData.name}
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="py-[0.8rem] pr-[5.5rem] pl-[2rem] text-[rgba(66,66,66,1)] border rounded-[5px] outline-none"
            />
          </div>
        )}

          <div className="relative">
          <BiEnvelope className="absolute left-[10px] top-1/2 -translate-y-1/2 text-[rgba(66,66,66,1)]" size={20} />
            <input
              type="email"
              placeholder="example@gmail.com"
              value={formData.email}
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="py-[0.8rem] pr-[5.5rem] pl-[2rem] text-[rgba(66,66,66,1)] border rounded-[5px] outline-none"
            />
          </div>

          <div className="relative">
          <BiLock className="absolute left-[10px] top-1/2 -translate-y-1/2 text-[rgba(66,66,66,1)]" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={formData.password}
              required
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="py-[0.8rem] pr-[5.5rem] pl-[2rem] text-[rgba(66,66,66,1)] border rounded-[5px] outline-none"
            />
            {showPassword ? (
              <BiHide
                className="absolute right-[1rem] top-1/2 -translate-y-1/2 cursor-pointer text-[rgba(66,66,66,1)]"
                size={20}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <BiShow
                className="absolute right-[1rem] top-1/2 -translate-y-1/2 cursor-pointer text-[rgba(66,66,66,1)]"
                size={20}
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

        
          <button
            type="submit"
            className="py-[0.8rem] px-[4.5rem] border rounded-[5px] bg-[rgba(36,36,62,1)] text-[16px] text-[rgba(255,255,255,1)] cursor-pointer"
          >
            {formType === "signup" ? "Become a member" : "Proceed to my account"}
          </button>
  </form>

      <div className="flex justify-around text-[rgba(66,66,66,1)] w-full">
        <p>© {new Date().getFullYear()} FoxHub Inc. All rights reserved.</p>
        <p>Need help?</p>
      </div>
      </div>
    </>
  );
}
