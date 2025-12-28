"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { IMAGES } from '@/constants/assets'
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"

import ContactSection from '@/components/landing/ContactSection'

import AOS from "aos";
import "aos/dist/aos.css";

const ValentineComponent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);


    const [index, setIndex] = useState(-1)

    const images = [
        IMAGES.service_four,
        IMAGES.service_six,
        IMAGES.service_five,
    ]

    return (
        <div className='px-3 md:px-5 lg:px-5'>
            <div className='max-w-360 mx-auto md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] flex justify-center  relative rounded-[30px] overflow-hidden'>
                <div className='px-4 md:px-8 py-10 md:py-16 flex flex-col gap-[15px] sm:gap-[30px] auz_bg'>
                    <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[10px] md:gap-[30px] '>
                        <div className='flex-1'>
                            <h2 className='host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold' data-aos="fade-up">
                                Valentine Project
                            </h2>
                        </div>

                        <div className='flex-1'>
                            <span className='auz_text_gray w-[60%] host-grotesk host-grotesk-semibold text-base sm:text-[17px] lg:text-[18px] text-center leading-5' data-aos="fade-left" data-aos-delay="200">
                                Our Valentine Project consisted of a full exterior refresh for the client.
                                This included a fresh, new Colorbond re-roof, fascia cover and gutter,
                                all in the colour 'Surfmist'.
                            </span>
                        </div>
                    </div>

                    <div className="relative w-full">
                        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-[20px]">
                            <Image
                                src={IMAGES.service_one}
                                alt="Service image"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        <div className="absolute top-[20px] sm:top-[60px] lg:top-[60px] border border-white left-1/2 sm:left-3/4 transform -translate-x-1/2 bg-black text-white w-[90%] sm:w-[70%] lg:w-[40%] max-w-[800px] rounded-[12px] px-4 sm:px-5 py-4 sm:py-6 flex flex-row gap-4" data-aos="fade-up">
                            <div className="flex flex-col gap-2 font-semibold text-[16px] sm:text-[18px] host-grotesk">
                                <span>Manager:</span>
                                <span>Location:</span>
                                <span>Project year:</span>
                            </div>

                            <div className="flex flex-col gap-2 text-[16px] sm:text-[18px] host-grotesk">
                                <span>Bryan Knight</span>
                                <span>Australia</span>
                                <span>2024</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
                            {images.map((img, i) => (
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
                            slides={images.map((img) => ({
                                src: img.src,
                            }))}
                            plugins={[Zoom]}
                        />
                    </div>

                    <div className='flex flex-col gap-9'>
                        <div>
                            <h2 className='host-grotesk host-grotesk-bold text-[32px]'>Introduction</h2>
                            <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                                The Valentine Project involved giving a charming lakeside home a
                                complete exterior refresh, enhancing both its functionality and
                                visual appeal. Our focus was on combining durability with style
                                to uplift the home’s exterior.
                            </p>
                        </div>

                        <div>
                            <h2 className='host-grotesk host-grotesk-bold text-[28px]'>01. The Challenge</h2>
                            <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                                The home’s existing roof, fascia, and guttering were showing signs of wear,
                                and the client also wanted to increase natural light inside the house.
                                The challenge was to improve both the functionality and aesthetic of
                                the home while complementing its lakeside setting.
                            </p>
                        </div>

                        <div>
                            <h2 className='host-grotesk host-grotesk-bold text-[28px]'>02. The Solution</h2>
                            <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                                We installed a brand-new Colorbond re-roof, fascia cover, and gutter in
                                the elegant color “Surfmist,” providing a modern and long-lasting exterior.
                                To bring natural light into the home, we added a VELUX skylight, enhancing
                                the interior’s brightness and creating a warm, welcoming atmosphere.
                            </p>

                            {/* <ul className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                                <li>
                                    Complete new roof installation to eliminate persistent leaks
                                </li>
                                <li>
                                    Premium Colorbond® steel roofing in the colour Dune
                                </li>
                                <li>
                                    New fascia covers and guttering for a seamless, cohesive exterior finish
                                </li>
                                <li>
                                    Colour selection tailored to suit the home’s coastal location and architectural style
                                </li>
                            </ul> */}
                        </div>

                        <div>
                            <h2 className='host-grotesk host-grotesk-bold text-[28px]'>03. The Result</h2>
                            <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                                The project delivered a refreshed, contemporary exterior that harmonizes
                                beautifully with the surrounding environment. Inside, the new skylight
                                allows natural light to fill the space, making the home feel brighter
                                and more inviting. Overall, the Valentine Project successfully combined
                                functionality, durability, and aesthetic appeal.

                                <br />

                                {/* Most importantly, the homeowners now enjoy peace of mind knowing their
                                home is protected by durable materials and expert workmanship—built to
                                perform for years to come. */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactSection />
        </div>
    )
}

export default ValentineComponent
