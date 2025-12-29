"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from "@/constants/assets";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

/* ------------------ STAR RENDER ------------------ */
const renderStars = (rating, variant = "yellow") => {
    const filledColor =
        variant === "white" ? "text-white" : "text-yellow-400";

    const emptyColor =
        variant === "white" ? "text-gray-600" : "text-gray-400";

    return Array.from({ length: 5 }).map((_, i) =>
        i < Math.round(rating) ? (
            <AiFillStar key={i} className={`${filledColor} text-lg`} />
        ) : (
            <AiOutlineStar key={i} className={`${emptyColor} text-lg`} />
        )
    );
};

/* ------------------ DATA ------------------ */
const testimonials = [
    {
        name: "Rachel N",
        role: "Business Owner",
        image: IMAGES.service_one,
        message:
            "The team at Auzsheet work to a high standard, very happy with the result.",
        rating: 4.5,
    },
    {
        name: "Jane Smith",
        role: "Property Owner",
        image: IMAGES.service_two,
        message:
            "Very satisfied with the roofing and guttering services. Highly recommend!",
        rating: 5,
    },
    {
        name: "Michael Brown",
        role: "Builder",
        image: IMAGES.service_three,
        message:
            "Top-quality service and materials. Delivered on time and exceeded expectations.",
        rating: 4,
    },
];

/* ------------------ COMPONENT ------------------ */
const TestimonialSection = () => {
    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2, // Desktop default
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: false,
        appendDots: dots => (
            <div className="mt-6">
                <ul className="flex items-center justify-center gap-1"> {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-2.5 h-2.5 rounded-full bg-gray-500 transition-all duration-300" />
        ),
        responsive: [
            {
                // Large tablets / Small desktops
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                // Mobile devices (Phones and small tablets)
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    arrows: false,
                },
            },
            {
                // Extra small mobile screens
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 py-[80px] flex flex-col overflow-hidden">
            {/* ---------------- HEADER ---------------- */}
            <div className="flex flex-col lg:flex-row gap-6 mb-12">
                <h2 className="flex-1 host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold">
                    Testimonials
                </h2>
                <p className="flex-1 m-0 host-grotesk host-grotesk-semibold auz_text_gray text-base sm:text-[17px] lg:text-[18px] text-justify leading-5">
                    Hear what our clients say about their experience with Auzsheet Roofing
                    & Guttering.
                </p>
            </div>

            {/* ---------------- CONTENT ---------------- */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* LEFT SUMMARY */}
                <div className="bg-[#FAF3E9] rounded-xl p-8 text-center flex-1">
                    <h3 className="host-grotesk host-grotesk-extra-bold text-4xl sm:text-5xl lg:text-[56px]">
                        4.9
                    </h3>
                    <div className="flex justify-center gap-1 mt-2">
                        {renderStars(5, "yellow")}
                    </div>
                    <p className="mt-4 host-grotesk text-sm sm:text-[16px] text-[#9F9F9F] host-grotesk-semibold">
                        80+ Reviews
                    </p>
                    <p className="host-grotesk text-[#171716] host-grotesk-semibold mt-3 text-sm sm:text-base max-w-md">
                        Auzsheet Roofing completed a full reroof and gutter replacement with
                        excellent results.
                    </p>
                </div>

                {/* RIGHT SLIDER */}
                <div className="flex-[2] min-w-0">
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <div key={index} className="px-2">
                                <div className="bg-[#171716] rounded-xl p-6 flex flex-col gap-4 h-full">
                                    {/* IMAGE */}
                                    <div className="w-[120px] h-[100px] rounded-lg overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={120}
                                            height={100}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="flex justify-between items-start gap-3">
                                        <div>
                                            <h4 className="host-grotesk host-grotesk-semibold text-lg sm:text-[22px] text-white">
                                                {item.name}
                                            </h4>
                                            <p className="host-grotesk host-grotesk-semibold text-xs sm:text-[14px] text-[#9F9F9F]">
                                                {item.role}
                                            </p>
                                        </div>
                                        <div className="flex gap-1">
                                            {renderStars(item.rating, "white")}
                                        </div>
                                    </div>

                                    <p className="host-grotesk host-grotesk-semibold text-white text-sm sm:text-[16px] leading-relaxed">
                                        {item.message}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
