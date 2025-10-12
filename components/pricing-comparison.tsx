import { Check, X, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ComparisonProps {
  lang?: "en" | "ar";
}

export function PricingComparison({ lang = "ar" }: ComparisonProps) {
  const isArabic = lang === "ar";

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-2xl md:text-3xl">
          {isArabic
            ? "لماذا DreamToApp؟ قارن بنفسك"
            : "Why DreamToApp? Compare Yourself"}
        </CardTitle>
        <p className="text-center text-muted-foreground mt-2">
          {isArabic
            ? "نفس المزايا الأساسية، بإضافة مزايا فريدة وسعر أفضل"
            : "Same core features, plus unique advantages at better prices"}
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2">
                <th className="p-3 text-right font-semibold">
                  {isArabic ? "الميزة" : "Feature"}
                </th>
                <th className="p-3 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold text-orange-600">DreamToApp</span>
                    <Badge className="bg-orange-100 text-orange-700 text-xs">
                      {isArabic ? "أنت هنا" : "You're here"}
                    </Badge>
                  </div>
                </th>
                <th className="p-3 text-center">
                  <span className="font-semibold text-gray-600">Salla</span>
                </th>
                <th className="p-3 text-center">
                  <span className="font-semibold text-gray-600">Zid</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium flex items-center gap-2">
                  {isArabic ? "السعر المبدئي" : "Starting Price"}
                </td>
                <td className="p-3 text-center">
                  <span className="text-green-600 font-bold">
                    {isArabic ? "مجاناً" : "Free"}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <span className="text-gray-600">
                    {isArabic ? "مجاناً" : "Free"}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <span className="text-gray-600">
                    {isArabic ? "83 ر.س" : "83 SAR"}
                  </span>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">
                  {isArabic ? "الباقة الاحترافية" : "Professional Plan"}
                </td>
                <td className="p-3 text-center">
                  <span className="text-green-600 font-bold">
                    {isArabic ? "199 ر.س" : "199 SAR"}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <span className="text-gray-600">
                    {isArabic ? "299 ر.س" : "299 SAR"}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <span className="text-gray-600">
                    {isArabic ? "اتصل" : "Contact"}
                  </span>
                </td>
              </tr>

              <tr className="border-b bg-orange-50 hover:bg-orange-100">
                <td className="p-3 font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span className="text-orange-700">
                    {isArabic ? "إدارة السائقين" : "Driver Management"}
                  </span>
                  <Badge variant="outline" className="text-xs bg-orange-100 text-orange-700 border-orange-300">
                    {isArabic ? "حصري" : "Unique"}
                  </Badge>
                </td>
                <td className="p-3">
                  <Check className="w-6 h-6 text-green-600 mx-auto font-bold" />
                </td>
                <td className="p-3">
                  <X className="w-5 h-5 text-gray-300 mx-auto" />
                </td>
                <td className="p-3">
                  <X className="w-5 h-5 text-gray-300 mx-auto" />
                </td>
              </tr>

              <tr className="border-b bg-orange-50 hover:bg-orange-100">
                <td className="p-3 font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span className="text-orange-700">
                    {isArabic ? "مراقبة صحة المتجر" : "Store Health Monitor"}
                  </span>
                  <Badge variant="outline" className="text-xs bg-orange-100 text-orange-700 border-orange-300">
                    {isArabic ? "حصري" : "Unique"}
                  </Badge>
                </td>
                <td className="p-3">
                  <Check className="w-6 h-6 text-green-600 mx-auto font-bold" />
                </td>
                <td className="p-3">
                  <X className="w-5 h-5 text-gray-300 mx-auto" />
                </td>
                <td className="p-3">
                  <X className="w-5 h-5 text-gray-300 mx-auto" />
                </td>
              </tr>

              <tr className="border-b bg-orange-50 hover:bg-orange-100">
                <td className="p-3 font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span className="text-orange-700">
                    {isArabic ? "إدارة المناوبات" : "Shift Management"}
                  </span>
                  <Badge variant="outline" className="text-xs bg-orange-100 text-orange-700 border-orange-300">
                    {isArabic ? "حصري" : "Unique"}
                  </Badge>
                </td>
                <td className="p-3">
                  <Check className="w-6 h-6 text-green-600 mx-auto font-bold" />
                </td>
                <td className="p-3">
                  <X className="w-5 h-5 text-gray-300 mx-auto" />
                </td>
                <td className="p-3">
                  <X className="w-5 h-5 text-gray-300 mx-auto" />
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">
                  {isArabic ? "معالجة الدفع" : "Payment Processing"}
                </td>
                <td className="p-3">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-3">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-3">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">
                  {isArabic ? "تكامل الشحن" : "Shipping Integration"}
                </td>
                <td className="p-3">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-3">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-3">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">
                  {isArabic ? "منتجات غير محدودة" : "Unlimited Products"}
                </td>
                <td className="p-3">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-3">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-3">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg border border-orange-200">
          <p className="text-center font-semibold text-orange-900">
            {isArabic
              ? "✨ نفس المزايا الأساسية + 3 مزايا فريدة + أسعار أفضل = DreamToApp"
              : "✨ Same core features + 3 unique advantages + Better prices = DreamToApp"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}


