import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "التكاليف التشغيلية - Modonty",
  description: "تفاصيل شاملة للتكاليف التشغيلية لمشروع Modonty",
};

export default function CostsPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <section className="bg-brand-primary text-white py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  التكاليف التشغيلية 💵
                </h1>
                <p className="text-lg opacity-90">
                  شفافية كاملة في الميزانية
                </p>
              </div>
              <Button variant="outline" className="bg-white text-brand-primary hover:bg-gray-100" asChild>
                <Link href="/modonty">
                  <ArrowRight className="h-4 w-4 ml-2" />
                  العودة لصفحة Modonty
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-brand-primary overflow-hidden">
              <div className="bg-brand-primary text-white p-4">
                <h3 className="font-bold text-xl text-center">التكاليف الشهرية المتوقعة</h3>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-blue-100 p-3 rounded-lg mb-4">
                  <h4 className="font-bold text-brand-primary mb-2">💻 تقنية وبنية تحتية</h4>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">استضافة Authority Blog</span>
                  <span className="font-bold text-brand-primary">150 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">قاعدة بيانات</span>
                  <span className="font-bold text-brand-primary">100 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">أدوات SEO و Analytics</span>
                  <span className="font-bold text-brand-primary">200 ریال</span>
                </div>

                <div className="bg-green-100 p-3 rounded-lg mb-4 mt-4">
                  <h4 className="font-bold text-brand-primary mb-2">👥 رواتب الفريق</h4>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">مطور Full-Stack</span>
                  <span className="font-bold text-brand-primary">10,000 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">كتّاب محتوى (3 من مصر)</span>
                  <span className="font-bold text-brand-primary">2,800 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">محرر محتوى</span>
                  <span className="font-bold text-brand-primary">4,000 ریال</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">مدير مشروع</span>
                  <span className="font-bold text-brand-primary">6,500 ریال</span>
                </div>

                <div className="bg-yellow-100 p-3 rounded-lg mb-4 mt-4">
                  <h4 className="font-bold text-brand-primary mb-2">📢 تسويق</h4>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">إعلانات Google + Meta</span>
                  <span className="font-bold text-brand-primary">3,000 ریال</span>
                </div>

                <div className="h-px bg-gray-300 my-4"></div>

                <div className="flex justify-between items-center p-4 bg-brand-primary text-white rounded-lg">
                  <span className="font-bold text-xl">الإجمالي الكامل</span>
                  <span className="font-bold text-2xl">26,750 ریال/شهر</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-green-100 rounded-lg border-2 border-green-400 mt-4">
                  <span className="font-bold text-lg text-gray-700">نقطة التعادل (اشتراكات سنوية)</span>
                  <span className="font-bold text-xl text-green-600">50 عميل 🎯</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-brand-primary mb-4">ملاحظات مهمة</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold">•</span>
                  <span>التكاليف الشهرية ثابتة تقريباً في المرحلة الأولى</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold">•</span>
                  <span>مع نمو عدد العملاء، قد نحتاج لتوسيع الفريق (تكاليف متغيرة)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold">•</span>
                  <span>نقطة التعادل محسوبة بناءً على متوسط الإيراد السنوي للعميل (4,750 ريال)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold">•</span>
                  <span>التكاليف التقنية والتسويقية قابلة للتوسع حسب الحاجة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

