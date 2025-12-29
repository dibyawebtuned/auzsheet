"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Jane Smith",
        role: "Property Owner",
        image: "/assets/img/testimonial-1.jpg",
        rating: 5,
        text: "Very satisfied with the roofing and guttering services. Highly recommend!",
    },
    {
        name: "Michael Brown",
        role: "Builder",
        image: "/assets/img/testimonial-2.jpg",
        rating: 4,
        text: "Top-quality service and materials. Delivered on time and exceeded expectations.",
    },
    {
        name: "Emma Wilson",
        role: "Home Owner",
        image: "/assets/img/testimonial-3.jpg",
        rating: 5,
        text: "Outstanding workmanship and attention to detail. Couldn't be happier!",
    },
];

export default function Testimonials() {
    return (
        <section className="w-full py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                    <h2 className="host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold">
                        Testimonials
                    </h2>
                    <p className="m-0 host-grotesk host-grotesk-semibold auz_text_gray text-base sm:text-[17px] lg:text-[18px] text-justify leading-5">
                        Hear what our clients say about their experience with Auzsheet Roofing
                        & Guttering.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    {/* Rating Card (static) */}
                    <div className="bg-[#FAF4EA] rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                        <h3 className="host-grotesk host-grotesk-extra-bold text-4xl sm:text-5xl lg:text-[56px]">
                            4.9
                        </h3>

                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
                                />
                            ))}
                        </div>

                        <p className="mt-4 host-grotesk text-sm sm:text-[16px] text-[#9F9F9F] host-grotesk-semibold">
                            80+ Reviews
                        </p>

                        <p className="host-grotesk text-[#171716] host-grotesk-semibold mt-3 text-sm sm:text-base max-w-md">
                            Auzsheet Roofing completed a full reroof and gutter replacement with
                            excellent results.
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="lg:col-span-2">
                        <Swiper
                            modules={[Pagination]}
                            pagination={{
                                clickable: true,
                                bulletClass:
                                    "swiper-pagination-bullet !bg-gray-400 !opacity-100",
                                bulletActiveClass:
                                    "!bg-gray-900 !w-6 !rounded-full",
                            }}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                            className="pb-10"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="h-full bg-gradient-to-br from-black to-neutral-900 rounded-3xl p-6 text-white flex flex-col justify-between">
                                        {/* Top */}
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                <div>
                                                    <h4 className="text-lg font-semibold">{item.name}</h4>
                                                    <p className="text-gray-400 text-sm">{item.role}</p>
                                                </div>
                                            </div>

                                            {/* Stars */}
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < item.rating
                                                            ? "fill-white stroke-white"
                                                            : "stroke-gray-600"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <p className="text-gray-300 mt-6 leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
