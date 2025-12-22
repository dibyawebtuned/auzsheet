"use client"
import React, { useEffect, useRef, useState } from "react";
import {
    BookOpen,
    Target,
    Compass,
    HeartHandshake,
} from "lucide-react";

const sections = [
    { id: "story", label: "Story", icon: BookOpen },
    { id: "mission", label: "Mission", icon: Target },
    { id: "vision", label: "Vision", icon: Compass },
    { id: "values", label: "Values", icon: HeartHandshake },
];

export default function AboutSection() {
    const [active, setActive] = useState("story");
    const refs = useRef({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        Object.values(refs.current).forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        refs.current[id]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="max-w-360 mx-auto px-3 md:px-5 xl:px-25">
            <div className="flex gap-8">

                {/* LEFT – STICKY */}
                <div className="flex-4">
                    <div className="sticky top-24 border rounded-lg overflow-hidden">
                        {sections.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className={`w-full flex items-center gap-3 px-4 py-4 text-left transition
                  ${active === id
                                        ? "bg-red-600 text-white"
                                        : "hover:bg-gray-100"
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">{label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT – CONTENT */}
                <div className="flex-8 space-y-40">
                    {sections.map(({ id, label }) => (
                        <div
                            key={id}
                            id={id}
                            ref={(el) => (refs.current[id] = el)}
                            className="min-h-[80vh]"
                        >
                            <h2 className="text-3xl font-semibold mb-6">{label}</h2>
                            <p className="text-gray-600 leading-relaxed max-w-3xl">
                                This is the {label.toLowerCase()} section content.
                                Add real copy here. As you scroll, the left navigation
                                automatically updates its active state.
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
