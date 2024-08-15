"use client"

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Navbar(){

    const [toggle, setToggle] = useState(false);
    const path = usePathname();

    const links = [
        {
            path:'/',
            name:'Home'
        },
        {
            path:'/about',
            name:'About'
        },
        {
            path:'/apps',
            name:'Apps'
        }
    ]

    return (
        <div className="bg-red-400 px-20 h-dvh">
            <nav>
                <div className="bg-green-400 h-20 mt-5 w-full flex items-center justify-center overflow-hidden" onClick={()=>setToggle(!toggle)}>
                    <div className="bg-blue-200 flex flex-col justify-between w-full h-full scale-150 rotate-45 space-y-3">
                        <div className="bg-white w-full h-10"></div>
                        <div className="bg-white w-full h-10"></div>
                        <div className="bg-white w-full h-10"></div>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 bg-blue-200 mt-10 ">
                    {
                        links.map((e,i)=>(
                            <Link
                                key={i} 
                                href={e.path} 
                                className="flex space-x-2 text-xl uppercase items-center justify-between tracking-tight"
                            >
                                <span>{e.name}</span>
                                <div className="h-2 w-5 rounded-sm bg-green-400"></div>
                            </Link>
                        ))
                    }
                </div>
            </nav>
        </div>
    )

}