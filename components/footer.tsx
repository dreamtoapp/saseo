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
              src="/dta/dreamToApp.svg"
              alt="DreamToApp Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            {isArabic
              ? "المنصة الذكية للتجارة الإلكترونية"
              : "Smart E-commerce Platform"}
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

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-6 text-sm md:text-base text-gray-700 w-full">
            <a
              href="mailto:dreamtoapp@gmail.com"
              className="hover:text-brand-primary transition-colors flex items-center gap-2 font-medium"
            >
              <span>📧</span>
              <span className="text-xs md:text-sm">dreamtoapp@gmail.com</span>
            </a>
            <span className="hidden md:inline text-gray-400">|</span>
            <a
              href="tel:+966502699023"
              className="hover:text-brand-primary transition-colors flex items-center gap-2 font-medium"
            >
              <span>📱</span>
              <span dir="ltr" className="text-xs md:text-sm">+966 50 269 9023</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} DreamToApp.{" "}
              {isArabic ? "جميع الحقوق محفوظة" : "All rights reserved"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


