"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/assets";
import { BookOpen, Target, Compass, BadgeCheck, Eye, ShieldCheck, Star, Zap, Heart } from "lucide-react";

const ABOUT = [{ image: IMAGES.about }];

// Values data
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

    /* Scroll Spy */
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;
            let current = "story";
            Object.entries(refs.current).forEach(([id, el]) => {
                if (el.offsetTop <= scrollPos) current = id;
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

    /* Journey Data */
    const journeyData = [
        {
            year: "2010",
            title: "The Humble Beginning",
            description:
                "With nothing but a rusty truck, a few tools, and a big dream, Roofytop was founded. We started small—just two roofers determined to deliver honest, high-quality work. Our first few projects were word-of-mouth jobs for friends, neighbors, and local homeowners.",
        },
        {
            year: "2012",
            title: "Building a Reputation",
            description:
                "As satisfied customers spread the word, our bookings began to grow. We tackled everything from shingle repairs to full roof replacements. We also hired our first full-time team member and invested in better equipment.",
        },
        {
            year: "2021",
            title: "A Year of Growth",
            description:
                "This was the year we leveled up! We added a project manager, expanded our crew, and introduced drone inspections. We also moved into our first small office space and rebranded with a new logo and fresh website.",
        },
    ];

    return (
        <section className="max-w-360 mx-auto px-3 md:px-5 xl:px-25 mt-[60px] sm:mt-[80px] mb-[60px] sm:mb-[80px]">
            <div className="flex flex-col sm:flex-row gap-10">
                {/* ================= LEFT STICKY GRID ================= */}
                <div className="flex-4">
                    <div className="sm:sticky sm:top-24 flex sm:grid sm:grid-cols-2 gap-[3px] overflow-x-auto sm:overflow-visible bg-white -mx-3 sm:mx-0 px-3 sm:px-0">
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

                {/* ================= RIGHT CONTENT ================= */}
                <div className="flex-8 space-y-20">
                    {/* ================= STORY ================= */}
                    <div id="story" ref={(el) => (refs.current["story"] = el)}>
                        <div className="auz_text_gray host-grotesk host-grotesk-semibold text-base sm:text-[17px] lg:text-[18px] leading-6 sm:text-justify space-y-2">
                            <p>
                                At Auzsheet Roofing and Guttering, we pride ourselves on being a local,
                                family-owned business dedicated to delivering quality roofing solutions
                                across residential and commercial projects. Founded by Kurt Richardson,
                                who brings over 15 years of hands-on industry experience, Auzsheet has built
                                its reputation on trust, craftsmanship, and a commitment to customer satisfaction.
                            </p>
                            <p>
                                We specialise in new roofs and re-roofs, using durable and stylish Colorbond®
                                steel to protect and enhance your home for years to come. Our services extend
                                to fascia and gutter installations, offering both new systems and upgrades to
                                replace leaking or outdated ones. For clients wanting to take their property
                                to the next level, we also provide additional features including skylight
                                installations - bringing natural light into dark spaces - and Colorbond® Architectural
                                Wall Cladding, which modernises exteriors with striking finishes and long-lasting
                                durability.
                            </p>
                        </div>

                        {/* ================= JOURNEY / TIMELINE ================= */}
                        <div className="mt-8 border-l-2 border-gray-300 pl-3 sm:pl-6 flex flex-col gap-8 sm:gap-12">
                            {journeyData.map(({ year, title, description }) => (
                                <div key={year} className="relative">
                                    <div className="absolute -left-[9px] sm:-left-3 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full"></div>
                                    <div className="host-grotesk">
                                        <span className="text-lg sm:text-2xl font-bold block mb-1 ml-3 sm:ml-4">{year}</span>
                                        <h4 className="text-md sm:text-xl font-semibold mb-1">{title}</h4>
                                        <p className="auz_text_gray host-grotesk-medium text-sm sm:text-base leading-5">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ================= IMAGE ================= */}
                        {ABOUT.map((item, index) => (
                            <div
                                key={index}
                                className="mt-8 w-full h-56 sm:h-72 lg:h-80 relative rounded-[10px] overflow-hidden"
                            >
                                <Image src={item.image} alt="About Section" fill className="object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* ================= MISSION ================= */}
                    <div id="mission" ref={(el) => (refs.current["mission"] = el)}
                        className="relative bg-cover bg-center bg-no-repeat h-auto py-14 sm:py-20 rounded-[20px] overflow-hidden"
                        style={{ backgroundImage: "url('/assets/img/about.png')" }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                        {/* Content */}
                        <div className="relative z-10 max-w-3xl mx-auto text-white px-3 sm:px-6 space-y-6">
                            {/* Heading */}
                            <div className="flex items-center gap-3">
                                <Target className="w-8 h-8 text-white" />
                                <h2 className="host-grotesk host-grotesk-bold text-[26px] sm:text-[30px] uppercase tracking-wide">Mission</h2>
                            </div>
                            {/* Mission Text */}
                            <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-8 shadow-lg">
                                <p className="text-base sm:text-[17px] lg:text-[18px] host-grotesk host-grotesk-medium leading-6">
                                    To make your project seamless, we can also additionally supply and install Edge
                                    Protection Safety Rail directly, saving you the hassle of coordinating multiple
                                    contractors and ensuring safety is always a top priority.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= VISION ================= */}
                    <div id="vision" ref={(el) => (refs.current["vision"] = el)}>
                        <div className="mb-4 sm:mb-6 flex items-center gap-3">
                            <div className="p-2 sm:p-3 bg-black rounded-[10px]">
                                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <h2 className="
                            host-grotesk 
                            text-3xl sm:text-4xl lg:text-[43px] 
                            host-grotesk-semibold
                            ">
                                Vision
                            </h2>
                        </div>

                        <div className="max-w-2xl">
                            <div className="bg-[#faf3e9] backdrop-blur-md border border-white/30 rounded-xl p-4 sm:p-8">
                                <p className="host-grotesk auz_text_gray leading-6 text-base sm:text-[17px] lg:text-[18px] host-grotesk-semibold">
                                    To be the leading provider of durable, innovative, and aesthetically exceptional
                                    roofing solutions across residential and commercial projects, setting the benchmark
                                    for quality, reliability, and customer satisfaction in every roof we deliver.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= VALUES ================= */}
                    <div id="values" ref={(el) => (refs.current["values"] = el)}>
                        <div className="mb-6 flex items-center gap-3">
                            <div className="p-2 sm:p-3 bg-black rounded-[10px]">
                                <BadgeCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <h2
                                className="
                            host-grotesk 
                            text-3xl sm:text-4xl lg:text-[43px] 
                            host-grotesk-semibold
                            ">
                                Values
                            </h2>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col gap-3 sm:gap-4 max-w-3xl">
                            {valuesData.map((item, index) => (
                                <div key={index} className="border border-gray-300 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => toggleValue(index)}
                                        className={`w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 transition cursor-pointer font-semibold host-grotesk ${activeValue === index
                                            ? "bg-black text-white"
                                            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            {/* Dynamic Icon */}
                                            {React.createElement(item.icon, {
                                                className: `w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${activeValue === index ? "text-white" : "text-gray-600"
                                                    }`,
                                            })}
                                            <span className="text-[15px] sm:text-[18px]">{item.title}</span>
                                        </div>
                                        <span
                                            className={`text-xl transition-transform duration-300 ${activeValue === index ? "rotate-45" : "rotate-0"
                                                }`}
                                        >
                                            +
                                        </span>
                                    </button>

                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeValue === index ? "max-h-96 opacity-100 py-3 sm:py-4" : "max-h-0 opacity-0 py-0"
                                            }`}
                                    >
                                        <p className="host-grotesk host-grotesk-semibold auz_text_gray text-sm sm:text-base leading-[1.5] sm:leading-6">{item.description}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
