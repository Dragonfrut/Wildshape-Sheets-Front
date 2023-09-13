"use client"

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);

  const toggleMenu = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <header className="bg-slate-700 w-full fixed top-0 left-0 z-10">
      <nav className="max-w-7xl mx-auto h-[100px] flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Link href="/" onClick={toggleMenu}>
            <span className="font-extrabold text-3xl md:text-4xl xl:text-5xl uppercase text-white">
              Wildshape Sheets
            </span>
          </Link>
        </div>

        {/* Larger screen navigation */}
        <ul className="hidden md:flex uppercase font-semibold text-xl lg:text-2xl text-white space-x-8">
          <li className="hover:text-purple-500">
            <Link href="/about">About</Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>

        {/* Login button */}
        <div className="hidden md:flex">
          <Link href="/login">
            <button className="border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white rounded-full uppercase font-bold px-6 py-3">
              Login
            </button>
          </Link>
        </div>

        {/* Smaller screen menu icon */}
        <div onClick={toggleMenu} className="md:hidden">
          {menuIcon ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
      </nav>

      {/* Smaller screen menu */}
      <div
        className={
          menuIcon
            ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex flex-col justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
            : "md:hidden absolute top-[100px] right-0 left-[-100%] flex flex-col justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
        }
      >
        <ul className="uppercase font-bold text-2xl space-y-4">
          <li onClick={toggleMenu} className="hover:text-purple-500 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
        <div className="mt-8">
          <Link href="/login" onClick={toggleMenu}>
            <button className="border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white rounded-full uppercase font-bold px-6 py-3">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
