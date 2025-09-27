'use client'
import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { BiDownload } from "react-icons/bi"
import { NavLinks } from "../../../constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {

    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true)
            if (window.scrollY < 90) setNavBg(false)
        }

        window.addEventListener('scroll', handler)

        return() => window.addEventListener('scroll', handler)
    }, [])

    return (
        <div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md':'fixed'} duration-200 h-[12vh] z-[10000] fixed w-full`}>
            <div className="flex items-center h-full justify-between w-[90%] mx-auto">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
                        <FaCode className="w-5 h-5 text-black" />
                    </div>
                    <h1 className="font-bold text-xl hidden sm:block md:text-2xl text-white">
                        Zero Two
                    </h1>
                </div>

                {/* Nav Links */}
                <div className="hidden lg:flex items-center space-x-10">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            className="text-base hover:text-[#FF4DA6] text-white font-medium transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    {/* CV Button */}
                    <button className='transition-all duration-300 text-white flex items-center space-x-2 px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-gradient-to-r from-[#FF4DA6] to-[#FF82B2] hover:opacity-60'>
                        <BiDownload className='w-5 h-5' />
                        <span>CV Zero</span>
                    </button>
                    {/* Hamburger Menu */}
                    <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                </div>
            </div>
        </div>
    );
};

export default Nav;