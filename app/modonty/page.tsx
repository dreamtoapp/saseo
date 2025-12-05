import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import modontyContent from "@/lib/modonty-landing-content.json";
import type { LandingContent } from "@/lib/modonty-landing-types";

const content = modontyContent as LandingContent;

export default function ModontyPage() {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-lg px-6 py-2 bg-brand-primary text-white">
              {content.hero.badge}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {content.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              {content.hero.subtitle}
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {content.hero.description}
            </p>

            <div className="mb-8">
              <p className="text-2xl font-bold text-brand-primary mb-4">
                {content.hero.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href={content.hero.ctaPrimary.link}>
                  {content.hero.ctaPrimary.text}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href={content.hero.ctaSecondary.link}>
                  {content.hero.ctaSecondary.text}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Modonty */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              {content.whatIsModonty.title}
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg leading-relaxed">
              {content.whatIsModonty.description}
            </p>

            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg border border-brand-primary/20">
              <ul className="space-y-4 mb-6">
                {content.whatIsModonty.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-6 rounded-xl mt-6">
                <p className="text-center text-lg text-gray-700 leading-relaxed">
                  {content.whatIsModonty.coreConcept}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              {content.howItWorks.title}
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              {content.howItWorks.closing}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {content.howItWorks.steps.map((step) => (
                <Card key={step.number} className="bg-white shadow-lg border-2 border-blue-100">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                    {step.benefits && (
                      <ul className="space-y-2 mt-4">
                        {step.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <ArrowRight className="h-4 w-4 text-brand-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.features && (
                      <ul className="space-y-2 mt-4">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              {content.valueProposition.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {content.valueProposition.points.map((point, index) => (
                <Card key={index} className="bg-white shadow-lg border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-xl text-brand-primary mb-2">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              {content.targetAudience.title}
            </h2>
            <p className="text-center text-xl text-gray-600 mb-8">
              {content.targetAudience.description}
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-12">
              <ul className="space-y-3 mb-6">
                {content.targetAudience.problems.map((problem, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="text-red-600 font-bold">×</span>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.targetAudience.audiences.map((audience, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{audience.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{audience.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              {content.pricing.title}
            </h2>
            <p className="text-center text-xl text-gray-600 mb-4">
              {content.pricing.description}
            </p>
            <div className="text-center mb-12">
              <Badge className="text-lg px-6 py-2 bg-green-600 text-white">
                {content.pricing.offer}
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.pricing.plans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`bg-white shadow-xl border-2 ${
                    plan.popular
                      ? "border-brand-primary scale-105"
                      : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-brand-primary text-white text-center py-2 text-sm font-bold">
                      الأكثر طلباً
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{plan.nameAr}</CardTitle>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-brand-primary mb-2">
                        {plan.priceAr}
                        <span className="text-lg font-normal text-gray-600">
                          {" "}
                          {plan.currency}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{plan.durationAr}</p>
                    </div>
                    <div className="text-center py-2 bg-blue-50 rounded-lg">
                      <span className="font-bold text-brand-primary">
                        {plan.articlesPerMonth} مقال شهريًا
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${
                        plan.popular ? "bg-brand-primary" : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      <Link href="#contact">اشترك الآن</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Strong */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              {content.whyStrong.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.whyStrong.points.map((point, index) => (
                <Card key={index} className="bg-white shadow-lg border-2 border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-lg text-brand-primary">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Solved */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              {content.challengesSolved.title}
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              {content.challengesSolved.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                <h3 className="text-2xl font-bold mb-4 text-red-700">المشاكل</h3>
                <ul className="space-y-3">
                  {content.challengesSolved.problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-red-600 font-bold text-xl">×</span>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-700">الحلول</h3>
                <div className="space-y-4">
                  {content.challengesSolved.solutions.map((solution, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-gray-800 mb-1">{solution.title}</h4>
                      <p className="text-gray-700 text-sm">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              {content.collaboration.title}
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              {content.collaboration.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-primary mb-4">
                    من جهتنا
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.collaboration.ourPart.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-primary mb-4">
                    {content.collaboration.yourPart.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.collaboration.yourPart.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-brand-primary">
              <p className="text-center text-lg text-gray-700 leading-relaxed">
                {content.collaboration.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {content.finalCta.title}
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              {content.finalCta.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {content.finalCta.ctas.map((cta, index) => (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant={cta.primary ? "outline" : "secondary"}
                  className={`text-lg px-8 py-6 ${
                    cta.primary
                      ? "bg-white text-brand-primary hover:bg-gray-100"
                      : "bg-white/10 hover:bg-white/20 text-white border-white"
                  }`}
                >
                  <Link href={cta.link}>{cta.text}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

