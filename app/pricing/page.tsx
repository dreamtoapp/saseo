import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/pricing-card";
import { PricingComparison } from "@/components/pricing-comparison";
import { pricingPlans } from "@/lib/pricing-data";
import { Sparkles, TrendingUp, Shield, Users, Zap, Heart } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-2 text-sm">
              🎉 عرض محدود: خصم 50٪ لأول 3 أشهر
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              الخطة الذكية
            </span>
            <br />
            لتجارتك الإلكترونية
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            نفس مزايا سلة وزد الأساسية، بإضافة{" "}
            <span className="text-orange-600 font-semibold">
              3 مزايا فريدة
            </span>{" "}
            وأسعار أفضل
          </p>

          {/* Unique Value Props */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium">إدارة السائقين</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium">مراقبة صحة المتجر</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium">إدارة المناوبات</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>آمن ومرخص في السعودية</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>منصة موثوقة لتجار السعودية</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>إعداد فوري في دقائق</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="container py-12">
        {/* Commission Explanation */}
        <div className="max-w-4xl mx-auto mb-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              💡 كيف نقدم كل هذه المزايا مجاناً؟
            </h3>
            <p className="text-blue-800">
              نحن نأخذ عمولة صغيرة فقط على مبيعاتك الناجحة - إذا لم تبع، لا تدفع شيء!
              كلما زادت مبيعاتك، قل معدل العمولة بالترقية للباقات المدفوعة.
            </p>
            <div className="flex justify-center gap-4 mt-4 text-sm">
              <div className="bg-white px-4 py-2 rounded-lg">
                <span className="font-bold text-blue-700">مجاني:</span> 5% عمولة
              </div>
              <div className="bg-white px-4 py-2 rounded-lg">
                <span className="font-bold text-blue-700">ماستر:</span> 3% عمولة + 79 ريال
              </div>
              <div className="bg-white px-4 py-2 rounded-lg">
                <span className="font-bold text-blue-700">بريميوم:</span> 2% عمولة + 199 ريال
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} lang="ar" />
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl p-8 text-white text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🎁 عرض خاص للمسجلين الجدد
            </h3>
            <p className="text-lg mb-6 opacity-90">
              احصل على <span className="font-bold">خصم 50%</span> لأول 3 أشهر على
              باقة ماستر أو بريميوم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold"
                asChild
              >
                <Link href="https://myshop.dreamto.app/auth/register?plan=master&promo=LAUNCH50">
                  ابدأ الآن واحصل على الخصم
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="#comparison">قارن المزايا</Link>
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              ⏰ العرض ينتهي قريباً - سارع بالتسجيل
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              لماذا نحن؟
            </h2>
            <p className="text-xl text-muted-foreground">
              لأننا نفهم احتياجات التجار السعوديين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">أسعار تنافسية</h3>
              <p className="text-muted-foreground">
                وفّر حتى 100 ريال شهرياً مقارنة بالمنصات الأخرى، مع الحصول على
                مزايا إضافية فريدة
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">مزايا فريدة</h3>
              <p className="text-muted-foreground">
                إدارة السائقين، مراقبة صحة المتجر، وإدارة المناوبات - مزايا لن
                تجدها في المنصات الأخرى
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">صُنع في السعودية</h3>
              <p className="text-muted-foreground">
                منصة سعودية تفهم السوق المحلي وتقدم دعماً بالعربية على مدار الساعة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="container py-16 scroll-mt-20">
        <PricingComparison lang="ar" />
      </section>

      {/* Social Proof Section */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-12 border border-orange-200">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl">
                  ⭐
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-4">
              انضم إلى مئات التجار الناجحين
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              &quot;ساعدتنا نوفر على تكاليف الشحن بفضل نظام إدارة السائقين.
              الآن نتحكم بالتوصيل ونحسن تجربة العملاء!&quot;
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span className="font-semibold">أحمد المالكي</span>
              <span>•</span>
              <span>مطعم الذواقة - الرياض</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            الأسئلة الشائعة
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-bold mb-2">هل يمكنني التبديل بين الباقات؟</h3>
              <p className="text-muted-foreground">
                نعم، يمكنك الترقية أو التخفيض في أي وقت. عند الترقية، تحصل على
                المزايا الجديدة فوراً.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-bold mb-2">هل تأخذون عمولة على المبيعات؟</h3>
              <p className="text-muted-foreground">
                لا، نحن لا نأخذ أي عمولة على مبيعاتك. تدفع فقط رسوم الاشتراك
                الشهري.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-bold mb-2">ما هو نظام إدارة السائقين؟</h3>
              <p className="text-muted-foreground">
                ميزة فريدة تتيح لك إدارة فريق التوصيل الخاص بك، توزيع الطلبات على
                السائقين، وتتبع التسليم - مما يوفر عليك تكاليف شركات الشحن.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-bold mb-2">كيف أستفيد من العرض الخاص؟</h3>
              <p className="text-muted-foreground">
                فقط سجّل الآن واختر باقة ماستر أو بريميوم. سيُطبق الخصم 50% تلقائياً
                لأول 3 أشهر.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              جاهز لبدء تجارتك الذكية؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              ابدأ مجاناً الآن ولا حاجة لبطاقة ائتمان
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-bold text-lg h-14 px-8"
                asChild
              >
                <Link href="https://myshop.dreamto.app/auth/register">
                  ابدأ مجاناً - بدون بطاقة ائتمان
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 h-14 px-8"
                asChild
              >
                <Link href="https://myshop.dreamto.app/contact">
                  تحدث مع فريق المبيعات
                </Link>
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              💡 تستغرق عملية الإعداد أقل من 5 دقائق
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


