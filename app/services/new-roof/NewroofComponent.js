"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/constants/assets'
import { CheckCircle, Target, ArrowUpRight, Eye, Flag } from "lucide-react";
import ContactSection from '@/components/landing/ContactSection'

const NewroofComponent = () => {
    return (
        <>
            <div className='mx-3 md:mx-0'>
                <div className='max-w-360 mx-auto md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] auz_bg flex justify-center relative rounded-[30px]'>
                    <div className='px-4 md:px-8 py-10 md:py-16 flex flex-col gap-[20px] sm:gap-[40px]'>
                        {/*  */}
                        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[10px] md:gap-[30px]'>
                            <div className='flex-1'>
                                <h2 className='host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold' data-aos="fade-up">
                                    New Roofs
                                </h2>
                            </div>
                        </div>

                        <div className='w-full flex flex-col lg:flex-row gap-5 items-start'>
                            {/* Right Section STARTS */}
                            <div className='flex-8 flex flex-col gap-5 sm:gap-7'>
                                {/* Image */}
                                <div className='w-full relative h-56 sm:h-72 md:h-80 lg:h-[400px] rounded-[20px] overflow-hidden' data-aos="fade-up" data-aos-delay="100">
                                    <Image
                                        src={IMAGES.image_3}
                                        alt="Service image"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/*  */}
                                <div className='flex flex-col gap-[30px]'>
                                    <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                                        Auzsheet supplies and installs premium Colorbond® roofing for new builds, working with all major brands and offering a variety of profiles and colours to suit any project.

                                        <br />

                                        Our expert team ensures every installation is completed to the highest standards, enhancing both the functionality and aesthetic of your property. With our new roofs, you get superior protection against harsh weather conditions, low maintenance, and a finished look that elevates your home’s curb appeal.
                                    </p>

                                    {/* POINTS */}
                                    <div className='bg-white rounded-[20px] px-4 sm:px-7 py-5 flex flex-col gap-4 sm:gap-5'>
                                        {/*  */}
                                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-5'>
                                            <div className='flex-1 flex items-center gap-2 sm:gap-3'>
                                                <div className='p-2 rounded-[5px] bg-[#303030] flex-shrink-0'>
                                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                                                </div>
                                                <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                                                    Premium Colorbond roofing for long-lasting durability
                                                </span>
                                            </div>
                                            <div className='flex-1 flex items-center gap-3'>
                                                <div className='p-2 rounded-[5px] bg-[#303030]'>
                                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                                                </div>
                                                <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                                                    Wide variety of profiles and colours to suit any home
                                                </span>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-5'>
                                            <div className='flex-1 flex items-center gap-3'>
                                                <div className='p-2 rounded-[5px] bg-[#303030]'>
                                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                                                </div>
                                                <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                                                    Expert installation for precise and reliable results
                                                </span>
                                            </div>
                                            <div className='flex-1 flex items-center gap-3'>
                                                <div className='p-2 rounded-[5px] bg-[#303030]'>
                                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                                                </div>
                                                <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                                                    Solutions tailored to both contemporary and traditional designs
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PARA */}
                                    {/* <div>
                                        <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                                            Our experienced team ensures precise installation and seamless integration with
                                            your roofing, fascia, and gutter systems. The result is a cohesive exterior
                                            that not only looks impressive but also stands up to Australia’s harsh
                                            conditions with minimal maintenance.

                                            <br />

                                            At Auzsheet, we combine premium materials, expert craftsmanship, and a tailored
                                            approach to create architectural cladding solutions that elevate your home’s
                                            appearance and add genuine, long-term value.
                                        </p>
                                    </div> */}

                                    {/* WHY CHOOSE US */}
                                    <div className='flex flex-col gap-[35px] mt-5'>
                                        <h3 className='host-grotesk host-grotesk-semibold text-black leading-6 text-2xl sm:text-3xl lg:text-[38px]'>
                                            Why choose us
                                        </h3>

                                        <div className='flex flex-col sm:flex-row gap-6 sm:gap-10'>
                                            {/* Mission Card */}
                                            <div className='flex flex-col gap-4 sm:gap-3 flex-1'>
                                                <div className='inline-block'>
                                                    <div className='inline-block bg-[#303030] p-4 items-center rounded-[10px]'>
                                                        <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-1 sm:gap-2'>
                                                    <h4 className='host-grotesk host-grotesk-semibold auz_text_gray leading-6 text-lg sm:text-xl lg:text-[26px]'>
                                                        Our Mission
                                                    </h4>
                                                    <p className='host-grotesk host-grotesk-semibold auz_text_gray text-sm sm:text-base leading-6'>
                                                        Committed to delivering high-quality roofing solutions that combine durability, style, and expert workmanship.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='flex flex-col gap-4 sm:gap-3 flex-1'>
                                                <div className='inline-block'>
                                                    <div className='inline-block bg-[#303030] p-4 items-center rounded-[10px]'>
                                                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-1 sm:gap-2'>
                                                    <h4 className='host-grotesk host-grotesk-semibold auz_text_gray leading-6 text-lg sm:text-xl lg:text-[26px]'>
                                                        Our Vision
                                                    </h4>
                                                    <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-6 text-sm sm:text-base'>
                                                        To be the trusted choice for homeowners seeking premium roofing solutions that protect and enhance their most valuable investment—their home.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image and Planning */}
                                    {/* <div className='flex flex-col gap-[40]'>
                    <div className='relative h-52 sm:h-64 md:h-72 lg:h-[350px] overflow-hidden rounded-[20px]'>
                      <Image src={IMAGES.service_six}
                        alt="Service image"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
                        priority />
                    </div>
                  </div> */}
                                </div>
                            </div>
                            {/* Right Section ENDS */}




                            {/* Left Section STARTS */}
                            <div className="flex-1 lg:flex-4 flex flex-col gap-[20px] lg:sticky lg:top-[100px] self-start h-fit">

                                {/* Services */}
                                <div className="bg-white rounded-[20px] p-4 sm:p-6" data-aos="fade-up">
                                    <h2 className="host-grotesk host-grotesk-bold text-[22px] sm:text-[26px] lg:text-[28px] mb-4 sm:mb-6">
                                        Services
                                    </h2>

                                    <div className="flex flex-col gap-4 sm:gap-5">
                                        {/* Service item */}
                                        <Link href="/services/cover-gutter" className="flex items-center gap-3 sm:gap-5 pb-3 sm:pb-4 border-b border-gray-400">
                                            <div className='flex-1'>
                                                <h4 className="host-grotesk host-grotesk-semibold text-[17px] sm:text-[18px]">Fascia cover and gutter</h4>
                                                <p className="text-gray-600 text-sm sm:text-[15px] host-grotesk host-grotesk-semibold">
                                                    By prioritizing meticulous planning and exceptional craftsmanship
                                                </p>
                                            </div>

                                            <div>
                                                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                        </Link>

                                        {/* Service item */}
                                        <Link href="/services/new-roofs" className="flex items-center gap-3 sm:gap-5 pb-3 sm:pb-4 border-b border-gray-400">
                                            <div>
                                                <h4 className="host-grotesk host-grotesk-semibold text-[17px] sm:text-[18px]">New Roofs and Re-Roofs</h4>
                                                <p className="text-gray-600 text-sm sm:text-[15px] host-grotesk host-grotesk-semibold">
                                                    By prioritizing meticulous planning and exceptional craftsmanship
                                                </p>
                                            </div>
                                            <div>
                                                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                        </Link>

                                        {/* Service item */}
                                        <Link href="/services/skylight" className="flex items-center gap-5 pb-3 border-b border-gray-400">
                                            <div>
                                                <h4 className="host-grotesk host-grotesk-semibold text-[17px] sm:text-[18px]">Skylight Installation</h4>
                                                <p className="text-gray-600 text-sm sm:text-[15px] host-grotesk host-grotesk-semibold">
                                                    Bring the outdoors in with expertly installed skylights from Auzsheet
                                                </p>
                                            </div>
                                            <div>
                                                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                        </Link>

                                        {/* Service item */}
                                        <Link href="/services/edge-protection" className="flex items-center gap-5">
                                            <div>
                                                <h4 className="host-grotesk host-grotesk-semibold text-[17px] sm:text-[18px]">Edge Protection Safety Rail</h4>
                                                <p className="text-gray-600 text-sm sm:text-[15px] host-grotesk host-grotesk-semibold">
                                                    Skip the hassle of sourcing external edge protection for your re-roof or new roof.
                                                </p>
                                            </div>
                                            <div>
                                                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                        </Link>

                                        <div>
                                            <Link
                                                href="/services"
                                                className="group inline-flex items-center gap-2 bg-black text-white text-[14px] font-semibold px-3 py-2 rounded-[8px] transition"
                                            >
                                                View All Services
                                                <div className="bg-[#F4F4F4] text-black p-[10px] rounded-[4px]">
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>


                                {/* Contact form */}
                                <div className="w-full max-w-[600px] mx-auto bg-white rounded-[20px] p-4 sm:p-6" data-aos="fade-up" data-aos-delay="50">
                                    <h3 className="host-grotesk host-grotesk-bold text-[22px] sm:text-[26px] lg:text-[28px] mb-4 sm:mb-6">
                                        Get in Touch
                                    </h3>

                                    <form className="flex flex-col gap-4 sm:gap-5">
                                        {/* Name */}
                                        <div className="flex flex-col gap-1">
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="host-grotesk w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col gap-1">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="host-grotesk w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="flex flex-col gap-1">
                                            <input
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                className="host-grotesk w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div className="flex flex-col gap-1">
                                            <textarea
                                                rows={4}
                                                placeholder="Write your message..."
                                                className="host-grotesk w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
                                            />
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            className="mt-2 bg-black text-white rounded-[12px] py-3 text-sm sm:text-[16px] font-semibold hover:bg-gray-900 transition"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                            {/* Left Section ENDS */}
                        </div>
                    </div>
                </div>
            </div>

            <ContactSection />
        </>
    )
}

export default NewroofComponent
