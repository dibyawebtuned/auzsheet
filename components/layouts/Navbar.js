"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/public/assets/img/logo.png";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white">
            <div className="max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 w-27.5 h-13.75">
                        <Image src={Logo} alt="Auzsheet" className="w-full h-full object-contain" />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-6.25 host-grotesk text-[16px] tracking-wider">
                        <Link href="/about" className="font-semibold hover:font-extrabold transition-all duration-200">ABOUT</Link>

                        {/* Desktop dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 py-2 font-semibold hover:font-extrabold transition-all duration-200">
                                SERVICES <ChevronDown size={16} />
                            </button>
                            <div className="absolute left-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="bg-[#171716] shadow-lg rounded-lg w-150 p-6 grid grid-cols-[1fr_1px_1fr] gap-6">

                                    {/* Column 1 */}
                                    <div className="flex flex-col gap-3">
                                        <span className="text-gray-400 uppercase text-[10px] tracking-wider">Services</span>
                                        <div className="flex flex-col gap-3">
                                            <Link href="/services/fascia-gutter" className="flex flex-col">
                                                <span className="text-white font-semibold text-[15px]">
                                                    Fascia cover and gutter
                                                </span>
                                                <p className="text-[12px] text-[#898989]">Expert services for both new and existing</p>
                                            </Link>

                                            <Link href="/services/new-roofs" className="flex flex-col">
                                                <span className="text-white font-semibold text-[15px]">
                                                    New Roofs and Re-Roofs
                                                </span>
                                                <p className="text-[12px] text-[#898989]">Expert services for both new and</p>
                                            </Link>

                                            <Link href="/services/skylight" className="flex flex-col">
                                                <span className="text-white font-semibold text-[15px]">
                                                    Skylight Installation
                                                </span>
                                                <p className="text-[12px] text-[#898989]">Guttering specialises in professional</p>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Vertical divider */}
                                    <div className="bg-gray-600 w-px" />

                                    {/* Column 2 */}
                                    <div className="flex flex-col gap-3">
                                        <span className="text-gray-400 uppercase text-[10px] tracking-wider">Services</span>
                                        <div className="flex flex-col gap-3">
                                            <Link href="/services/metal-cladding" className="flex flex-col">
                                                <span className="text-white font-semibold text-[15px]">
                                                    Architectural Metal Cladding
                                                </span>
                                                <p className="text-[12px] text-[#898989]">Completely transform</p>
                                            </Link>

                                            <Link href="/services/edge-protection" className="flex flex-col">
                                                <span className="text-white font-semibold text-[15px]">
                                                    Edge Protection Safety Rail
                                                </span>
                                                <p className="text-[12px] text-[#898989]">Skip the hassle of sourcing external edge</p>
                                            </Link>

                                            <div>
                                                <Link
                                                    href="/services"
                                                    className="group inline-flex items-center gap-2 bg-white text-black text-[14px] font-semibold px-3 py-2 rounded-[8px] transition"
                                                >
                                                    View All Services
                                                    <div className="bg-black text-[#F4F4F4] p-[10px] rounded-[4px]">
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/projects" className="font-semibold hover:font-extrabold transition-all duration-200">PROJECTS</Link>
                        <Link href="/faq" className="font-semibold hover:font-extrabold transition-all duration-200">FAQ</Link>
                        <Link href="/contact" className="font-semibold hover:font-extrabold transition-all duration-200">CONTACT</Link>
                    </nav>

                    {/* Right side desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="tel:0466911940" className="group flex items-center gap-2 font-semibold text-[16px] bg-white px-3 py-2 rounded-[8px] text-black hover:bg-gray-900 transition">
                            <span className="bg-[#F4F4F4] p-[10px] rounded-[4px]">
                                <Phone size={16} />
                            </span>
                            <span className="group-hover:text-white transition-colors">
                                0466911940
                            </span>
                        </Link>


                        <Link href="/contact" className="group flex items-center gap-2 bg-black text-white text-[16px] font-semibold px-3 py-2 rounded-[8px] hover:bg-gray-900 transition">
                            Get In Touch
                            <div className="bg-[#F4F4F4] text-black p-[10px] rounded-[4px]">
                                <ArrowUpRight size={16} className="arrow" />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2 rounded-md focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <nav className="flex flex-col px-6 py-4 gap-2 font-medium">
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>

                        {/* Mobile SERVICES dropdown */}
                        {/* Mobile SERVICES dropdown */}
                        <button
                            className="flex items-center justify-between py-2 w-full text-left"
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        >
                            <span>SERVICES</span>
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>

                        {mobileServicesOpen && (
                            <div className="pl-4 py-4 flex flex-col gap-3 text-[14px] bg-black rounded-[10px]">

                                <Link
                                    href="/services/fascia"
                                    className="flex flex-col"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileServicesOpen(false);
                                    }}
                                >
                                    <span className="font-semibold text-white">Fascia Cover & Gutter</span>
                                    <span className="text-gray-300 text-[12px]">
                                        Expert services for both new and existing
                                    </span>
                                </Link>

                                <Link
                                    href="/services/new-roofs"
                                    className="flex flex-col"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileServicesOpen(false);
                                    }}
                                >
                                    <span className="font-semibold text-white">New Roofs & Re-Roofs</span>
                                    <span className="text-gray-300 text-[12px]">
                                        Expert services for both new and
                                    </span>
                                </Link>

                                <Link
                                    href="/services/skylight"
                                    className="flex flex-col"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileServicesOpen(false);
                                    }}
                                >
                                    <span className="font-semibold text-white">Skylight Installation</span>
                                    <span className="text-gray-300 text-[12px]">
                                        Guttering specialises in professional
                                    </span>
                                </Link>

                                <Link
                                    href="/services/metal-cladding"
                                    className="flex flex-col"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileServicesOpen(false);
                                    }}
                                >
                                    <span className="font-semibold text-white">Architectural Metal Cladding</span>
                                    <span className="text-gray-300 text-[12px]">
                                        Completely transform
                                    </span>
                                </Link>

                                <Link
                                    href="/services/edge-protection"
                                    className="flex flex-col"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileServicesOpen(false);
                                    }}
                                >
                                    <span className="font-semibold text-white">Edge Protection Safety Rail</span>
                                    <span className="text-gray-300 text-[12px]">
                                        Skip the hassle of sourcing external edge
                                    </span>
                                </Link>

                                {/* View all services */}
                                <div>
                                    <Link
                                        href="/services"
                                        className="mt-2 group inline-flex items-center gap-2 bg-white text-black text-[14px] font-semibold px-3 py-2 rounded-[8px] transition"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setMobileServicesOpen(false);
                                        }}
                                    >
                                        View All Services
                                        <div className="bg-black text-[#F4F4F4] p-[10px] rounded-[4px]">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}


                        <Link href="/projects" onClick={() => setMobileMenuOpen(false)}>PROJECTS</Link>
                        <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>

                        {/* Mobile right section */}
                        <div className="flex flex-col mt-4 gap-2">
                            <div className="group inline-flex items-center gap-2 font-semibold text-[14px] bg-white px-3 py-2 rounded-[8px] text-black hover:bg-gray-900 transition">
                                <span className="bg-[#F4F4F4] p-[10px] rounded-[4px]">
                                    <Phone size={16} />
                                </span>
                                <span className="group-hover:text-white transition-colors">0466911940</span>
                            </div>

                            <div>
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 bg-black text-white text-[14px] font-semibold px-3 py-2 rounded-[8px] hover:bg-gray-900 transition"
                                >
                                    Get In Touch
                                    <div className="bg-[#F4F4F4] text-black p-[10px] rounded-[4px]">
                                        <ArrowUpRight size={16} className="arrow" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </nav>
                </div>
            )}
        </header>
    );
}
