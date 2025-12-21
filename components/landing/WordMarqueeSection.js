"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { IMAGES } from "@/constants/assets";

const MARQUEE_ITEMS = [
    {
        text: "Fascia & Gutter",
        image: IMAGES.roof
    },
    {
        text: "New Roofs & Re-roofs",
        image: IMAGES.roof
    },
    {
        text: "Skylights",
        image: IMAGES.roof
    },
];

export default function CustomMarquee() {
    return (
        <div className="overflow-hidden bg-[#171716]">
            <Marquee speed={60} pauseOnHover={false} gradient={false}>
                {MARQUEE_ITEMS.map((item, index) => (
                    <div
                        key={index}

                    >
                        <div className="flex items-center py-[15px]">
                            <span className="host-grotesk text-stroke 
                            text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-[46px]
                  mr-3
                  sm:mr-10
                  lg:mr-[50px]
                  whitespace-nowrap
                            mr-[50px]">{item.text}</span>
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={103}
                                height={25}
                                className="object-contain mr-[50px]"
                            />
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
