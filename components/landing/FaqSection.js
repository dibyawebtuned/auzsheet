"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FaqSection = () => {
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

                <div className="flex-1 border-2 border-green-600">

                </div>
            </div>
        </div>
    )
}

export default FaqSection
