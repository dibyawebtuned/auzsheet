"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        q: "Do you offer free quotes?",
        a: "Yes, we provide free, no-obligation quotes for all roofing and guttering projects."
    },
    {
        q: "What areas do you service?",
        a: "We proudly service residential and commercial clients across Maitland, Newcastle, Port Stephens, and the Hunter Valley. If you’re unsure whether we cover your area, just get in touch and we’ll be happy to help."
    },
    {
        q: "Are you a licensed and insured business?",
        a: "Yes, we are fully licensed and insured, ensuring peace of mind and professional workmanship."
    },
    {
        q: "What materials do you use?",
        a: "We use high-quality Colorbond® steel and trusted Australian-made materials designed for durability and performance."
    }
]

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(1)
    return (
        <div className="auz_bg">
            <div className="max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 py-[80px] flex flex-col sm:flex-row lg:gap-[50px]">
                <div className="flex-1">
                    {/* Section Heading */}
                    <div className='flex flex-col items-start gap-[15px] mb-10'>
                        <div className=''>
                            <h2 className='host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>Frequently Asked Questions</h2>
                        </div>
                        <div className=''>
                            <p className='m-0 host-grotesk host-grotesk-semibold auz_text_gray text-base sm:text-[17px] lg:text-[18px] text-justify leading-5'>
                                At Auzsheet Roofing and Guttering, we know that choosing the right team for your roofing or exterior project is a big decision.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    {faqs.map((item, i) => {
                        const isOpen = openIndex === i

                        return (
                            <div
                                key={i}
                                className="border-t border-gray-400 last:border-b"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                    className="w-full flex items-center justify-between py-5 text-left"
                                >
                                    <span className="host-grotesk font-semibold text-[20px]">
                                        {item.q}
                                    </span>

                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Animated Answer */}
                                <div
                                    className={`
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
          `}
                                >
                                    <p className="pb-5 host-grotesk host-grotesk-semibold text-gray-600 leading-6 max-w-[90%]">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
        </div>
    )
}

export default FaqSection
