"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/constants/assets'
import { CheckCircle, Target, ArrowUpRight, Eye, Flag } from "lucide-react"
import ContactSection from '@/components/landing/ContactSection'

const EdgeprotectionComponent = () => {
  return (
    <>
      <div className='mx-3 md:mx-0'>
        <div className='max-w-360 mx-auto md:mx-5 lg:mx-5 xl:mx-25 mt-[100px] auz_bg flex justify-center relative rounded-[30px]'>
          <div className='px-4 md:px-8 py-10 md:py-16 flex flex-col gap-[20px] sm:gap-[40px]'>
            {/*  */}
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[10px] md:gap-[30px]'>
              <div className='flex-1'>
                <h2 className='host-grotesk text-black text-3xl sm:text-4xl lg:text-[43px] host-grotesk-semibold'>
                  Edge Protection Safety Rail
                </h2>
              </div>
            </div>

            <div className='w-full flex flex-col lg:flex-row gap-5 items-start'>
              {/* Right Section STARTS */}
              <div className='flex-8 flex flex-col gap-5 sm:gap-7'>
                {/* Image */}
                <div className='w-full relative h-56 sm:h-72 md:h-80 lg:h-[400px] rounded-[20px] overflow-hidden'>
                  <Image
                    src={IMAGES.edge_protection}
                    alt="Service image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/*  */}
                <div className='flex flex-col gap-[30px]'>
                  <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                    Skip the hassle of sourcing external edge protection for your re-roof or new roof.
                    At Auzsheet Roofing and Guttering, we’ve got you covered - we can provide
                    professional safety rail as part of your project. One less step for you,
                    and complete peace of mind knowing your roof installation is carried out
                    safely and efficiently to Australian Standards.

                    <br />

                    Our safety rail systems are installed to meet Australian Standards,
                    ensuring a secure working environment for our team while protecting
                    your property throughout the installation. By managing edge protection
                    in-house, we eliminate delays, reduce coordination issues, and give you
                    complete confidence that safety is handled correctly from start to finish.
                  </p>

                  {/* POINTS */}
                  <div className='bg-white rounded-[20px] px-4 sm:px-7 py-5 flex flex-col gap-4 sm:gap-5'>
                    {/*  */}
                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-5'>
                      <div className='flex-1 flex items-center gap-2 sm:gap-3'>
                        <div className='p-1.5 sm:p-2 rounded-[5px] bg-[#303030] flex-shrink-0'>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                        </div>
                        <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                          In-house edge protection safety rail provided
                        </span>
                      </div>
                      <div className='flex-1 flex items-center gap-3'>
                        <div className='p-2 rounded-[5px] bg-[#303030]'>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                        </div>
                        <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                          Installed to Australian safety standards
                        </span>
                      </div>
                    </div>
                    {/*  */}
                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-5'>
                      <div className='flex-1 flex items-center gap-3'>
                        <div className='p-2 rounded-[5px] bg-[#303030]'>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                        </div>
                        <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                          No need to organise third-party safety providers
                        </span>
                      </div>
                      <div className='flex-1 flex items-center gap-3'>
                        <div className='p-2 rounded-[5px] bg-[#303030]'>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#faf3e9]" />
                        </div>
                        <span className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                          Safer working environment for all roof installations
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* PARA */}
                  <div>
                    <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-6'>
                      Whether it’s a new roof or a re-roof, our integrated approach means fewer
                      contractors, smoother workflows, and total peace of mind. With Auzsheet,
                      safety isn’t an afterthought—it’s a core part of how we deliver quality
                      roofing solutions.

                      <br />

                      At Auzsheet Roofing and Guttering, we believe that high-quality results start
                      with strong safety foundations. By incorporating edge protection into our
                      roofing services, we provide a streamlined, responsible solution that reflects
                      our commitment to best practice, compliance, and delivering projects the right
                      way—every time.
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
                          <p className='host-grotesk host-grotesk-semibold auz_text_gray text-sm sm:text-base leading-6'>
                            To deliver high-quality roofing solutions with safety, compliance, and care at the core of every project.
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
                          <p className='host-grotesk host-grotesk-semibold auz_text_gray leading-6 text-sm sm:text-base'>
                            To lead the industry in safe, professional roofing practices built on trust and long-term performance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image and Planning */}
                  <div className='flex flex-col gap-[40]'>
                    <div className='relative h-52 sm:h-64 md:h-72 lg:h-[350px] overflow-hidden rounded-[20px]'>
                      <Image src={IMAGES.edge_protection_two}
                        alt="Service image"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
                        priority />
                    </div>
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
                        <h4 className="host-grotesk host-grotesk-semibold text-[17px] sm:text-[18px]">Residential Roofing</h4>
                        <p className="text-gray-600 text-sm sm:text-[15px] host-grotesk host-grotesk-semibold">
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
                        <h4 className="host-grotesk host-grotesk-semibold text-[17px] sm:text-[18px]">Roof Repairs</h4>
                        <p className="text-gray-600 text-sm sm:text-[15px] host-grotesk host-grotesk-semibold">
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
                        <h4 className="host-grotesk host-grotesk-semibold text-[17px] sm:text-[18px]">Guttering & Fascia</h4>
                        <p className="text-gray-600 text-sm sm:text-[15px] host-grotesk host-grotesk-semibold">
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
                        <h4 className="host-grotesk host-grotesk-semibold text-[17px] sm:text-[18px]">Maintenance</h4>
                        <p className="text-gray-600 text-sm sm:text-[15px] host-grotesk host-grotesk-semibold">
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
                        className="host-grotesk w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="host-grotesk w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1">
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="host-grotesk w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1">
                      <textarea
                        rows={4}
                        placeholder="Write your message..."
                        className="host-grotesk w-full rounded-[10px] border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
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

export default EdgeprotectionComponent
