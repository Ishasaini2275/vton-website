import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Star, Crown } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and individual creators",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "100 virtual try-ons per month",
        "Basic AI photo editing",
        "Standard processing speed",
        "Email support",
        "PNG/JPG export",
      ],
      limitations: ["No batch processing", "No API access", "Standard resolution only"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing fashion brands and agencies",
      icon: <Star className="w-6 h-6" />,
      features: [
        "500 virtual try-ons per month",
        "Advanced AI photo editing",
        "Priority processing",
        "Batch processing (up to 10)",
        "API access",
        "High-resolution exports",
        "Priority email support",
        "Analytics dashboard",
      ],
      limitations: ["Limited API calls", "Standard SLA"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale operations and custom integrations",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Unlimited virtual try-ons",
        "Custom AI model training",
        "Real-time processing",
        "Unlimited batch processing",
        "Full API access",
        "Custom integrations",
        "Dedicated support manager",
        "Advanced analytics",
        "Custom SLA",
        "White-label options",
      ],
      limitations: [],
      popular: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">
          Simple,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Transparent
          </span>{" "}
          Pricing
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Choose the perfect plan for your virtual try-on needs. All plans include our core AI technology and regular
          updates.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`bg-slate-900/50 border-slate-700 relative ${
              plan.popular ? "border-purple-500/50 scale-105" : ""
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                Most Popular
              </Badge>
            )}

            <CardHeader className="text-center">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                  plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-slate-800"
                }`}
              >
                <div className="text-white">{plan.icon}</div>
              </div>

              <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
              <CardDescription className="text-slate-400">{plan.description}</CardDescription>

              <div className="py-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h4 className="text-white font-medium mb-3">What's included:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.limitations.length > 0 && (
                <div>
                  <h4 className="text-white font-medium mb-3">Limitations:</h4>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <span className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0">•</span>
                        <span className="text-slate-400">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button
                className={`w-full ${
                  plan.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-slate-700 hover:bg-slate-600"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <Card className="bg-slate-900/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-center">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">How does billing work?</h4>
                <p className="text-slate-300 text-sm">
                  All plans are billed monthly. You can upgrade, downgrade, or cancel at any time. Unused credits don't
                  roll over to the next month.
                </p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">What counts as a virtual try-on?</h4>
                <p className="text-slate-300 text-sm">
                  Each successful generation of a model wearing a garment counts as one virtual try-on, regardless of
                  processing time or image size.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">Can I change plans anytime?</h4>
                <p className="text-slate-300 text-sm">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                  prorate the billing accordingly.
                </p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">Is there a free trial?</h4>
                <p className="text-slate-300 text-sm">
                  Yes, all paid plans come with a 7-day free trial. No credit card required to start. You'll get full
                  access to all features during the trial period.
                </p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">What about API rate limits?</h4>
                <p className="text-slate-300 text-sm">
                  Professional plans include 1,000 API calls per month. Enterprise plans have custom limits based on
                  your needs and usage patterns.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
