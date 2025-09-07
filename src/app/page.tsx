"use client";

import Link from "next/link";
import Image from "next/image";


export default function HomePage() {
  return (
    <div className="main-div">
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

      <Link href="/auth/signup" className="cta-button">Get Started</Link>

    </div>
  );
}
