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
    display:'swap'
})

const bebas_neue_font = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
    display:'swap'

})

const lobster_font = Lobster({
    subsets: ['latin'],
    weight: ['400'],
    display:'swap'

})

export default function Main() {
    return (
        <div className="h-full w-full flex items-center flex-col justify-start pt-10 select-none">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full absolute inset-0 z-[-1]"
                particleColor="#FFFFFF"
            />
            <CardContainer className="inter-var">
                <CardBody className=" relative group/card w-full">
                    <CardItem
                        translateZ="50"
                        className=""
                    >
                        <div className="text-yellow-500 skew--12">
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
                            <span className={`text-5xl inline-block tracking-widest italic ${bebas_neue_font.className}`}>Anyway</span>
                            <CustomLink link="https://i.giphy.com/ray4IqT73lQhh24qKq.webp" text="here" />
                            <HeadingLead className="!text-4xl">is my introduction video</HeadingLead>
                        </div>
                    </CardItem>
                    <CardItem
                        translateZ="60"
                        className="mx-auto my-10"
                    >
                        <div className="flex space-x-3">
                            {
                                social_media.map((sm, i) => (
                                    <Link href={sm.url} target="_blank" className="group" key={i}>
                                        <div dangerouslySetInnerHTML={{ __html: sm.svg }} className="fill-white group-hover:fill-yellow-500 duration-200"></div>
                                    </Link>
                                ))
                            }
                        </div>
                    </CardItem>
                </CardBody>
            </CardContainer>


        </div>
    )
}
