import { Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PricingPlan } from "@/lib/pricing-data";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: PricingPlan;
  lang?: "en" | "ar";
}

export function PricingCard({ plan, lang = "ar" }: PricingCardProps) {
  const isArabic = lang === "ar";

  return (
    <Card
      className={cn(
        "relative flex flex-col transition-all duration-300 hover:shadow-2xl",
        plan.popular && "border-primary border-2 shadow-xl scale-105"
      )}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 text-sm font-bold shadow-lg">
            {isArabic ? plan.badgeAr : plan.badge}
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-8 pt-10">
        <CardTitle className="text-2xl font-bold mb-2">
          {isArabic ? plan.nameAr : plan.name}
        </CardTitle>
        <CardDescription className="text-base font-medium">
          {isArabic ? plan.taglineAr : plan.tagline}
        </CardDescription>

        <div className="mt-6">
          <div className="flex items-baseline justify-center gap-2">
            {plan.price === 0 ? (
              <span className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                {isArabic ? plan.priceAr : "Free"}
              </span>
            ) : (
              <>
                <span className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  {isArabic ? plan.priceAr : plan.price}
                </span>
                <span className="text-muted-foreground">
                  {isArabic ? plan.periodAr : plan.period}
                </span>
              </>
            )}
          </div>

          {plan.savings && (
            <div className="mt-3">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-3 py-1">
                💰 {isArabic ? plan.savingsAr : plan.savings}
              </Badge>
            </div>
          )}

          {plan.competitive && (
            <p className="text-sm text-muted-foreground mt-2">
              {isArabic ? plan.competitiveAr : plan.competitive}
            </p>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-3">
          {plan.features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-3 text-sm",
                feature.highlight && "font-semibold"
              )}
            >
              <div className="flex-shrink-0 mt-0.5">
                {feature.unique ? (
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                )}
              </div>
              <span className={cn(
                feature.unique && "text-orange-600",
                feature.highlight && !feature.unique && "text-foreground"
              )}>
                {isArabic ? feature.textAr : feature.text}
                {feature.unique && (
                  <span className="inline-block mr-1 text-orange-500">⭐</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 pt-6">
        <Button
          className={cn(
            "w-full h-12 text-base font-semibold",
            plan.popular
              ? "bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700"
              : "bg-primary hover:bg-primary/90"
          )}
          asChild
        >
          <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
            {isArabic ? plan.ctaAr : plan.cta}
          </a>
        </Button>

        {plan.price === 0 && (
          <p className="text-xs text-center text-muted-foreground">
            {isArabic ? "لا حاجة لبطاقة ائتمان" : "No credit card required"}
          </p>
        )}

        {plan.id === "master" && (
          <p className="text-xs text-center text-muted-foreground">
            {isArabic
              ? "🎉 عرض خاص: خصم 50٪ لأول 3 أشهر"
              : "🎉 Special: 50% off first 3 months"}
          </p>
        )}
      </CardFooter>
    </Card>
  );
}


