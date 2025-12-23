"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from "lucide-react"
import { IMAGES } from '@/constants/assets'

const AboutHeroComponent = () => {
    return (
        <div className="max-w-360 mx-auto mx-3 md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] flex justify-center bg-black relative rounded-[30px] overflow-hidden">
            <div className='px-8 py-6 flex flex-col gap-[30px]'>
                <div className="flex gap-[30px]">
                    <div className='flex-1'>
                        <div className='flex flex-col gap-[10px]'>
                            <h2 className='text-white host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold' data-aos="fade-up" data-aos-delay="500" >About Us</h2>
                            <span className='auz_white_one host-grotesk host-grotesk-semibold leading-5 text-justify'>
                                At Auzsheet Roofing and Guttering, we pride ourselves on being a local,
                                family-owned business dedicated to delivering quality roofing solutions
                                across residential and commercial projects.
                            </span>
                        </div>

                        <div>
                            <Link
                                href='/'
                                className="host-grotesk text-[16px] inline-flex items-center mt-4 px-4 py-2 bg-white text-black rounded-[10px] font-medium"
                            >
                                Get in Touch
                                <span className='p-[10px] bg-[#000000] text-[#F4F4F4] ml-[10px] rounded-[4px] transition-transform duration-300'>
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className='flex-1 auz_white_one host-grotesk host-grotesk-semibold'>
                        <p className='leading-5  mb-2 text-justify'>
                            We specialise in new roofs and re-roofs, using durable and stylish Colorbond® steel to
                            protect and enhance your home for years to come. Our services extend to fascia and
                            gutter installations, offering both new systems and upgrades to replace leaking or
                            outdated ones. For clients wanting to take their property to the next level, we also
                            provide additional features including skylight installations - bringing natural light
                            into dark spaces - and Colorbond® Architectural Wall Cladding, which modernises exteriors
                            with striking finishes and long-lasting durability.

                            <br />
                            <br />

                            At Auzsheet, we understand that your home is one of your most important investments.
                            That’s why we combine premium materials, expert workmanship, and a personalised
                            approach to deliver roofing solutions that not only look great but stand the test
                            of time. When you choose Auzsheet Roofing and Guttering, you’re choosing a team that
                            treats every project as if it were their own.
                        </p>
                    </div>
                </div>

                <div className='relative h-[500px] rounded-4xl overflow-hidden'>
                    <Image src={IMAGES.service_one} alt="Service One"
                        fill
                        className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default AboutHeroComponent
