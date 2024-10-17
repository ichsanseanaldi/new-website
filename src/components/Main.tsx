"use client"

import React, { LegacyRef, MutableRefObject, RefObject, useEffect, useRef, useState } from 'react'
import { social_media } from "@/addons/social";
import Link from "next/link";
import { SparklesCore } from './ui/sparkles';
import localFont from 'next/font/local'
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { PlayIcon, RocketIcon, SquareIcon, XIcon } from 'lucide-react';
import gsap, { TweenLite } from 'gsap';
import { useGSAP } from '@gsap/react';

const star_wars_font = localFont({
    src: '.././assets/Starjhol.ttf',
    display: 'swap'
})


gsap.registerPlugin(useGSAP)

export default function Main() {

    const [containerWidth, setContainerWidth] = useState<number | null>()
    let gsap_timeline = useRef(gsap.timeline());
    const container = useRef<HTMLDivElement | null>(null)
    const perspectived = useRef<HTMLDivElement | null>(null)
    const heading = useRef<HTMLHeadingElement | null>(null)
    const headingwrapper = useRef<HTMLDivElement | null>(null)
    const paragraphwrapper = useRef<HTMLDivElement | null>(null)
    const button = useRef<HTMLButtonElement | null>(null)
    const linkwrapper = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        const handleResize = () => {
            const currentWidth = window.innerWidth;
            setContainerWidth(currentWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [])

    const { contextSafe } = useGSAP({ scope: container })

    const handleClick = contextSafe(() => {

        if (perspectived.current && heading.current && containerWidth) {

            const timeline = gsap_timeline.current

            timeline.to(button.current, {
                rotate: '90deg',
                width: '0px',
                padding: '0px',
                duration: 0.2
            })

                .to(headingwrapper.current, {
                    opacity: 0,
                    ease: 'power2.out'
                })

                .to(linkwrapper.current, {
                    translateY: '150px',
                    ease: 'power2.out'
                })

                .fromTo(paragraphwrapper.current,
                    {
                        y: '70%'
                    },
                    {
                        display: 'block',
                        y: containerWidth > 800 ? '-97%' : containerWidth > 700 ? '-89%' : containerWidth > 570 ? '-82%' : containerWidth > 500 ? '-78%' : containerWidth > 400 ? '-74%' : '-72%',
                        duration: 80,
                    }, '>')

                .to(paragraphwrapper.current, {
                    display: 'none'
                }, '>')

                .to(headingwrapper.current, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.in'
                }, '>')

                .to(button.current, {
                    rotate: '0deg',
                    width: '150px',
                    padding: '0.5rem 1rem',
                    duration: 0.2
                }, '>')

                .to(linkwrapper.current, {
                    translateY: '0px',
                    ease: 'power2.out',
                    duration: 1
                })


        }
    })

    return (
        <div className={cn("  flex items-center flex-col justify-start lg:my-2 select-none mx-auto relative")} ref={container}>
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.5}
                maxSize={1}
                particleDensity={100}
                className="w-full h-full fixed inset-0 z-[-1]"
                particleColor="#FFFFFF"
            />
            <div ref={perspectived} className={cn("perspective text-yellow-400 max-h-[500px] overflow-hidden px-10 subpixel-antialiased duration-500 flex items-center flex-col justify-center h-full")}>
                <div ref={headingwrapper}>
                    <h1 ref={heading} className={cn('text-5xl sm:text-6xl md:text-9xl text-center mb-5 ', star_wars_font.className)}>ichsan
                        <br /> Seanaldi</h1>
                    <Button
                        ref={button}
                        onClick={handleClick}
                        className={cn(
                            'flex items-center  mx-auto rounded-lg text-xs group space-x-3 w-[150px] bg-transparent border-2 sm:border-[3px] border-yellow-400 text-yellow-400 duration-300 transition-all relative z-50',
                        )}
                    >
                        <PlayIcon strokeWidth={3} />
                    </Button>
                </div>
                <div className='hidden max-w-[500px] ' ref={paragraphwrapper}>
                    <p className='text-start md:text-justify'>
                        An agnostic-stack software developer is I am, Well, kind of... because most of the time I focus on frontend development, which technically makes me a Frontend Developer. But since &ldquo;agnostic-stack&ldquo; has a nice ring to it, I decided to embrace it, just like how a Jedi embraces the Force.
                    </p>
                    <br />
                    <p className='text-start md:text-justify'>
                        While my lightsaber may be my frontend skills, I&apos;ve also trained in backend technologies, expanding my knowledge to cover the full stack — mastering both the light and dark sides of development.
                    </p>
                    <br />
                    <p className='text-start md:text-justify'>
                        The tools I&apos;ve worked with in my workplace include: Next.js, Laravel, Nest.js, Docker, RabbitMQ, GraphQL, Postgres, Redis, and Tailwind. Though I might not have a Jedi Council certification in each of these, I&apos;ve honed my abilities to solve problems with the precision of a Jedi mind trick.
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

            </div>
            <div className='overflow-hidden absolute bottom-0 ' >
                <div className=" p-3 rounded-sm space-y-0 space-x-3 flex " ref={linkwrapper}>
                    {
                        social_media.map((sm, i) => (
                            <Link href={sm.url} target="_blank" className="group" key={i}>
                                <div dangerouslySetInnerHTML={{ __html: sm.svg }} className="fill-white group-hover:fill-yellow-500 duration-200"></div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
