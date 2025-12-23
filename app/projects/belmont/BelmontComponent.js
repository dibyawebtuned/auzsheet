"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { IMAGES } from '@/constants/assets'
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"

import ContactSection from '@/components/landing/ContactSection'

const BelomntComponent = () => {
  const [index, setIndex] = useState(-1)

  const images = [
    IMAGES.service_one,
    IMAGES.service_two,
    IMAGES.service_three,
  ]
  return (
    <>
      <div className='max-w-360 mx-auto mx-3 md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] flex justify-center auz_bg relative rounded-[30px] overflow-hidden'>
        <div className='px-8 py-16 flex flex-col gap-[30px]'>
          {/*  */}
          <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[10px] md:gap-[30px]'>
            <div className='flex-1'>
              <h2 className='host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>
                Projects
              </h2>
            </div>

            <div className='flex-1'>
              <span className='auz_text_gray w-[60%] host-grotesk host-grotesk-semibold text-base sm:text-[17px] lg:text-[18px] text-center leading-5'>
                Our most recent Auzsheet Projects have assisted in transforming exterior
                facades of sites all around Newcastle, the Hunter and Central Coast regions!
              </span>
            </div>
          </div>

          {/*  */}
          <div className="relative w-full">
            {/* Image */}
            <div className="relative h-[450px] overflow-hidden rounded-[20px]">
              <Image
                src={IMAGES.service_one}
                alt="Service image"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlay Card */}
            <div className="
            absolute
            bottom-80 left-52 -translate-x-1/2
            lg:top-[-20px] lg:right-[40px] lg:left-auto lg:translate-x-0
             bg-black text-white
            w-[90%] sm:w-[70%] lg:w-[40%]
            max-w-[800px]
            rounded-[12px]
            px-5 py-6
            flex flex-row gap-4
            ">

              {/* Left column */}
              <div className="flex flex-col gap-2 font-semibold text-[16px] sm:text-[18px] host-grotesk">
                <span>Manager:</span>
                <span>Location:</span>
                <span>Project year:</span>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-2 text-[16px] sm:text-[18px] host-grotesk">
                <span>Bryan Knight</span>
                <span>Mexico</span>
                <span>2024</span>
              </div>

            </div>

          </div>

          {/* Light Box Images STARTS */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
              {images.map((img, i) => (
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

            {/* Lightbox */}
            <Lightbox
              open={index >= 0}
              close={() => setIndex(-1)}
              index={index}
              slides={images.map((img) => ({
                src: img.src,
              }))}
              plugins={[Zoom]}
            />
          </div>
          {/* Light Box Images ENDS */}

          {/* Project Content STARTS */}
          <div className='flex flex-col gap-9'>
            <div>
              <h2 className='host-grotesk host-grotesk-bold text-[32px]'>Introduction</h2>
              <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                This stunning double story home in Belmont North was
                struggling with persistent leaks. The owners also were
                seeking an exterior refresh that would suit their coastal
                home. Auzsheet assisted with the installation of a
                new-roof, fascia cover and gutter in the Colorbond
                steel range "Dune".
              </p>
            </div>

            <div>
              <h2 className='host-grotesk host-grotesk-bold text-[28px]'>01. The Challenge</h2>
              <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                When our power of choice is untrammelled and when nothing prevents our being able
                to do what we like best, every pleasure is to be welcomed and every pain avoided.
                But in certain circumstances and owing to the claims of duty or the obligations of
                business it will frequently occur that pleasures have to be repudiated and annoyances
                accepted. The wise man therefore always holds in these matters to this principle of
                selection: he rejects pleasures to secure other greater pleasures, or else he endures
                pains to avoid worse pains."
              </p>
            </div>

            <div>
              <h2 className='host-grotesk host-grotesk-bold text-[28px]'>02. The Solution</h2>
              <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>

              <ul className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                <li>One who avoids a pain that produces no resultant pleasure.</li>
                <li>Laborious physical exercise.</li>
                <li>One who avoids a pain that produces no resultant</li>
                <li>Avoids pleasure itself, because it is.</li>
              </ul>
            </div>

            <div>
              <h2 className='host-grotesk host-grotesk-bold text-[28px]'>03. The Result</h2>
              <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                Because it is pain, but because occasionally circumstances occur in which toil
                and pain can procure him some great pleasure. To take a trivial example, which
                of us ever undertakes laborious physical exercise, except to obtain some advantage
                from it? But who has any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a pain that produces
                no resultant pleasure?"

                <br />

                But I must explain to you how all this mistaken idea of denouncing pleasure
                and praising pain was born and I will give you a complete account of the system,
                and expound the actual teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue pleasure rationally encounter
                consequences that are extremely painful. Nor again is there anyone who loves or pursues or
                desires to obtain pain of itself.
              </p>
            </div>
          </div>
          {/* Project Content ENDS */}

        </div>
      </div>

      <ContactSection />
    </>
  )
}

export default BelomntComponent