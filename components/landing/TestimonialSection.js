"use client";
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '@/constants/assets';

import { AiFillStar, AiOutlineStar, AiFillStarHalf } from "react-icons/ai";

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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className='max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 py-[80px]'>
            {/* Section Heading */}
            <div className='flex flex-col lg:flex-row items-center gap-10 mb-10'>
                <div className='flex-1'>
                    <h2 className='host-grotesk text-[43px] host-grotesk-semibold'>Testimonials</h2>
                </div>
                <div className='flex-1'>
                    <p className='m-0 host-grotesk host-grotesk-semibold auz_text_gray text-[18px] text-justify leading-5'>
                        Our clients’ satisfaction is our priority. Hear what they have to say about their experience with Auzsheet Roofing and Guttering, and how we have transformed their homes with quality roofing, guttering, and fascia solutions that are built to last.
                    </p>
                </div>
            </div>

            {/* Testimonial Content */}
            <div className='flex gap-6 flex-wrap items-center justify-center md:flex-nowrap'>
                {/* Left Column */}
                <div className='flex-1 px-[43px] py-[52px] flex-shrink-0 rounded-[10px] bg-[#FAF3E9] items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='host-grotesk host-grotesk-extra-bold text-[56px]'>4.9</span>
                        <div className='flex gap-1'>
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                            <AiFillStar className="text-yellow-500 text-xl" />
                        </div>
                    </div>
                    <div className='mt-4 flex flex-col items-center justify-center'>
                        <span className='host-grotesk text-[16px] text-[#9F9F9F] host-grotesk-semibold'>80+ Reviews</span>
                        <p className='host-grotesk text-[#171716] host-grotesk-semibold mt-2 text-center'>
                            Auzsheet Roofing completed a full reroof and fascia and gutter
                            at my place as the old roof was rusted, leaked like a sieve
                            and was a genuine eye sore!
                        </p>
                    </div>
                </div>

                {/* Right Column (Slider) */}
                <div className='flex-2 w-full overflow-hidden'>
                    <Slider {...settings} className="gap-6">
                        {testimonials.map((item, index) => (
                            <div key={index} className='px-3'>
                                <div className="h-[352px] w-[360px] p-6 bg-[#171716] rounded-[15px] border border-gray-200 mx-2 overflow-hidden">
                                    <div className='w-[131px] h-[109px] rounded-[10px] overflow-hidden'>
                                        <Image src={item.image} alt={item.name}
                                            className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className='flex items-center w-full justify-between'>
                                                <div>
                                                    <h4 className="host-grotesk host-grotesk-semibold text-[22px] text-white">{item.name}</h4>
                                                    <p className="host-grotesk host-grotesk-semibold text-[14px] text-[#9F9F9F]">{item.role}</p>
                                                </div>
                                                {/* Rating Icon */}
                                                <div className='flex'>
                                                    {renderStars(item.rating)}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="host-grotesk host-grotesk-semibold text-white text-[16px]">{item.message}</p>
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
