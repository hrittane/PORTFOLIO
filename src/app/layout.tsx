import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import NavbarLg from "@/components/NavbarLg";
import NavbarSm from "@/components/NavbarSm";
import { Providers } from '@/components/providers'
import JsonLd from "@/components/JsonLd";

import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Soufiane Hrittane | Full Stack Developer & UI/UX Designer',
  description: 'Full Stack Developer specializing in React, Next.js, and mobile development. 10+ years experience building high-performance web and mobile applications. Based in Morocco.',
  twitter: {
    card: "summary_large_image",
    title: 'Soufiane Hrittane | Full Stack Developer & UI/UX Designer',
    description: 'Full Stack Developer specializing in React, Next.js, and mobile development.',
  },
  openGraph: {
    title: 'Soufiane Hrittane | Full Stack Developer & UI/UX Designer',
    description: 'Full Stack Developer specializing in React, Next.js, and mobile development.',
    url: 'https://www.moroccan.dev',
    siteName: 'Soufiane Hrittane Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.moroccan.dev',
  },
  metadataBase: new URL("https://www.moroccan.dev/"),

}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Soufiane Hrittane",
    "url": "https://www.moroccan.dev",
    "jobTitle": "Full Stack Developer",
    "sameAs": [
      "https://twitter.com/soufianehrittan",
      "https://github.com/hrittane",
      "https://www.linkedin.com/in/soufiane-hrittane-7352a5136/"
    ]
  };

  return (

    <html lang="en" suppressHydrationWarning>

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' media="all" />
        <JsonLd data={personSchema} />
      </head>

      <body className={`${poppins.className} text-[#333333] bg-[#F5F5F7] dark:text-white dark:bg-[#080708]`}>
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



