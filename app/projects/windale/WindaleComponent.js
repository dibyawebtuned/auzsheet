"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { IMAGES } from '@/constants/assets'
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"

import ContactSection from '@/components/landing/ContactSection'

import AOS from "aos";
import "aos/dist/aos.css";

const WindaleComponent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);


    const [index, setIndex] = useState(-1)

    // Partial dynamic data
    const project = {
        title: "Windale Project",
        description: "The Windale Project focused on giving a home a complete exterior upgrade, ensuring both functionality and aesthetic appeal. With the home showing signs of age and persistent roof issues, the goal was to provide a long-lasting solution that would protect the property while giving it a refreshed, modern look.",
        manager: "Bryan Knight",
        location: "Australia",
        year: "2024",
        mainImage: IMAGES.service_three,
        gallery: [IMAGES.service_one, IMAGES.service_two, IMAGES.service_three],
        sections: [
            {
                title: "Introduction",
                text: "This home in Windale required a new roof, fascia cover and gutters. The home-owners had been dealing with persistant leaks since purchase and the old tile roof was needing a refresh! Auzsheet was able to provide the client with a new roof, fascia cover and gutters, all in the popular Colorbond colour, Monument.",
                titleSize: 32
            },
            {
                title: "01. The Challenge",
                text: "The homeowners had been dealing with ongoing leaks since purchasing the house, and the old tile roof was deteriorating, making the problem worse over time. In addition to the practical concerns of water damage and maintenance, the existing roof and gutters no longer complemented the home's exterior. The challenge was to replace these elements efficiently while ensuring durability, weather resistance, and an improved overall appearance."
            },
            {
                title: "02. The Solution",
                text: "Auzsheet provided a comprehensive solution by installing a brand-new roof, fascia cover, and gutters, all in the popular Colorbond color “Monument.” This not only solved the persistent leak issues but also provided a sleek and modern exterior finish. Every element was carefully selected to ensure long-term durability, low maintenance, and a stylish upgrade that would enhance the home's curb appeal."
            },
            {
                title: "03. The Result",
                text: "The completed project resulted in a home that is both visually striking and fully protected from the elements. The persistent leaks were completely resolved, and the new roof, fascia, and gutters give the home a contemporary, polished look. With this refresh, the homeowners now enjoy a durable, weatherproof exterior that enhances both the value and enjoyment of their property."
            }
        ]
    }

    return (
        <div className='px-3 md:px-5 lg:px-5'>
            <div className='max-w-360 mx-auto md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] flex justify-center relative rounded-[30px] overflow-hidden'>
                <div className='px-4 md:px-8 py-10 md:py-16 flex flex-col gap-[15px] sm:gap-[30px] auz_bg'>

                    {/* Header */}
                    <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[10px] md:gap-[30px]'>
                        <div className='flex-1'>
                            <h2 className='host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold' data-aos="fade-up">
                                {project.title}
                            </h2>
                        </div>

                        <div className='flex-1'>
                            <span className='auz_text_gray w-[60%] host-grotesk host-grotesk-semibold text-base sm:text-[17px] lg:text-[18px] text-center leading-5' data-aos="fade-left" data-aos-delay="200">
                                {project.description}
                            </span>
                        </div>
                    </div>

                    {/* Main Image with Overlay */}
                    <div className="relative w-full">
                        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-[20px]">
                            <Image
                                src={project.mainImage}
                                alt="Service image"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        <div className="absolute top-[20px] sm:top-[60px] lg:top-[60px] left-1/2 sm:left-3/4 transform -translate-x-1/2 border border-white bg-black text-white w-[90%] sm:w-[70%] lg:w-[40%] max-w-[800px] rounded-[12px] px-4 sm:px-5 py-4 sm:py-6 flex flex-row gap-4" data-aos="fade-up">
                            <div className="flex flex-col gap-2 font-semibold text-[16px] sm:text-[18px] host-grotesk">
                                <span>Manager:</span>
                                <span>Location:</span>
                                <span>Project year:</span>
                            </div>

                            <div className="flex flex-col gap-2 text-[16px] sm:text-[18px] host-grotesk">
                                <span>{project.manager}</span>
                                <span>{project.location}</span>
                                <span>{project.year}</span>
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
                            {project.gallery.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative h-[220px] rounded-[14px] overflow-hidden cursor-pointer"
                                    onClick={() => setIndex(i)}
                                >
                                    <Image
                                        src={img}
                                        alt={`Gallery image ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>

                        <Lightbox
                            open={index >= 0}
                            close={() => setIndex(-1)}
                            index={index}
                            slides={project.gallery.map((img) => ({ src: img.src }))}
                            plugins={[Zoom]}
                        />
                    </div>

                    {/* Project Sections */}
                    <div className='flex flex-col gap-9'>
                        {project.sections.map((section, idx) => (
                            <div key={idx}>
                                <h2 className={`host-grotesk host-grotesk-bold text-[${section.titleSize || 28}px]`}>
                                    {section.title}
                                </h2>
                                {section.text && (
                                    <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                                        {section.text}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <ContactSection />
        </div>
    )
}

export default WindaleComponent










// "use client"
// import React, { useState } from 'react'
// import Image from 'next/image'
// import { IMAGES } from '@/constants/assets'
// import Lightbox from "yet-another-react-lightbox"
// import Zoom from "yet-another-react-lightbox/plugins/zoom"
// import "yet-another-react-lightbox/styles.css"

// import ContactSection from '@/components/landing/ContactSection'

// const WindaleComponent = () => {
//     const [index, setIndex] = useState(-1)

//     const images = [
//         IMAGES.service_one,
//         IMAGES.service_two,
//         IMAGES.service_three,
//     ]

//     return (
//         <div className='px-3 md:px-5 lg:px-5'>
//             <div className='max-w-360 mx-auto md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] flex justify-center  relative rounded-[30px] overflow-hidden'>
//                 <div className='px-4 md:px-8 py-10 md:py-16 flex flex-col gap-[15px] sm:gap-[30px] auz_bg'>
//                     <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[10px] md:gap-[30px] '>
//                         <div className='flex-1'>
//                             <h2 className='host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>
//                                 Windale Project
//                             </h2>
//                         </div>

//                         <div className='flex-1'>
//                             <span className='auz_text_gray w-[60%] host-grotesk host-grotesk-semibold text-base sm:text-[17px] lg:text-[18px] text-center leading-5'>
//                                 The Windale Project focused on giving a home a complete exterior upgrade,
//                                 ensuring both functionality and aesthetic appeal.
//                                 With the home showing signs of age and persistent roof issues,
//                                 the goal was to provide a long-lasting solution that would protect
//                                 the property while giving it a refreshed, modern look.
//                             </span>
//                         </div>
//                     </div>

//                     <div className="relative w-full">
//                         <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-[20px]">
//                             <Image
//                                 src={IMAGES.service_one}
//                                 alt="Service image"
//                                 fill
//                                 className="object-cover"
//                                 priority
//                             />
//                             <div className="absolute inset-0 bg-black/20" />
//                         </div>

//                         <div
//                             className="
//               absolute
//               top-[20px] sm:top-[60px] lg:top-[60px]
//               left-1/2 sm:left-3/4 transform -translate-x-1/2
//               border border-white
//             bg-black text-white
//               w-[90%] sm:w-[70%] lg:w-[40%]
//               max-w-[800px]
//               rounded-[12px]
//               px-4 sm:px-5 py-4 sm:py-6
//               flex flex-row gap-4
//               "
//                         >
//                             <div className="flex flex-col gap-2 font-semibold text-[16px] sm:text-[18px] host-grotesk">
//                                 <span>Manager:</span>
//                                 <span>Location:</span>
//                                 <span>Project year:</span>
//                             </div>

//                             <div className="flex flex-col gap-2 text-[16px] sm:text-[18px] host-grotesk">
//                                 <span>Bryan Knight</span>
//                                 <span>Australia</span>
//                                 <span>2024</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div>
//                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
//                             {images.map((img, i) => (
//                                 <div
//                                     key={i}
//                                     className="relative h-[220px] rounded-[14px] overflow-hidden cursor-pointer"
//                                     onClick={() => setIndex(i)}
//                                 >
//                                     <Image
//                                         src={img}
//                                         alt={`Gallery image ${i + 1}`}
//                                         fill
//                                         className="object-cover transition-transform duration-300 hover:scale-105"
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         <Lightbox
//                             open={index >= 0}
//                             close={() => setIndex(-1)}
//                             index={index}
//                             slides={images.map((img) => ({
//                                 src: img.src,
//                             }))}
//                             plugins={[Zoom]}
//                         />
//                     </div>

//                     <div className='flex flex-col gap-9'>
//                         <div>
//                             <h2 className='host-grotesk host-grotesk-bold text-[32px]'>Introduction</h2>
//                             <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
//                                 This home in Windale required a new roof, fascia cover and gutters.
//                                 The home-owners had been dealing with persistant leaks since purchase
//                                 and the old tile roof was needing a refresh! Auzsheet was able to
//                                 provide the client with a new roof, fascia cover and gutters, all
//                                 in the popular Colorbond colour, Monument.
//                             </p>
//                         </div>

//                         <div>
//                             <h2 className='host-grotesk host-grotesk-bold text-[28px]'>01. The Challenge</h2>
//                             <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
//                                 The homeowners had been dealing with ongoing leaks since purchasing the house,
//                                 and the old tile roof was deteriorating, making the problem worse over time.
//                                 In addition to the practical concerns of water damage and maintenance,
//                                 the existing roof and gutters no longer complemented the home's exterior.
//                                 The challenge was to replace these elements efficiently while ensuring
//                                 durability, weather resistance, and an improved overall appearance.
//                             </p>
//                         </div>

//                         <div>
//                             <h2 className='host-grotesk host-grotesk-bold text-[28px]'>02. The Solution</h2>
//                             <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
//                                 Auzsheet provided a comprehensive solution by installing a brand-new roof,
//                                 fascia cover, and gutters, all in the popular Colorbond color “Monument.”
//                                 This not only solved the persistent leak issues but also provided a sleek
//                                 and modern exterior finish. Every element was carefully selected to ensure
//                                 long-term durability, low maintenance, and a stylish upgrade that would
//                                 enhance the home's curb appeal.
//                             </p>
//                         </div>

//                         <div>
//                             <h2 className='host-grotesk host-grotesk-bold text-[28px]'>03. The Result</h2>
//                             <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
//                                 The completed project resulted in a home that is both visually striking
//                                 and fully protected from the elements. The persistent leaks were completely
//                                 resolved, and the new roof, fascia, and gutters give the home a contemporary,
//                                 polished look. With this refresh, the homeowners now enjoy a durable,
//                                 weatherproof exterior that enhances both the value and enjoyment of their property.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <ContactSection />
//         </div>
//     )
// }

// export default WindaleComponent
