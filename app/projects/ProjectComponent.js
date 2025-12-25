"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/constants/assets';
import { ArrowUpRight } from "lucide-react";
import ContactSection from '@/components/landing/ContactSection';

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
    title: "Valentine Project",
    desc: "Our Valentine Project consisted of a full exterior refresh for the client.",
    image: IMAGES.service_one,
    link: "/projects/valentine"
  },
  {
    title: "Valentine Project",
    desc: "Our Valentine Project consisted of a full exterior refresh for the client.",
    image: IMAGES.service_one,
    link: "/projects/project-five"
  },
  {
    title: "Valentine Project",
    desc: "Our Valentine Project consisted of a full exterior refresh for the client.",
    image: IMAGES.service_one,
    link: "/portfolio/project-five"
  },
  {
    title: "Windale Project",
    desc: "This home in Windale required a new roof, fascia cover and gutters.",
    image: IMAGES.service_three,
    link: "/portfolio/project-three"
  },
];

const ProjectComponent = () => {
  return (
    <>
      <div className='max-w-360 mx-auto mx-3 md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] flex justify-center auz_bg relative rounded-[30px] overflow-hidden'>
        <div className='px-8 py-16 flex flex-col gap-[30px]'>
          {/*  */}
          <div className='flex items-center gap-[30px]'>
            <div className='flex-1'>
              <h2 className='host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>
                Projects
              </h2>
            </div>

            <div className='flex-1'>
              <span className='auz_text_gray w-[60%] host-grotesk host-grotesk-semibold text-base sm:text-[17px] lg:text-[18px] text-center leading-5'>
                Our most recent Auzsheet Projects have assisted in transforming exterior facades of sites all around Newcastle, the Hunter and Central Coast regions!
              </span>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group 
                            h-[260px] sm:h-[300px] lg:h-[366px]
                            relative rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden">
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

                {/* Overlay - appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-white py-4 px-3 rounded-[10px] m-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
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

      <ContactSection />
    </>
  )
}

export default ProjectComponent