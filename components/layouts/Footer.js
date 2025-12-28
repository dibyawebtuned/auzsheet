"use client"
import React from "react";
import Footer_Logo from "@/public/assets/img/footer_logo.png";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import Marquee from "../FooterMarque";

const Footer = () => {
    return (
        <footer className="mb-10">
            <div className="max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25">
                <div className="bg-[#171716] mt-25 px-[15px] sm:px-[30px] pt-[70px] rounded-[20px]">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-8">
                        {/* Logo & About */}
                        <div className="flex-2">
                            <Link href="/constants" className="w-[195px] h-[97px]">
                                <Image src={Footer_Logo} alt="Logo" />
                            </Link>
                            <p className="mt-4 host-grotesk auz_white_one host-grotesk-medium text-[15px] pr-16">
                                At Auzsheet Roofing and Guttering, we pride ourselves on being a local, family-owned business dedicated to delivering quality roofing solutions across residential and commercial projects.
                            </p>
                            <ul className="mt-6 flex gap-4">
                                <li className="border border-white p-2.5 rounded-full transition-all duration-300 hover:bg-white hover:scale-110 group">
                                    <Link
                                        href="https://www.facebook.com/people/Auzsheet-Roofing/61574151074622/"
                                        className="flex items-center justify-center text-white"
                                    >
                                        <FaFacebookF className="w-5 h-5 transition-colors duration-300 group-hover:text-black" />
                                    </Link>
                                </li>


                                <li className="border border-white p-2.5 rounded-full transition-all duration-300 hover:bg-white hover:scale-110 group">
                                    <Link href="https://www.instagram.com/auzsheet/"
                                        className="flex items-center justify-center text-white"
                                    >
                                        <Instagram className="w-5 h-5 transition-colors duration-300 group-hover:text-black" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="flex-1">
                            <h3 className="text-[26px] host-grotesk font-semibold auz_white_two tracking-wider">
                                Company
                            </h3>
                            <ul className="md:mt-3 sm:mt-6 space-y-2 host-grotesk host-grotesk-medium">
                                <li><Link href="/about" className="auz_white_three transition">About us</Link></li>
                                <li><Link href="/projects" className="auz_white_three transition">Portfolio</Link></li>
                                <li><Link href="/faq" className="auz_white_three transition">FAQs</Link></li>
                                <li><Link href="/contact" className="auz_white_three transition">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div className="flex-1">
                            <h3 className="text-[26px] host-grotesk font-semibold auz_white_two tracking-wider">
                                Services
                            </h3>
                            <ul className="md:mt-3 sm:mt-6 space-y-2 host-grotesk host-grotesk-medium">
                                <li><Link href="/fascia-gutter" className="auz_white_three transition">Colorbond® Fascia</Link></li>
                                <li><Link href="/new-roofs" className="auz_white_three transition">New Roofs</Link></li>
                                <li><Link href="/skylight" className="auz_white_three transition">Skylight Installation</Link></li>
                                <li><Link href="/metal-cladding" className="auz_white_three transition">Architectual Metal</Link></li>
                            </ul>
                        </div>

                        {/* Contact Links */}
                        <div className="flex-1">
                            <h3 className="text-[26px] host-grotesk font-semibold auz_white_two tracking-wider">
                                Contact
                            </h3>
                            <ul className="md:mt-3 sm:mt-6 space-y-2 host-grotesk host-grotesk-medium">
                                <li><Link href="tel:0466911940" className="auz_white_three transition">0466 911 940</Link></li>
                                <li><Link href="mailto:auzsheetroofing@outlook.com" className="auz_white_three transition">auzsheetroofing@outlook.com</Link></li>
                                <li><Link href="#" className="auz_white_three transition">Australia</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="border border-[#626262] rounded-[20px] mt-5 sm:mt-20 px-4 sm:px-8">
                        <div className="flex flex-col lg:flex-row">
                            {/* Text */}
                            <div className="flex-1 py-6 lg:py-10">
                                <span className="auz_white_three host-grotesk host-grotesk-bold text-[20px] sm:text-[24px]">
                                    Subscribe to our newsletter, Stay always in touch!
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="border-t lg:border-t-0 lg:border-l border-[#626262] my-4 lg:my-0 mx-0 lg:mx-4"></div>

                            {/* Form */}
                            <div className="flex-1 inline-flex items-center w-full">
                                <div className="flex lg:justify-start py-4 lg:py-10 w-full">
                                    <form className="flex w-full max-w-md border border-[#DEDEDE] rounded-[40px]">
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="bg-[#DEDEDE] flex-1 rounded-l-full py-3 px-4 text-gray-700 placeholder-[#9B9B9B] focus:outline-none text-[14px] host-grotesk host-grotesk-medium"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-[#171716] text-white rounded-r-full px-6 py-3 hover:bg-gray-800 transition-colors text-[14px] host-grotesk host-grotesk-medium"
                                        >
                                            Sign Up
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Marquee */}
                    <Marquee />

                    {/* Footer Bottom */}
                    <div className="flex flex-col sm:flex-row justify-between items-center pb-10 px-4 sm:px-0">
                        {/* Copyright */}
                        <p className="text-[13px] sm:text-[15px] text-[#B3B3B3] host-grotesk host-grotesk-semibold text-center sm:text-left">
                            &copy; {new Date().getFullYear()} Auzsheet Roofing and Guttering. All rights reserved.
                        </p>

                        {/* Designed By */}
                        <div className="mt-3 sm:mt-0 flex gap-2 sm:gap-4 justify-center sm:justify-start">
                            <span className="text-[13px] sm:text-[15px] text-[#B3B3B3] host-grotesk host-grotesk-semibold text-center sm:text-left">
                                Designed By{" "}
                                <Link
                                    href="https://murphystechnology.com.au/"
                                    className="hover:text-white transition-colors duration-300 ease-in-out"
                                >
                                    Murphy’s Technology
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
