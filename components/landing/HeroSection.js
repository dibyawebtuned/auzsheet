"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Phone, ArrowUpRight } from "lucide-react";

import ButtonLink from "../ui/Button";

const slides = [
    "/assets/img/gallery/One.jpg",
    "/assets/img/gallery/Two.jpg",
    "/assets/img/gallery/Thirteen.jpg",
];

const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <div className="w-full flex justify-center h-[80vh] lg:h-[650px] bg-gray-900 relative rounded-[30px] overflow-hidden">
            <div className="w-full max-w-[1440px] relative">

                {/* Slider for images only */}
                <Slider {...settings} className="h-full">
                    {slides.map((img, index) => (
                        <div key={index} className="w-full h-[80vh] lg:h-[650px]">
                            <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
                        </div>
                    ))}
                </Slider>

                {/* Static overlay text */}
                <div className="absolute inset-0 bg-black/40 flex flex-col sm:flex-row gap-[20px] items-center justify-center px-4 sm:px-10 md:px-[50px] py-6 sm:py-10 gap-6">
                    {/* Left */}
                    <div className="flex-1 flex flex-col gap-4 sm:gap-6">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[68px] host-grotesk host-grotesk-semibold tracking-wide leading-snug sm:leading-tight">
                                Committed To Quality Roofing
                            </h1>

                            <p className="text-white host-grotesk auz_white_three host-grotesk-bold text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-6">
                                We specialise in new roofs and re-roofs, using durable and stylish Colorbond® steel to protect and enhance your home for years to come.
                            </p>
                        </div>

                        <div>
                            <ButtonLink
                                href="/contact"
                                label="0466911940"
                                icon={Phone}
                                bgColor="bg-[#F3F3F3]"
                                // bgColor="bg-red-600"
                                textColor="text-black!"
                                hoverTextColor="hover:text-white!"
                                hoverBgColor="hover:bg-black"
                                iconBgColor="bg-[#000000]"
                                iconTextColor="text-[#F4F4F4]"
                            />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex-1">
                        <div className="px-[20px] py-[30px] rounded-[10px] bg-white/80 flex flex-col gap-5">
                            <div className="w-[90%]">
                                <span className="text-[26px] host-grotesk host-grotesk-bold tracking-wider leading-9">For All Your Metal Roofing Needs</span>
                            </div>

                            <div>
                                <form className="flex flex-col gap-[15px]">
                                    {/* Services */}
                                    <div>
                                        <select className="w-full px-4 py-3 rounded-lg border border-[#B0B0B0] bg-[#F3F3F3] text-[#979797] host-grotesk host-grotesk-semibold tracking-wider transition cursor-pointer focus:outline-none focus:ring-none focus:border-transparent transition" defaultValue="">
                                            <option value="" disabled>
                                                Select a service
                                            </option>
                                            <option value="roof-installation">Roof Installation</option>
                                            <option value="roof-repair">Roof Repair</option>
                                            <option value="roof-replacement">Roof Replacement</option>
                                            <option value="roof-inspection">Roof Inspection</option>
                                            <option value="gutter-installation">Gutter Installation</option>
                                            <option value="maintenance">Roof Maintenance</option>
                                        </select>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full px-4 py-3 rounded-lg border border-[#B0B0B0] bg-[#F3F3F3] text-[#979797] host-grotesk host-grotesk-semibold tracking-wider focus:outline-none focus:ring-none focus:border-transparent transition"
                                        />
                                    </div>

                                    {/* ButtonLink */}
                                    <div>
                                        <ButtonLink
                                            href=""
                                            label="Request Consultation"
                                            icon={ArrowUpRight}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
