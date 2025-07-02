import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { XCircle, Clock, Zap, AlertTriangle, Camera, Users } from "lucide-react"

export default function LimitationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-6">
          Current{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Limitations</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Understanding our technology's current constraints helps set realistic expectations and guides optimal usage.
        </p>
      </div>

      <Alert className="mb-8 border-red-500/50 bg-red-500/10">
        <AlertTriangle className="h-4 w-4 text-red-500" />
        <AlertDescription className="text-red-200">
          <strong>Transparency Notice:</strong> We believe in honest communication about our technology's capabilities.
          These limitations are actively being addressed in ongoing development.
        </AlertDescription>
      </Alert>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Technical Limitations */}
        <Card className="bg-slate-900/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Zap className="w-5 h-5 mr-2 text-red-400" />
              Technical Constraints
            </CardTitle>
            <CardDescription className="text-slate-400">Current processing and performance boundaries</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Processing Time</span>
                <span className="text-amber-300">3-5 seconds</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Max File Size</span>
                <span className="text-blue-300">10MB</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Min Resolution</span>
                <span className="text-blue-300">512x768px</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Batch Processing</span>
                <span className="text-red-300">Limited</span>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <h4 className="text-white font-medium">Performance Notes:</h4>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li className="flex items-center">
                  <Clock className="w-3 h-3 mr-2 text-amber-400" />
                  Higher resolution increases processing time
                </li>
                <li className="flex items-center">
                  <Clock className="w-3 h-3 mr-2 text-amber-400" />
                  Complex garments may take longer
                </li>
                <li className="flex items-center">
                  <XCircle className="w-3 h-3 mr-2 text-red-400" />
                  Real-time processing not available
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Content Limitations */}
        <Card className="bg-slate-900/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Camera className="w-5 h-5 mr-2 text-red-400" />
              Content Restrictions
            </CardTitle>
            <CardDescription className="text-slate-400">Image content and composition constraints</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Multiple People</span>
                <span className="text-red-300">Not Supported</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Children/Minors</span>
                <span className="text-red-300">Not Supported</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Extreme Poses</span>
                <span className="text-red-300">Limited</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Side/Profile Views</span>
                <span className="text-amber-300">Challenging</span>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <h4 className="text-white font-medium">Content Requirements:</h4>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li className="flex items-center">
                  <Users className="w-3 h-3 mr-2 text-blue-400" />
                  Single adult model only
                </li>
                <li className="flex items-center">
                  <XCircle className="w-3 h-3 mr-2 text-red-400" />
                  No partial body occlusion
                </li>
                <li className="flex items-center">
                  <XCircle className="w-3 h-3 mr-2 text-red-400" />
                  Avoid complex backgrounds
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accuracy Metrics */}
      <Card className="bg-slate-900/50 border-slate-700 mb-8">
        <CardHeader>
          <CardTitle className="text-white">Current Accuracy Metrics</CardTitle>
          <CardDescription className="text-slate-400">
            Performance statistics across different scenarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Garment Categories</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">T-shirts & Basic Tops</span>
                    <span className="text-sm text-white">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Dresses</span>
                    <span className="text-sm text-white">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Jackets & Outerwear</span>
                    <span className="text-sm text-white">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Patterned Clothing</span>
                    <span className="text-sm text-white">71%</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Technical Accuracy</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Fit Accuracy</span>
                    <span className="text-sm text-white">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Color Reproduction</span>
                    <span className="text-sm text-white">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Lighting Consistency</span>
                    <span className="text-sm text-white">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Edge Definition</span>
                    <span className="text-sm text-white">76%</span>
                  </div>
                  <Progress value={76} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Improvements */}
      <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/30">
        <CardHeader>
          <CardTitle className="text-white">Roadmap & Future Improvements</CardTitle>
          <CardDescription className="text-slate-300">
            Planned enhancements to address current limitations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-medium mb-2">Q2 2024</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Improved texture rendering</li>
                <li>• Better pose flexibility</li>
                <li>• Faster processing (1-2s)</li>
                <li>• Enhanced edge detection</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Q3 2024</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Transparent fabric support</li>
                <li>• Multi-layer clothing</li>
                <li>• Side-view compatibility</li>
                <li>• Batch processing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Q4 2024</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• 360° view generation</li>
                <li>• Video try-on</li>
                <li>• Real-time processing</li>
                <li>• Advanced material physics</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
