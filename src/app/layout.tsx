import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theyouth.world'),
  title: {
    default: "Youth Development Organisation Uganda | Empowering Post-War Communities",
    template: "%s | Youth Development Organisation Uganda"
  },
  description: "YDO is a Uganda-based community development organization focused on rehabilitation and empowerment in war-affected regions. We provide education, psycho-social support, vocational training, and advocacy for children, women, and vulnerable populations in Northern Uganda.",
  keywords: ["youth development", "Uganda", "community development", "post-conflict recovery", "education", "vocational training", "psycho-social support", "child welfare", "Northern Uganda", "Omoro"],
  authors: [{ name: "Youth Development Organisation Uganda" }],
  creator: "Youth Development Organisation Uganda",
  publisher: "Youth Development Organisation Uganda",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theyouth.world",
    siteName: "Youth Development Organisation Uganda",
    title: "Youth Development Organisation Uganda | Empowering Post-War Communities",
    description: "YDO provides education, psycho-social support, vocational training, and advocacy for children, women, and vulnerable populations in Northern Uganda.",
    images: [
      {
        url: "/images/homepage/hero-youth.jpg",
        width: 1200,
        height: 630,
        alt: "Youth and community members in Northern Uganda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth Development Organisation Uganda | Empowering Post-War Communities",
    description: "YDO provides education, psycho-social support, and vocational training for communities in Northern Uganda.",
    images: ["/images/homepage/hero-youth.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}