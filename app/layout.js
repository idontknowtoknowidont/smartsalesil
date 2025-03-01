"use client"; // Ensure this is a client component

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Rubik } from "next/font/google";
import Script from "next/script";
import "./globals.css"; // Load global styles

const GTM_ID = "GTM-W4BGJW62"; // Your actual GTM ID

// Define fonts
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Google Tag Manager logic
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GTM_ID);
    }
  }, []); // Empty array ensures this effect runs only once on mount

  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Google Tag Manager script */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'}); 
                var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''; 
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; 
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="layout-wrapper">
          {children} {/* This is where the child page (like /landing) will be injected */}
        </div>
      </body>
    </html>
  );
}
