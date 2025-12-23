"use client"
import React from 'react'
import FaqSection from '@/components/landing/FaqSection'
import ContactSection from '@/components/landing/ContactSection'

const FaqComponent = () => {
  return (
    <>
      <div className="max-w-360 mx-auto mx-3 md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] auz_bg relative rounded-[30px] overflow-hidden">
        <div className='px-8 py-16 flex gap-[30px]'>
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

      <ContactSection />
    </>
  )
}

export default FaqComponent