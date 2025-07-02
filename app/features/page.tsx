import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Users, Zap, Palette, Video, Download, Globe, Shield, BarChart3, Clock } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">
          Powerful{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Features</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Comprehensive virtual try-on capabilities designed for fashion brands, e-commerce platforms, and content
          creators.
        </p>
      </div>

      {/* Core Features */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <Card className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-white">Virtual Try-On</CardTitle>
            <CardDescription className="text-slate-400">AI-powered clothing visualization on any model</CardDescription>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-4">
              Advanced neural networks that understand fabric physics, lighting, and human anatomy to create
              photorealistic try-on experiences.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Realistic fabric draping and fit</li>
              <li>• Accurate color and texture reproduction</li>
              <li>• Proper shadow and lighting integration</li>
              <li>• Support for various clothing categories</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-white">Model Swap</CardTitle>
            <CardDescription className="text-slate-400">Change models while keeping the same outfit</CardDescription>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-4">
              Seamlessly transfer clothing from one model to another, enabling diverse representation and A/B testing
              for marketing campaigns.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Maintain clothing fit and style</li>
              <li>• Support diverse body types</li>
              <li>• Preserve garment details</li>
              <li>• Batch processing capabilities</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-white">AI Photo Editing</CardTitle>
            <CardDescription className="text-slate-400">Intelligent image enhancement and editing</CardDescription>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-4">
              Automated photo enhancement tools that improve image quality, adjust lighting, and optimize images for
              virtual try-on processing.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Automatic background removal</li>
              <li>• Lighting correction and enhancement</li>
              <li>• Color balance optimization</li>
              <li>• Noise reduction and sharpening</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Advanced Capabilities</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-slate-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Video className="w-5 h-5 mr-2 text-purple-400" />
                Video Try-On
                <Badge className="ml-2 bg-purple-500/20 text-purple-300">Coming Soon</Badge>
              </CardTitle>
              <CardDescription className="text-slate-400">Dynamic clothing visualization in motion</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-300">
              <p className="mb-4">
                Generate short video clips showing clothing in motion, perfect for social media and dynamic product
                presentations.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• 5-15 second video clips</li>
                <li>• Natural movement simulation</li>
                <li>• Multiple camera angles</li>
                <li>• Export in various formats</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Palette className="w-5 h-5 mr-2 text-purple-400" />
                Color & Pattern Variants
              </CardTitle>
              <CardDescription className="text-slate-400">Generate multiple colorways instantly</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-300">
              <p className="mb-4">
                Create unlimited color and pattern variations of the same garment without additional photoshoots.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Automatic color palette generation</li>
                <li>• Pattern overlay capabilities</li>
                <li>• Seasonal color trends integration</li>
                <li>• Brand color matching</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Integration Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Integration & Workflow</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-slate-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-400" />
                API Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 text-sm">
              <ul className="space-y-2">
                <li>• RESTful API with comprehensive documentation</li>
                <li>• Webhook support for real-time updates</li>
                <li>• SDKs for popular programming languages</li>
                <li>• Rate limiting and usage analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Download className="w-5 h-5 mr-2 text-green-400" />
                Batch Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 text-sm">
              <ul className="space-y-2">
                <li>• Process multiple images simultaneously</li>
                <li>• Queue management and priority handling</li>
                <li>• Progress tracking and notifications</li>
                <li>• Bulk download and export options</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-purple-400" />
                Security & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 text-sm">
              <ul className="space-y-2">
                <li>• End-to-end encryption for all uploads</li>
                <li>• Automatic data deletion after processing</li>
                <li>• GDPR and CCPA compliance</li>
                <li>• Enterprise-grade security standards</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Performance Metrics */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-purple-400" />
            Performance & Analytics
          </CardTitle>
          <CardDescription className="text-slate-300">Real-time insights and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">3-5s</h3>
              <p className="text-slate-300">Average processing time</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">94%</h3>
              <p className="text-slate-300">Color accuracy rate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">10K+</h3>
              <p className="text-slate-300">Images processed daily</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
