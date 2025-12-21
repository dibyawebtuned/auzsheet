"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterItem = ({ end, suffix = "", label }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <div ref={ref} className="flex flex-col items-center">
            <span className="host-grotesk text-[50px] host-grotesk-regular text-[#171716]">
                {inView ? <CountUp end={end} duration={2} separator="," /> : 0}
                {suffix}
            </span>
            <span className="text-[#505050] host-grotesk host-grotesk-semibold text-[20px]">
                {label}
            </span>
        </div>
    );
};

export default CounterItem;
