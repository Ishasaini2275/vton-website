import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Camera, Users, Palette, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function GuidelinesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-6">
          Model Image{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Guidelines</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Follow these comprehensive guidelines to achieve the best virtual try-on results with our AI technology.
        </p>
      </div>

      <Alert className="mb-8 border-amber-500/50 bg-amber-500/10">
        <AlertTriangle className="h-4 w-4 text-amber-500" />
        <AlertDescription className="text-amber-200">
          <strong>Important:</strong> Following these guidelines is crucial for achieving photorealistic results.
          Deviations may significantly impact output quality.
        </AlertDescription>
      </Alert>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Recommended Guidelines */}
        <Card className="bg-slate-900/50 border-green-500/20">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <CardTitle className="text-2xl text-white">✅ Recommended Guidelines</CardTitle>
            </div>
            <CardDescription className="text-slate-300">Follow these parameters for optimal results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Camera className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">2:3 Aspect Ratio</h4>
                  <p className="text-slate-400 text-sm">
                    Portrait orientation provides optimal body visibility and detail capture
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Full Outfit Visibility</h4>
                  <p className="text-slate-400 text-sm">
                    Complete clothing items should be visible without obstruction
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Form-Fitting Base Layer</h4>
                  <p className="text-slate-400 text-sm">Tight clothes help AI understand body shape and proportions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Palette className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Clean Background</h4>
                  <p className="text-slate-400 text-sm">Solid, neutral backgrounds (white, gray) work best</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Avoid */}
        <Card className="bg-slate-900/50 border-red-500/20">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <XCircle className="h-6 w-6 text-red-400" />
              <CardTitle className="text-2xl text-white">❌ What to Avoid</CardTitle>
            </div>
            <CardDescription className="text-slate-300">
              These conditions will reduce accuracy and quality
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <XCircle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Extreme Poses</h4>
                  <p className="text-slate-400 text-sm">Unusual angles, dynamic movements, or non-standard positions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XCircle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Multiple People</h4>
                  <p className="text-slate-400 text-sm">Only single adult models are supported currently</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XCircle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Obstructed Clothing</h4>
                  <p className="text-slate-400 text-sm">Hair, accessories, or objects covering garment details</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XCircle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Wide Aspect Ratio</h4>
                  <p className="text-slate-400 text-sm">Landscape orientation reduces model detail and accuracy</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technical Specifications */}
      <Card className="bg-slate-900/50 border-slate-700 mb-12">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Technical Specifications</CardTitle>
          <CardDescription className="text-slate-400">Detailed requirements for optimal processing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Image Quality</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Min Resolution:</span>
                  <span className="text-white">512 x 768px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Recommended:</span>
                  <span className="text-white">1024 x 1536px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Format:</span>
                  <span className="text-white">PNG, JPG</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Max Size:</span>
                  <span className="text-white">10MB</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Lighting</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Type:</span>
                  <span className="text-white">Even, diffused</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Shadows:</span>
                  <span className="text-white">Soft, minimal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Color Temp:</span>
                  <span className="text-white">5500K-6500K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Exposure:</span>
                  <span className="text-white">Well-balanced</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Composition</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Pose:</span>
                  <span className="text-white">Front-facing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Arms:</span>
                  <span className="text-white">Visible, relaxed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Distance:</span>
                  <span className="text-white">6-10 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Framing:</span>
                  <span className="text-white">Waist to head min</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Checklist */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">Pre-Upload Checklist</CardTitle>
          <CardDescription className="text-slate-300">Verify these points before uploading your images</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-medium mb-3">✅ Image Quality</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>□ High resolution (1024px+ width)</li>
                <li>□ Sharp focus throughout</li>
                <li>□ Good lighting, no harsh shadows</li>
                <li>□ Minimal compression artifacts</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">✅ Model & Pose</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>□ Single person, front-facing</li>
                <li>□ Natural, relaxed pose</li>
                <li>□ Full torso visible</li>
                <li>□ Arms not crossed or hidden</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
