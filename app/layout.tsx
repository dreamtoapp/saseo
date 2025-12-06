import type { Metadata } from "next";
import { Geist, Geist_Mono, Tajawal } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  weight: ["400", "500", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "الخطة الذكية لتجارتك الإلكترونية",
  description:
    "منصة تجارة إلكترونية ذكية بأسعار تنافسية ومزايا فريدة: إدارة السائقين، مراقبة صحة المتجر، وإدارة المناوبات. ابدأ مجاناً!",
  keywords: [
    "تجارة إلكترونية",
    "منصة متاجر",
    "متجر إلكتروني",
    "السعودية",
    "سلة",
    "زد",
  ],
  icons: {
    icon: "/logo1.webp",
    shortcut: "/logo1.webp",
    apple: "/logo1.webp",
  },
  openGraph: {
    title: "الخطة الذكية لتجارتك الإلكترونية",
    description:
      "وفّر حتى 100 ريال شهرياً واحصل على مزايا فريدة لن تجدها في المنصات الأخرى",
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable} antialiased`}
        style={{ fontFamily: 'var(--font-tajawal), var(--font-geist-sans), system-ui, sans-serif' }}
      >
        <Header lang="ar" />
        {children}
        <Footer lang="ar" />
      </body>
    </html>
  );
}
