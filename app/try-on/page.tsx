"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Upload, ImageIcon, Zap, Download, AlertCircle } from "lucide-react"
import Image from "next/image"

interface UploadedImage {
  file: File
  preview: string
  type: "model" | "garment"
}

export default function TryOnPage() {
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

      // TODO: Replace with your actual API call
      const formData = new FormData()
      formData.append("model-image", modelImage.file)
      formData.append("garment-image", garmentImage.file)

      // Example API call structure - replace with your actual endpoints
      const response = await fetch("/api/virtual-tryon", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Virtual try-on processing failed")
      }

      const data = await response.json()

      clearInterval(progressInterval)
      setProgress(100)

      // Simulate result - replace with actual result from API
      setTimeout(() => {
        setResult(data.result_url || "/placeholder.svg?height=400&width=300")
        setIsProcessing(false)
      }, 1000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during processing")
      setIsProcessing(false)
      setProgress(0)
    }
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
    <Card className="bg-slate-900/30 border-slate-600/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <ImageIcon className="w-5 h-5 mr-2 text-purple-400" />
          {title}
        </CardTitle>
        <CardDescription className="text-slate-400">{description}</CardDescription>
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
              className="absolute top-2 right-2 bg-slate-900/80 border-slate-600"
              onClick={() => (type === "model" ? setModelImage(null) : setGarmentImage(null))}
            >
              Remove
            </Button>
          </div>
        ) : (
          <div
            className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer"
            onDrop={(e) => handleDrop(e, type)}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById(`${type}-upload`)?.click()}
          >
            <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-300 mb-2">Drop your image here or click to browse</p>
            <p className="text-slate-500 text-sm">PNG, JPG up to 10MB</p>
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
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-6">
          Virtual{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Try-On</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Upload a model image and garment to see how they look together with our AI-powered virtual try-on technology.
        </p>
      </div>

      {error && (
        <Alert className="mb-8 border-red-500/50 bg-red-500/10">
          <AlertCircle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-200">{error}</AlertDescription>
        </Alert>
      )}

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

        <Card className="bg-slate-900/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Zap className="w-5 h-5 mr-2 text-purple-400" />
              Result
            </CardTitle>
            <CardDescription className="text-slate-400">Your virtual try-on result will appear here</CardDescription>
          </CardHeader>
          <CardContent>
            {isProcessing ? (
              <div className="space-y-4">
                <div className="w-full h-64 bg-slate-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-slate-300">Processing...</p>
                  </div>
                </div>
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-slate-400 text-center">{progress}% complete</p>
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
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download Result
                </Button>
              </div>
            ) : (
              <div className="w-full h-64 bg-slate-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-500">Upload images to see result</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 border-0"
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

      {/* Guidelines */}
      <Card className="mt-12 bg-gradient-to-r from-teal-900/20 to-cyan-900/20 border-teal-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Quick Tips for Best Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 text-slate-300">
            <div>
              <h4 className="font-medium text-white mb-2">Model Image:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Use 2:3 aspect ratio</li>
                <li>• Ensure full outfit visibility</li>
                <li>• Natural, front-facing pose</li>
                <li>• Clean background preferred</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Garment Image:</h4>
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
  )
}
