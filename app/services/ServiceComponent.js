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
        description: "At our company, our dedication to construction transcends mere building. We are committed to enhancing the lives of our clients.",
        image: IMAGES.service_one,
        link: "/services/cover-gutter",
    },
    // {
    //     title: "New Roofs and Re-Roofs",
    //     description: "From tile-to-tin re-roofs to brand-new builds, Auzsheet Roofing and Guttering is here to transform",
    //     image: IMAGES.service_two,
    //     link: "/services/new-roofs",
    // },
    {
        title: "Skylight Installation",
        description: "Bring the outdoors in with expertly installed skylights from Auzsheet Roofing and Guttering. We specialise in professional skylight installations",
        image: IMAGES.service_three,
        link: "/services/skylight",
    },
    {
        title: "Architectual Metal Cladding",
        description: "Utilising Colorbond’s® stunning range of architectural cladding, Auzsheet Roofing and Guttering can completely transform.",
        image: IMAGES.service_four,
        link: "/services/metal-cladding",
    },
    {
        title: "Edge Protection Safety Rail",
        description: "Skip the hassle of sourcing external edge protection for your re-roof or new roof. At Auzsheet Roofing and Guttering",
        image: IMAGES.edge_protection_two,
        link: "/services/edge-protection",
    },
    {
        title: "Insulated paneling",
        description: "Auzsheet supplies and installs premium Colorbond® roofing for new builds, working with all major brands and offering a variety.",
        image: IMAGES.image_5,
        link: "/services/insulated-paneling",
    },
    {
        title: "Fascia and gutter",
        description: "Auzsheet supplies and installs high-quality Colorbond® fascia covers, designed to protect existing timber",
        image: IMAGES.image_6,
        link: "/services/fascia-gutter",
    },
    {
        title: "Downpipes",
        description: "Auzsheet supplies and installs high-quality metal and PVC downpipes, offering durable, reliable drainage solutions.",
        image: IMAGES.image_1,
        link: "/services/downpipes",
    },
    {
        title: "New roofs",
        description: "Auzsheet supplies and installs premium Colorbond® roofing for new builds, working with all major brands and offering",
        image: IMAGES.image_3,
        link: "/services/new-roof",
    },
    {
        title: "Re roofs",
        description: "Auzsheet specialises in tile-to-Colorbond® re-roofs, transforming existing roofs into lighter, more durable, and modern designs.",
        image: IMAGES.image_4,
        link: "/services/re-roof",
    },
];


const ServiceComponent = () => {
    return (
        <div >
            <div className='max-w-360 mx-auto mx-3 md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] flex justify-center auz_bg relative rounded-[30px] overflow-hidden'>
                <div className='px-4 md:px-8 py-10 md:py-16 flex flex-col gap-[30px]'>
                    <div className='flex flex-col gap-[50px]'>
                        <div className='flex flex-col sm:flex-row sm:items-center gap-[15px] sm:gap-[30px]'>
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
        </div>
    )
}

export default ServiceComponent
