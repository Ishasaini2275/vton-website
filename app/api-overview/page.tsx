import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function ApiOverviewPage() {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl ml-0 mr-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">API Overview</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The VirtualTryon API provides developers with the capability to integrate our try-on model directly into their
            applications. Built on a RESTful architecture, it <strong>currently supports only HTTP endpoints</strong>.
          </p>
        </div>

        {/* Base URL */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Base URL</h2>
          <p className="text-muted-foreground mb-4">The base URL for the VirtualTryon API is:</p>
          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-6">
            <code className="text-primary font-mono">https://api.whilter.ai/vton/request</code>
          </div>

          <Link href="/api-endpoints">
            <Button variant="outline" className="border-border text-foreground hover:bg-muted/50 bg-transparent">
              Go to the API reference <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Authentication</h2>
          <p className="text-muted-foreground mb-4">
            Access to the VirtualTryon API is secured through the use of API keys.
          </p>
          {/* <p className="text-muted-foreground mb-6">
            To obtain an API key, create an account to access our dashboard and subscribe to a plan.
          </p> */}

          <Card className="bg-card/50 border-border mb-6 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary" />
                API Key Usage
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-4">Include your API key in the request headers:</p>
              <div className="bg-muted/50 border border-border rounded-lg p-4">
                <code className="text-primary font-mono">Authorization: Bearer YOUR_API_KEY</code>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Rate Limits */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Rate Limits</h2>
          <p className="text-muted-foreground mb-6">
            API requests are subject to rate limiting to ensure fair usage and optimal performance for all users.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Starter Plan</CardTitle>
                <CardDescription className="text-muted-foreground">Basic usage limits</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Requests/minute:</span>
                    <span className="text-primary">10</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly quota:</span>
                    <span className="text-primary">1,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Professional</CardTitle>
                <CardDescription className="text-muted-foreground">Enhanced limits</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Requests/minute:</span>
                    <span className="text-primary">50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly quota:</span>
                    <span className="text-primary">10,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Enterprise</CardTitle>
                <CardDescription className="text-muted-foreground">Custom limits</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Requests/minute:</span>
                    <span className="text-primary">Custom</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly quota:</span>
                    <span className="text-primary">Unlimited</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Response Format */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Response Format</h2>
          <p className="text-muted-foreground mb-4">
            All API responses are returned in JSON format with consistent structure:
          </p>

          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-6">
            <pre className="text-primary font-mono text-sm overflow-x-auto">
              {`{
  "success": true,
  "data": {
    "result_url": "https://cdn.virtualfit.ai/results/...",
    "processing_time": 3.2,
    "model_id": "model_123",
    "garment_id": "garment_456"
  },
  "message": "Virtual try-on completed successfully"
}`}
            </pre>
          </div>
        </section> */}

        {/* Error Handling */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Error Handling</h2>
          <p className="text-muted-foreground mb-4">
            The API uses conventional HTTP response codes to indicate success or failure:
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <Badge className="bg-green-600 text-white">200</Badge>
              <span className="text-muted-foreground">Success - Request completed successfully</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <Badge className="bg-yellow-600 text-white">400</Badge>
              <span className="text-muted-foreground">Bad Request - Invalid parameters or missing data</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <Badge className="bg-red-600 text-white">401</Badge>
              <span className="text-muted-foreground">Unauthorized - Invalid or missing API key</span>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/api-endpoints">
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors cursor-pointer backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-primary" />
                    API Endpoints
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Explore available endpoints and their usage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    View endpoints <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/api-parameters">
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors cursor-pointer backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-primary" />
                    Parameters Guide
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Learn about request parameters and optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    Read guide <ArrowRight className="w-4 h-4 ml-1" />
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
