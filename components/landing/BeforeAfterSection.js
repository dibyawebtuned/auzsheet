
"use client";

import React, { useEffect } from "react";
import { ImageComparisonSlider } from "@/components/ui/image-comparison-slider-horizontal";
import { IMAGES } from '@/constants/assets';


import AOS from "aos";
import "aos/dist/aos.css";

const BeforeAfterSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <section className="max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 py-[80px] overflow-hidden">
            {/* Section Heading */}
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-3 md:gap-4 lg:gap-10 mb-10'>
                <div className='flex-1'>
                    <h2 className='host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold' data-aos="fade-up">
                        Before & after
                    </h2>
                </div>
                <div className='flex-1'>
                    <p className='m-0 host-grotesk host-grotesk-semibold auz_text_gray text-base sm:text-[17px] lg:text-[18px] text-justify leading-5' data-aos="fade-left">
                        What a difference a roof make
                    </p>
                </div>
            </div>

            <div className="w-full h-[430px] aspect-[16/9] rounded-xl overflow-hidden border">
                <ImageComparisonSlider
                    leftImage={IMAGES.service_one.src}
                    rightImage={IMAGES.service_two.src}
                    altLeft="Before renovation"
                    altRight="After renovation"
                />
            </div>
        </section>
    );
};

export default BeforeAfterSection;


// "use client"
// import React from 'react';
// import BeforeAfterSlider from 'react-before-after-slider-component';
// import 'react-before-after-slider-component/dist/build.css';

// import ImageEight from '@/public/assets/img/gallery/One.jpg';
// import ImageSeven from '@/public/assets/img/gallery/Two.jpg';

// const BeforeAfter = () => {
//     const FIRST_IMAGE = {
//         imageUrl: ImageEight.src
//     };

//     const SECOND_IMAGE = {
//         imageUrl: ImageSeven.src
//     };

//     const sliderHeight = 600;

//     const customHandleStyle = {
//         width: 'clamp(40px, 8vw, 70px)',
//         height: 'clamp(40px, 8vw, 70px)',
//         backgroundColor: '#ffffff',
//         backgroundImage: 'url("/assets/img/logo.png")',
//         backgroundSize: '70%',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         border: '3px solid #f1f1f1',
//         borderRadius: '50%',
//         boxShadow: '0 0 10px rgba(0,0,0,0.3)',
//         cursor: 'ew-resize',
//         className: 'before-after-handle'
//     };

//     return (
//         <div className='max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 py-[80px]'>
//             <div className='flex flex-col lg:flex-row items-start lg:items-center gap-3 md:gap-4 lg:gap-10 mb-10'>
//                 <div className='flex-1'>
//                     <h2 className='host-grotesk text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>
//                         Before & after
//                     </h2>
//                 </div>

//                 <div className='flex-1'>
//                     <p className='m-0 host-grotesk host-grotesk-semibold auz_text_gray text-base sm:text-[17px] lg:text-[18px] text-justify leading-5'>
//                         What a difference a roof makes
//                     </p>
//                 </div>
//             </div>

//             <div className='w-full relative rounded-[15px] md:rounded-[20px] overflow-hidden shadow-xl'
//                 style={{ height: `${sliderHeight}px` }}
//             >
//                 <BeforeAfterSlider
//                     firstImage={FIRST_IMAGE}
//                     secondImage={SECOND_IMAGE}
//                     sliderLineColor="#f1f1f1"
//                     sliderLineWidth={3}
//                     delimiterIconStyles={customHandleStyle}
//                     defaultValue={50}
//                 />
//             </div>

//             <p className='text-center mt-4 text-gray-400 text-xs md:hidden'>
//                 Drag the slider to compare
//             </p>
//         </div>
//     );
// };

// export default BeforeAfter;