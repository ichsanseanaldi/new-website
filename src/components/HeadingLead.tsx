import { Cinzel, Nanum_Myeongjo, Pacifico } from 'next/font/google'
import React from 'react'

const bodoni_font = Cinzel({
    weight:['400'],
    subsets:['latin'],
    display:'swap'
})

interface HeadingLeadProps{
    children:React.ReactNode
    className?:string
}

export default function HeadingLead({children,...props}:HeadingLeadProps) {
  return (
    <span className={`${bodoni_font.className} text-5xl tracking-tighter uppercase mx-1 ${props.className}`}>
        {children}
    </span>
  )
}
