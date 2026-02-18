import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Footer } from "@/components/footer"
import Header from "@/components/header"
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suez.com"),

  title: {
    default: "Atm na mão",
    template: "%s | Suez Inovações",
  },

  description:
    "Transformando marcas através de comunicação institucional estratégica e inovação digital de excelência.",

  keywords: [
    "Inovações",
    "suez",
    "tecnologia",
    "SOIK",
    "Luanda",
    "Angola",
  ],

  authors: [{ name: "Suez Inovações" }],

  creator: "Suez Inovações",

  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: "https://suez.ao",
    siteName: "Suez Inovações",
    title: "Suez Inovações",
    description:
      "Transformando marcas através de comunicação institucional estratégica e inovação digital de excelência.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suez Inovações",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Suez Inovações",
    description:
      "Transformando marcas através de comunicação institucional estratégica e inovação digital de excelência.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={montserrat.variable+"relative"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
