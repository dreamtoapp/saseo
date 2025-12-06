import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  lang?: "en" | "ar";
}

export function Footer({ lang = "ar" }: FooterProps) {
  const isArabic = lang === "ar";

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12 pb-16 md:pb-12">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Brand */}
          <Link href="/" className="inline-block">
            <Image
              src="/logo1.webp"
              alt="Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            {isArabic
              ? "حلول SaaS للتجارة الإلكترونية"
              : "SaaS Solutions for E-commerce"}
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">
              {isArabic ? "صُنع بـ" : "Made with"}
            </span>
            <span className="text-red-500">❤️</span>
            <span className="text-muted-foreground">
              {isArabic ? "في المملكة العربية السعودية" : "in Saudi Arabia"}
            </span>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()}.{" "}
              {isArabic ? "جميع الحقوق محفوظة" : "All rights reserved"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


