"use client";

import Link from "next/link";
import Image from "next/image";


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#59599B]">
        <Image
          src="/foxhub logo.png"
          alt="FoxHub Logo"
          width={250}
          height={55}
        />
      

      <Image
        src="/handshake-img.png"
        alt="Handshake Image"
        width={200}
        height={100}
      />
      
      <h3 className="text-white text-4xl font-semibold mb-5">Partnership for Business Growth</h3>
      <p className="text-white text-center max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
        Dicta, hic accusamus qui reiciendis fugiat ipsam pariatur sunt maxime impedit ipsa numquam, brenim, quod corrupti. <br />
        Aliquam reiciendis nisi voluptas quasi nihil.
      </p>

      
      <Link href="/auth/signup" className="px-4 py-2 rounded-lg shadow mt-5 bg-purple-950 hover:bg-purple-700 text-white cursor-pointer">Get Started</Link>

      
      <div className="p-8 space-y-6">
      {/* Base layer styles automatically apply to h1 and p */}
      <h1>Welcome to My App</h1>
      <p>This paragraph automatically has gray text and relaxed line height.</p>

      {/* Components layer: reusable classes */}
      <button className="btn-primary">Get Started</button>

      <div className="card">
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        <p>Card content goes here.</p>
      </div>

      </div>
    </div> 

    
  );
}
