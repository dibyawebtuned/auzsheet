"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/public/assets/img/logo.png";

export default function NotFound() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="flex flex-col h-1/12">
            {/* Main 404 content */}
            {/* Main 404 Content */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 mt-24">
                <div className="max-w-lg">
                    <h1 className="text-[8rem] font-extrabold text-gray-200 animate-pulse host-grotesk">404</h1>
                    <h2 className="text-3xl md:text-4xl host-grotesk-bold text-gray-800 mt-4 mb-2 host-grotesk">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 mb-8 host-grotesk host-grotesk-medium">
                        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
                    </p>
                    <Link
                        href="/"
                        className="host-grotesk inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition"
                    >
                        Go Back Home
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </main>
        </div>
    );
}
