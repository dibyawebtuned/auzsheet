"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BeforeAfter = () => {
    return (
        <div className='max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 py-[80px]'>
            {/* Section Heading */}
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-3 md:gap-4 lg:gap-10 mb-10'>
                <div className='flex-1'>
                    <h2 className='host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>Before & after</h2>
                </div>
                <div className='flex-1'>
                    <p className='m-0 host-grotesk host-grotesk-semibold auz_text_gray text-base sm:text-[17px] lg:text-[18px] text-justify leading-5'>
                        What a difference a roof makes
                    </p>
                </div>
            </div>

            {/* Before After Content */}
            <div>

            </div>
        </div>
    )
}

export default BeforeAfter
