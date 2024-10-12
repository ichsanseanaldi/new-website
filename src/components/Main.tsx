"use client"

import React from 'react'
import { social_media } from "@/addons/social";
import HeadingLead from "@/components/HeadingLead";
import CustomLink from "@/components/Link";
import { Bebas_Neue, Lobster, Poppins } from "next/font/google";
import Link from "next/link";
import { SparklesCore } from './ui/sparkles';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const poppins_font = Poppins({
    subsets: ['latin'],
    weight: ['900', '800', '700', '400', '500', '600', '300', '200'],
    style: ['italic', 'normal'],
    display: 'swap'
})

const bebas_neue_font = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
    display: 'swap'

})

const lobster_font = Lobster({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap'

})

export default function Main() {
    return (
        <div className="h-full w-full flex items-center flex-col justify-start mt-28 mb-2 lg:mb-32 select-none">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full fixed inset-0 z-[-1]"
                particleColor="#FFFFFF"
            />
            {/* <CardContainer className="inter-var" >
                <CardBody className=" relative group/card w-full" >
                    <CardItem
                        translateZ="20"
                        className=""
                    > */}
                        <div className="text-yellow-500">
                            <span className={`text-6xl inline-block tracking-tight font-bold uppercase ${poppins_font.className}`}>Hello There!</span>
                            <span className="text-2xl inline-block font-bold  tracking-[1rem] mx-2 uppercase">My Name Is</span>
                            <span className={`text-7xl inline-block tracking-tighter uppercase font-light mx-1 ${poppins_font.className}`}>
                                Ichsan Seanaldi Permana
                            </span>
                            <span className={`text-6xl inline-block mx-2 ${bebas_neue_font.className}`}>i am</span>
                            <HeadingLead>
                                an <em className="text-3xl tracking-widest">agnostic-stack</em> software developer
                            </HeadingLead>
                            <span className={`${lobster_font.className} text-5xl`}>Well, Kind of...</span>
                            <span className="text-4xl">, cause most of the time i deal with frontend dev stuff</span>
                            <span className={`text-5xl inline-block tracking-widest ${bebas_neue_font.className}`}>, which</span>
                            <span className="text-3xl inline-block font-light">Technically makes me a</span>
                            <span className={`text-3xl inline-block tracking-wider font-semibold uppercase ml-2 ${poppins_font.className}`}>Frontend Developer</span>
                            <span className={`text-4xl inline-block font-semibold uppercase ${bebas_neue_font.className}`}>
                                , But because i thought being an
                            </span>
                            <span className={`text-4xl inline-block font-semibold uppercase mx-2 ${lobster_font.className}`}>
                                &quot;agnostic-stack&quot;
                            </span>
                            <span className="text-xl inline-block uppercase tracking-tight font-bold italic">Sounds really</span>
                            <HeadingLead>Fancy</HeadingLead>
                            <span className="text-xl inline-block mx-1">So i just put it up there.</span>
                            <span className="text-5xl block mx-1 font-extrabold">AND SO.....</span>
                            <span className="text-xl inline-block mx-1">
                                From here now on you wont be having a headache by reading this text with several font combination, 
                                anyway i have also worked with some backend stuff as well, 
                                here are the tools i have used over in my workplace 
                                <b> (but not limited to)</b>: next.js, laravel, nest.js, docker, rabbitMQ, postgres, redis, tailwind. 
                                I am no super duper <span className='line-through'>mart</span> expert in any of them, but i can find my way around properly if needed be. 
                                Thanks for spending your time, have a good one!
                            </span>
                                <span className='text-xs mx-1'>Star Wars intro lookin, ahh!</span>
                            
                        </div>
                    {/* </CardItem>
                </CardBody>
            </CardContainer> */}
            <div className="fixed p-3 rounded-sm top-10 bg-black space-y-0 space-x-3 flex lg:right-10 lg:top-[50%] lg:bottom-[50%]  lg:flex-col lg:space-y-3 lg:space-x-0">
                {
                    social_media.map((sm, i) => (
                        <Link href={sm.url} target="_blank" className="group" key={i}>
                            <div dangerouslySetInnerHTML={{ __html: sm.svg }} className="fill-white group-hover:fill-yellow-500 duration-200"></div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
