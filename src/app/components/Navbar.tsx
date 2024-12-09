"use client";
import Link from "next/link";  


export default function Navbar(){

  return (
    <div className="max-w-[1440px] w-full mx-auto">
    <nav className="bg-white shadow-md w-[1439]">
      
      <div className="container w-[1412] mx-4 px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="font-Montserrat font-bold leading-[32px] text-[24px] sm:hiddden">
          <Link href="/">Bandage</Link>
        </div>

        {/* Navigation Links */}
        <div className="w-[1155px] h-[58px] absolute mx-64 hidden lg:block">
        <div className="w-[361px] h-[25px] absolute top-[20.5px] flex gap-[15px]">
          <ul className="font-Montserrat font-bold text-[14px] text-[#737373] gap-[15px] leading-[24px] flex justify-center">

          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/shop" className="hover:text-blue-500">
            Shop
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-500">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
          <Link href="/pages" className="hover:text-blue-500">
            Pages
          </Link>
          </ul>
        </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center p-[6] space-x-4">
          <div className="space-x-2 flex items-center">
          <img src="assets/user.png" alt="user" />
          <Link href="/login" className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#23A6F0]">
            Login / Register
          </Link>
          </div>
          
          <div className="flex items-center p-[6] space-x-4">
        <ul className="flex gap-[15px] items-center">
          <li>
          <img src="assets/search.png" alt="sr" width={16} height={16}/>
          </li>
          <li>
             <img src="assets/cart.png" alt="ca" width={16} height={16}/>
           </li>
           <li>
             <img src="assets/heart.png" alt="hr" width={16} height={16}/>
           </li>
         </ul>
         
          
        </div>
        </div>
        
      </div>
    </nav>
    </div>
  );
};


