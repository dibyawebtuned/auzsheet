"use client"
import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from "lucide-react"
import { IMAGES } from '@/constants/assets'
import Link from 'next/link'
import ContactSection from '@/components/landing/ContactSection'

const services = [
    {
        title: "Fascia cover and gutter",
        description: "Auzsheet supplies and installs all major brands of Colorbond® fascia and guttering for new builds",
        image: IMAGES.service_one,
        link: "/services/new-roofs",
    },
    {
        title: "New Roofs and Re-Roofs",
        description: "From tile-to-tin re-roofs to brand-new builds, Auzsheet Roofing and Guttering is here to transform",
        image: IMAGES.service_two,
        link: "/services/re-roofs",
    },
    {
        title: "Skylight Installation",
        description: "Bring the outdoors in! Auzsheet Roofing and Guttering specialises in professional skylight installations.",
        image: IMAGES.service_three,
        link: "/services/gutter-installation",
    },
    {
        title: "Architectual Metal Cladding",
        description: "Utilising range of architectural cladding, Auzsheet Roofing and Guttering can completely transform",
        image: IMAGES.service_four,
        link: "/services/roof-repairs",
    },
    {
        title: "Edge Protection Safety Rail",
        description: "Utilising range of architectural cladding, Auzsheet Roofing and Guttering can completely transform",
        image: IMAGES.service_four,
        link: "/services/roof-repairs",
    },
    {
        title: "Insulated paneling",
        description: "Utilising range of architectural cladding, Auzsheet Roofing and Guttering can completely transform",
        image: IMAGES.service_four,
        link: "/services/roof-repairs",
    },
    {
        title: "Fascia and gutter",
        description: "Utilising range of architectural cladding, Auzsheet Roofing and Guttering can completely transform",
        image: IMAGES.service_four,
        link: "/services/roof-repairs",
    },
    {
        title: "Downpipes",
        description: "Utilising range of architectural cladding, Auzsheet Roofing and Guttering can completely transform",
        image: IMAGES.service_four,
        link: "/services/roof-repairs",
    },
];


const ServiceComponent = () => {
    return (
        <>
            <div className='max-w-360 mx-auto mx-3 md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] flex justify-center auz_bg relative rounded-[30px] overflow-hidden'>
                <div className='px-8 py-16 flex flex-col gap-[30px]'>
                    <div className='flex flex-col gap-[50px]'>
                        <div className='flex items-center gap-[30px]'>
                            <div className='flex-1'>
                                <h2 className='host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>
                                    Services
                                </h2>
                            </div>

                            <div className='flex-1'>
                                <span className='auz_text_gray w-[60%] host-grotesk host-grotesk-semibold text-base sm:text-[17px] lg:text-[18px] text-center leading-5'>
                                    Auzsheet Roofing and Guttering delivers expert roofing solutions for new builds and re-roofs using trusted Colorbond® steel.
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-[20px]">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative 
                        w-full 
                        sm:w-[calc(50%-12px)]
                        lg:w-[calc(25%-18px)]
                        h-[280px] sm:h-[300px] lg:h-[414px] 
                        rounded-[15px] overflow-hidden transition-shadow duration-300"
                                    data-aos="fade-up"
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                                        quality={100}
                                    />

                                    {/* White Overlay Box */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-white py-[20px] px-[15px] rounded-[10px] m-3 transition-transform duration-500 ease-in-out group-hover:-translate-y-1.5">
                                        <h3 className="text-[18px] host-grotesk host-grotesk-semibold">{service.title}</h3>
                                        <p className="text-[#505050] mt-2 text-[12px] host-grotesk host-grotesk-semibold leading-4">{service.description}</p>

                                        {service.link && (
                                            <Link
                                                href={service.link}
                                                className="host-grotesk text-[16px] inline-flex items-center mt-4 px-4 py-2 bg-black text-white rounded-[10px] font-medium"
                                            >
                                                Read More
                                                <span className='p-[10px] bg-[#F4F4F4] text-[#000000] ml-[10px] rounded-[4px] transition-transform duration-300'>
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <ContactSection />
        </>
    )
}

export default ServiceComponent
