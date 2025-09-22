"use client";

import Link from "next/link";
import Image from "next/image";


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#59599B]">
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
      
      <h3 className="text-white text-center text-4xl font-semibold mb-5">Partnership for Business Growth</h3>
      <p className="text-white text-center max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
        Dicta, hic accusamus qui reiciendis fugiat ipsam pariatur sunt maxime impedit ipsa numquam, brenim, quod corrupti. <br />
        Aliquam reiciendis nisi voluptas quasi nihil.
      </p>

      <Link href="/auth/signup" className="px-4 py-2 rounded-lg shadow mt-5 bg-purple-950 transform active:scale-110 hover:scale-110 transition text-white cursor-pointer">Get Started</Link>
    </div> 
  );
}
