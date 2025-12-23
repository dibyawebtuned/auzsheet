"use client"
import React from 'react'
import { Home, Phone, Mail } from "lucide-react"
import ContactSection from '@/components/landing/ContactSection'

const ContactComponent = () => {
  return (
    <div>
      {/*  */}
      <div className='max-w-360 mx-auto mx-3 md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] flex justify-center auz_bg relative rounded-[30px] overflow-hidden'>
        <div className='px-8 py-16 flex flex-col gap-[30px]'>
          <div className='flex items-center gap-[30px]'>
            <div className='flex-1'>
              <h2 className='host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>
                Contact Us
              </h2>
            </div>

            <div className='flex-1'>
              <span className='auz_text_gray w-[60%] host-grotesk host-grotesk-semibold text-base sm:text-[17px] lg:text-[18px] text-center leading-5'>
                Request a fast, obligation-free quote from Auzsheet Roofing and Guttering.
                We proudly service Newcastle, Central Coast and Hunter Regions delivering
                expert advice and transparent, competitive pricing.
              </span>
            </div>
          </div>

          {/* Contact Informations */}
          <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch">
            {/* Visit Us */}
            <div className="flex-1 flex flex-col gap-7 items-center text-center p-6 border-r border-[#505050]">
              <div className='bg-black w-12 h-12 rounded-[10px] flex items-center justify-center'>
                <Home className="text-[#faf3e9] w-6 h-6" />
              </div>

              <div>
                <h3 className="text-black text-xl font-semibold mb-1">VISIT US</h3>
                <p className="text-gray-500 mb-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-black font-semibold">Australia</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex-1 flex flex-col gap-7 items-center text-center p-6 border-r border-[#505050]">
              <div className='bg-black w-12 h-12 rounded-[10px] flex items-center justify-center'>
                <Phone className="text-[#faf3e9] w-6 h-6" />
              </div>

              <div>
                <h3 className="text-black text-xl font-semibold mb-1">CALL US</h3>
                <p className="text-gray-500 mb-1 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-black font-semibold">+0466 911 940 </p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex-1 flex flex-col gap-7 items-center text-center p-6">
              <div className='bg-black w-12 h-12 rounded-[10px] flex items-center justify-center'>
                <Mail className="text-[#faf3e9] w-6 h-6" />
              </div>

              <div>
                <h3 className="text-black text-xl font-semibold mb-1">CONTACT US</h3>
                <p className="text-gray-500 mb-1 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-black font-semibold">auzsheetroofing@outlook.com</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-96 rounded-4xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0862765739286!2d144.96305831550448!3d-37.81361197975173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b6d603a2f0f1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1692958329111!5m2!1sen!2sau"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

export default ContactComponent
