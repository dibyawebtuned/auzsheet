"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/assets";
import {
    BookOpen,
    Target,
    Compass,
    BadgeCheck,
    Eye,
    ShieldCheck,
    Star,
    Zap,
    Heart,
} from "lucide-react";

const ABOUT = [{ image: IMAGES.about }];

const valuesData = [
    {
        title: "Quality Craftsmanship",
        description:
            "We deliver roofing solutions using premium materials and expert workmanship that stand the test of time.",
        icon: BadgeCheck,
    },
    {
        title: "Integrity & Transparency",
        description:
            "Every project is handled with honesty, clear communication, and trust, ensuring our clients are fully informed.",
        icon: ShieldCheck,
    },
    {
        title: "Customer-Centric Approach",
        description:
            "We treat every project as if it were our own, prioritising the needs, safety, and satisfaction of our clients.",
        icon: Star,
    },
    {
        title: "Innovation & Reliability",
        description:
            "We embrace modern solutions like Colorbond® steel, skylights, and architectural cladding to provide durable, stylish, and reliable results.",
        icon: Zap,
    },
    {
        title: "Safety & Responsibility",
        description:
            "We ensure the safety of both our team and clients, providing comprehensive solutions like Edge Protection Safety Rail when needed.",
        icon: Heart,
    },
];

export default function MissionVisionComponent() {
    const [active, setActive] = useState("story");
    const [activeValue, setActiveValue] = useState(null);
    const refs = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;
            let current = "story";
            Object.entries(refs.current).forEach(([id, el]) => {
                if (el && el.offsetTop <= scrollPos) current = id;
            });
            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        refs.current[id]?.scrollIntoView({ behavior: "smooth" });
    };

    const toggleValue = (index) => {
        setActiveValue(activeValue === index ? null : index);
    };

    const journeyData = [
        {
            year: "2010",
            title: "The Humble Beginning",
            description:
                "With nothing but a rusty truck, a few tools, and a big dream, Roofytop was founded.",
        },
        {
            year: "2012",
            title: "Building a Reputation",
            description:
                "Satisfied customers spread the word and our bookings grew steadily.",
        },
        {
            year: "2021",
            title: "A Year of Growth",
            description:
                "We expanded our crew, introduced drone inspections, and rebranded.",
        },
    ];

    return (
        <section className="max-w-360 mx-auto px-3 sm:px-5 xl:px-25 mt-[60px] sm:mt-[80px] mb-[60px] sm:mb-[80px]">
            <div className="flex flex-col sm:flex-row gap-10">
                {/* ================= LEFT NAV ================= */}
                <div className="w-full sm:w-[280px]">
                    <div
                        className="
              sm:sticky sm:top-24
              flex sm:grid
              sm:grid-cols-2
              gap-[3px]
              overflow-x-auto sm:overflow-visible
              bg-white
              -mx-3 sm:mx-0
              px-3 sm:px-0
            "
                    >
                        {[
                            { id: "story", label: "Story", icon: BookOpen },
                            { id: "mission", label: "Mission", icon: Target },
                            { id: "vision", label: "Vision", icon: Compass },
                            { id: "values", label: "Values", icon: BadgeCheck },
                        ].map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className={`
                  flex items-center justify-center gap-2
                  py-4 sm:py-7
                  px-4
                  rounded-[5px]
                  text-sm sm:text-base
                  font-semibold uppercase whitespace-nowrap
                  transition
                  ${active === id
                                        ? "bg-black text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                    }
                `}
                            >
                                <Icon className="w-5 h-5" />
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="flex-1 space-y-14 sm:space-y-20">
                    {/* STORY */}
                    <div id="story" ref={(el) => (refs.current.story = el)}>
                        <div className="text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-left sm:text-justify space-y-4">
                            <p>
                                Auzsheet Roofing and Guttering is a family-owned business delivering
                                quality roofing solutions across residential and commercial projects.
                            </p>
                            <p>
                                We specialise in Colorbond® steel roofing, gutters, skylights, and
                                architectural wall cladding.
                            </p>
                        </div>

                        {/* TIMELINE */}
                        <div className="mt-8 border-l-2 border-gray-300 pl-4 sm:pl-6 space-y-10">
                            {journeyData.map(({ year, title, description }) => (
                                <div key={year} className="relative">
                                    <span className="absolute -left-2 top-2 w-3 h-3 bg-black rounded-full" />
                                    <span className="text-xl sm:text-2xl font-bold ml-4 block">
                                        {year}
                                    </span>
                                    <h4 className="text-lg font-semibold">{title}</h4>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* IMAGE */}
                        <div className="mt-8 h-56 sm:h-72 lg:h-80 relative rounded-xl overflow-hidden">
                            <Image
                                src={ABOUT[0].image}
                                alt="About"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* MISSION */}
                    <div id="mission" ref={(el) => (refs.current.mission = el)}
                        className="relative py-14 sm:py-20 rounded-2xl overflow-hidden"
                        style={{ backgroundImage: "url('/assets/img/about.png')" }}
                    >
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative text-white px-6 max-w-3xl mx-auto space-y-6">
                            <h2 className="flex items-center gap-3 text-[22px] sm:text-[30px] font-bold uppercase">
                                <Target className="w-7 h-7" /> Mission
                            </h2>
                            <p className="bg-white/30 p-6 rounded-xl backdrop-blur">
                                To deliver safe, reliable, and premium roofing solutions with
                                exceptional customer care.
                            </p>
                        </div>
                    </div>

                    {/* VISION */}
                    <div id="vision" ref={(el) => (refs.current.vision = el)}>
                        <h2 className="text-[26px] sm:text-4xl lg:text-[43px] font-semibold mb-6">
                            Vision
                        </h2>
                        <div className="bg-[#faf3e9] p-6 sm:p-8 rounded-xl max-w-2xl">
                            <p>
                                To be the leading provider of innovative and durable roofing
                                solutions.
                            </p>
                        </div>
                    </div>

                    {/* VALUES */}
                    <div id="values" ref={(el) => (refs.current.values = el)}>
                        <h2 className="text-[26px] sm:text-4xl lg:text-[43px] font-semibold mb-6">
                            Values
                        </h2>

                        <div className="max-w-3xl space-y-4">
                            {valuesData.map((item, index) => (
                                <div key={index} className="border rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => toggleValue(index)}
                                        className={`w-full px-4 sm:px-6 py-4 flex justify-between items-center font-semibold ${activeValue === index
                                            ? "bg-black text-white"
                                            : "bg-gray-100"
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <item.icon className="w-5 h-5" />
                                            {item.title}
                                        </div>
                                        <span>{activeValue === index ? "−" : "+"}</span>
                                    </button>
                                    {activeValue === index && (
                                        <div className="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-600">
                                            {item.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
