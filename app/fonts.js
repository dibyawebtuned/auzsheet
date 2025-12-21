// app/fonts.js
import localFont from "next/font/local";

export const hostGrotesk = localFont({
  src: [
    {
      path: "/fonts/host-grotesk/HostGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/host-grotesk/HostGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/host-grotesk/HostGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-host-grotesk",
  display: "swap",
});
