import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  Zap,
  ShoppingCart,
  Search,
  DollarSign,
  CheckCircle2,
  Rocket,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-lg px-6 py-2 bg-brand-primary text-white">
              فرصة استثمارية في السوق السعودي
            </Badge>

            <div className="flex justify-center mb-6">
              <Image
                src="/dta/dreamToApp.svg"
                alt="DreamToApp Logo"
                width={400}
                height={100}
                className="h-20 md:h-24 w-auto"
                priority
              />
            </div>

            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              متخصصون في حلول SaaS للتجارة الإلكترونية
            </p>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              منصات ذكية تمكّن التجار من إطلاق وإدارة متاجرهم الإلكترونية بسهولة
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <span className="text-brand-primary font-bold">✓</span>
                <span className="text-sm text-gray-700">منصات SaaS</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <span className="text-brand-primary font-bold">✓</span>
                <span className="text-sm text-gray-700">تجارة إلكترونية</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <span className="text-brand-primary font-bold">✓</span>
                <span className="text-sm text-gray-700">حلول ذكية</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇸🇦</span>
                <span>المقر: السعودية</span>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇪🇬</span>
                <span>فرع: الإسكندرية، مصر</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/compare">
                  قارن مع المنافسين
                </Link>
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">71</div>
                <div className="text-gray-600">ميزة مدمجة</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100">
                <div className="text-4xl font-bold text-green-600 mb-2">60</div>
                <div className="text-gray-600">ميزة مجانية</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-100">
                <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
                <div className="text-gray-600">ميزة حصرية</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">0</div>
                <div className="text-gray-600">تكلفة البداية</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SaaS - Simple Explanation */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              ما هو SaaS؟ 🤔
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              شرح مبسط لنموذج العمل
            </p>

            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg border border-brand-primary/20">
              <div className="space-y-6 text-lg leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏢</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">النموذج التقليدي (القديم)</h3>
                    <p className="text-gray-700">
                      التاجر يدفع <span className="font-bold text-red-600">50,000+ ريال</span> لمبرمج لبناء متجر،
                      ثم يدفع <span className="font-bold text-red-600">2,000 ريال شهرياً</span> للصيانة
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gray-300"></div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">✨</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">نموذج SaaS (الحديث)</h3>
                    <p className="text-gray-700">
                      التاجر يدفع <span className="font-bold text-green-600">0 ريال</span> للبداية،
                      ثم <span className="font-bold text-green-600">79-199 ريال شهرياً</span> فقط + عمولة صغيرة على المبيعات
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl mt-6">
                  <h3 className="font-bold text-xl mb-3 text-center">💡 ببساطة:</h3>
                  <p className="text-gray-700 text-center text-lg">
                    <span className="font-bold">SaaS</span> = برنامج جاهز على الإنترنت،
                    تدفع اشتراك شهري بدلاً من شراء وبناء كل شيء من الصفر
                  </p>
                  <p className="text-gray-600 text-center mt-3">
                    مثل Netflix (تدفع شهرياً) بدلاً من شراء كل فيلم على حدة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is DreamToApp */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              من نحن - DreamToApp 🚀
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              متخصصون في تطوير حلول SaaS للتجارة الإلكترونية في السوق السعودي
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                <div className="text-gray-700 space-y-4">
                  <p className="text-lg leading-relaxed">
                    &quot;تمكين التجار السعوديين من النجاح في التجارة الإلكترونية من خلال منصة <strong className="text-blue-600">سهلة، ذكية، وبأسعار عادلة</strong>.&quot;
                  </p>
                  <div className="pt-4 border-t">
                    <h4 className="font-bold mb-2">ما يميزنا:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-blue-500">✓</span>
                        <span>أول منصة سعودية بذكاء اصطناعي مدمج</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-500">✓</span>
                        <span>15 ميزة حصرية لا توجد في المنافسين</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-500">✓</span>
                        <span>وكالة رسمية ومسجلة في السعودية</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl shadow-lg border-2 border-brand-primary">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-4">تواجدنا</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">🇸🇦</span>
                      <h4 className="font-bold text-lg">المقر الرئيسي</h4>
                    </div>
                    <p className="text-gray-600">المملكة العربية السعودية</p>
                    <p className="text-sm text-gray-500">قريبون من السوق الخليجي</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">🇪🇬</span>
                      <h4 className="font-bold text-lg">الفرع الثاني</h4>
                    </div>
                    <p className="text-gray-600">الإسكندرية، مصر</p>
                    <p className="text-sm text-gray-500">لخدمة العالم العربي</p>
                  </div>

                  <div className="pt-3 text-center">
                    <a
                      href="mailto:info@dreamto.app"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      📧 info@dreamto.app
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-brand-primary">
                نموذج الربح 💰
              </h2>
              <p className="text-xl text-gray-700">
                دخل متكرر + نمو مستدام
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-brand-primary">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <DollarSign className="h-16 w-16 text-brand-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-brand-primary mb-3">اشتراكات شهرية</h3>
                  <p className="text-4xl font-bold text-brand-primary mb-2">0 - 199</p>
                  <p className="text-gray-600">ريال/شهر</p>
                </div>

                <div className="text-center p-6 bg-amber-50 rounded-2xl">
                  <TrendingUp className="h-16 w-16 text-brand-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-brand-accent mb-3">عمولة على المبيعات</h3>
                  <p className="text-4xl font-bold text-brand-accent mb-2">2% - 5%</p>
                  <p className="text-gray-600">من كل عملية بيع</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-400">
                <p className="text-center text-xl font-bold text-green-700">
                  ✅ نربح فقط عندما ينجح عملاؤنا = نموذج مستدام
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              حجم السوق والفرصة 🎯
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              سوق ضخم ينمو بسرعة
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-200 text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">140</div>
                <div className="text-xl font-semibold mb-2">مليار ريال</div>
                <div className="text-gray-600">حجم التجارة الإلكترونية في السعودية 2024</div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-200 text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">32%</div>
                <div className="text-xl font-semibold mb-2">نمو سنوي</div>
                <div className="text-gray-600">معدل النمو السنوي للتجارة الإلكترونية</div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-200 text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">300+</div>
                <div className="text-xl font-semibold mb-2">ألف تاجر</div>
                <div className="text-gray-600">عدد التجار الإلكترونيين في السعودية</div>
              </div>
            </div>

            <div className="bg-brand-primary text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-center mb-6">🚀 الفرصة الاستثمارية</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">سوق نامٍ بقوة</h4>
                    <p className="text-blue-100">رؤية 2030 تدعم التحول الرقمي والتجارة الإلكترونية</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">منافسة محدودة</h4>
                    <p className="text-blue-100">سلة وزد هم اللاعبون الرئيسيون فقط</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">ميزات تنافسية قوية</h4>
                    <p className="text-blue-100">15 ميزة حصرية لا توجد عند المنافسين</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">نموذج ربح مثبت</h4>
                    <p className="text-blue-100">اشتراكات شهرية + عمولة على المبيعات</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              منتجاتنا 🛍️
            </h2>
            <p className="text-center text-xl text-gray-600 mb-4">
              حلول SaaS متكاملة للسوق السعودي
            </p>
            <p className="text-center text-lg text-brand-accent font-semibold mb-12">
              ⭐ saSEO يعمل مع جميع المنصات - Salla, Zid, Shopify وأي متجر إلكتروني!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* E-commerce Product */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-brand-primary hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingCart className="h-12 w-12 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-bold">DreamToApp E-commerce</h3>
                    <Badge className="mt-1 bg-green-600">متوفر الآن</Badge>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  منصة متكاملة لإنشاء وإدارة المتاجر الإلكترونية - بدون مبرمجين، بدون تعقيد
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span>71 ميزة مدمجة</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="h-5 w-5 text-green-500" />
                    <span>60 ميزة مجانية</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Rocket className="h-5 w-5 text-purple-500" />
                    <span>ذكاء اصطناعي + برنامج ولاء + PWA</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button asChild className="flex-1" size="lg">
                    <Link href="/pricing">
                      شاهد الأسعار
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/compare">
                      قارن
                    </Link>
                  </Button>
                </div>
              </div>

              {/* saSEO Product */}
              <div className="bg-amber-50 p-8 rounded-2xl shadow-xl border-2 border-brand-accent hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="h-12 w-12 text-brand-accent" />
                  <div>
                    <h3 className="text-2xl font-bold">saSEO</h3>
                    <Badge className="mt-1 bg-yellow-600">قريباً</Badge>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  منصة SaaS لتحسين ظهور متجرك في جوجل - مقالات SEO احترافية + باك لينكات قوية
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                    <span>مقالات SEO بالذكاء الاصطناعي</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                    <span>باك لينكات قوية لمتجرك</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                    <span>زيارات عضوية من جوجل</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                    <span>يعمل مع أي منصة (Salla, Zid, Shopify)</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p>📊 <span className="font-bold">الباقات:</span> 1,500 - 8,000 ریال/سنة</p>
                  <p>💰 <span className="font-bold">يعني:</span> 125-667 ریال/شهر فقط!</p>
                  <p>🎯 <span className="font-bold">الهدف:</span> 500 عميل = 1.5M دخل سنوي</p>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/ksaseo">
                    اعرف المزيد
                  </Link>
                </Button>
              </div>
            </div>

            {/* saSEO Unique Value */}
            <div className="mt-12 bg-amber-50 p-8 rounded-2xl border-2 border-brand-accent">
              <h3 className="text-2xl font-bold text-center mb-6 text-brand-primary">
                🎯 لماذا saSEO فرصة استثمارية ضخمة؟
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl mb-3">🌐</div>
                  <h4 className="font-bold mb-2 text-brand-primary">يعمل مع الجميع</h4>
                  <p className="text-gray-700 text-sm">
                    عملاء سلة، زد، Shopify، WooCommerce - <strong>أي متجر إلكتروني!</strong>
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl mb-3">💰</div>
                  <h4 className="font-bold mb-2 text-brand-primary">سوق أكبر 10x</h4>
                  <p className="text-gray-700 text-sm">
                    ليس محدوداً بعملاء DreamToApp - <strong>200,000+ متجر محتمل!</strong>
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl mb-3">📈</div>
                  <h4 className="font-bold mb-2 text-brand-primary">أرخص 10x من الوكالات</h4>
                  <p className="text-gray-700 text-sm">
                    99-999 ريال/شهر vs 2,000-5,000 ريال للوكالات التقليدية
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              لماذا الاستثمار في DreamToApp؟ 💎
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              فرصة استثمارية واعدة
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-xl font-bold mb-2">سوق نامٍ</h3>
                <p className="text-gray-700">نمو 32% سنوياً في التجارة الإلكترونية السعودية</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-bold mb-2">منتجان قويان</h3>
                <p className="text-gray-700">منصة E-commerce + saSEO للسوق الأوسع</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-100">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold mb-2">نموذج ربح قوي</h3>
                <p className="text-gray-700">دخل متكرر شهرياً + عمولة على المبيعات</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-xl font-bold mb-2">سوق ضخم</h3>
                <p className="text-gray-700">200,000+ متجر محتمل لـ saSEO (غير محدود بمنصة واحدة)</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-100">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-xl font-bold mb-2">تقنية متقدمة</h3>
                <p className="text-gray-700">أول منصة سعودية بذكاء اصطناعي مدمج</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-100">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-xl font-bold mb-2">تواجد إقليمي</h3>
                <p className="text-gray-700">مقر في السعودية + فرع في مصر لخدمة العالم العربي</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز لاستكشاف الفرصة؟ 🚀
            </h2>
            <p className="text-xl mb-8 opacity-90">
              اطلع على الباقات والأسعار، وقارن مع المنافسين
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white">
                <Link href="/compare">
                  مقارنة مع المنافسين
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
