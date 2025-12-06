import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  CheckCircle2,
  Target,
  Globe,
  Zap,
  BarChart3,
  FileText,
  Link2,
  ShoppingCart,
  Clock,
  DollarSign,
} from "lucide-react";

export default function SaSeoPage() {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-lg px-6 py-2 bg-brand-accent text-white">
              قريباً - قيد التطوير
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              saSEO
            </h1>

            <p className="text-2xl md:text-3xl mb-6">
              ارفع متجرك للصفحة الأولى في جوجل
            </p>

            <p className="text-xl opacity-90 mb-4 max-w-3xl mx-auto leading-relaxed">
              منصة SaaS عربية متخصصة في كتابة مقالات SEO احترافية لأي <span className="font-bold text-brand-accent  px-2 py-1 rounded">متجر إلكتروني</span> - <span className="font-bold text-brand-accent px-2 py-1 rounded">موقع الكتروني {" "}</span>
              زيادة الزيارات العضوية بدون إعلانات!
            </p>

            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              تعمل مع <span className="font-bold">Salla, Zid, Shopify, WooCommerce</span> وأي منصة أخرى او أي موقع إلكتروني
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-6 bg-brand-accent hover:bg-amber-600">
                سجل اهتمامك (قريباً)
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 border-white"
              >
                <Link href="/">العودة للرئيسية</Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                <div className="text-3xl font-bold mb-1">500</div>
                <div className="text-sm opacity-90">هدف السنة 1</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                <div className="text-3xl font-bold mb-1">3K</div>
                <div className="text-sm opacity-90">ریال/سنة</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                <div className="text-3xl font-bold mb-1">1.5M</div>
                <div className="text-sm opacity-90">دخل متوقع</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                <div className="text-3xl font-bold mb-1">116</div>
                <div className="text-sm opacity-90">نقطة التعادل</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                <div className="text-3xl font-bold mb-1">∞</div>
                <div className="text-sm opacity-90">أي منصة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-brand-primary">
              المشكلة والحل 🎯
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem */}
              <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200">
                <div className="text-4xl mb-4">❌</div>
                <h3 className="text-2xl font-bold mb-4 text-red-700">المشكلة</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">•</span>
                    <span>متجرك يختفي في نتائج بحث جوجل</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">•</span>
                    <span>تعتمد 100٪ على الإعلانات الممولة (مكلفة!)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">•</span>
                    <span>لا تملك فريق كتابة محتوى أو SEO</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">•</span>
                    <span>وكالات SEO تكلف 2,000-5,000 ريال شهرياً</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">•</span>
                    <span>بناء باك لينكات قوية صعب ومكلف</span>
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-4 text-green-700">الحل: saSEO</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>مقالات SEO احترافية عن منتجاتك</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>باك لينك قوي يربط لمتجرك مباشرة</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>زيارات عضوية حقيقية من جوجل</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>سعر عادل: 99-999 ريال شهرياً فقط</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="font-bold text-green-600">يعمل مع أي منصة!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-brand-primary">
              كيف يعمل saSEO؟ ⚙️
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              عملية بسيطة ومباشرة
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">سجل متجرك</h3>
                <p className="text-sm text-gray-600">أضف رابط متجرك الإلكتروني</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">اختر المنتجات</h3>
                <p className="text-sm text-gray-600">حدد المنتجات التي تريد تحسينها</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">نكتب المقالة</h3>
                <p className="text-sm text-gray-600">فريقنا ينشئ محتوى SEO احترافي</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">ننشر + باك لينك</h3>
                <p className="text-sm text-gray-600">مقالة على مدونتنا مع رابط لمتجرك</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-brand-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="font-bold mb-2">تتبع النتائج</h3>
                <p className="text-sm text-gray-600">لوحة تحكم توضح الأداء والزيارات</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-brand-primary">
              الباقات والأسعار 💰
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              اختر الباقة المناسبة لحجم متجرك
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter */}
              <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <p className="text-gray-600 mb-4">للمتاجر الصغيرة</p>
                  <div className="text-4xl font-bold text-brand-primary mb-2">1,500</div>
                  <div className="text-gray-600">ريال/سنوياً</div>
                  <div className="text-sm text-green-600 mt-2">~125 ريال/شهر فقط!</div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-bold">4 منتجات + مقالات SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">1 مقالة SEO شهرياً</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">باك لينك مباشر لمتجرك</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">صورة منتج واحدة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">CTA احترافي (زر شراء)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">تقارير أداء أساسية</span>
                  </li>
                </ul>
              </Card>

              {/* Pro */}
              <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-brand-accent relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-brand-accent text-white px-4 py-1">الأكثر شعبية</Badge>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <p className="text-gray-600 mb-4">للمتاجر المتوسطة</p>
                  <div className="text-4xl font-bold text-brand-primary mb-2">3,000</div>
                  <div className="text-gray-600">ريال/سنوياً</div>
                  <div className="text-sm text-green-600 mt-2">~250 ريال/شهر فقط!</div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-bold">15 منتج + مقالات SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">5 مقالات SEO شهرياً</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">باك لينكات متعددة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">صور احترافية متعددة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">لوحة تحكم تفاعلية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">تقارير Google Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">تحديث شهري للمحتوى</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">دعم عبر الواتساب</span>
                  </li>
                </ul>


              </Card>

              {/* Enterprise */}
              <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-brand-primary">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-gray-600 mb-4">للمتاجر الكبيرة</p>
                  <div className="text-4xl font-bold text-brand-primary mb-2">8,000</div>
                  <div className="text-gray-600">ريال/سنوياً</div>
                  <div className="text-sm text-green-600 mt-2">~667 ريال/شهر فقط!</div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-bold">45 منتج + مقالات SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">15 مقالة SEO شهرياً</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">كل مزايا Pro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">مدونة فرعية كاملة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">تكامل API مع متجرك</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">تقارير متقدمة + Search Console</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">مدير حساب مخصص</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">أولوية في النشر</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Annual Pricing Note */}
            <div className="mt-8 text-center bg-green-50 p-6 rounded-xl border-2 border-green-400">
              <p className="text-xl font-bold text-brand-primary mb-2">
                💰 اشتراكات سنوية فقط - ادفع مرة واحدة
              </p>
              <p className="text-gray-700">
                لا توجد رسوم شهرية - الدفع السنوي يوفر لك المال ويضمن خدمة متواصلة طوال السنة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Compatibility */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-brand-primary">
              يعمل مع جميع المنصات 🌐
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              ليس محدوداً بمنصة واحدة - saSEO يخدم الجميع
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl text-center border-2 border-transparent hover:border-brand-primary transition-colors">
                <ShoppingCart className="h-12 w-12 mx-auto mb-3 text-brand-primary" />
                <h3 className="font-bold mb-1">منصتنا</h3>
                <p className="text-sm text-gray-600">منصة التجارة الإلكترونية</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl text-center border-2 border-transparent hover:border-brand-primary transition-colors">
                <Globe className="h-12 w-12 mx-auto mb-3 text-green-600" />
                <h3 className="font-bold mb-1">Salla</h3>
                <p className="text-sm text-gray-600">سلة</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl text-center border-2 border-transparent hover:border-brand-primary transition-colors">
                <Globe className="h-12 w-12 mx-auto mb-3 text-purple-600" />
                <h3 className="font-bold mb-1">Zid</h3>
                <p className="text-sm text-gray-600">زد</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl text-center border-2 border-transparent hover:border-brand-primary transition-colors">
                <Globe className="h-12 w-12 mx-auto mb-3 text-gray-600" />
                <h3 className="font-bold mb-1">Any Platform</h3>
                <p className="text-sm text-gray-600">Shopify, WooCommerce...</p>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 p-6 rounded-xl border-2 border-brand-accent">
              <p className="text-center text-lg text-gray-700">
                <span className="font-bold text-brand-accent">🎯 الميزة الأساسية:</span>
                سواء كنت على سلة، زد، Shopify أو أي منصة أخرى - saSEO يعمل معك!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-brand-primary">
              ما تحصل عليه 📦
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-brand-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">مقالات SEO احترافية</h3>
                    <p className="text-gray-600 text-sm">محتوى محسّن بعناية لمحركات البحث، مع كلمات مفتاحية قوية وعناوين جذابة</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <Link2 className="h-8 w-8 text-brand-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">باك لينكات قوية</h3>
                    <p className="text-gray-600 text-sm">روابط من مدونة ذات سلطة عالية في جوجل تزيد قوة متجرك في نتائج البحث</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <Target className="h-8 w-8 text-brand-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">CTA محسّن للتحويل</h3>
                    <p className="text-gray-600 text-sm">زر شراء واضح يوجه الزوار مباشرة لمتجرك - لتحويل الزيارات لمبيعات</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <BarChart3 className="h-8 w-8 text-brand-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">لوحة تحكم تحليلية</h3>
                    <p className="text-gray-600 text-sm">تتبع الزيارات، النقرات، ترتيب المقال في جوجل، والكلمات المفتاحية</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <Zap className="h-8 w-8 text-brand-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">محتوى بالذكاء الاصطناعي</h3>
                    <p className="text-gray-600 text-sm">مراجعة بشرية لضمان الجودة + تحرير احترافي</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-8 w-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">نتائج قابلة للقياس</h3>
                    <p className="text-gray-600 text-sm">زيادة حقيقية في الزيارات العضوية من جوجل خلال 3-6 أشهر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-brand-primary">
              لمن هذه الخدمة؟ 🎯
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-brand-primary">
                <div className="text-3xl mb-3">🛍️</div>
                <h3 className="font-bold text-lg mb-2">متاجر إلكترونية</h3>
                <p className="text-gray-700 text-sm mb-3">على أي منصة (Salla, Zid, Shopify, WooCommerce)</p>
                <p className="text-xs text-gray-600">
                  تريد تقليل الاعتماد على الإعلانات المدفوعة
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300">
                <div className="text-3xl mb-3">📦</div>
                <h3 className="font-bold text-lg mb-2">تجار بمنتجات متعددة</h3>
                <p className="text-gray-700 text-sm mb-3">لديك 10+ منتج تريد الترويج لها</p>
                <p className="text-xs text-gray-600">
                  كل منتج يحتاج مقالة SEO خاصة به
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-bold text-lg mb-2">مواقع وشركات</h3>
                <p className="text-gray-700 text-sm mb-3">لديك موقع وتريد تحسين SEO</p>
                <p className="text-xs text-gray-600">
                  محتوى قوي + باك لينكات = ترتيب أفضل في جوجل
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-brand-primary">
              استراتيجية SEO القوية 🚀
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              كيف نضمن ظهور متجرك في جوجل
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-brand-primary">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-brand-primary">1.</span>
                  محتوى قوي ومحدّث يومياً
                </h3>
                <p className="text-gray-700">
                  كل مقالة = منتج جديد من أحد المتاجر المشتركة. كل مقال يربط بمنتجات مشابهة (Internal Linking).
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-brand-primary">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-brand-primary">2.</span>
                  Schema.org/Product + JSON-LD
                </h3>
                <p className="text-gray-700">
                  لإظهار السعر والصورة مباشرة في نتائج جوجل (Rich Results) - معدل نقر أعلى!
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-brand-primary">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-brand-primary">3.</span>
                  كلمات مفتاحية عالية النية الشرائية
                </h3>
                <p className="text-gray-700">
                  &quot;شراء [منتج] في الرياض&quot; - &quot;أفضل [منتج] السعودية&quot; - نستهدف العملاء الجاهزين للشراء
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-brand-accent">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-brand-accent">4.</span>
                  بناء سلطة نطاق قوية
                </h3>
                <p className="text-gray-700">
                  كلما زاد عدد المقالات، ارتفعت سلطة المدونة في جوجل - كل عملاء يستفيدون معاً!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-brand-primary">
              مقارنة التكلفة والعائد 💰
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-primary text-white">
                    <th className="p-4 text-right">الطريقة</th>
                    <th className="p-4 text-center">التكلفة الشهرية</th>
                    <th className="p-4 text-center">التكلفة السنوية</th>
                    <th className="p-4 text-center">مدة العقد</th>
                    <th className="p-4 text-center">النتائج</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-red-50">
                    <td className="p-4 font-bold">وكالة SEO تقليدية</td>
                    <td className="p-4 text-center text-red-600 font-bold">2,000-5,000 ريال</td>
                    <td className="p-4 text-center text-red-600 font-bold">24,000-60,000 ريال</td>
                    <td className="p-4 text-center">6-12 شهر</td>
                    <td className="p-4 text-center">بعد 6-12 شهر</td>
                  </tr>
                  <tr className="border-b bg-orange-50">
                    <td className="p-4 font-bold">توظيف كاتب محتوى</td>
                    <td className="p-4 text-center text-orange-600 font-bold">3,000+ ريال</td>
                    <td className="p-4 text-center text-orange-600 font-bold">36,000+ ريال</td>
                    <td className="p-4 text-center">دائم</td>
                    <td className="p-4 text-center">بطيء</td>
                  </tr>
                  <tr className="border-b bg-green-50">
                    <td className="p-4 font-bold text-brand-primary">saSEO</td>
                    <td className="p-4 text-center text-green-600 font-bold">125-667 ريال</td>
                    <td className="p-4 text-center text-green-600 font-bold">1,500-8,000 ريال</td>
                    <td className="p-4 text-center text-green-600">سنوي (بدون التزام)</td>
                    <td className="p-4 text-center text-green-600">3-6 أشهر</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-400">
              <p className="text-3xl font-bold text-brand-primary mb-4">
                💡 وفّر حتى 95% من تكاليف SEO سنوياً!
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-sm text-gray-600 mb-2">الوكالة التقليدية</div>
                  <div className="text-2xl font-bold text-red-600">24K-60K ريال/سنة</div>
                  <div className="text-xs text-gray-500 mt-1">تكلفة عالية جداً!</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-sm text-gray-600 mb-2">كاتب محتوى</div>
                  <div className="text-2xl font-bold text-orange-600">36K+ ريال/سنة</div>
                  <div className="text-xs text-gray-500 mt-1">+ رواتب + تأمينات</div>
                </div>
                <div className="bg-green-100 p-4 rounded-lg shadow-lg border-2 border-green-500">
                  <div className="text-sm text-gray-600 mb-2">saSEO</div>
                  <div className="text-2xl font-bold text-green-600">1.5K-8K ريال/سنة</div>
                  <div className="text-xs text-green-700 mt-1">✅ أرخص بـ 95%!</div>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg border border-green-300">
                <p className="text-gray-700 font-medium">
                  بدون التزامات طويلة، بدون تكاليف خفية، بنتائج قابلة للقياس
                </p>
                <p className="text-green-600 font-bold mt-2">
                  🎯 توفير يصل إلى 58,500 ريال سنوياً مقارنة بالوكالات!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections - For Investors */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-brand-primary">
              إمكانيات الربح 💰
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              للمستثمرين: الفرصة الحقيقية
            </p>

            {/* Main Goal Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border-4 border-green-500 shadow-2xl mb-12">
              <div className="text-center mb-8">
                <Badge className="bg-brand-accent text-white text-lg px-6 py-2 mb-4">
                  🎯 هدف السنة الأولى
                </Badge>
                <h3 className="text-5xl font-bold text-brand-primary mb-4">500 عميل</h3>
                <p className="text-xl text-gray-700">باشتراكات سنوية = دخل مضمون</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-sm text-gray-600 mb-2">الدخل السنوي المتوقع</div>
                  <div className="text-4xl font-bold text-green-600">1,500,000 ریال</div>
                  <div className="text-sm text-gray-500 mt-2">500 عميل × 3,000 ریال</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-sm text-gray-600 mb-2">التكاليف السنوية</div>
                  <div className="text-4xl font-bold text-red-600">-357,220 ریال</div>
                  <div className="text-sm text-gray-500 mt-2">فريق + أدوات + تسويق</div>
                </div>
              </div>

              <div className="bg-green-600 text-white p-8 rounded-2xl text-center">
                <div className="text-sm opacity-90 mb-2">صافي الربح السنوي</div>
                <div className="text-6xl font-bold mb-4">1.34M - 1.59M</div>
                <div className="text-xl">
                  ≈ 112,000 - 133,000 ریال/شهر 🚀
                </div>
              </div>
            </div>

            {/* Additional Revenue Sources */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border-2 border-brand-accent mb-12">
              <h3 className="text-3xl font-bold text-center mb-6 text-brand-primary">
                💎 مصادر دخل إضافية
              </h3>
              <p className="text-center text-gray-600 mb-8">
                بجانب الاشتراكات، هناك فرص ربح إضافية تزيد من قيمة المشروع
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Paid Ads on Platform */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-amber-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand-accent text-white rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-xl">إعلانات مدفوعة على المنصة</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    السماح للتجار بالإعلان عن منتجاتهم داخل مقالات SEO ذات صلة
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg mb-4">
                    <p className="font-bold text-brand-accent mb-2">💰 نموذج الربح:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <span className="font-bold">إعلان مميز</span>: 500-1,000 ریال/شهر</li>
                      <li>• <span className="font-bold">باك لينك إضافي</span>: 200 ریال/مقالة</li>
                      <li>• <span className="font-bold">عرض في الصفحة الرئيسية</span>: 1,500 ریال/شهر</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg border border-green-400">
                    <p className="font-bold text-green-700 mb-1">الدخل المتوقع:</p>
                    <p className="text-2xl font-bold text-green-600">50,000-100,000 ریال/سنة</p>
                    <p className="text-xs text-gray-600 mt-1">بافتراض 10-20 معلن شهرياً</p>
                  </div>
                </div>

                {/* Google AdSense */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-xl">Google AdSense</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    عرض إعلانات جوجل على المقالات المنشورة لتحقيق دخل إضافي من الزيارات
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="font-bold text-blue-700 mb-2">📊 التوقعات:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <span className="font-bold">RPM</span>: 5-15 ریال لكل 1,000 زيارة</li>
                      <li>• <span className="font-bold">الزيارات الشهرية</span>: 100,000-500,000</li>
                      <li>• <span className="font-bold">CTR على الإعلانات</span>: 1-3%</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg border border-green-400">
                    <p className="font-bold text-green-700 mb-1">الدخل المتوقع:</p>
                    <p className="text-2xl font-bold text-green-600">150,000-350,000 ریال/سنة</p>
                    <p className="text-xs text-gray-600 mt-1">يزيد مع نمو عدد المقالات والزيارات</p>
                  </div>
                </div>
              </div>

              {/* Total Additional Revenue */}
              <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl text-center">
                <p className="text-sm opacity-90 mb-2">إجمالي الدخل الإضافي المتوقع</p>
                <p className="text-4xl font-bold mb-2">200,000 - 450,000 ریال/سنة</p>
                <p className="text-sm opacity-90">
                  🚀 هذا يرفع إجمالي الدخل السنوي إلى <span className="font-bold">1.7M - 1.95M ریال</span>
                </p>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg border-2 border-amber-300">
                <p className="text-sm text-gray-600 text-center">
                  💡 <span className="font-bold">ملاحظة:</span> هذه التقديرات محافظة - الدخل الفعلي قد يكون أعلى مع نمو المنصة وزيادة الزيارات
                </p>
              </div>
            </div>

            {/* Growth Trajectory */}
            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-brand-primary mb-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-brand-primary">
                📈 مسار النمو المتوقع
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl text-center">
                  <div className="text-sm text-gray-600 mb-2">الشهر 1-3</div>
                  <div className="text-3xl font-bold text-brand-primary mb-1">50</div>
                  <div className="text-xs text-gray-600">عميل (MVP)</div>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <div className="text-sm text-gray-600 mb-2">الشهر 4-6</div>
                  <div className="text-3xl font-bold text-brand-primary mb-1">150</div>
                  <div className="text-xs text-gray-600">عميل (نمو)</div>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <div className="text-sm text-gray-600 mb-2">الشهر 7-9</div>
                  <div className="text-3xl font-bold text-brand-primary mb-1">300</div>
                  <div className="text-xs text-gray-600">عميل (تسارع)</div>
                </div>
                <div className="bg-green-100 p-4 rounded-xl text-center border-2 border-green-500">
                  <div className="text-sm text-gray-600 mb-2">الشهر 10-12</div>
                  <div className="text-3xl font-bold text-green-600 mb-1">500</div>
                  <div className="text-xs text-green-600">✅ الهدف!</div>
                </div>
              </div>
            </div>

            {/* Multi-Year Projections */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border-2 border-purple-400 mb-12">
              <h3 className="text-3xl font-bold text-center mb-6 text-brand-primary">
                📊 مقارنة التكلفة والعائد (3 سنوات)
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Year 1 */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-400">
                  <div className="text-center mb-4">
                    <Badge className="bg-green-600 text-white">السنة الأولى 🚀</Badge>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600">عدد العملاء</div>
                      <div className="text-3xl font-bold text-brand-primary">500</div>
                    </div>
                    <div className="border-t pt-3">
                      <div className="text-sm text-gray-600">الدخل السنوي</div>
                      <div className="text-2xl font-bold text-green-600">1,700,000 - 1,950,000</div>
                      <div className="text-xs text-gray-500">ریال (اشتراكات + إعلانات)</div>
                    </div>

                    {/* Year 1 Costs Breakdown */}
                    <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                      <div className="text-sm font-bold text-red-900 mb-2">تفاصيل التكاليف السنوية:</div>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-700">🔧 البنية التحتية</span>
                          <span className="font-bold text-red-600">17,550 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">🛠️ أدوات احترافية</span>
                          <span className="font-bold text-red-600">23,220 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">📱 اتصالات</span>
                          <span className="font-bold text-red-600">2,400 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">👥 رواتب الفريق</span>
                          <span className="font-bold text-red-600">254,100 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">📢 تسويق</span>
                          <span className="font-bold text-red-600">60,000 ر.س</span>
                        </div>
                        <div className="flex justify-between border-t pt-1 mt-1">
                          <span className="font-bold text-gray-900">الإجمالي</span>
                          <span className="font-bold text-red-600">357,220 ر.س</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-100 p-3 rounded-lg border-2 border-green-500">
                      <div className="text-sm text-gray-700">الفرق (صافي الربح)</div>
                      <div className="text-3xl font-bold text-green-600">1.34M - 1.59M</div>
                      <div className="text-xs text-green-700">ریال/سنة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">هامش الربح</div>
                      <div className="text-2xl font-bold text-green-600">79% - 82%</div>
                    </div>
                  </div>
                </div>

                {/* Year 2 */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-400">
                  <div className="text-center mb-4">
                    <Badge className="bg-blue-600 text-white">السنة الثانية 📈</Badge>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600">عدد العملاء</div>
                      <div className="text-3xl font-bold text-brand-primary">1,200</div>
                      <div className="text-xs text-blue-600">+140% نمو</div>
                    </div>
                    <div className="border-t pt-3">
                      <div className="text-sm text-gray-600">الدخل السنوي</div>
                      <div className="text-2xl font-bold text-green-600">3,600,000</div>
                      <div className="text-xs text-gray-500">ریال (1,200 × 3,000)</div>
                    </div>

                    {/* Year 2 Costs Breakdown */}
                    <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                      <div className="text-sm font-bold text-red-900 mb-2">تفاصيل التكاليف السنوية:</div>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-700">🔧 البنية التحتية</span>
                          <span className="font-bold text-red-600">25,000 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">🛠️ أدوات احترافية</span>
                          <span className="font-bold text-red-600">30,000 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">📱 اتصالات</span>
                          <span className="font-bold text-red-600">3,000 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">👥 رواتب (+2 موظفين)</span>
                          <span className="font-bold text-red-600">312,000 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">📢 تسويق</span>
                          <span className="font-bold text-red-600">80,000 ر.س</span>
                        </div>
                        <div className="flex justify-between border-t pt-1 mt-1">
                          <span className="font-bold text-gray-900">الإجمالي</span>
                          <span className="font-bold text-red-600">450,000 ر.س</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-100 p-3 rounded-lg border-2 border-green-500">
                      <div className="text-sm text-gray-700">الفرق (صافي الربح)</div>
                      <div className="text-3xl font-bold text-green-600">3,242,780</div>
                      <div className="text-xs text-green-700">ریال/سنة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">هامش الربح</div>
                      <div className="text-2xl font-bold text-green-600">90%</div>
                    </div>
                  </div>
                </div>

                {/* Year 3 */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-400">
                  <div className="text-center mb-4">
                    <Badge className="bg-purple-600 text-white">السنة الثالثة 🎯</Badge>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600">عدد العملاء</div>
                      <div className="text-3xl font-bold text-brand-primary">2,500</div>
                      <div className="text-xs text-purple-600">+108% نمو</div>
                    </div>
                    <div className="border-t pt-3">
                      <div className="text-sm text-gray-600">الدخل السنوي</div>
                      <div className="text-2xl font-bold text-green-600">7,500,000</div>
                      <div className="text-xs text-gray-500">ریال (2,500 × 3,000)</div>
                    </div>

                    {/* Year 3 Costs Breakdown */}
                    <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                      <div className="text-sm font-bold text-red-900 mb-2">تفاصيل التكاليف السنوية:</div>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-700">🔧 البنية التحتية</span>
                          <span className="font-bold text-red-600">40,000 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">🛠️ أدوات احترافية</span>
                          <span className="font-bold text-red-600">40,000 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">📱 اتصالات</span>
                          <span className="font-bold text-red-600">4,000 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">👥 رواتب (+3 موظفين)</span>
                          <span className="font-bold text-red-600">396,000 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">📢 تسويق</span>
                          <span className="font-bold text-red-600">120,000 ر.س</span>
                        </div>
                        <div className="flex justify-between border-t pt-1 mt-1">
                          <span className="font-bold text-gray-900">الإجمالي</span>
                          <span className="font-bold text-red-600">600,000 ر.س</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-100 p-3 rounded-lg border-2 border-green-500">
                      <div className="text-sm text-gray-700">الفرق (صافي الربح)</div>
                      <div className="text-3xl font-bold text-green-600">7,142,780</div>
                      <div className="text-xs text-green-700">ریال/سنة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">هامش الربح</div>
                      <div className="text-2xl font-bold text-green-600">95%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total 3-Year Summary */}
              <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-2xl text-center">
                <h4 className="text-2xl font-bold mb-4">💰 إجمالي الربح (3 سنوات)</h4>
                <div className="text-6xl font-bold mb-2">11.7M ریال</div>
                <div className="text-xl opacity-90">
                  1.47M + 3.24M + 7.14M = 11,727,340 ریال
                </div>
              </div>
            </div>

            {/* ROI Highlight */}
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl border-2 border-green-400">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6 text-brand-primary">
                  🎯 العائد على الاستثمار (السنة الأولى)
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">4.3x</div>
                    <div className="text-sm text-gray-700">عائد السنة الأولى</div>
                    <div className="text-xs text-green-600 mt-1">+1.14M ریال ربح!</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">77%</div>
                    <div className="text-sm text-gray-700">هامش ربح</div>
                    <div className="text-xs text-gray-600 mt-1">ممتاز للـ SaaS</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-4xl font-bold text-blue-600 mb-2">116</div>
                    <div className="text-sm text-gray-700">نقطة التعادل</div>
                    <div className="text-xs text-gray-600 mt-1">23% من الهدف فقط</div>
                  </div>
                </div>

                <div className="mt-6 bg-white p-4 rounded-lg">
                  <p className="text-center text-gray-700">
                    💡 بعد 116 عميل، كل عميل جديد = <strong className="text-green-600">3,000 ریال ربح صافي!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-brand-primary">
              حجم السوق والفرصة 🌍
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              سوق ضخم ونمو استثنائي
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-xl border-2 border-purple-200 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">140</div>
                <div className="text-lg font-semibold mb-2">مليار ريال</div>
                <div className="text-sm text-gray-600">سوق التجارة الإلكترونية 2024</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xl border-2 border-blue-200 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">32%</div>
                <div className="text-lg font-semibold mb-2">نمو سنوي</div>
                <div className="text-sm text-gray-600">معدل النمو السنوي المتوقع</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xl border-2 border-green-200 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">300K+</div>
                <div className="text-lg font-semibold mb-2">تاجر</div>
                <div className="text-sm text-gray-600">عدد التجار الإلكترونيين في السعودية</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xl border-2 border-orange-200 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">200K+</div>
                <div className="text-lg font-semibold mb-2">عميل محتمل</div>
                <div className="text-sm text-gray-600">لـ saSEO (كل المنصات!)</div>
              </div>
            </div>

            <div className="bg-brand-primary text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-center mb-6">💡 لماذا السوق ضخم؟</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">ليس محدوداً بمنصة واحدة</h4>
                    <p className="text-sm opacity-90">يخدم عملاء Salla (50K+) + Zid (30K+) + Shopify + غيرهم</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">مشكلة حقيقية</h4>
                    <p className="text-sm opacity-90">95% من المتاجر تعتمد فقط على الإعلانات المدفوعة</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">منافسة محدودة</h4>
                    <p className="text-sm opacity-90">لا يوجد حل SaaS عربي متخصص في هذا المجال</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">رؤية 2030</h4>
                    <p className="text-sm opacity-90">دعم حكومي للتحول الرقمي والتجارة الإلكترونية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline to Launch */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-brand-primary">
              خطة الإطلاق ⏱️
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-brand-primary">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">بناء MVP</h3>
                    <p className="text-gray-700">واجهة + تسجيل + توليد مقال بالـ AI + نشر + باك لينك + Dashboard</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">إطلاق تجريبي</h3>
                    <p className="text-gray-700">10 متاجر سعودية (تجربة مجانية) + جمع تغذية راجعة + قياس النتائج</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-brand-accent">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">تحسين وتطوير</h3>
                    <p className="text-gray-700">تطوير Dashboard المتقدم + تحسين جودة المحتوى + إضافة Google Search Console API</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl border-r-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">الإطلاق الرسمي</h3>
                    <p className="text-gray-700">حملة تسويقية: &quot;ارفع مبيعاتك من جوجل بدون إعلان واحد&quot; + استهداف عملاء Salla/Zid</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-green-50 p-6 rounded-xl border-2 border-green-400 text-center">
              <p className="text-xl font-bold text-brand-primary mb-2">
                ✅ عملية إطلاق واضحة ومنظمة
              </p>
              <p className="text-gray-700">
                من المفهوم للتنفيذ - كل خطوة محددة ومدروسة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Setup */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-brand-primary">
              تجهيز فريق العمل 👥
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              الفريق المطلوب لتنفيذ المشروع
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-lg border-2 border-brand-primary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="font-bold text-xl">مطور Full-Stack</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mr-15">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                    <span>Next.js 15 + React 19</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                    <span>MongoDB + Prisma</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                    <span>API Integration</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-brand-primary/20">
                  <span className="font-bold text-brand-primary">الراتب المقترح:</span>
                  <span className="text-gray-700"> 8,000-12,000 ريال/شهر</span>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl shadow-lg border-2 border-green-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="font-bold text-xl">محررين محتوى (3) 🇪🇬</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mr-15">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>كتابة محتوى SEO احترافي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>مراجعة وتحرير محتوى AI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>خبرة في السوق السعودي والخليجي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="font-bold">من فرع الإسكندرية، مصر</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-green-400/40">
                  <span className="font-bold text-green-700">الراتب:</span>
                  <span className="text-gray-700"> 3 × 250$ = ~2,800 ريال/شهر</span>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl shadow-lg border-2 border-purple-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="font-bold text-xl">مدير عمليات</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mr-15">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>إدارة الفريق والمشاريع</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>متابعة جودة المحتوى</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>التواصل مع العملاء</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>تنظيم سير العمل اليومي</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-purple-400/40">
                  <span className="font-bold text-purple-700">الراتب المقترح:</span>
                  <span className="text-gray-700"> 5,000-8,000 ريال/شهر</span>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-xl border border-pink-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="font-bold text-xl">مصمم UI/UX 🇪🇬</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mr-15">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-pink-600" />
                    <span>تصميم واجهة المستخدم</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-pink-600" />
                    <span>تجربة المستخدم (UX)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-pink-600" />
                    <span>مواد تسويقية ورسوم</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-pink-600" />
                    <span>تصميم العلامة التجارية</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-pink-400/40">
                  <span className="font-bold text-pink-700">الراتب المقترح:</span>
                  <span className="text-gray-700"> 1,125 ريال/شهر ($300)</span>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-lg border-2 border-brand-accent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-accent text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <h3 className="font-bold text-xl">مسوق رقمي 🇪🇬</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mr-15">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                    <span>إعلانات Google + Meta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                    <span>سوشيال ميديا</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                    <span>استهداف عملاء Salla/Zid</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                    <span className="font-bold">من فرع الإسكندرية، مصر</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-brand-accent/40">
                  <span className="font-bold text-amber-700">الراتب:</span>
                  <span className="text-gray-700"> 200$ = ~750 ريال/شهر</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-brand-primary text-white p-6 rounded-xl">
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-3">💰 إجمالي رواتب الفريق</h3>
                <div className="text-4xl font-bold mb-2">16,550 - 23,550 ريال/شهر</div>
                <p className="opacity-90">أو البدء بالفريق الأساسي فقط: 11,550 ريال/شهر</p>
              </div>
              <div className="mt-4 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
                    <div className="text-sm opacity-80 mb-1">مطور (سعودي 🇸🇦)</div>
                    <div className="font-bold">8K-12K SAR</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
                    <div className="text-sm opacity-80 mb-1">مدير عمليات (سعودي 🇸🇦)</div>
                    <div className="font-bold">5K-8K SAR</div>
                  </div>
                </div>
                <div className="bg-green-500/20 backdrop-blur p-3 rounded-lg text-center">
                  <div className="text-sm opacity-90 mb-1">4 موظفين من مصر 🇪🇬</div>
                  <div className="font-bold text-lg">3,550 SAR فقط!</div>
                  <div className="text-xs opacity-80 mt-1">(3 محررين + 1 مسوق)</div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-green-50 p-6 rounded-xl border-2 border-green-400">
              <h3 className="font-bold text-center text-lg mb-3 text-brand-primary">
                🌍 ميزة تنافسية ضخمة - فرع مصر 🇪🇬
              </h3>
              <p className="text-center text-gray-700 text-lg mb-4">
                <strong>4 موظفين من الإسكندرية</strong> (3 محررين + 1 مسوق) بتكلفة
                <strong className="text-green-600"> 3,550 ريال/شهر فقط!</strong>
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-red-600 font-bold mb-1">❌ بدون فرع مصر</div>
                    <div className="text-gray-700">تكلفة الفريق: ~35K SAR/شهر</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 font-bold mb-1">✅ مع فرع مصر</div>
                    <div className="text-gray-700">تكلفة الفريق: ~17K SAR/شهر</div>
                  </div>
                </div>
                <div className="text-center mt-3 font-bold text-brand-primary">
                  💰 توفير 50% من تكاليف التشغيل!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success KPIs */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-brand-primary">
              مؤشرات النجاح (KPIs) 📊
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              أهداف واقعية خلال 6 أشهر
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-8 rounded-xl text-center shadow-lg border-2 border-brand-primary">
                <div className="text-5xl font-bold text-brand-primary mb-2">100</div>
                <div className="text-lg font-semibold mb-2">متجر مشترك</div>
                <div className="text-sm text-gray-600">هدفنا خلال 6 أشهر</div>
              </div>

              <div className="bg-white p-8 rounded-xl text-center shadow-lg border-2 border-green-300">
                <div className="text-5xl font-bold text-green-600 mb-2">1000</div>
                <div className="text-lg font-semibold mb-2">مقالة منشورة</div>
                <div className="text-sm text-gray-600">محتوى قوي ومتنوع</div>
              </div>

              <div className="bg-white p-8 rounded-xl text-center shadow-lg border-2 border-brand-accent">
                <div className="text-5xl font-bold text-brand-accent mb-2">Top 20</div>
                <div className="text-lg font-semibold mb-2">ترتيب متوسط</div>
                <div className="text-sm text-gray-600">في جوجل خلال 3 أشهر</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-8 w-8 text-brand-primary" />
                  <h3 className="font-bold text-lg">معدل CTR على CTA</h3>
                </div>
                <div className="text-3xl font-bold text-brand-primary mb-1">≥ 8%</div>
                <p className="text-sm text-gray-600">من الزيارات تتحول لنقرات على زر الشراء</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-8 w-8 text-green-600" />
                  <h3 className="font-bold text-lg">معدل التجديد</h3>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-1">≥ 70%</div>
                <p className="text-sm text-gray-600">العملاء يجددون الاشتراك شهرياً</p>
              </div>
            </div>

            {/* CTR Explanation */}
            <div className="mt-8 bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
              <h3 className="font-bold text-lg text-brand-primary mb-3">
                💡 ما هو CTR؟
              </h3>
              <p className="text-gray-700 mb-3">
                <span className="font-bold">CTR</span> = Click-Through Rate (معدل النقر إلى الظهور)
              </p>
              <p className="text-gray-700 mb-3">
                يقيس نسبة الأشخاص الذين ينقرون على رابط بعد رؤيته.
              </p>
              <div className="bg-white p-4 rounded-lg mb-3">
                <p className="font-bold text-brand-primary mb-2">المعادلة:</p>
                <p className="text-gray-700">CTR = (إجمالي النقرات ÷ إجمالي الظهور) × 100</p>
              </div>
              <div className="bg-white p-4 rounded-lg mb-3">
                <p className="font-bold text-green-600 mb-2">مثال:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• مقالتك ظهرت 1,000 مرة في نتائج جوجل (ظهور)</li>
                  <li>• 50 شخص نقروا عليها (نقرات)</li>
                  <li>• CTR = (50 ÷ 1,000) × 100 = <span className="font-bold text-green-600">5%</span></li>
                </ul>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-300">
                <p className="font-bold text-amber-700 mb-2">📊 في سياق SEO:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• CTR أعلى = عنوان ووصف أفضل يجذب النقرات</li>
                  <li>• CTR جيد للبحث العضوي: 2-5%</li>
                  <li>• المراكز الأولى (1-3) تحصل على 20-30% CTR</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-brand-primary">
              التكاليف التشغيلية 💵
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              شفافية كاملة في الميزانية
            </p>

            <div className="bg-white rounded-2xl shadow-xl border-2 border-brand-primary overflow-hidden">
              <div className="bg-brand-primary text-white p-4">
                <h3 className="font-bold text-xl text-center">التكاليف الشهرية المتوقعة</h3>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-blue-100 p-3 rounded-lg mb-4">
                  <h4 className="font-bold text-brand-primary mb-2">💻 تقنية وبنية تحتية (تكاليف شهرية)</h4>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Vercel Pro (استضافة)</span>
                  <span className="font-bold text-brand-primary">75 ریال</span>
                  <span className="text-xs text-gray-500">$20/mo</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">MongoDB Atlas M10 (قاعدة بيانات)</span>
                  <span className="font-bold text-brand-primary">215 ریال</span>
                  <span className="text-xs text-gray-500">$57/mo</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Cloudinary Plus (تخزين الصور)</span>
                  <span className="font-bold text-brand-primary">335 ریال</span>
                  <span className="text-xs text-gray-500">$89/mo</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">OpenAI API GPT-4 (100 مقالة/شهر)</span>
                  <span className="font-bold text-brand-primary">750 ریال</span>
                  <span className="text-xs text-gray-500">~$200/mo</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Domain + CDN (نطاق + شبكة توصيل)</span>
                  <span className="font-bold text-brand-primary">100 ریال</span>
                </div>

                <div className="bg-purple-100 p-3 rounded-lg mb-4 mt-4">
                  <h4 className="font-bold text-brand-primary mb-2">🛠️ أدوات احترافية (اشتراكات شهرية)</h4>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Ahrefs Lite (SEO + Keywords)</span>
                  <span className="font-bold text-brand-primary">375 ریال</span>
                  <span className="text-xs text-gray-500">$99/mo</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Google Workspace Business (5 users)</span>
                  <span className="font-bold text-brand-primary">110 ریال</span>
                  <span className="text-xs text-gray-500">$6×5</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Grammarly Premium</span>
                  <span className="font-bold text-brand-primary">45 ریال</span>
                  <span className="text-xs text-gray-500">$12/mo</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Canva Pro Team (5 users)</span>
                  <span className="font-bold text-brand-primary">280 ریال</span>
                  <span className="text-xs text-gray-500">$15×5</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Notion Plus Team (5 users)</span>
                  <span className="font-bold text-brand-primary">150 ریال</span>
                  <span className="text-xs text-gray-500">$8×5</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Google Search Console API (مجاني)</span>
                  <span className="font-bold text-green-600">0 ریال</span>
                  <span className="text-xs text-gray-500">Free</span>
                </div>

                <div className="bg-orange-100 p-3 rounded-lg mb-4 mt-4">
                  <h4 className="font-bold text-brand-primary mb-2">📞 اتصالات وتواصل</h4>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">WhatsApp Business API</span>
                  <span className="font-bold text-brand-primary">100 ريال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">أرقام هواتف عمل (2 خطوط)</span>
                  <span className="font-bold text-brand-primary">150 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Zoom Pro (اجتماعات الفريق)</span>
                  <span className="font-bold text-brand-primary">60 ریال</span>
                </div>

                <div className="bg-green-100 p-3 rounded-lg mb-4 mt-4">
                  <h4 className="font-bold text-brand-primary mb-2">👥 رواتب الفريق (متوسط)</h4>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">مطور Full-Stack (سعودي 🇸🇦)</span>
                  <span className="font-bold text-brand-primary">10,000 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">مدير عمليات (سعودي 🇸🇦)</span>
                  <span className="font-bold text-brand-primary">6,500 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">محررين محتوى (3 من مصر 🇪🇬)</span>
                  <span className="font-bold text-brand-primary">2,800 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">مسوق رقمي (من مصر 🇪🇬)</span>
                  <span className="font-bold text-brand-primary">750 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">مصمم UI/UX (من مصر 🇪🇬)</span>
                  <span className="font-bold text-brand-primary">1,125 ریال</span>
                </div>

                <div className="bg-yellow-100 p-3 rounded-lg mb-4 mt-4">
                  <h4 className="font-bold text-brand-primary mb-2">📢 تسويق وإعلانات</h4>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-300 mb-3">
                  <div className="text-sm font-bold text-gray-700 mb-3">ميزانية الإعلانات المدفوعة:</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">🔴 الحد الأدنى (اختبار):</span>
                      <span className="font-bold text-orange-600">2,000-3,000 ریال/شهر</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">🟡 مريح (نمو):</span>
                      <span className="font-bold text-blue-600">5,000-8,000 ریال/شهر</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">🟢 نمو سريع:</span>
                      <span className="font-bold text-green-600">10,000-15,000 ریال/شهر</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Google Ads (Search + Display)</span>
                  <span className="font-bold text-brand-primary">3,000 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Meta Ads (Facebook + Instagram)</span>
                  <span className="font-bold text-brand-primary">2,000 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">محتوى سوشيال ميديا (تصميم)</span>
                  <span className="font-bold text-brand-primary">200 ریال</span>
                </div>

                <div className="h-px bg-gray-300 my-4"></div>

                <div className="bg-gray-100 p-4 rounded-lg mb-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">💻 تقنية + بنية تحتية:</div>
                      <div className="font-bold">1,475 ریال</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">🛠️ أدوات احترافية:</div>
                      <div className="font-bold">960 ریال</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">📞 اتصالات:</div>
                      <div className="font-bold">310 ریال</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">👥 رواتب فريق مصر:</div>
                      <div className="font-bold">4,350 ریال</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">📢 إعلانات:</div>
                      <div className="font-bold">5,200 ریال</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-brand-primary text-white rounded-lg">
                  <span className="font-bold text-xl">التكاليف التشغيلية (بدون سعوديين)</span>
                  <span className="font-bold text-2xl">12,295 ریال</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-blue-100 rounded-lg border-2 border-brand-primary mt-3">
                  <span className="text-gray-700">+ مطور 🇸🇦 + مدير عمليات 🇸🇦 (متوسط)</span>
                  <span className="font-bold text-brand-primary">+16,500 ریال</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-yellow-100 rounded-lg border-2 border-yellow-400">
                  <span className="font-bold text-xl text-gray-700">الإجمالي الكامل</span>
                  <span className="font-bold text-2xl text-brand-primary">29,795 ریال/شهر</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-green-100 rounded-lg border-2 border-green-400 mt-4">
                  <span className="font-bold text-lg text-gray-700">نقطة التعادل (اشتراكات سنوية)</span>
                  <span className="font-bold text-xl text-green-600">116 عميل 🎯</span>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-brand-primary/20">
                  <p className="text-sm text-gray-700 text-center">
                    💡 <strong>فرع مصر 🇪🇬:</strong> 4 موظفين بـ 3,550 ریال فقط (توفير 50% من التكاليف!)
                  </p>
                  <p className="text-xs text-gray-600 text-center mt-2">
                    💰 CAC المتوقع: 300-500 ریال/عميل مع الميزانية المقترحة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-brand-primary">
              المزايا التنافسية 🏆
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-brand-primary">
                <h3 className="font-bold text-xl mb-4 text-brand-primary">✓ سعودي 100٪</h3>
                <p className="text-gray-700">لغة، لهجة، واهتمامات السوق المحلي - نفهم العميل السعودي</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-brand-primary">
                <h3 className="font-bold text-xl mb-4 text-brand-primary">✓ SEO + CTA جاهزة</h3>
                <p className="text-gray-700">مزيج من الوعي (SEO) + التحويل (CTA) - ليس فقط زيارات، بل مبيعات!</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-brand-primary">
                <h3 className="font-bold text-xl mb-4 text-brand-primary">✓ نظام اشتراك بسيط</h3>
                <p className="text-gray-700">لا يحتاج تكوين أو إعداد - 5 دقائق فقط للبدء</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-brand-primary">
                <h3 className="font-bold text-xl mb-4 text-brand-primary">✓ تكامل قابل للتوسع</h3>
                <p className="text-gray-700">API لربط Shopify, WooCommerce, WiX - أي منصة مستقبلاً</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-brand-accent">
                <h3 className="font-bold text-xl mb-4 text-brand-accent">⭐ لوحة تحكم تفاعلية</h3>
                <p className="text-gray-700">يرى العميل الأثر الفعلي على الزيارات والمبيعات - شفافية كاملة</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-brand-accent">
                <h3 className="font-bold text-xl mb-4 text-brand-accent">⭐ First Mover Advantage</h3>
                <p className="text-gray-700">أول حل SaaS عربي متخصص في SEO للمتاجر الإلكترونية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Expansion */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-brand-primary">
              خطة التوسع المستقبلية 🌍
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              رؤية طويلة الأمد
            </p>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-brand-primary">
                <div className="flex items-start gap-4">
                  <Badge className="bg-brand-primary text-lg px-4 py-2">المرحلة 2</Badge>
                  <div>
                    <h3 className="font-bold text-lg mb-2">التوسع إلى الخليج</h3>
                    <p className="text-gray-700">الإمارات، الكويت، البحرين، عمان - سوق إضافي 150K+ متجر</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-500">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-lg px-4 py-2">المرحلة 3</Badge>
                  <div>
                    <h3 className="font-bold text-lg mb-2">إطلاق API مفتوح</h3>
                    <p className="text-gray-700">ربط المتاجر مباشرة - تلقائي بالكامل (Auto-sync للمنتجات الجديدة)</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl border-r-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <Badge className="bg-purple-600 text-lg px-4 py-2">المرحلة 4</Badge>
                  <div>
                    <h3 className="font-bold text-lg mb-2">AI Engine داخلي كامل</h3>
                    <p className="text-gray-700">إنشاء محتوى تلقائياً بناءً على بيانات المنتج - بدون تدخل بشري (مع مراجعة)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز للانضمام لهذه الفرصة؟ 🚀
            </h2>
            <p className="text-xl mb-8 opacity-90">
              سواء كنت مستثمراً أو تاجراً - saSEO يقدم قيمة حقيقية
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6 bg-brand-accent hover:bg-amber-600">
                سجل اهتمامك (قريباً)
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 border-white"
              >
                <Link href="/">العودة للرئيسية</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">💼 للمستثمرين</h3>
                <p className="text-sm opacity-90">
                  سوق 200K+ متجر، عائد 7-25x، نقطة تعادل عند 15 عميل فقط
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">🛍️ للتجار</h3>
                <p className="text-sm opacity-90">
                  زيارات عضوية من جوجل، أرخص 10x من الوكالات، نتائج خلال 3-6 أشهر
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

