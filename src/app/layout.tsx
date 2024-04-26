import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import NavbarLg from "@/components/NavbarLg";
import NavbarSm from "@/components/NavbarSm";
import { Providers } from '@/components/providers'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Soufiane\'s portfolio ',
  description: 'my name is soufiane im a full stack developper from morocco and this is my portfolio',
  twitter: {
    card: "summary_large_image"
  },
  metadataBase: new URL("https://www.moroccan.dev/"),

}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (

    <html lang="en">

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' media="all" />
      </head>

      <body className={`${poppins.variable} text-[#333333] bg-[#F5F5F7] dark:text-white dark:bg-[#080708]`}>
        <Providers>
          <NavbarLg />
          {children}
          <NavbarSm />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-9XSX5YJDNM" />
      <Analytics />
    </html>

  );

}



