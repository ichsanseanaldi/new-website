import { Bodoni_Moda } from 'next/font/google'
import React from 'react'

const bodoni_font = Bodoni_Moda({
    weight:['400','500','600','700','800','900'],
    subsets:['latin']   
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
