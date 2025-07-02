"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Upload, ImageIcon, Zap, Download, AlertCircle, Palette, Eye } from "lucide-react"
import Image from "next/image"

interface UploadedImage {
  file: File
  preview: string
  type: "model" | "garment"
}

export default function DemoPage() {
  const [modelImage, setModelImage] = useState<UploadedImage | null>(null)
  const [garmentImage, setGarmentImage] = useState<UploadedImage | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleImageUpload = useCallback((file: File, type: "model" | "garment") => {
    const preview = URL.createObjectURL(file)
    const uploadedImage = { file, preview, type }

    if (type === "model") {
      setModelImage(uploadedImage)
    } else {
      setGarmentImage(uploadedImage)
    }
    setError(null)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent, type: "model" | "garment") => {
      e.preventDefault()
      const files = Array.from(e.dataTransfer.files)
      const imageFile = files.find((file) => file.type.startsWith("image/"))

      if (imageFile) {
        handleImageUpload(imageFile, type)
      }
    },
    [handleImageUpload],
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, type: "model" | "garment") => {
      const file = e.target.files?.[0]
      if (file) {
        handleImageUpload(file, type)
      }
    },
    [handleImageUpload],
  )

  const processVirtualTryOn = async () => {
    if (!modelImage || !garmentImage) {
      setError("Please upload both model and garment images")
      return
    }

    setIsProcessing(true)
    setProgress(0)
    setError(null)

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 500)

      // Simulate API processing time
      await new Promise((resolve) => setTimeout(resolve, 4000))

      clearInterval(progressInterval)
      setProgress(100)

      // Simulate result - in real implementation, this would be the API response
      setTimeout(() => {
        setResult("/placeholder.svg?height=400&width=300")
        setIsProcessing(false)
      }, 1000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during processing")
      setIsProcessing(false)
      setProgress(0)
    }
  }

  const loadSampleImages = () => {
    // Create mock file objects for demo
    const mockModelFile = new File([""], "model.jpg", { type: "image/jpeg" })
    const mockGarmentFile = new File([""], "garment.jpg", { type: "image/jpeg" })

    setModelImage({
      file: mockModelFile,
      preview: "/placeholder.svg?height=400&width=300&text=Sample+Model",
      type: "model",
    })

    setGarmentImage({
      file: mockGarmentFile,
      preview: "/placeholder.svg?height=300&width=300&text=Sample+Garment",
      type: "garment",
    })

    setError(null)
  }

  const UploadArea = ({
    type,
    image,
    title,
    description,
  }: {
    type: "model" | "garment"
    image: UploadedImage | null
    title: string
    description: string
  }) => (
    <Card className="bg-card/50 border-border backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center">
          <ImageIcon className="w-5 h-5 mr-2 text-primary" />
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {image ? (
          <div className="relative">
            <Image
              src={image.preview || "/placeholder.svg"}
              alt={`${type} preview`}
              width={300}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Button
              variant="outline"
              size="sm"
              className="absolute top-2 right-2 bg-background/80 border-border"
              onClick={() => (type === "model" ? setModelImage(null) : setGarmentImage(null))}
            >
              Remove
            </Button>
          </div>
        ) : (
          <div
            className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
            onDrop={(e) => handleDrop(e, type)}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById(`${type}-upload`)?.click()}
          >
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-foreground mb-2">Drop your image here or click to browse</p>
            <p className="text-muted-foreground text-sm">PNG, JPG up to 10MB</p>
            <input
              id={`${type}-upload`}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileSelect(e, type)}
            />
          </div>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="flex-1 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Interactive Demo</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">Live Virtual Try-On Demo</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Experience our virtual try-on technology in action. Upload your own images or use our sample images to see
            how the API works.
          </p>
        </div>

        {/* Theme Preview Section */}
        <section className="mb-12">
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Palette className="w-5 h-5 mr-2 text-primary" />
                Theme Preview
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                See how the interface looks in different themes. Use the theme toggle in the sidebar to switch between
                them.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded mr-2"></div>
                    <span className="text-foreground font-medium">Purple Theme</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Modern, tech-forward aesthetic with purple accents</p>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded mr-2"></div>
                    <span className="text-foreground font-medium">Teal Theme</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Cool, professional look with teal and cyan colors</p>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded mr-2"></div>
                    <span className="text-foreground font-medium">Earthy Theme</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Warm, sophisticated feel with brown and sandy tones</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {error && (
          <Alert className="mb-8 border-red-500/50 bg-red-500/10">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <AlertDescription className="text-red-200">{error}</AlertDescription>
          </Alert>
        )}

        {/* Quick Start */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <Button
            onClick={loadSampleImages}
            variant="outline"
            className="border-border text-foreground hover:bg-muted/50 bg-transparent"
          >
            <Eye className="w-4 h-4 mr-2" />
            Load Sample Images
          </Button>
          <p className="text-muted-foreground text-sm flex items-center">
            Click to load sample images and see the demo in action
          </p>
        </div>

        {/* Upload Areas */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <UploadArea
            type="model"
            image={modelImage}
            title="Model Image"
            description="Upload a photo of the person who will wear the garment"
          />

          <UploadArea
            type="garment"
            image={garmentImage}
            title="Garment Image"
            description="Upload the clothing item you want to try on"
          />

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Zap className="w-5 h-5 mr-2 text-primary" />
                Result
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Your virtual try-on result will appear here
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isProcessing ? (
                <div className="space-y-4">
                  <div className="w-full h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
                      <p className="text-foreground">Processing...</p>
                    </div>
                  </div>
                  <Progress value={progress} className="w-full" />
                  <p className="text-sm text-muted-foreground text-center">{progress}% complete</p>
                </div>
              ) : result ? (
                <div className="space-y-4">
                  <Image
                    src={result || "/placeholder.svg"}
                    alt="Virtual try-on result"
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <Button className="w-full gradient-accent text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Result
                  </Button>
                </div>
              ) : (
                <div className="w-full h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Upload images to see result</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Generate Button */}
        <div className="text-center mb-12">
          <Button
            size="lg"
            className="gradient-accent text-white hover:opacity-90 border-0"
            onClick={processVirtualTryOn}
            disabled={!modelImage || !garmentImage || isProcessing}
          >
            {isProcessing ? (
              <>
                <Zap className="w-4 h-4 mr-2 animate-pulse" />
                Processing...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Generate Virtual Try-On
              </>
            )}
          </Button>
        </div>

        {/* API Code Example */}
        <section className="mb-12">
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground">API Code Example</CardTitle>
              <CardDescription className="text-muted-foreground">
                Here's how this demo translates to actual API usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 border border-border rounded-lg p-4">
                <pre className="text-primary font-mono text-sm overflow-x-auto">
                  {`curl -X POST https://api.virtualfit.ai/v1/virtual-tryon \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "model_image=@model.jpg" \\
  -F "garment_image=@shirt.jpg" \\
  -F "quality=high"

# Response
{
  "success": true,
  "data": {
    "result_url": "https://cdn.virtualfit.ai/results/abc123.jpg",
    "processing_time": 3.2,
    "model_id": "model_abc123",
    "garment_id": "garment_def456"
  }
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Guidelines */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Tips for Best Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Model Image:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Use 2:3 aspect ratio</li>
                  <li>• Ensure full outfit visibility</li>
                  <li>• Natural, front-facing pose</li>
                  <li>• Clean background preferred</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Garment Image:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• High resolution (min 512x768)</li>
                  <li>• Clear, well-lit product shot</li>
                  <li>• Minimal background distractions</li>
                  <li>• PNG or JPG format</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
