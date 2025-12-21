"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { IMAGES } from "@/constants/assets";

const MARQUEE_ITEMS = [
  { image: IMAGES.colorbond },
  { image: IMAGES.roofing_building },
  { image: IMAGES.stramit },
  { image: IMAGES.velux },
  { image: IMAGES.insullation_industries },
];

export default function CustomMarquee() {
  return (
    <div className="overflow-hidden py-6">
      <Marquee speed={60} pauseOnHover={false}
        gradient={true}>
        {MARQUEE_ITEMS.map((item, index) => (
          <div
            key={index}
            className="mx-12 flex flex-col items-center gap-3"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={70}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
