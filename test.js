"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '@/constants/assets';

import { AiFillStar, AiOutlineStar, AiFillStarHalf } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

// Helper function for dynamic stars
const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            i <= Math.round(rating) ? (
                <AiFillStar key={i} className="text-[#D9D9D9] text-xl" />
            ) : (
                <AiOutlineStar key={i} className="text-black text-xl" />
            )
        );
    }
    return stars;
};

const testimonials = [
    {
        name: "Rachel N",
        role: "Business Owner",
        image: IMAGES.service_one,
        message: "The team at Auzsheet work to a high standard , very happy with the result.  Very easy to deal with from start to finish & pricing was competitive.",
        rating: 4.5
    },
    {
        name: "Jane Smith",
        role: "Property Owner",
        image: IMAGES.service_two,
        message: "Very satisfied with the roofing and guttering services. Highly recommend Auzsheet Roofing!",
        rating: 5
    },
    {
        name: "Michael Brown",
        role: "Builder",
        image: IMAGES.service_three,
        message: "Top-quality service and materials. The team delivered on time and exceeded expectations.",
        rating: 4
    },
    {
        name: "Emily White",
        role: "Homeowner",
        image: IMAGES.service_four,
        message: "Professional, reliable, and friendly. Our new roof looks amazing thanks to Auzsheet Roofing.",
        rating: 4.5
    },
];

const TestimonialSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-in-out",
            once: true,
        });
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className='max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 py-[80px]'>
            {/* Section Heading */}
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-3 md:gap-4 lg:gap-10 mb-10'>
                <div className='flex-1'>
                    <h2 className='host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold' data-aos="fade-up" data-aos-delay="500">
                        Testimonials
                    </h2>
                </div>
                <div className='flex-1'>
                    <p
                        className='m-0 host-grotesk host-grotesk-semibold auz_text_gray text-base sm:text-[17px] lg:text-[18px] text-justify leading-5'
                        data-aos="fade-left">
                        Our clients’ satisfaction is our priority. Hear what they have to say about their
                        experience with Auzsheet Roofing and Guttering, and how we have transformed their
                        homes with quality roofing, guttering, and fascia solutions that are built to last.
                    </p>
                </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center">

                {/* Left Columns */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out"
                    className="flex-1 px-6 py-8 sm:px-10 sm:py-12 rounded-[10px] bg-[#FAF3E9] flex flex-col items-center justify-center text-center">
                    <span className="host-grotesk host-grotesk-extra-bold text-4xl sm:text-5xl lg:text-[56px]">
                        4.9
                    </span>

                    <div className="flex gap-1 mt-1">
                        <AiFillStar className="text-yellow-500 text-lg sm:text-xl" />
                        <AiFillStar className="text-yellow-500 text-lg sm:text-xl" />
                        <AiFillStar className="text-yellow-500 text-lg sm:text-xl" />
                        <AiFillStar className="text-yellow-500 text-lg sm:text-xl" />
                    </div>

                    <span className="mt-4 host-grotesk text-sm sm:text-[16px] text-[#9F9F9F] host-grotesk-semibold">
                        80+ Reviews
                    </span>

                    <p className="host-grotesk text-[#171716] host-grotesk-semibold mt-3 text-sm sm:text-base max-w-md">
                        Auzsheet Roofing completed a full reroof and fascia and gutter at my place
                        as the old roof was rusted, leaked like a sieve and was a genuine eye sore!
                    </p>
                </div>

                {/* Right Column (Slider) */}
                <div className="flex-[2] w-full min-w-0 overflow-hidden">
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <div key={index} className="px-3">

                                <div
                                    className="
              mx-auto
              w-full max-w-[360px]
              h-auto sm:h-[352px]
              p-5 sm:p-6
              bg-[#171716]
              rounded-[15px]
              border border-gray-200
              flex flex-col
              gap-4
            "
                                >
                                    {/* Image */}
                                    <div className="w-[110px] h-[90px] sm:w-[131px] sm:h-[109px] rounded-[10px] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <div className="flex items-center justify-between gap-3 mb-3">
                                            <div>
                                                <h4 className="host-grotesk host-grotesk-semibold text-lg sm:text-[22px] text-white">
                                                    {item.name}
                                                </h4>
                                                <p className="host-grotesk host-grotesk-semibold text-xs sm:text-[14px] text-[#9F9F9F]">
                                                    {item.role}
                                                </p>
                                            </div>

                                            {/* Rating */}
                                            <div className="flex">
                                                {renderStars(item.rating)}
                                            </div>
                                        </div>

                                        <p className="host-grotesk host-grotesk-semibold text-white text-sm sm:text-[16px] leading-relaxed">
                                            {item.message}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default TestimonialSection;
