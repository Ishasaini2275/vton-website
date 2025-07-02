import { Badge } from "@/components/ui/badge"
import { Info, Lightbulb } from "lucide-react"

export default function ApiParametersPage() {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-8">API Parameters Guide</h1>
        </div>

        {/* Model Image Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Model Image</h2>

          <div className="flex gap-4 mb-6">
            <Badge variant="secondary" className="bg-muted text-muted-foreground font-mono">
              image URL
            </Badge>
            <span className="text-muted-foreground">|</span>
            <Badge variant="secondary" className="bg-muted text-muted-foreground font-mono">
              base64
            </Badge>
          </div>

          <div className="mb-8">
            <p className="text-foreground text-base leading-relaxed">
              <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">model_image</code> refers to the source image
              of the individual on whom the virtual try-on will be applied. This image can be submitted either as a publicly accessible
              URL or a base64-encoded string.
            </p>
          </div>
        </section>


        {/* Garment Image Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Garment Image</h2>

          <div className="flex gap-4 mb-6">
            <Badge variant="secondary" className="bg-muted text-muted-foreground font-mono">
              image URL
            </Badge>
            <span className="text-muted-foreground">|</span>
            <Badge variant="secondary" className="bg-muted text-muted-foreground font-mono">
              base64
            </Badge>
          </div>

          <div className="mb-8">
            <p className="text-foreground text-base leading-relaxed">
              <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">garment_image</code> is the visual
              representation of the clothing item intended for virtual try-on with the{" "}
              <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">model_image</code>. You can provide this
              input either as a direct image URL or as a base64-encoded string.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              VIrtual Tryon accepts multiple garment photo formats including flat-lay, ghost mannequin, or model-worn images. See below for supported examples.
            </p>
          </div>
        </section>


        {/* Category Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Category</h2>

          <div className="flex gap-4 mb-6">
            <Badge variant="secondary" className="bg-muted text-muted-foreground font-mono">
              string
            </Badge>
          </div>

          <div className="mb-8">
            <p className="text-foreground text-base leading-relaxed">
              <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">category</code> identifies the type of
              garment present in the <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">garment_image</code>. This guides the virtual try-on engine in selecting the appropriate region to apply the clothing.
              For images with multiple items (e.g., top and bottom), use this to prioritize the desired garment.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              <strong>Default:</strong>{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">auto</code> — automatically infers the
              garment type. For on-model images, the system uses the crop/focus to decide whether to apply a full outfit,
              top, or bottom. For flat-lay or ghost mannequin shots, category detection is handled automatically.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="border border-border rounded-lg p-4 bg-card">
                <code className="text-foreground font-mono text-sm">auto</code>
                <p className="text-muted-foreground text-xs mt-1">
                  Automatically determines the garment category
                </p>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <code className="text-foreground font-mono text-sm">tops</code>
                <p className="text-muted-foreground text-xs mt-1">Shirts, blouses, t-shirts</p>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <code className="text-foreground font-mono text-sm">bottoms</code>
                <p className="text-muted-foreground text-xs mt-1">Pants, jeans, skirts</p>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <code className="text-foreground font-mono text-sm">one-pieces</code>
                <p className="text-muted-foreground text-xs mt-1">Dresses, jumpsuits</p>
              </div>
            </div>
          </div>
        </section>


        {/* Mode Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Mode</h2>

          <div className="flex gap-4 mb-6">
            <Badge variant="secondary" className="bg-muted text-muted-foreground font-mono">
              string
            </Badge>
          </div>

          <div className="mb-8">
            <p className="text-foreground text-base leading-relaxed">
              <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">mode</code> determines the balance between
              processing speed and output quality. Choose{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">performance</code> for rapid results or{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono">quality</code> for best visual fidelity.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="border border-border rounded-lg p-4 bg-card">
              <code className="text-foreground font-mono text-sm">performance</code>
              <p className="text-muted-foreground text-xs mt-1">
                Optimized for speed; fastest response time with lower visual quality (~2-3s)
              </p>
            </div>
            <div className="border border-border rounded-lg p-4 bg-card">
              <code className="text-foreground font-mono text-sm">balanced</code>
              <p className="text-muted-foreground text-xs mt-1">
                A compromise between speed and quality (~3-5s)
              </p>
            </div>
            <div className="border border-border rounded-lg p-4 bg-card">
              <code className="text-foreground font-mono text-sm">quality</code>
              <p className="text-muted-foreground text-xs mt-1">
                Prioritizes high-quality results; takes the longest to process (~5-8s)
              </p>
            </div>
          </div>
        </section>



        {/* moderation level*/}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Moderation Level</h2>

          <div className="flex gap-4 mb-6">
            <Badge variant="secondary" className="bg-muted text-muted-foreground font-mono">
              'conservative' | 'permissive' | 'none'
            </Badge>
          </div>

          <div className="mb-8">
            <p className="text-foreground text-base leading-relaxed">
              <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">moderation_level</code> controls how strictly the API filters garment images for content sensitivity. The default is{' '}
              <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">permissive</code>.
            </p>
          </div>

          <div className="space-y-4 text-base text-muted-foreground">
            <div>
              <span className="text-foreground font-medium">conservative:</span>{' '}
              Applies strict content guidelines, filtering out underwear, swimwear, or any revealing garments. Recommended for modesty-sensitive use cases.
            </div>
            <div>
              <span className="text-foreground font-medium">permissive:</span>{' '}
              The default setting. Allows most garments including swimwear and underwear, while still rejecting explicit nudity.
            </div>
            <div>
              <span className="text-foreground font-medium">none:</span>{' '}
              Disables all content filtering. Use with caution, especially in public or regulated environments.
            </div>
          </div>
        </section>


        {/* Seed Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Segmentation Free</h2>

          <div className="flex gap-4 mb-6">
            <Badge variant="secondary" className="bg-muted text-muted-foreground font-mono">
              boolean
            </Badge>
          </div>

          <div className="mb-8">
            <p className="text-foreground text-base leading-relaxed">
              <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">segmentation_free</code> controls whether
              the virtual try-on system skips explicit garment segmentation. The default is{' '}
              <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">true</code>.
            </p>
          </div>

          <div className="space-y-4 text-base text-muted-foreground">
            <div>
              <span className="text-foreground font-medium">true:</span>{' '}
              Enables direct garment fitting without isolating clothing from the model image. Ideal for preserving the natural
              body shape and skin tone, especially with loose or layered outfits.
            </div>
            <div>
              <span className="text-foreground font-medium">false:</span>{' '}
              Disables this behavior and enforces clothing segmentation. Use this if the output shows remnants of original
              garments that affect your use case critically.
            </div>
          </div>
        </section>


        {/* Additional Sections */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Output Format</h2>

          <div className="flex gap-4 mb-6">
            <Badge variant="secondary" className="bg-muted text-muted-foreground font-mono">
              'png' | 'jpeg'
            </Badge>
          </div>

          <div className="mb-8">
            <p className="text-foreground text-base leading-relaxed">
              <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">output_format</code> defines the desired
              image format for the generated try-on result. The default is{' '}
              <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">png</code>.
            </p>
          </div>

          <div className="space-y-4 text-base text-muted-foreground">
            <div>
              <span className="text-foreground font-medium">png:</span>{' '}
              Produces high-quality output with no compression loss. Ideal for use cases like high-resolution displays,
              marketing visuals, or content publishing.
            </div>
            <div>
              <span className="text-foreground font-medium">jpeg:</span>{' '}
              Offers quicker response times with mild compression. Best suited for real-time or interactive experiences where
              performance is prioritized over maximum image fidelity.
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
