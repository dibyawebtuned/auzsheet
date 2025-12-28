"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/constants/assets';
import { ArrowUpRight } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 pt-[80px] pb-[50px] overflow-hidden">
            {/* Section Heading */}
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-3 md:gap-4 lg:gap-10 mb-10'>
                <div className='flex-1'>
                    <h2 className='host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold' data-aos="fade-up">
                        Contact Us Today
                    </h2>
                </div>
                <div className='flex-1'>
                    <p className='m-0 host-grotesk host-grotesk-semibold auz_text_gray text-base sm:text-[17px] lg:text-[18px] leading-6' data-aos="fade-left">
                        Request a fast, obligation-free quote from Auzsheet Roofing and Guttering. We proudly service Newcastle, Central Coast and Hunter Regions delivering expert advice and transparent, competitive pricing.
                    </p>
                </div>
            </div>


            {/* Contact Section Content */}
            <div className='flex flex-col md:flex-row gap-20 sm:gap-0'>
                <div className="flex-1 relative" data-aos="fade-up" data-aos-delay="200">
                    <Image
                        src={IMAGES.service_two}
                        alt="Roofing"
                        quality={100}
                        className="rounded-[10px] w-[420px] h-[310px] object-cover shadow-lg"
                    />
                    <Image
                        src={IMAGES.service_one}
                        alt="Roofing"
                        quality={100}
                        className="rounded-[10px] w-[60%] h-[220px] object-cover shadow-lg absolute -bottom-12 right-0"
                    />
                </div>

                <div className="flex-1" data-aos="fade-up" data-aos-delay="400">
                    <form className="bg-white rounded-lg p-0 sm:p-6 flex flex-col gap-4">

                        {/* Name + Email */}
                        <div className="flex flex-col md:flex-row gap-[20px]">
                            <div className="flex-1 flex flex-col">
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Full Name"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#505050]"
                                    required
                                />
                            </div>

                            <div className="flex-1 flex flex-col">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#505050]"
                                    required
                                />
                            </div>
                        </div>

                        {/* Contact + Subject */}
                        <div className="flex flex-col md:flex-row gap-[20px]">
                            <div className="flex-1 flex flex-col">
                                <input
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    placeholder="Contact"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#505050]"
                                    required
                                />
                            </div>

                            <div className="flex-1 flex flex-col">
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#505050]"
                                    required
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#505050]"
                                required
                            ></textarea>
                        </div>

                        {/* Button */}
                        <div className="flex">
                            <button
                                type="submit"
                                className="host-grotesk w-full md:w-auto text-[16px] inline-flex items-center justify-center px-5 py-3 bg-black text-white rounded-[10px] font-medium"
                            >
                                Send Message
                                <span className="p-[10px] bg-[#F4F4F4] text-[#000000] ml-[10px] rounded-[4px] transition-transform duration-300">
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactSection