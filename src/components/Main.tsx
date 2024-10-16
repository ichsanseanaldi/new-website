"use client"

import React, { useState } from 'react'
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
import { Button } from './ui/button';
import { RocketIcon, XIcon } from 'lucide-react';

const star_wars_font = localFont({
    src: '.././assets/Starjhol.ttf',
    display: 'swap'
})

export default function Main() {

    const [isPerspective, setIsPerspective] = useState<boolean>(false)

    return (
        <div className="h-full max-w-[600px] flex items-center flex-col justify-start lg:my-2 select-none mx-auto  space-y-24">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.5}
                maxSize={1}
                particleDensity={50}
                className="w-full h-full fixed inset-0 z-[-1] border-t--"
                particleColor="#FFFFFF"
            />
            <div className={cn("text-yellow-400 max-h-[500px] overflow-scroll py-52 px-10 subpixel-antialiased duration-500", isPerspective && 'perspective')}>
                <h1 className={cn('text-5xl lg:text-8xl text-center mb-5', star_wars_font.className)}>ichsan Seanaldi</h1>
                {
                    isPerspective &&
                    <div>
                        <p className='text-start md:text-justify'>
                            Is my name. An agnostic-stack software developer is I am, Well, kind of... because most of the time I focus on frontend development, which technically makes me a Frontend Developer. But since &ldquo;agnostic-stack&ldquo; has a nice ring to it, I decided to embrace it, just like how a Jedi embraces the Force.
                        </p>
                        <br />
                        <p className='text-start md:text-justify'>
                            While my lightsaber may be my frontend skills, I&apos;ve also trained in backend technologies, expanding my knowledge to cover the full stack — mastering both the light and dark sides of development.
                        </p>
                        <br />
                        <p className='text-start md:text-justify'>
                            The tools I&apos;ve worked with in my workplace include: <i>Next.js, Laravel, Nest.js, Docker, RabbitMQ, GraphQL, Postgres, Redis, and Tailwind</i>. Though I might not have a Jedi Council certification in each of these, I&apos;ve honed my abilities to solve problems with the precision of a Jedi mind trick.
                        </p>
                        <br />
                        <p className='text-start md:text-justify'>
                            Additionally, I thrive in performance optimization, ensuring users enjoy a hyperspace-speed experience, whether it&apos;s trimming down frontend bundles or optimizing backend processes for galactic-scale scalability. After all, no one wants a slow ship when the fate of the galaxy is at stake.
                        </p>
                        <br />
                        <p className='text-start md:text-justify'>
                            Interestingly, I also have a publication in the field of gamification (which you can look up),  and I&apos;ve taught in a vocational school, helping padawans master the ways of code, breaking down complex topics like a wise Jedi Master.
                        </p>
                        <br />
                        <p className='text-start md:text-justify'>
                            I&apos;m always eager to learn, adapting like a true Force-sensitive to different environments, constantly pushing myself to grow stronger in the ways of development.
                        </p>
                        <br />
                        <p className='text-start md:text-justify'>
                            Currently, I&apos;m working on a big, awesome project in the Rebel Alliance, but if you ever need a hand, feel free to reach out using the provided links.
                        </p>
                        <br />
                        <p>
                            May the Force be with you!
                        </p>
                    </div>
                }
            </div>
            <Button
                onClick={() => setIsPerspective(prev => !prev)}
                className={cn(
                    'flex items-center  mx-auto rounded-sm text-xs group space-x-3 bg-transparent border-2 border-yellow-400 text-yellow-400 duration-300 transition-all relative z-50',
                    isPerspective ? 'w-0 p-0 rotate-90 opacity-80' : 'w-[150px]'
                )}
            >
                <span className={cn('duration-300', isPerspective ? 'opacity-0 invisible ' : 'opacity-100')}>Read More</span>
                <div className={cn('overflow-hidden max-w-[30px]')}>
                    <div className='flex space-x-4 group-hover:translate-x-0 -translate-x-10 duration-300'>
                        <RocketIcon className='ml-2 rotate-45 min-w-[20px]' />
                        <RocketIcon className='ml-2 rotate-45 min-w-[20px]' />
                    </div>
                </div>
            </Button>
            {
                !isPerspective &&
                <div className="fixed p-3 rounded-sm bottom-10 bg-black space-y-0 space-x-3 flex h-min">
                    {
                        social_media.map((sm, i) => (
                            <Link href={sm.url} target="_blank" className="group" key={i}>
                                <div dangerouslySetInnerHTML={{ __html: sm.svg }} className="fill-white group-hover:fill-yellow-500 duration-200"></div>
                            </Link>
                        ))
                    }
                </div>
            }
        </div>
    )
}
