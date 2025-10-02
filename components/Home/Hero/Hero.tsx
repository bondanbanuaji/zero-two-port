'use client'
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { headingFont, bodyFont } from '@/constant/fontExport'
import { BsArrowDownRight, BsArrowRight } from 'react-icons/bs'

const Hero = () => {
    return (
        <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
            <div className='relative z-10 flex flex-col items-center'>
                <Image
                    src='/images/s1.jpg'
                    alt='heroImg'
                    width={150}
                    height={150}
                    className='rounded-full border-4 border-pink-400'
                />

                <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-6 text-center font-bold tracking-wide text-neutral-100'>
                    <span className='text-pink-300'>Zero Two</span> <br />
                </h1>

                <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center text-neutral-200'>
                    I&apos;m known as
                    <span className='text-pink-400 font-bold'>
                        <Typewriter
                            options={{
                                strings: [
                                    `The Partner Killer`,
                                    `Klaxosaur Princess`,
                                    `Darling's One and Only`
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                                wrapperClassName: 'pl-2',
                            }}
                        />
                    </span>
                </h2>
                <button className='mt-6 px-8 py-4 relative overflow-hidden rounded-full text-lg font-semibold text-neutral-100 
                bg-neutral-800 group cursor-pointer'>
                    <span className='relative z-10'>See My World</span>
                    <BsArrowRight className='w-5 h-5 ml-2 inline-block relative z-10 transition-transform duration-300 group-hover:translate-x-2' />

                    {/* Background fill */}
                    <span className='absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-600 w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full'></span>
                </button>
            </div>
        </div>
    )
}

export default Hero
