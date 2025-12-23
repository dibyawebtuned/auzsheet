"use client"
import React from "react"
import Image from "next/image"
import { IMAGES } from "@/constants/assets"

const BelomntComponent = () => {
    return (
        <div className="max-w-[1440px] mx-3 md:mx-5 xl:mx-auto mt-[100px]
                    flex justify-center auz_bg relative rounded-[30px] overflow-hidden">

            <div className="px-6 sm:px-8 py-12 sm:py-16 flex flex-col gap-[30px] w-full">

                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[30px]">
                    <div className="flex-1">
                        <h2 className="host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold">
                            Projects
                        </h2>
                    </div>

                    <div className="flex-1">
                        <span className="auz_text_gray host-grotesk host-grotesk-semibold
                             text-base sm:text-[17px] lg:text-[18px]
                             leading-5 block max-w-[420px]">
                            Our most recent Auzsheet Projects have assisted in transforming exterior
                            facades of sites all around Newcastle, the Hunter and Central Coast regions!
                        </span>
                    </div>
                </div>

                {/* Image + Overlay */}
                <div className="relative w-full">

                    {/* Image */}
                    <div className="relative h-[280px] sm:h-[360px] lg:h-[450px]
                          overflow-hidden rounded-[20px]">
                        <Image
                            src={IMAGES.service_one}
                            alt="Service image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Overlay Card */}
                    <div
                        className="
                        absolute
                        bottom-4 left-1/2 -translate-x-1/2
                        lg:top-[-20px] lg:right-[40px] lg:left-auto lg:translate-x-0
                        bg-black text-white
                        w-[90%] sm:w-[70%] lg:w-[40%]
                        max-w-[800px]
                        rounded-[12px]
                        px-5 py-6
                        flex flex-col sm:flex-row gap-4
                        "
                    >
                        {/* Left column */}
                        <div className="flex flex-col gap-2 font-semibold text-[16px] sm:text-[18px] host-grotesk">
                            <span>Manager:</span>
                            <span>Location:</span>
                            <span>Project year:</span>
                        </div>

                        {/* Right column */}
                        <div className="flex flex-col gap-2 text-[16px] sm:text-[18px] host-grotesk">
                            <span>Bryan Knight</span>
                            <span>Mexico</span>
                            <span>2024</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BelomntComponent
