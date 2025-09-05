"use client";

import "./style.css"
import { useState } from "react";
import Link from "next/link";
import { BiUser, BiEnvelope, BiLock, BiShow, BiHide } from "react-icons/bi";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface FoxHubForm {
  formType: "signup" | "login";
  onSubmit: (data: { name?: string; email: string; password: string }) => void;
}

export default function AuthForm({ formType, onSubmit }: FoxHubForm) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // stop the page from reloading
    onSubmit(formData);  // send the data back to parent page
  };


  return (
    <div className="main-div">
      <div className="top">

      <div>
      <Link href="/" className="flex items-center text-blue-600 hover:underline">
        <MdKeyboardArrowLeft size={20} className="mr-1" />
        Return Home
      </Link>
    </div>
        <p className="text-sm text-center mt-2">
          {formType === "signup"
            ? "Already a member? "
            : "Not a member yet? "}
          <Link
            href={formType === "signup" ? "/login" : "/sign-up"}
            className="text-blue-600 underline"
          >
            {formType === "signup" ? "LOGIN NOW" : "JOIN NOW"}
          </Link>
        </p>
    </div>
      
      <form     
      onSubmit={handleSubmit}>
        

   
          {formType === "signup"
            ? 
          (<div className="header">
            <h1>BECOME AN EXCLUSIVE MEMBERS</h1>
            <small>SIGN UP AND JOIN THE PARTNERSHIP</small>
          </div>)

          : (<div className="header">
            <h1>WELCOME BACK EXCLUSIVE MEMBER</h1>
            <small>LOGIN TO CONTINUE</small>
          </div>)
          }
      

        {formType === "signup" && (
      <div className="relative">
        <BiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
        <input
          type="text"
          placeholder="Johnson Doe"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
        )}
        
        <div className="relative">
        <BiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
        <input
          type="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        </div>
        
        <div className="relative">
        <BiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="********"
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {showPassword ? (
          <BiHide
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 cursor-pointer"
            size={20}
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <BiShow
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 cursor-pointer"
            size={20}
            onClick={() => setShowPassword(true)}
          />
        )}
        </div>
        
    
      <button
        type="submit"
        className="bg-black text-white w-full p-2 rounded mt-2"
      >
            {formType === "signup" ? "Become a member" : "Proceed to my account"}
      </button> 
      </form>
      
      <div className="bottom">
          <p>Copyright 2021-2022 FoxHub Inc. All rights Reserved.</p>
          <p>Need help?</p>
      </div>

    </ div>
  )
}