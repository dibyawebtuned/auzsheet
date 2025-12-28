"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FaqSection from '@/components/landing/FaqSection'
import ContactSection from '@/components/landing/ContactSection'
import { ChevronDown, Phone, ArrowUpRight } from "lucide-react"

import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    q: "Do you offer free quotes?",
    a: "Yes, we provide free, no-obligation quotes for all roofing and guttering projects..."
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


const FaqComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [openIndex, setOpenIndex] = useState(1)
  return (
    <div className='mx-3 md:mx-0'>
      <div className="max-w-360 mx-auto mx-3 md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] auz_bg relative rounded-[30px] overflow-hidden">
        <div className='px-4 sm:px-8 py-10 md:py-16 flex flex-col md:flex-row gap-[30px]'>
          <div className="flex-1 flex flex-col justify-between gap-1 sm:gap-0">
            {/* Section Heading */}
            <div className='flex flex-col items-start gap-[15px] mb-5 sm:mb-10'>
              <div className=''>
                <h2 className='host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>
                  Frequently Asked Questions
                </h2>
              </div>
              <div className=''>
                <p className='m-0 host-grotesk host-grotesk-semibold auz_text_gray text-base sm:text-[17px] lg:text-[18px] text-justify leading-5'>
                  At Auzsheet Roofing and Guttering, we know that choosing the right team for your roofing or exterior project is a big decision.
                </p>
              </div>
            </div>

            <div className=''>
              <div className='flex flex-col'>
                <span className="host-grotesk host-grotesk-semibold text-[20px] text-[#3D3D3D]">
                  Still have questions?
                </span>
                <p className="host-grotesk host-grotesk-semibold text-[#797979] text-[16px]">
                  We're here to help! Don't hesitate—ask away and get the answers you need.
                </p>
              </div>

              <div className='inline-block pt-5'>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 bg-black text-white text-[16px] font-semibold px-3 py-2 rounded-[8px] hover:bg-gray-900 transition"
                >
                  Get In Touch
                  <div className="bg-[#F4F4F4] text-black p-[10px] rounded-[4px]">
                    <ArrowUpRight size={16} className="arrow" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i

              return (
                <div key={i} className="border-t border-gray-400 last:border-b">
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
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"} `} >
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

      <ContactSection />
    </div>
  )
}

export default FaqComponent