"use client";

import React, { useEffect, useRef, useState, forwardRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ImageComparisonSlider = forwardRef(
    (
        {
            className,
            leftImage,
            rightImage,
            altLeft = "Left image",
            altRight = "Right image",
            initialPosition = 50,
            ...props
        },
        ref
    ) => {
        const [position, setPosition] = useState(initialPosition);
        const [dragging, setDragging] = useState(false);
        const containerRef = useRef(null);

        const move = (clientX) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percent = Math.max(
                0,
                Math.min(100, (x / rect.width) * 100)
            );

            setPosition(percent);
        };

        useEffect(() => {
            const onMouseMove = (e) => dragging && move(e.clientX);
            const onTouchMove = (e) =>
                dragging && move(e.touches[0].clientX);
            const stop = () => setDragging(false);

            if (dragging) {
                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("touchmove", onTouchMove);
                document.addEventListener("mouseup", stop);
                document.addEventListener("touchend", stop);
            }

            return () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("touchmove", onTouchMove);
                document.removeEventListener("mouseup", stop);
                document.removeEventListener("touchend", stop);
            };
        }, [dragging]);

        return (
            <div
                ref={(node) => {
                    containerRef.current = node;
                    if (typeof ref === "function") ref(node);
                    else if (ref) ref.current = node;
                }}
                className={cn(
                    "relative w-full h-full overflow-hidden select-none",
                    className
                )}
                onMouseDown={() => setDragging(true)}
                onTouchStart={() => setDragging(true)}
                {...props}
            >
                {/* Right Image */}
                <img
                    src={rightImage}
                    alt={altRight}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                />

                {/* Left Image */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
                    }}
                >
                    <img
                        src={leftImage}
                        alt={altLeft}
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 h-full w-1 bg-white/40"
                    style={{ left: `${position}%` }}
                >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
                        <ChevronLeft className="w-5 h-5" />
                        <ChevronRight className="w-5 h-5" />
                    </div>
                </div>
            </div>
        );
    }
);

ImageComparisonSlider.displayName = "ImageComparisonSlider";

export { ImageComparisonSlider };
