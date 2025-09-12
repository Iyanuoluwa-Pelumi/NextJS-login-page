"use client";

import Link from "next/link";
import Image from "next/image";


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
        height={300}
      />
      
      <h3 className="font-[600] text-[25px]">Partnership for Business Growth</h3>
      <p className="text-center max-w-md mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
        Dicta, hic accusamus qui reiciendis fugiat ipsam pariatur sunt maxime impedit ipsa numquam, brenim, quod corrupti. <br />
        Aliquam reiciendis nisi voluptas quasi nihil.
      </p>

      
      <div className="py-7 mt-[200px] ">
        <Link href="/auth/signup" className="py-8 px-4 rounded-2xl mt-7 bg-[rgba(66,66,66,1)] cursor-pointer block">Get Started</Link>
      </div>

    </div> 
  );
}
