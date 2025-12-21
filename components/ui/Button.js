"use client";

import Link from "next/link";

const ButtonLink = ({
    href = "/",
    label = "Button",
    icon: Icon = null,
    iconSize = 16,

    // Colors
    bgColor = "bg-black",
    textColor = "text-white",
    hoverTextColor = "text-white",
    hoverBgColor = "hover:bg-gray-900",

    iconBgColor = "bg-[#F4F4F4]",
    iconTextColor = "text-black",

    className = "",
}) => {
    return (
        <Link
            href={href}
            className={`
        group inline-flex items-center gap-2
        text-[14px] font-semibold
        px-3 py-2 rounded-[8px]
        transition-all duration-300
        ${bgColor} 
        ${textColor} 
        ${hoverTextColor} 
        ${hoverBgColor}
        ${className}
      `}
        >
            {label}

            {Icon && (
                <span
                    className={`
            ${iconBgColor} ${iconTextColor}
            p-[10px] rounded-[4px]
            transition-transform duration-300
          `}
                >
                    <Icon size={iconSize} />
                </span>
            )}
        </Link>
    );
};

export default ButtonLink;
