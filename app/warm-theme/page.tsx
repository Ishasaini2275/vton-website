import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Camera, Users, Zap, CheckCircle, Palette } from "lucide-react"

export default function WarmThemePage() {
  return (
    <div className="min-h-screen gradient-bg-warm">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-amber-500/20 text-amber-200 border-amber-500/30">Warm & Sophisticated Design</Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-amber-50 mb-6 leading-tight">
            Experience the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
              warmth of innovation
            </span>
          </h1>

          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our virtual try-on technology with a sophisticated, warm aesthetic that brings comfort and elegance
            to your fashion experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/try-on">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 border-0"
              >
                Try It Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500/50 text-amber-200 hover:bg-amber-800/30 bg-transparent"
              >
                View Features
              </Button>
            </Link>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {["Premium Experience", "Sophisticated AI", "Elegant Design", "Professional Results"].map((feature) => (
              <Badge
                key={feature}
                variant="secondary"
                className="bg-amber-900/30 text-amber-200 px-4 py-2 border-amber-700/50"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4 bg-amber-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-50 mb-4">Sophisticated Features</h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Premium virtual try-on technology with an elegant, warm aesthetic
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-amber-900/20 border-amber-700/30 hover:border-amber-500/50 transition-all duration-300 group backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 gradient-accent-warm rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-amber-50">Premium Try-On</CardTitle>
                <CardDescription className="text-amber-200">Sophisticated AI visualization</CardDescription>
              </CardHeader>
              <CardContent className="text-amber-100">
                <p className="mb-4">
                  Experience luxury-grade virtual try-on technology with warm, natural lighting and premium finishes.
                </p>
                <Link href="/try-on" className="text-amber-300 hover:text-amber-200 inline-flex items-center">
                  Experience now <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-amber-900/20 border-amber-700/30 hover:border-amber-500/50 transition-all duration-300 group backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-amber-50">Elegant Models</CardTitle>
                <CardDescription className="text-amber-200">Sophisticated model swapping</CardDescription>
              </CardHeader>
              <CardContent className="text-amber-100">
                <p className="mb-4">
                  Seamlessly transfer clothing between models with warm, natural skin tones and elegant presentation.
                </p>
                <Link href="/features" className="text-amber-300 hover:text-amber-200 inline-flex items-center">
                  Discover more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-amber-900/20 border-amber-700/30 hover:border-amber-500/50 transition-all duration-300 group backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-amber-50">Warm Enhancement</CardTitle>
                <CardDescription className="text-amber-200">Natural photo optimization</CardDescription>
              </CardHeader>
              <CardContent className="text-amber-100">
                <p className="mb-4">
                  AI-powered enhancement with warm color grading and natural lighting for premium results.
                </p>
                <Link href="/features" className="text-amber-300 hover:text-amber-200 inline-flex items-center">
                  Explore features <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Theme Comparison */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-50 mb-4">Choose Your Aesthetic</h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Switch between our cool teal and warm brown themes to match your brand aesthetic
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 border-teal-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-cyan-400" />
                  Cool Teal Theme
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-200">
                <ul className="space-y-2">
                  <li>• Modern, tech-forward aesthetic</li>
                  <li>• Cool blues and cyans</li>
                  <li>• Perfect for digital brands</li>
                  <li>• Clean, minimalist feel</li>
                </ul>
                <Link href="/" className="mt-4 inline-block">
                  <Button
                    variant="outline"
                    className="border-teal-500/50 text-cyan-300 hover:bg-teal-500/10 bg-transparent"
                  >
                    Switch to Teal
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border-amber-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-50 flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-amber-400" />
                  Warm Brown Theme
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-100">
                <ul className="space-y-2">
                  <li>• Sophisticated, luxury aesthetic</li>
                  <li>• Warm browns and ambers</li>
                  <li>• Perfect for fashion brands</li>
                  <li>• Elegant, premium feel</li>
                </ul>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="border-amber-500/50 text-amber-300 hover:bg-amber-500/10 bg-transparent"
                    disabled
                  >
                    Current Theme
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600/20 to-orange-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-50 mb-6">Experience Luxury Virtual Try-On</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join premium fashion brands using our sophisticated virtual try-on technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/try-on">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 border-0"
              >
                Start Premium Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500/50 text-amber-100 hover:bg-amber-800/30 bg-transparent"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
