"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/constants/assets'
import { CheckCircle, Target, ArrowUpRight, Eye, Flag } from "lucide-react";
import ContactSection from '@/components/landing/ContactSection'

const FaciagutterComponent = () => {
  return (
    <>
      <div className='mx-3 md:mx-0'>
        <div className='max-w-360 mx-auto md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] auz_bg flex justify-center relative rounded-[30px]'>
          <div className='px-4 md:px-8 py-10 md:py-16 flex flex-col gap-[20px] sm:gap-[40px]'>
            {/*  */}
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[10px] md:gap-[30px]'>
              <div className='flex-1'>
                <h2 className='host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>
                  Fascia cover and gutter
                </h2>
              </div>

              {/* <div className='flex-1'>
                <span className='auz_text_gray w-[60%] host-grotesk host-grotesk-semibold text-base sm:text-[17px] lg:text-[18px] text-center leading-5'>
                  Auzsheet supplies and installs all major brands of Colorbond® fascia and guttering for new builds
                </span>
              </div> */}
            </div>

            <div className='w-full flex flex-col lg:flex-row gap-5 items-start'>
              {/* Right Section STARTS */}
              <div className='flex-8 flex flex-col gap-5 sm:gap-7'>
                {/* Image */}
                <div className='w-full relative h-56 sm:h-72 md:h-80 lg:h-[400px] rounded-[20px] overflow-hidden'>
                  <Image
                    src={IMAGES.service_one}
                    alt="Service image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/*  */}
                <div className='flex flex-col gap-[30px]'>
                  <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                    At our company, our dedication to construction transcends mere building.
                    We are committed to enhancing the lives of our clients and enriching the
                    communities we serve. By prioritizing meticulous planning and exceptional
                    craftsmanship, we strive to deliver projects that not only meet but surpass
                    our clients' expectations.

                    <br />

                    Our focus is on creating spaces that truly resonate with their purpose
                    and provide lasting value.
                  </p>

                  {/* POINTS */}
                  <div className='bg-white rounded-[20px] px-4 sm:px-7 py-5 flex flex-col gap-4 sm:gap-5'>
                    {/*  */}
                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-5'>
                      <div className='flex-1 flex items-center gap-2 sm:gap-3'>
                        <div className='p-1.5 sm:p-2 rounded-[5px] bg-[#303030] flex-shrink-0'>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                        </div>
                        <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                          Building home, happy hearts
                        </span>
                      </div>
                      <div className='flex-1 flex items-center gap-3'>
                        <div className='p-2 rounded-[5px] bg-[#303030]'>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                        </div>
                        <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>Building home, happy hearts</span>
                      </div>
                    </div>
                    {/*  */}
                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-5'>
                      <div className='flex-1 flex items-center gap-3'>
                        <div className='p-2 rounded-[5px] bg-[#303030]'>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                        </div>
                        <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>Building home, happy hearts</span>
                      </div>
                      <div className='flex-1 flex items-center gap-3'>
                        <div className='p-2 rounded-[5px] bg-[#303030]'>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                        </div>
                        <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>Building home, happy hearts</span>
                      </div>
                    </div>
                  </div>

                  {/* PARA */}
                  <div>
                    <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>
                      Our dedication to construction extends beyond the physical aspects of building.
                      We are deeply invested in fostering strong relationships with our clients and
                      making a positive difference in their lives. Through a commitment to superior
                      project management and a focus on client satisfaction, we ensure that every project
                      we undertake not only meets but exceeds expectations.

                      <br />

                      Our goal is to create spaces that are both functional and inspiring, enhancing the
                      daily lives of those who use them.
                    </p>
                  </div>

                  {/* WHY CHOOSE US */}
                  <div className='flex flex-col gap-[35px] mt-5'>
                    <h3 className='host-grotesk host-grotesk-semibold text-black leading-6 text-2xl sm:text-3xl lg:text-[38px]'>
                      Why choose us
                    </h3>

                    <div className='flex flex-col sm:flex-row gap-6 sm:gap-10'>
                      {/* Mission Card */}
                      <div className='flex flex-col gap-4 sm:gap-3 flex-1'>
                        <div className='inline-block'>
                          <div className='inline-block bg-[#303030] p-4 items-center rounded-[10px]'>
                            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                          </div>
                        </div>
                        <div className='flex flex-col gap-1 sm:gap-2'>
                          <h4 className='host-grotesk host-grotesk-semibold auz_text_gray leading-6 text-lg sm:text-xl lg:text-[26px]'>
                            Our Mission
                          </h4>
                          <p className='host-grotesk host-grotesk-semibold auz_text_gray text-sm sm:text-base leading-5'>
                            Driven by a commitment to craftsmanship and reliability, we continually seek to improve.
                          </p>
                        </div>
                      </div>

                      <div className='flex flex-col gap-4 sm:gap-3 flex-1'>
                        <div className='inline-block'>
                          <div className='inline-block bg-[#303030] p-4 items-center rounded-[10px]'>
                            <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                          </div>
                        </div>
                        <div className='flex flex-col gap-1 sm:gap-2'>
                          <h4 className='host-grotesk host-grotesk-semibold auz_text_gray leading-6 text-lg sm:text-xl lg:text-[26px]'>
                            Our Vision
                          </h4>
                          <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5 text-sm sm:text-base'>
                            Driven by a commitment to craftsmanship and reliability, we continually seek to improve.
                          </p>
                        </div>
                      </div>

                      {/* <div className='flex flex-col gap-3'>
                        <div className='inline-block'>
                          <div className='inline-block bg-[#303030] p-4 items-center rounded-[10px]'>
                            <Flag className="w-8 h-8 text-[#faf3e9]" />
                          </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <h4 className='host-grotesk host-grotesk-semibold auz_text_gray leading-6 text-[26px]'>Our Goals</h4>
                          <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5'>Driven by a commitment to craftsmanship and reliability, we continually seek to improve.</p>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  {/* Image and Planning */}
                  <div className='flex flex-col gap-[40]'>
                    <div className='relative h-52 sm:h-64 md:h-72 lg:h-[350px] overflow-hidden rounded-[20px]'>
                      <Image src={IMAGES.service_one}
                        alt="Service image"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
                        priority />
                    </div>

                    {/* <div className='flex flex-row gap-7'>
                      <div className='flex gap-4 items-center'>
                        <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-5 text-[58px]'>01.</span>
                        <div className='flex flex-col gap-2'>
                          <h3 className='host-grotesk host-grotesk-semibold auz_text_gray leading-5 text-[28px]'>
                            Project Planning
                          </h3>
                          <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5 text-[18px]'>
                            We start by sitting down with you to understand your vision, needs, and budget.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-4 items-center'>
                        <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-5 text-[58px]'>02.</span>
                        <div className='flex flex-col gap-2'>
                          <h3 className='host-grotesk host-grotesk-semibold auz_text_gray leading-5 text-[28px]'>
                            Research & Analysis
                          </h3>
                          <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-5 text-[18px]'>
                            Once we have a clear plan in place, our team of architects and designers gets to work.
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* Right Section ENDS */}



              {/* Left Section STARTS */}
              <div className="flex-1 lg:flex-4 flex flex-col gap-[20px] lg:sticky lg:top-[100px] self-start h-fit">

                {/* Services */}
                <div className="bg-white rounded-[20px] p-4 sm:p-6">
                  <h2 className="host-grotesk host-grotesk-bold text-[22px] sm:text-[26px] lg:text-[28px] mb-4 sm:mb-6">
                    Services
                  </h2>

                  <div className="flex flex-col gap-4 sm:gap-5">
                    {/* Service item */}
                    <Link href="" className="flex items-center gap-3 sm:gap-5 pb-3 sm:pb-4 border-b border-gray-400">
                      <div className='flex-1'>
                        <h4 className="font-semibold text-[15px] sm:text-[16px]">Residential Roofing</h4>
                        <p className="text-gray-600 text-sm sm:text-[15px]">
                          High-quality roofing solutions for modern and traditional homes.
                        </p>
                      </div>

                      <div>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </Link>

                    {/* Service item */}
                    <Link href="" className="flex items-center gap-3 sm:gap-5 pb-3 sm:pb-4 border-b border-gray-400">
                      <div>
                        <h4 className="font-semibold text-[15px] sm:text-[16px]">Roof Repairs</h4>
                        <p className="text-gray-600 text-sm sm:text-[15px]">
                          Reliable repairs to protect your home from leaks and damage.
                        </p>
                      </div>
                      <div>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </Link>

                    {/* Service item */}
                    <Link href="" className="flex items-center gap-5 pb-3 border-b border-gray-400">
                      <div>
                        <h4 className="font-semibold text-[15px] sm:text-[16px]">Guttering & Fascia</h4>
                        <p className="text-gray-600 text-sm sm:text-[15px]">
                          Durable guttering systems designed for long-term performance.
                        </p>
                      </div>
                      <div>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </Link>

                    {/* Service item */}
                    <Link href="" className="flex items-center gap-5">
                      <div>
                        <h4 className="font-semibold text-[15px] sm:text-[16px]">Maintenance</h4>
                        <p className="text-gray-600 text-sm sm:text-[15px]">
                          Scheduled maintenance to extend the life of your roof.
                        </p>
                      </div>
                      <div>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </Link>
                  </div>
                </div>


                {/* Contact form */}
                <div className="w-full max-w-[600px] mx-auto bg-white rounded-[20px] p-4 sm:p-6">
                  <h3 className="host-grotesk host-grotesk-bold text-[22px] sm:text-[26px] lg:text-[28px] mb-4 sm:mb-6">
                    Get in Touch
                  </h3>

                  <form className="flex flex-col gap-4 sm:gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1">
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1">
                      <textarea
                        rows={4}
                        placeholder="Write your message..."
                        className="w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-2 bg-black text-white rounded-[12px] py-3 text-sm sm:text-[16px] font-semibold hover:bg-gray-900 transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              {/* Left Section ENDS */}
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  )
}

export default FaciagutterComponent
