import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Camera, Code, Shield } from "lucide-react"
import Link from "next/link"

export default function IntroductionPage() {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl ml-0 mr-auto">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Virtual Try-On API</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">Revolutionizing Visual Engagement with AI</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
          <strong>Whilter AI</strong> helps brands upgrade their B2C communication through personalized, AI-generated visual content.
              Our platform enables you to scale to millions of smart, auto-generated videos tailored to each customer’s interests, language, location, and profile — driving deeper engagement across the customer journey.
            </p>
        </div>

        {/* What is VirtualTryon AI */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What is VirtualTryon AI?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            VirtualTryon AI is a cutting-edge virtual try-on service that uses advanced machine learning models to
            generate photorealistic images of clothing items worn by different models. Our API enables developers to
            integrate this technology directly into their e-commerce platforms, fashion apps, and marketing tools.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-primary" />
                  Realistic Results
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Generate photorealistic images with accurate fabric physics, lighting, and fit.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-primary" />
                  Fast Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Get results in 3-5 seconds with our optimized AI models and infrastructure.</p>
              </CardContent>
            </Card>
          </div>
        </section> */}

        <section className="mb-12 py-16 px-6 md:px-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
          <div className="max-w-5xl mx-auto space-y-10">
              
            <div className="border-l-4 border-[hsl(var(--accent))] pl-5">
              <h2 className="text-2xl font-medium mb-2">👗 New: Virtual Try-On (VTON)</h2>
              <p className="text-md leading-relaxed">
                We’re proud to introduce our latest innovation: <strong>Virtual Try-On</strong>. This cutting-edge AI feature allows users to preview how clothing will look on them — without needing to try it on physically.
                Simply provide a photo of the person and the garment, and our system generates a highly realistic composite image in seconds.
              </p>
            </div>

            <p className="text-md text-[hsl(var(--muted-foreground))]">
              Whether you're a fashion retailer, marketplace, or digital stylist, Whilter AI's VTON enhances online shopping with confidence, reduces return rates, and brings your catalog to life through personalization.
            </p>
          </div>
        </section>



        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Getting Started</h2>
          <p className="text-muted-foreground mb-6">
            Ready to integrate virtual try-on into your application? Follow these simple steps:
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-card/30 rounded-lg border border-border">
              <div className="w-8 h-8 gradient-accent text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-foreground font-medium">Get API Access</h3>
                <p className="text-muted-foreground">Contact us for an API key to authenticate your requests</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-card/30 rounded-lg border border-border">
              <div className="w-8 h-8 gradient-accent text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-foreground font-medium">Review API Documentation</h3>
                <p className="text-muted-foreground">Understand endpoints, parameters, and response formats</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-card/30 rounded-lg border border-border">
              <div className="w-8 h-8 gradient-accent text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-foreground font-medium">Start Building</h3>
                <p className="text-muted-foreground">Integrate our API into your application and start creating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/api-overview">
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors cursor-pointer backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <Code className="w-5 h-5 mr-2 text-primary" />
                    API Overview
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Learn about our RESTful API architecture and base endpoints
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/api-parameters">
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors cursor-pointer backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-primary" />
                    Parameters Guide
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Understand image requirements and optimization parameters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    View guide <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
