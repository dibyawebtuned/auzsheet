"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { IMAGES } from '@/constants/assets'
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"

import ContactSection from '@/components/landing/ContactSection'


const PittComponent = () => {
    const [index, setIndex] = useState(-1)

    // Partial dynamic data
    const project = {
        title: "Pitt Town Project",
        description: "This stunning Hamptons style home underwent some exterior renovations, with the addition of a larger double garage to the right wing of the home. Auzsheet Roofing was tasked with supplying and installing a new Colorbond Roof, fascia, gutter and custom flashings. The garage also had a Messene floor, where Auzhseet supplied and installed 3 VELUX skylights. ",
        manager: "Bryan Knight",
        location: "Australia",
        year: "2024",
        mainImage: IMAGES.service_one,
        gallery: [IMAGES.service_one, IMAGES.service_two, IMAGES.service_three],
        sections: [
            {
                title: "Introduction",
                text: "The Pitt Town Project focused on enhancing a stunning Hamptons-style home with both functional and aesthetic exterior renovations. The project included a major extension to the property while ensuring the design remained cohesive with the home’s elegant style.",
                titleSize: 32
            },
            {
                title: "01. The Challenge",
                text: "The homeowners wanted to expand their property by adding a larger double garage to the right wing, while also upgrading the roof and exterior elements for improved durability and visual appeal. The challenge was to integrate the new structures seamlessly with the existing home while providing high-quality finishes that would stand the test of time."
            },
            {
                title: "02. The Solution",
                text: "Auzsheet Roofing supplied and installed a brand-new Colorbond roof, fascia, gutter, and custom flashings to complement the home’s Hamptons design. For the newly added double garage, which featured a Messene floor, we installed three VELUX skylights to enhance natural lighting and create a bright, inviting space. Every detail was carefully considered to ensure a seamless integration with the existing architecture and a modern, long-lasting finish."
            },
            {
                title: "03. The Result",
                text: "The Pitt Town home now boasts a beautifully expanded and functional exterior. The new garage provides additional space while the VELUX skylights flood the area with natural light. With the upgraded Colorbond roof, fascia, gutter, and custom flashings, the home is not only visually stunning but also fully protected from the elements. The renovations successfully combined practicality, style, and durability, elevating the property’s overall appeal."
            }
        ]
    }


    return (
        <div className='px-3 md:px-5 lg:px-5'>
            <div className='max-w-360 mx-auto md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] flex justify-center relative rounded-[30px] overflow-hidden'>
                <div className='px-4 md:px-8 py-10 md:py-16 flex flex-col gap-[15px] sm:gap-[30px] auz_bg'>

                    {/* Header */}
                    <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[10px] md:gap-[30px]'>
                        <div className='flex-1'>
                            <h2 className='host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>
                                {project.title}
                            </h2>
                        </div>

                        <div className='flex-1'>
                            <span className='auz_text_gray w-[60%] host-grotesk host-grotesk-semibold text-base sm:text-[17px] lg:text-[18px] text-center leading-5'>
                                {project.description}
                            </span>
                        </div>
                    </div>

                    {/* Main Image with Overlay */}
                    <div className="relative w-full">
                        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-[20px]">
                            <Image
                                src={project.mainImage}
                                alt="Service image"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        <div
                            className="
                                    absolute
                                    top-[20px] sm:top-[60px] lg:top-[60px]
                                    left-1/2 sm:left-3/4 transform -translate-x-1/2
                                    border border-white
                                    bg-black text-white
                                    w-[90%] sm:w-[70%] lg:w-[40%]
                                    max-w-[800px]
                                    rounded-[12px]
                                    px-4 sm:px-5 py-4 sm:py-6
                                    flex flex-row gap-4
                                    "
                        >
                            <div className="flex flex-col gap-2 font-semibold text-[16px] sm:text-[18px] host-grotesk">
                                <span>Manager:</span>
                                <span>Location:</span>
                                <span>Project year:</span>
                            </div>

                            <div className="flex flex-col gap-2 text-[16px] sm:text-[18px] host-grotesk">
                                <span>{project.manager}</span>
                                <span>{project.location}</span>
                                <span>{project.year}</span>
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
                            {project.gallery.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative h-[220px] rounded-[14px] overflow-hidden cursor-pointer"
                                    onClick={() => setIndex(i)}
                                >
                                    <Image
                                        src={img}
                                        alt={`Gallery image ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>

                        <Lightbox
                            open={index >= 0}
                            close={() => setIndex(-1)}
                            index={index}
                            slides={project.gallery.map((img) => ({ src: img.src }))}
                            plugins={[Zoom]}
                        />
                    </div>

                    {/* Project Sections */}
                    <div className='flex flex-col gap-9'>
                        {project.sections.map((section, idx) => (
                            <div key={idx}>
                                <h2 className={`host-grotesk host-grotesk-bold text-[${section.titleSize || 28}px]`}>
                                    {section.title}
                                </h2>
                                {section.text && (
                                    <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                                        {section.text}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <ContactSection />
        </div>
    )
}

export default PittComponent