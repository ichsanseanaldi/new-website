"use client"

import React from 'react'
import { social_media } from "@/addons/social";
import HeadingLead from "@/components/HeadingLead";
import CustomLink from "@/components/Link";
import { Bebas_Neue, Inter, Lobster, Poppins } from "next/font/google";
import Link from "next/link";
import { SparklesCore } from './ui/sparkles';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import localFont from 'next/font/local'
import { cn } from '@/lib/utils';
import { PinContainer } from './ui/3d-pin';
import Image from 'next/image';

const star_wars_font = localFont({
    src: '.././assets/StarJhol.ttf',
    display: 'swap'
})

export default function Main() {
    return (
        <div className="h-full max-w-[500px] flex items-center flex-col justify-start lg:my-2 select-none mx-auto">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1}
                particleDensity={200}
                className="w-full h-full fixed inset-0 z-[-1]"
                particleColor="#FFFFFF"
            />
            <div className={cn("text-yellow-500 perspective max-h-[500px] overflow-scroll pt-80 px-10 subpixel-antialiased")}>
                <h1 className={cn('text-5xl text-center mb-5', star_wars_font.className)}>ichsan Seanaldi</h1>
                <p className='text-justify'>
                    Is my name. I am an agnostic-stack software developer, well, kind of... because most of the time I focus on frontend development, which technically makes me a Frontend Developer. But since &ldquo;agnostic-stack&ldquo; has a nice ring to it, I decided to embrace it.
                    Aside from my primary work in frontend development, I have also delved into backend technologies.
                </p>
                <br />
                <p className='text-justify'>
                    The tools I&apos;ve worked with in my workplace include: <i>Next.js, Laravel, Nest.js, Docker, RabbitMQ, GraphQL, Postgres, Redis, and Tailwind</i>. While I may not be a certified expert in each of these, I am confident in my ability to navigate them and solve problems efficiently.
                </p>
                <br />
                <p className='text-justify'>
                    Additionally, I thrive in performance optimization, ensuring that users enjoy the best possible experience, whether by speeding up frontend applications by reducing its bundle cost or optimizing backend processes for scalability.
                </p>
                <br />
                <p className='text-justify'>
                    Interestingly, I also have a publication in the field of gamification (which you can look up), I&apos;ve also had teaching experience in a vocational school, which has helped shape my ability to communicate complex topics in simple ways.
                </p>
                <br />
                <p className='text-justify'>
                    I am always eager to learn and adapt to different environments, constantly pushing myself to grow and become the best professional I can be in my field.
                </p>
                <br />
                <p className='text-justify'>
                    I&apos;m currently working on awesome project, but if you need something, feel free to contact me using the links below!
                </p>
            </div>
            <div className="fixed p-3 rounded-sm bottom-10 bg-black space-y-0 space-x-3 flex">
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
