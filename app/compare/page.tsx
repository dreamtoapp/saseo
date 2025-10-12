import { platformComparison, platformStats } from "@/lib/comparison-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Sparkles, TrendingUp, Award } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مقارنة المنصات - DreamToApp vs Salla vs Zid",
  description:
    "قارن بين DreamToApp وسلة وزد - اكتشف لماذا DreamToApp الخيار الأفضل للتجارة الإلكترونية في السعودية",
  keywords: [
    "مقارنة منصات التجارة",
    "DreamToApp vs Salla",
    "DreamToApp vs Zid",
    "أفضل منصة تجارة إلكترونية",
    "السعودية",
  ],
};

export default function ComparePage() {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 mx-auto" />
      );
    }

    // Check if it's a negative indicator
    if (value.startsWith("❌")) {
      return <span className="text-sm text-gray-500">{value}</span>;
    }

    // Check if it's a warning indicator
    if (value.startsWith("⚠️")) {
      return <span className="text-sm text-orange-600">{value}</span>;
    }

    // Check if it's a positive indicator
    if (value.startsWith("✅")) {
      return <span className="text-sm text-green-600 font-medium">{value}</span>;
    }

    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-2 text-sm">
            <Award className="w-4 h-4 inline-block ml-1" />
            المقارنة الشاملة
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              DreamToApp
            </span>
            <br />
            vs Salla vs Zid
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            مقارنة شاملة وواضحة - اكتشف الفرق بنفسك
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Badge className="bg-green-100 text-green-700 px-4 py-2">
              ✅ 60 ميزة مجانية
            </Badge>
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2">
              ⭐ 15 ميزة حصرية
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
              💰 أوفر بـ 100 ريال
            </Badge>
          </div>
        </div>
      </section>

      {/* Commission Note */}
      <section className="container pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="text-center">
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                📊 نموذج الأعمال الشفاف
              </h3>
              <p className="text-blue-800 mb-3">
                <strong>DreamToApp:</strong> عمولة صغيرة (2-5%) تتيح لنا تقديم 55+ ميزة مجاناً
                <br />
                <strong>سلة وزد:</strong> بدون عمولة، لكن تدفع اشتراك شهري لكل ميزة
              </p>
              <div className="text-sm text-blue-700 bg-white inline-block px-4 py-2 rounded-lg">
                💡 <strong>الفرق:</strong> نحن نربح فقط عندما تربح أنت - نجاحك = نجاحنا
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* DreamToApp Stats */}
          <Card className="border-2 border-orange-600 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-pink-600 text-white">
              <CardTitle className="text-center">DreamToApp</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">
                  {platformStats.dreamtoapp.totalFeatures}+
                </div>
                <div className="text-sm text-muted-foreground">إجمالي المزايا</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {platformStats.dreamtoapp.uniqueFeatures}
                </div>
                <div className="text-sm text-muted-foreground">مزايا حصرية ⭐</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {platformStats.dreamtoapp.freeFeatures}+
                </div>
                <div className="text-sm text-muted-foreground">مزايا مجانية</div>
              </div>
              <div className="text-center pt-4">
                <Badge className="bg-green-100 text-green-700">
                  {platformStats.dreamtoapp.startingPriceAr}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Salla Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-gray-700">Salla</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-600">
                  {platformStats.salla.totalFeatures}+
                </div>
                <div className="text-sm text-muted-foreground">إجمالي المزايا</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400">
                  {platformStats.salla.uniqueFeatures}
                </div>
                <div className="text-sm text-muted-foreground">مزايا حصرية</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">
                  {platformStats.salla.freeFeatures}
                </div>
                <div className="text-sm text-muted-foreground">مزايا مجانية</div>
              </div>
              <div className="text-center pt-4">
                <Badge variant="outline">
                  {platformStats.salla.startingPriceAr}
                </Badge>
                <div className="text-xs text-muted-foreground mt-2">
                  {platformStats.salla.noteAr}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Zid Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-gray-700">Zid</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-600">
                  {platformStats.zid.totalFeatures}+
                </div>
                <div className="text-sm text-muted-foreground">إجمالي المزايا</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400">
                  {platformStats.zid.uniqueFeatures}
                </div>
                <div className="text-sm text-muted-foreground">مزايا حصرية</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">
                  {platformStats.zid.freeFeatures}
                </div>
                <div className="text-sm text-muted-foreground">مزايا مجانية</div>
              </div>
              <div className="text-center pt-4">
                <Badge variant="outline">
                  {platformStats.zid.startingPriceAr}
                </Badge>
                <div className="text-xs text-muted-foreground mt-2">
                  {platformStats.zid.noteAr}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container pb-16">
        <div className="max-w-7xl mx-auto">
          {platformComparison.map((category, idx) => (
            <Card key={idx} className="mb-6">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                <CardTitle className="text-xl">
                  {category.categoryAr}
                  <span className="text-sm text-muted-foreground mr-2">
                    ({category.category})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b-2">
                      <tr className="bg-gray-50">
                        <th className="p-4 text-right font-semibold min-w-[200px]">
                          الميزة
                        </th>
                        <th className="p-4 text-center min-w-[150px]">
                          <div className="flex flex-col items-center gap-2">
                            <span className="font-bold text-orange-600">
                              DreamToApp
                            </span>
                            <Badge className="bg-orange-100 text-orange-700 text-xs">
                              أنت هنا
                            </Badge>
                          </div>
                        </th>
                        <th className="p-4 text-center min-w-[150px]">
                          <span className="font-semibold text-gray-600">
                            Salla
                          </span>
                        </th>
                        <th className="p-4 text-center min-w-[150px]">
                          <span className="font-semibold text-gray-600">
                            Zid
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.features.map((feature, featureIdx) => (
                        <tr
                          key={featureIdx}
                          className={`border-b hover:bg-gray-50 ${feature.highlight ? "bg-orange-50" : ""
                            }`}
                        >
                          <td className="p-4 font-medium">
                            <div className="flex items-center gap-2">
                              {feature.highlight && (
                                <Sparkles className="w-4 h-4 text-orange-600 flex-shrink-0" />
                              )}
                              <div>
                                <div>{feature.nameAr}</div>
                                <div className="text-xs text-muted-foreground">
                                  {feature.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            {renderValue(feature.dreamtoapp)}
                          </td>
                          <td className="p-4 text-center">
                            {renderValue(feature.salla)}
                          </td>
                          <td className="p-4 text-center">
                            {renderValue(feature.zid)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="container pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-orange-50 to-pink-50 border-2 border-orange-200">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <TrendingUp className="w-16 h-16 text-orange-600 mx-auto" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  الخلاصة: لماذا DreamToApp؟
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="text-3xl mb-3">✅</div>
                    <div className="font-bold text-lg text-orange-600 mb-3">مجاناً حقيقي</div>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>✓ دفع إلكتروني كامل</li>
                      <li>✓ شحن محلي ودولي</li>
                      <li>✓ نطاق مخصص</li>
                      <li>✓ تطبيق PWA قابل للتثبيت</li>
                      <li className="font-bold text-orange-600">60 ميزة مجانية!</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="text-3xl mb-3">⭐</div>
                    <div className="font-bold text-lg text-orange-600 mb-3">15 ميزة حصرية</div>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>✓ تطبيق PWA (مثل التطبيق الحقيقي)</li>
                      <li>✓ عملات متعددة تلقائية</li>
                      <li>✓ ذكاء اصطناعي (AI)</li>
                      <li>✓ برنامج الولاء</li>
                      <li className="font-bold text-orange-600">لن تجدها بأي منصة!</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="text-3xl mb-3">💰</div>
                    <div className="font-bold text-lg text-orange-600 mb-3">أسعار لا تُقهر</div>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>✓ أرخص من سلة بـ 100 ريال</li>
                      <li>✓ مزايا أكثر بسعر أقل</li>
                      <li>✓ عمولة بسيطة فقط</li>
                      <li>✓ نربح عندما تربح</li>
                      <li className="font-bold text-orange-600">أفضل قيمة!</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-bold"
                    asChild
                  >
                    <Link href="https://myshop.dreamto.app/auth/register">
                      ابدأ مجاناً الآن
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50"
                    asChild
                  >
                    <Link href="/pricing">شاهد الأسعار</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

