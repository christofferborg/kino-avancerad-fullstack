"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0E131B] md:fixed md:top-0 md:left-0 md:z-[1000] md:px-8 md:py-4">

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-start gap-8">

        <Link href="/" className="logo">
          <img
            src="/img/Exclude.png"
            alt="Kino"
            className="h-[50px]"
          />
        </Link>

        <nav className="flex items-center">
          <ul className="flex gap-8 list-none m-0 p-0">
           
            
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Evenemang
              </Link>
            </li>

            <li>
              <Link
                href="/movies"
                className="text-gray-400 hover:text-white transition"
              >
               
               Filmer
              </Link>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition">
                Mer ▾
              </button>

              <ul className="hidden group-hover:block absolute top-full left-0 bg-black rounded-md min-w-[150px] p-2 z-50">



                <li className="p-2">
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    Om biografen
                  </Link>
                </li>

                <li className="p-2">
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Erbjudanden
                  </Link>
                </li>

                <li className="p-2">
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Kontakt & oss
                  </Link>
                </li>

                <li className="p-2">
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Mat & Dryck
                  </Link>
                </li>

                <li className="p-2">
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Presentkort
                  </Link>
                </li>

                <li className="p-2">
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Signup
                  </Link>
                </li>

              </ul>
            </li>

          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-400 hover:text-white transition"
          >
            Logga in
          </Link>

          <button className="text-gray-400 hover:text-white transition">
            Umeå ▾
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 h-[100px] bg-[#0E131B] flex justify-around items-center z-[3000] pb-12 md:hidden">

        
      {/* Mobile, Hem ikon */}  
      <Link 
      href="/"
      className="text-gray-400 hover:text-white transition"
      >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      >
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V20h5v-6h4v6h5V9.5" />
      </svg>
      </Link>



   <Link
        href="/movies"
       className="text-gray-400 hover:text-white transition"
       >
      <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="1.8"
       strokeLinecap="round"
       strokeLinejoin="round"
       className="w-9 h-9"
       >
       <circle cx="11" cy="11" r="6.5" />

       <circle cx="11" cy="7.5" r="1" fill="currentColor" />
       <circle cx="7.5" cy="11" r="1" fill="currentColor" />
       <circle cx="14.5" cy="11" r="1" fill="currentColor" />
       <circle cx="11" cy="14.5" r="1" fill="currentColor" />

       <path d="M16.5 16.5H20" />
    </svg>
  </Link>





  
<Link
  href="#"
  className="text-gray-400 hover:text-white transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-9 h-9"
  >
    <rect x="4" y="5" width="16" height="15" rx="2" />

    <line x1="4" y1="9" x2="20" y2="9" />

    <line x1="8" y1="3" x2="8" y2="7" />

    <line x1="16" y1="3" x2="16" y2="7" />

    <circle cx="15" cy="15" r="1.5" fill="currentColor" stroke="none" />
  </svg>
</Link>




   <button
     onClick={() => setMenuOpen(!menuOpen)}
     className="text-gray-400 hover:text-white transition flex items-center justify-center"
     >
     <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2.5"
       strokeLinecap="round"
       className="w-9 h-9"
       >
       <line x1="5" y1="7" x2="19" y2="7" />
       <line x1="5" y1="12" x2="19" y2="12" />
       <line x1="5" y1="17" x2="19" y2="17" />
     </svg>
   </button>



      </nav>

      
       {menuOpen && (
           
       <div className="fixed inset-0 bg-black text-white flex flex-col justify-between px-4 py-27 z-[2000] md:hidden">


 
           
      <Link
       href="/about"
       className="w-full flex items-center justify-between px-4 py-3 rounded-[5px] hover:bg-[#0E131B] active:bg-[#0E131B] transition"
       >
       <div className="flex items-center gap-4">
       
       
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="8" />
        <line x1="12" y1="10" x2="12" y2="16" />
        <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>


       <span className="text-[18px] font-medium">
         Om Biografen
       </span>
       </div>

       <span className="text-gray-500 text-2xl">
        ›
       </span>
      </Link>




      <Link
       href="/#"
       className="w-full flex items-center justify-between px-4 py-3 rounded-[5px] hover:bg-[#0E131B] active:bg-[#0E131B] transition"
       >
       <div className="flex items-center gap-4">
       
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
       <path d="M7 3h10l4 4v10l-4 4H7l-4-4V7z" />
       <line x1="8" y1="16" x2="16" y2="8" />
       <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
       <circle cx="15" cy="15" r="1" fill="currentColor" stroke="none" />
     </svg>


       <span className="text-[18px] font-medium">
         Erbjudanden
       </span>
       </div>

       <span className="text-gray-500 text-2xl">
        ›
       </span>
      </Link>
           

      <Link
       href="/#"
       className="w-full flex items-center justify-between px-4 py-3 rounded-[5px] hover:bg-[#0E131B] active:bg-[#0E131B] transition"
       >
       <div className="flex items-center gap-4">
       


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
       <rect x="5" y="5" width="14" height="14" rx="1" />
       <circle cx="12" cy="10" r="2.5" />
       <path d="M8.5 16c1.5-2 5.5-2 7 0" />
     </svg>


       <span className="text-[18px] font-medium">
         Kontakta oss
       </span>
       </div>

       <span className="text-gray-500 text-2xl">
        ›
       </span>
      </Link>   



      <Link
       href="/#"
       className="w-full flex items-center justify-between px-4 py-3 rounded-[5px] hover:bg-[#0E131B] active:bg-[#0E131B] transition"
       >
       <div className="flex items-center gap-4">


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
       <path d="M7 8h10l-1.5 11h-7z" />
       <line x1="9" y1="8" x2="10" y2="19" />
       <line x1="12" y1="8" x2="12" y2="19" />
       <line x1="15" y1="8" x2="14" y2="19" />
       <circle cx="9" cy="5" r="1" fill="currentColor" stroke="none" />
       <circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" />
       <circle cx="15" cy="5" r="1" fill="currentColor" stroke="none" />
     </svg>

 
       <span className="text-[18px] font-medium">
        Mat & Dryck
       </span>
       </div>

       <span className="text-gray-500 text-2xl">
        ›
       </span>
      </Link>   




      <Link
       href="/#"
       className="w-full flex items-center justify-between px-4 py-3 rounded-[5px] hover:bg-[#0E131B] active:bg-[#0E131B] transition"
       >
       <div className="flex items-center gap-4">
       
       
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
       <rect x="3" y="7" width="18" height="14" rx="1" />
       <line x1="12" y1="7" x2="12" y2="21" />
       <line x1="3" y1="12" x2="21" y2="12" />
       <path d="M12 7c-1.5-2-3-2-3 0" />
       <path d="M12 7c1.5-2 3-2 3 0" />
      </svg>


       <span className="text-[18px] font-medium">
         Presentkort
       </span>
       </div>

       <span className="text-gray-500 text-2xl">
        ›
       </span>
      </Link>        


      
      <Link
       href="/#"
       className="w-full flex items-center justify-between px-4 py-3 rounded-[5px] hover:bg-[#0E131B] active:bg-[#0E131B] transition"
       >
       <div className="flex items-center gap-4">
       
        
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
       <circle cx="12" cy="8" r="3.5" />
       <path d="M6 19c1.5-3 10.5-3 12 0" />
      </svg>


       <span className="text-[18px] font-medium">
         Signup
       </span>
       </div>

       <span className="text-gray-500 text-2xl">
        ›
       </span>
      </Link>


      
      <Link
        href="/login"
        className="w-full flex items-center justify-between px-4 py-3 mt-10 rounded-[5px] hover:bg-[#0E131B] active:bg-[#0E131B] transition"
       >
       <div className="flex items-center gap-4">
         

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
         <circle cx="12" cy="8" r="3.5" />
         <path d="M6 19c1.5-3 10.5-3 12 0" />
       </svg>


         <span className="text-[18px] font-medium">
          Logga in
         </span>
       </div>

       <span className="text-gray-500 text-2xl">
         ›
       </span>
      </Link>

      <Link
       href="#"
        className="w-full flex items-center justify-between px-4 py-3 rounded-[5px] hover:bg-[#0E131B] active:bg-[#0E131B] transition"
       >
       <div className="flex items-center gap-4">

        
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
       <path d="M12 21s6-5 6-10a6 6 0 1 0-12 0c0 5 6 10 6 10z" />
       <circle cx="12" cy="11" r="2" />
     </svg>


         <span className="text-[18px] font-medium">
          Plats
         </span>
       </div>

         <span className="text-gray-500 text-2xl">
           ›
         </span>
      </Link>


      
    

  </div>
)}


    </header>
  );
}
