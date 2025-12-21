"use client";
import React, { useEffect } from 'react';
import CounterItem from '../ui/CounterItem';
import { ArrowUpRight } from "lucide-react";
import Image from 'next/image';
import { IMAGES } from '@/constants/assets';

import ButtonLink from '../ui/Button';

import AOS from "aos";
import "aos/dist/aos.css";

// IMAGE
const ABOUT = [
    { image: IMAGES.about }
]

const counters = [
    { end: 100, suffix: "+", label: "Roofs Installed" },
    { end: 200, suffix: "+", label: "Repairs Completed" },
    { end: 10, suffix: "+", label: "Years Of Experience" },
];

const AboutSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    return (
        <div className='auz_bg'>
            <div className='max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 py-[80px] flex flex-col gap-[50px]'>
                <div className='flex flex-col lg:flex-row gap-[20px]'>
                    <div className='flex-1 flex flex-col gap-[15px] sm:gap-[40px]'>
                        <h2 className='host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold' data-aos="fade-up" data-aos-delay="500" >About Us</h2>
                        <div data-aos="fade-up" >
                            <ButtonLink
                                href="/contact"
                                label="Know More"
                                icon={ArrowUpRight}
                            />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <p className='m-0 host-grotesk host-grotesk-semibold auz_text_gray text-base sm:text-[17px] lg:text-[18px] text-justify leading-5' data-aos="fade-left">
                            At Auzsheet Roofing and Guttering, we pride ourselves on being a local, family-owned business dedicated to delivering quality roofing solutions across residential and commercial projects. Founded by Kurt Richardson, who brings over 15 years of hands-on industry experience, Auzsheet has built its reputation on trust, craftsmanship, and a commitment to customer satisfaction.
                            <br />
                            We specialise in new roofs and re-roofs, using durable and stylish Colorbond® steel to protect and enhance your home for years to come. Our services extend to fascia and gutter installations, offering both new systems and upgrades to replace leaking or outdated ones.
                        </p>

                        <div className="flex gap-10 mt-5">
                            {counters.map((item, index) => (
                                <CounterItem
                                    key={index}
                                    end={item.end}
                                    suffix={item.suffix}
                                    label={item.label}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {ABOUT.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[300px] sm:h-[350px] lg:h-[451px] rounded-[20px] overflow-hidden"
                        data-aos="fade-up"
                    >
                        <Image
                            src={item.image}
                            alt={item.name || "About image"}
                            fill
                            quality={100}
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                            priority
                        />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default AboutSection
