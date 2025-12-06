import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  lang?: "en" | "ar";
}

export function Header({ lang = "ar" }: HeaderProps) {
  const isArabic = lang === "ar";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/dta/dreamToApp.svg"
              alt="DreamToApp Logo"
              width={200}
              height={45}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="flex items-center gap-2 md:gap-8">
            <Link
              href="/modonty"
              className="text-xs md:text-base font-semibold text-gray-700 hover:text-brand-primary hover:scale-105 transition-all duration-200 px-2 md:px-3 py-2 rounded-lg hover:bg-blue-50 whitespace-nowrap"
            >
              Modonty
            </Link>
            <Link
              href="/ksaseo"
              className="text-xs md:text-base font-semibold text-gray-700 hover:text-brand-primary hover:scale-105 transition-all duration-200 px-2 md:px-3 py-2 rounded-lg hover:bg-blue-50 whitespace-nowrap"
            >
              saSEO
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}


