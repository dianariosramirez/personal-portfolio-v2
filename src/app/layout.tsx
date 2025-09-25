import type { Metadata } from "next";

import { Bellota_Text } from 'next/font/google';

import VantaFogBackground from "@/components/BackgroundComponent/VantaFogBackground";
import { PrincipalContainer } from "@/components/Layout/PrincipalContainer";

const bellotaText = Bellota_Text({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // 300 para delgada, 700 para títulos
  display: 'swap',
});


export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/dianariosramirez/personal-portfolio-v2"), // poner dominio
  title: {
    default: "Diana Rios | Web Developer",
    template: "%s | Diana Rios",
  },
  description:
    "Personal Portfolio v2 – Built with Next.js and a modern minimalist design. Showcasing my projects, experience, and web development skills.",
  keywords: [
    "Next.js",
    "React",
    "Web Developer",
    "Frontend",
    "Fullstack",
    "Portfolio",
  ],
  authors: [{ name: "Diana Rios", url: "https://github.com/dianariosramirez/personal-portfolio-v2" }],
  creator: "Diana Rios",
  publisher: "Diana Rios",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: "Diana Rios Portfolio",
    title: "Diana Rios | Web Developer",
    description:
      "Explore my projects, skills, and experience in modern web development.",
    images: [
      {
        url: "/preview.png", // ✅ Imagen 1200x630 recomendada
        width: 1200,
        height: 630,
        alt: "Diana Rios Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diana Rios | Web Developer",
    description:
      "Personal Portfolio v2 – Built with Next.js. Showcasing projects, experience, and web development skills.",
    images: ["/preview.png"],
    creator: "@tu_usuario", // handleTwitter
  },

  alternates: {
    canonical: "",
    languages: {
      "en-US": "/en",
      "es-MX": "/es",
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={bellotaText.className} suppressHydrationWarning={true} data-lt-installed="true">
      <head />
      <body
        style={{
          margin: 0,
          height: '100%',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <VantaFogBackground />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100vw',
            height: '100vh',
          }}
        >
          <PrincipalContainer children={children} />
        </div>
      </body>
    </html>
  );
}
