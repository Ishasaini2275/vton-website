"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Upload, ImageIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const CodeBlock = ({ children }: { children: string }) => (
  <div className="bg-muted/10 border border-border rounded-lg p-4 overflow-x-auto">
    <pre className="font-mono text-sm text-primary whitespace-pre-wrap leading-relaxed">
      {children}
    </pre>
  </div>
)

const CodeBlockWithCopy = ({ children, type }: { children: string; type: "curl" | "endpoint" }) => {
  const { toast } = useToast()

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      toast({
        description: type === "curl" ? "Curl command copied!" : "Endpoint copied!",
        variant: "success", 
      })
    })
    .catch(() => {
      toast({
        description: "Failed to copy!",
        variant: "destructive",
      })
    })
  }

  return (
    <div className="relative bg-muted/10 border border-border rounded-lg p-4 overflow-x-auto">
      <pre className="font-mono text-sm text-primary whitespace-pre-wrap leading-relaxed">
        {children}
      </pre>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2"
        onClick={() => copyToClipboard(children)}
      >
        <Copy className="w-4 h-4" />
      </Button>
    </div>
  )
}

export default function ApiEndpointsPage() {
  const { toast } = useToast()

  return (
    <div className="flex-1 p-4 md:p-8">
      <div className="max-w-4xl ml-0 mr-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">API Endpoints</h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Reference for all available Virtual Try-on API endpoints. Include your API key in the <code className="font-mono">Authorization</code> header on every request.
          </p>
        </div>

        {/* Virtual Try‑On Endpoint */}
        <section>
          <Card className="bg-card/40 border-border backdrop-blur-sm">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Upload className="w-5 h-5 text-primary" /> Virtual Try‑On
                </CardTitle>
                <Badge className="bg-green-600 text-white">POST</Badge>
              </div>
              <CardDescription className="text-muted-foreground">
                Combine a <code className="font-mono">model-image</code> with a <code className="font-mono">garment-image</code> to generate a photoreal try‑on.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Endpoint URL */}
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Endpoint</h4>
                <div className="bg-muted/10 border border-border rounded-lg p-4 flex flex-wrap items-center justify-between gap-4">
                  <code className="font-mono text-primary block md:inline">POST https://api.whilter.ai/vton/request</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText("https://api.whilter.ai/vton/request")
                      toast({
                        description: "Endpoint copied!",
                      })
                    }}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Request Parameters */}
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground">Request Parameters</h4>
                <div className="space-y-4">

                  {paramBlock({
                    name: "user-id",
                    required: true,
                    desc: "User phone number or Id",
                    type: "string",
                    extras: [{ k: "Values", v: "9811723476" }],
                  })}

                  {paramBlock({
                    name: "client-id",
                    required: true,
                    desc: "Client Id",
                    type: "string",
                    extras: [{ k: "Values", v: "1234" }],
                  })}

                  {paramBlock({
                    name: "usecase-id",
                    required: true,
                    desc: "Usecase Id",
                    type: "string",
                    extras: [{ k: "Values", v: "5678" }],
                  })}

                  {/* model-image */}
                  {paramBlock({
                    name: "model-image",
                    required: true,
                    desc: "The model / person image",
                    type: "multipart/form-data file",
                    extras: [
                      { k: "Formats", v: "JPG, PNG" },
                      { k: "Max size", v: "10 MB" },
                      { k: "Min resolution", v: "512×768" },
                    ],
                  })}

                  {/* garment-image */}
                  {paramBlock({
                    name: "garment-image",
                    required: true,
                    desc: "The clothing item image",
                    type: "multipart/form-data file",
                    extras: [
                      { k: "Formats", v: "JPG, PNG" },
                      { k: "Max size", v: "10 MB" },
                      { k: "Min resolution", v: "512×512" },
                    ],
                  })}

                  {/* category */}
                  {paramBlock({
                    name: "category",
                    required: true,
                    desc: "Garment category (defaults to auto)",
                    type: "string",
                    extras: [{ k: "Values", v: '"auto", "tops", "bottoms", "one-pieces"' }],
                  })}

                  {/* mode */}
                  {paramBlock({
                    name: "mode",
                    required: false,
                    desc: "Speed vs quality preset (default: balanced)",
                    type: "string",
                    extras: [{ k: "Values", v: '"performance", "balanced", "quality"' }],
                  })}

                  {/* moderation_level */}
                  {paramBlock({
                    name: "moderation_level",
                    required: false,
                    desc: "Content safety filter (default: permissive)",
                    type: "string",
                    extras: [{ k: "Values", v: '"conservative", "permissive", "none"' }],
                  })}

                  {/* segmentation_free */}
                  {paramBlock({
                    name: "segmentation_free",
                    required: false,
                    desc: "Skip clothing removal (default: true)",
                    type: "boolean",
                    extras: [{ k: "Values", v: "true, false" }],
                  })}

                  {/* output_format */}
                  {paramBlock({
                    name: "output_format",
                    required: false,
                    desc: "Image encoding for output (default: png)",
                    type: "string",
                    extras: [{ k: "Values", v: '"png", "jpeg"' }],
                  })}
                </div>
              </div>

              {/* Example Request */}
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Example Request</h4>
                <CodeBlockWithCopy type="curl">{`curl -X POST \\
  https://api.whilter.ai/vton/request \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H 'X-Encryption-Enabled: false' \\
  -d '{
    "user-id": "12345",
    "client-id": "67890",
    "usecase-id": "123",
    "model-image": "https://example.com/model.png",
    "garment-image": [ "https://example.com/garment.png" ],
    "category": "tops"
  }'`}</CodeBlockWithCopy>
              </div>

              {/* Example Response */}
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Example Response</h4>
                <CodeBlock>{`{
  "request-id": "abc123"
}`}</CodeBlock>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Check Status Endpoint */}
        <section>
          <Card className="bg-card/40 border-border backdrop-blur-sm">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <ImageIcon className="w-5 h-5 text-primary" /> Check Status
                </CardTitle>
                <Badge className="bg-blue-600 text-white">GET</Badge>
              </div>
              <CardDescription className="text-muted-foreground">
                Retrieve the processing state and result URL of a given job.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Endpoint</h4>
                <div className="bg-muted/10 border border-border rounded-lg p-4 flex flex-wrap items-center justify-between gap-4">
                  <code className="font-mono text-primary block md:inline">GET https://api.whilter.ai/vton/status/{`{request-id}`}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText("https://api.whilter.ai/vton/status/{`{request-id}")
                      toast({
                        description: "Endpoint copied!",
                      })
                    }}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Example Curl</h4>
                <CodeBlockWithCopy type="curl">{`curl -X GET \\
  https://api.whilter.ai/vton/status/123a87r9-4129-4bb3-be18-9c9fb5bd7fc1-u1 \\
  -H "Authorization: Bearer YOUR_API_KEY_HERE"`}</CodeBlockWithCopy>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Example Response</h4>
                <CodeBlock>{`{
  "request-id": "abc123",
  "status": "SUCCESS",
  "generated-output": "https://cdn.whilter.ai/outputs/abc123.png"
}`}</CodeBlock>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

const paramBlock = ({ name, required, desc, type, extras }: any) => (
  <div className="border border-border rounded-lg p-4 bg-card space-y-2">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <span className="font-mono text-primary">{name}</span>
      <Badge
        variant="outline"
        className={required ? "border-red-500 text-red-300" : "border-muted text-muted-foreground"}
      >
        {required ? "required" : "optional"}
      </Badge>
    </div>
    <p className="text-muted-foreground text-sm">{desc}</p>
    <div className="text-xs leading-relaxed text-muted-foreground space-y-0.5">
      <div>
        <span className="font-medium">Type:</span> {type}
      </div>
      {extras.map((ex: any, i: number) => (
        <div key={i}>
          <span className="font-medium">{ex.k}:</span> {ex.v}
        </div>
      ))}
    </div>
  </div>
)
