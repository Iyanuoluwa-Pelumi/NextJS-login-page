import Link from "next/link"
import Image from "next/image"

export default function HomePage() {

  return (
  
    <>
      <div className="main-div">
      <div className="flex justify-center align-center">
      <Image src="/fox.png"
        alt="FoxHub Logo"
        width={50}
        height={50}
      />
        <h1> FOXHUB </h1>
        </div>
        
    <h3> Partnership for Business Growth</h3>
    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
      Dicta, hic accusamus qui reiciendis fugiat ipsam pariatur sunt maxime impedit ipsa numquam, brenim, quod corrupti. <br />
      Aliquam reiciendis nisi voluptas quasi nihil.</p>

  <Link href="/auth" className="bg-black text-white px-6 py-3 rounded inline-block">
    Get Started
  </Link>

      </div>
    </>
  
    )
}