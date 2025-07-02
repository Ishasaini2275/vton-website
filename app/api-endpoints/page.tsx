"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Upload, ImageIcon, Users } from "lucide-react"

export default function ApiEndpointsPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">API Endpoints</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Complete reference for all available VirtualTryon API endpoints. All endpoints require authentication via API
            key in the Authorization header.
          </p>
        </div>

        {/* Virtual Try-On Endpoint */}
        <section className="mb-12">
          <Card className="bg-gray-800/30 border-gray-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-purple-400" />
                  Virtual Try-On
                </CardTitle>
                <Badge className="bg-green-600 text-white">POST</Badge>
              </div>
              <CardDescription className="text-gray-400">
                Generate a virtual try-on image by combining a model image with a garment image
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Endpoint URL */}
              <div>
                <h4 className="text-white font-medium mb-2">Endpoint</h4>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 flex items-center justify-between">
                  <code className="text-purple-300 font-mono">POST https://api-dev.whilter.ai/vton/request</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("https://api-dev.whilter.ai/vton/request")}
                    className="text-gray-400 hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Request Parameters */}
              <div>
                <h4 className="text-white font-medium mb-4">Request Parameters</h4>
                <div className="space-y-4">
                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 font-mono">model_image</span>
                      <Badge variant="outline" className="border-red-500 text-red-300">
                        required
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">The model/person image file</p>
                    <div className="text-xs text-gray-400">
                      <span className="font-medium">Type:</span> multipart/form-data file
                      <br />
                      <span className="font-medium">Formats:</span> JPG, PNG
                      <br />
                      <span className="font-medium">Max size:</span> 10MB
                      <br />
                      <span className="font-medium">Min resolution:</span> 512x768px
                    </div>
                  </div>

                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 font-mono">garment_image</span>
                      <Badge variant="outline" className="border-red-500 text-red-300">
                        required
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">The clothing/garment image file</p>
                    <div className="text-xs text-gray-400">
                      <span className="font-medium">Type:</span> multipart/form-data file
                      <br />
                      <span className="font-medium">Formats:</span> JPG, PNG
                      <br />
                      <span className="font-medium">Max size:</span> 10MB
                      <br />
                      <span className="font-medium">Min resolution:</span> 512x512px
                    </div>
                  </div>

                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 font-mono">category</span>
                      <Badge variant="outline" className="border-red-500 text-red-300">
                        required
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">Garments category</p>
                    <div className="text-xs text-gray-400">
                      <span className="font-medium">Type:</span> string
                      <br />
                      <span className="font-medium">Values:</span> "auto", "tops", "bottoms", "one-pieces"
                      <br />
                    </div>
                  </div>

                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 font-mono">segmentation_free</span>
                      <Badge variant="outline" className="border-red-500 text-red-300">
                        required
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">Garments category</p>
                    <div className="text-xs text-gray-400">
                      <span className="font-medium">Type:</span> string
                      <br />
                      <span className="font-medium">Values:</span> "true", "false"
                      <br />
                    </div>
                  </div>
                </div>
              </div>

              {/* Example Request */}
              <div>
                <h4 className="text-white font-medium mb-2">Example Request</h4>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <pre className="text-purple-300 font-mono text-sm overflow-x-auto">
                    {`curl -X POST https://api-dev.whilter.ai/vton/request \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "model_image=@model.jpg" \\
  -F "garment_image=@shirt.jpg" \\
  -F "category=tops"`}
                  </pre>
                </div>
              </div>

              {/* Example Response */}
              <div>
                <h4 className="text-white font-medium mb-2">Example Response</h4>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <pre className="text-purple-300 font-mono text-sm overflow-x-auto">
                    {`{
  id: "abc123",
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Model Swap Endpoint */}
        {/* <section className="mb-12">
          <Card className="bg-gray-800/30 border-gray-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Users className="w-5 h-5 mr-2 text-purple-400" />
                  Model Swap
                </CardTitle>
                <Badge className="bg-green-600 text-white">POST</Badge>
              </div>
              <CardDescription className="text-gray-400">
                Transfer clothing from one model to another while maintaining the garment's appearance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-white font-medium mb-2">Endpoint</h4>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 flex items-center justify-between">
                  <code className="text-purple-300 font-mono">POST /model-swap</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("POST /model-swap")}
                    className="text-gray-400 hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-4">Request Parameters</h4>
                <div className="space-y-4">
                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 font-mono">source_image</span>
                      <Badge variant="outline" className="border-red-500 text-red-300">
                        required
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">Image of model wearing the garment</p>
                    <div className="text-xs text-gray-400">
                      <span className="font-medium">Type:</span> multipart/form-data file
                      <br />
                      <span className="font-medium">Formats:</span> JPG, PNG
                    </div>
                  </div>

                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 font-mono">target_model</span>
                      <Badge variant="outline" className="border-red-500 text-red-300">
                        required
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">New model image to wear the garment</p>
                    <div className="text-xs text-gray-400">
                      <span className="font-medium">Type:</span> multipart/form-data file
                      <br />
                      <span className="font-medium">Formats:</span> JPG, PNG
                    </div>
                  </div>
                </div>
              </div>

             
              <div>
                <h4 className="text-white font-medium mb-2">Example Response</h4>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <pre className="text-purple-300 font-mono text-sm overflow-x-auto">
                    {`{
  "success": true,
  "data": {
    "result_url": "https://cdn.virtualfit.ai/results/swap_xyz789.jpg",
    "processing_time": 4.1,
    "source_id": "source_abc123",
    "target_id": "target_def456"
  },
  "message": "Model swap completed successfully"
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section> */}

        {/* Status Check Endpoint */}
        <section className="mb-12">
          <Card className="bg-gray-800/30 border-gray-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <ImageIcon className="w-5 h-5 mr-2 text-purple-400" />
                  Check Status
                </CardTitle>
                <Badge className="bg-blue-600 text-white">GET</Badge>
              </div>
              <CardDescription className="text-gray-400">
                Check the processing status of a submitted request
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Endpoint URL */}
              <div>
                <h4 className="text-white font-medium mb-2">Endpoint</h4>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 flex items-center justify-between">
                  <code className="text-purple-300 font-mono">GET https://api-dev.whilter.ai/vton/status/{`{job_id}`}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("https://api-dev.whilter.ai/vton/status/{job_id}")}
                    className="text-gray-400 hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Example Response */}
              <div>
                <h4 className="text-white font-medium mb-2">Example Response</h4>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <pre className="text-purple-300 font-mono text-sm overflow-x-auto">
                    {`{ 
  "request-id": "abc",
  "status": "SUCCESS",
  "generated-output": "output.jpg"
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Error Responses */}
        {/* <section>
          <h2 className="text-2xl font-bold text-white mb-6">Common Error Responses</h2>
          <div className="space-y-4">
            <Card className="bg-red-900/20 border-red-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Badge className="bg-red-600 text-white mr-2">400</Badge>
                  Bad Request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <pre className="text-purple-300 font-mono text-sm">
                    {`{
  "success": false,
  "error": {
    "code": "INVALID_IMAGE_FORMAT",
    "message": "Unsupported image format. Please use JPG or PNG."
  }
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900/20 border-red-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Badge className="bg-red-600 text-white mr-2">401</Badge>
                  Unauthorized
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <pre className="text-purple-300 font-mono text-sm">
                    {`{
  "success": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "Invalid or missing API key."
  }
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </section> */}
      </div>
    </div>
  )
}
