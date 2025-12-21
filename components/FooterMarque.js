// components/Marquee.js
"use client";

import Marquee from "react-fast-marquee";

export default function CustomMarquee() {
  return (
    <div className="overflow-hidden">
      <Marquee
        speed={60}
        pauseOnHover={false}
        gradient={false}
      >
        <span className="mx-8 text-[#565656] host-grotesk host-grotesk-bold text-[80px] sm:text-[120px] md:text-[180px] lg:text-[225px]">
          AUZSHEET
        </span>
        <span className="mx-8 text-[#565656] host-grotesk host-grotesk-bold text-[80px] sm:text-[120px] md:text-[180px] lg:text-[225px]">
          ROOFING
        </span>
      </Marquee>
    </div>
  );
}
