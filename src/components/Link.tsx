"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function CustomLink({
    link,
    text
}:{
    link:string,
    text:string
}) {

    const router = useRouter()

    const click = () => {
        router.push(link)
    }

    return (
        <button
            className="text-xl tracking-tighter text-blue-500 underline hover:opacity-70 inline-block mx-2"
            onClick={()=>click()}
        >
            {text}
        </button>
    )

}
