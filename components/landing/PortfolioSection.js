"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/constants/assets';
import { ArrowUpRight } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";


const portfolioItems = [
    {
        title: "Valentine Project",
        desc: "Our Valentine Project consisted of a full exterior refresh for the client.",
        image: IMAGES.service_one,
        link: "/projects/valentine"
    },
    {
        title: "Belmont North Project",
        desc: "Utilising range of architectural cladding, Auzsheet Roofing and Guttering can completely transform",
        image: IMAGES.service_two,
        link: "/projects/belmont"
    },
    {
        title: "Windale Project",
        desc: "This home in Windale required a new roof, fascia cover and gutters.",
        image: IMAGES.service_three,
        link: "/projects/windale"
    },
    {
        title: "Pitt Town Project",
        desc: "This stunning Hamptons style home underwent some exterior renovations, with the addition of a larger double.",
        image: IMAGES.service_four,
        link: "/projects/pitt"
    },
    {
        title: "Windale Project",
        desc: "This home in Windale required a new roof, fascia cover and gutters.",
        image: IMAGES.service_three,
        link: "/projects/windale"
    },
    {
        title: "Valentine Project",
        desc: "Our Valentine Project consisted of a full exterior refresh for the client.",
        image: IMAGES.service_one,
        link: "/portfolio/project-five"
    },
    {
        title: "Belmont North Project",
        desc: "Utilising range of architectural cladding, Auzsheet Roofing and Guttering can completely transform",
        image: IMAGES.service_two,
        link: "/projects/belmont"
    },
    {
        title: "Windale Project",
        desc: "This home in Windale required a new roof, fascia cover and gutters.",
        image: IMAGES.service_three,
        link: "/portfolio/project-three"
    },
];



const PortfolioSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className='auz_bg'>
            <div className='max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 py-[80px] overflow-hidden'>
                {/* Section Heading */}
                <div className='flex flex-col lg:flex-row items-start lg:items-center gap-3 md:gap-4 lg:gap-10 mb-10'>
                    <div className='flex-1' >
                        <h2 className='host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold' data-aos="fade-up">
                            Our Portfolio
                        </h2>
                    </div>
                    <div className='flex-1'>
                        <p className='m-0 host-grotesk host-grotesk-semibold auz_text_gray text-base sm:text-[17px] lg:text-[18px] text-justify leading-5' data-aos="fade-left">
                            Our most recent Auzsheet Projects have assisted in transforming exterior facades of sites all around Newcastle, the Hunter and Central Coast regions!
                        </p>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="group relative rounded-[15px] overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full h-[260px] sm:h-[300px] lg:h-[366px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    quality={100}
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 1024px) 50vw,
                           25vw"
                  />
                </div>

                {/* Overlay */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-white py-4 px-3 rounded-[10px] m-3 transition-opacity duration-500 ease-in-out ${activeIndex === index || (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches ? "opacity-0 group-hover:opacity-100" : "opacity-100")
                    }`}
                >
                  <h3 className="text-[16px] sm:text-[18px] host-grotesk host-grotesk-semibold">{item.title}</h3>
                  <p className='text-[#505050] mt-2 text-[13px] sm:text-[12px] host-grotesk host-grotesk-semibold leading-4'>{item.desc}</p>
                  <Link
                    href={item.link}
                    className="host-grotesk text-[16px] inline-flex items-center mt-4 px-4 py-2 bg-black text-white rounded-[10px] font-medium"
                  >
                    View Project
                    <span className='p-[10px] bg-[#F4F4F4] text-[#000000] ml-[10px] rounded-[4px] transition-transform duration-300'>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
