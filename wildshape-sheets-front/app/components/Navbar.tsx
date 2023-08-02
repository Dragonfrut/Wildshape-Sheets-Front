"use client"

import { useState } from "react"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { classicNameResolver } from "typescript";

export default function Navbar() {

    const [menuIcon, setIcon] = useState(false);

    const SmallScreenNav = () => {
        setIcon(!menuIcon);
    }

  return (
    <header className="bg-slate-700 w-full ease-in duration-300 fixed top-0 left-0 z-10">
        <nav className="max-w-[1366] mx-auto h-[100px] flex justify-between items-center p-4">
            <div>
                <Link href='/' onClick={SmallScreenNav}>
                    <span className="font-extrabold test-3xl md:test-2xl xl:text-3xl uppercase">
                        Wildshape Sheets</span>
                </Link>
            </div>

            {/* larger screen nav */}
            <ul className="hidden md:flex uppercase font-semibold text-1xl lg:test-[20px] text-slate-200">
                <li className="mr-4 lg:mr-8 hover:text-[black]">
                    <Link href="/about">About</Link>
                </li>
                
            </ul>

            <div className="hidden md:flex">
                <div className="flex">
                    <Link href="/login">
                        <button className="border-2 mr-5 border-[purple] text-slate-100 hover:bg-slate-100 hover:text-[purple] rounded-full uppercase font-bold px-8 py-8">
                            Login</button> 
                    </Link>
                </div>
            </div>

            {/* smaller screen nav - icons */}
            {/* change icon on click */}
            <div onClick={SmallScreenNav} className="flex md:hidden">
                {menuIcon ? 
                ( <AiOutlineClose size={30} className="" />)
                :
                (<AiOutlineMenu size={30} className="" />)}
            </div>

            {/* smaller screen navbar */}
            <div className={menuIcon ? 
            'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300'
            :
            'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300'
            }>

                <div className="w-full">
                    <ul className="uppercase font-bold text-2xl">
                        <li onClick={SmallScreenNav} className="py-5 hover:text-[black] cursor-pointer">
                            <Link href={"/about"}>About</Link>
                        </li>
                    </ul>
                    <div className="flex flex-col justify-center items-center mt-16">
                        <Link href="/login" onClick={SmallScreenNav}>
                            <button className="border-2 border-[purple] text-slate-100 rounded-full uppercase font-bold py-3 w-[250px] mb-5">Login</button>
                        </Link>
                    </div>

                </div>
            </div>

        </nav>
    </header>
  )
}
