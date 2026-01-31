"use client";

import Typography from "@/components/ui/Typography";

export default function TypographyDemo() {
  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography variant="h1" className="text-gradient mb-4">
            Typography System Demo
          </Typography>
          <Typography variant="p" className="text-gray-600">
            JKKN Allied Health Sciences - Poppins Font Family
          </Typography>
        </div>

        {/* Typography Scale */}
        <section className="glass-card p-8 rounded-2xl">
          <Typography variant="h2" className="text-primary mb-6 pb-4 border-b-2 border-primary/20">
            Typography Scale
          </Typography>
          <div className="space-y-6">
            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Variant: h1 (44px → 32px) • Font Weight: 700
              </Typography>
              <Typography variant="h1">
                The quick brown fox jumps over the lazy dog
              </Typography>
            </div>

            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Variant: h2 (28px → 20px) • Font Weight: 600
              </Typography>
              <Typography variant="h2">
                The quick brown fox jumps over the lazy dog
              </Typography>
            </div>

            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Variant: h3 (22px → 18px) • Font Weight: 600
              </Typography>
              <Typography variant="h3">
                The quick brown fox jumps over the lazy dog
              </Typography>
            </div>

            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Variant: p (16px → 15px) • Font Weight: 400
              </Typography>
              <Typography variant="p">
                The quick brown fox jumps over the lazy dog. This is the standard body text used for paragraphs and general content throughout the website.
              </Typography>
            </div>

            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Variant: small (14px → 13px) • Font Weight: 400
              </Typography>
              <Typography variant="small">
                The quick brown fox jumps over the lazy dog. Helper text and small print.
              </Typography>
            </div>
          </div>
        </section>

        {/* Text Alignment */}
        <section className="glass-card p-8 rounded-2xl">
          <Typography variant="h2" className="text-primary mb-6 pb-4 border-b-2 border-primary/20">
            Text Alignment
          </Typography>
          <div className="space-y-6">
            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Left Aligned (Default)
              </Typography>
              <Typography variant="h3" align="left">
                This heading is left aligned
              </Typography>
            </div>

            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Center Aligned
              </Typography>
              <Typography variant="h3" align="center">
                This heading is center aligned
              </Typography>
            </div>

            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Right Aligned
              </Typography>
              <Typography variant="h3" align="right">
                This heading is right aligned
              </Typography>
            </div>

            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Justified
              </Typography>
              <Typography variant="p" align="justify">
                This paragraph is justified, meaning the text aligns along both the left and right margins. This creates a clean, professional appearance often used in formal documents and educational materials. The spacing between words is adjusted to ensure each line reaches the full width of the container.
              </Typography>
            </div>
          </div>
        </section>

        {/* Brand Colors */}
        <section className="glass-card p-8 rounded-2xl">
          <Typography variant="h2" className="text-primary mb-6 pb-4 border-b-2 border-primary/20">
            Brand Colors
          </Typography>
          <div className="space-y-6">
            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Primary Brand Color (#0b6d41)
              </Typography>
              <Typography variant="h2" className="text-primary">
                JKKN Allied Health Sciences
              </Typography>
            </div>

            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Secondary Brand Color (#ffde59)
              </Typography>
              <div className="bg-white p-4 rounded-lg inline-block">
                <Typography variant="h2" className="text-secondary">
                  Excellence in Education
                </Typography>
              </div>
            </div>

            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Gradient Text Effect
              </Typography>
              <Typography variant="h1" className="text-gradient">
                Innovative Healthcare Training
              </Typography>
            </div>

            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Custom Hex Color
              </Typography>
              <Typography variant="h2" color="#0b6d41">
                Custom Colored Heading
              </Typography>
            </div>
          </div>
        </section>

        {/* Text Balance */}
        <section className="glass-card p-8 rounded-2xl">
          <Typography variant="h2" className="text-primary mb-6 pb-4 border-b-2 border-primary/20">
            Text Balancing
          </Typography>
          <div className="space-y-6">
            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                Without Balance (may have orphans)
              </Typography>
              <div className="max-w-md">
                <Typography variant="h2">
                  This is a Long Heading That Might Have Awkward Line Breaks
                </Typography>
              </div>
            </div>

            <div>
              <Typography variant="small" className="text-gray-500 mb-2">
                With Balance (optimized line breaks)
              </Typography>
              <div className="max-w-md">
                <Typography variant="h2" balance>
                  This is a Long Heading That Might Have Awkward Line Breaks
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Example: Course Card */}
        <section className="glass-card p-8 rounded-2xl">
          <Typography variant="h2" className="text-primary mb-6 pb-4 border-b-2 border-primary/20">
            Real-World Example: Course Card
          </Typography>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-primary/10 hover:border-primary/30 transition-all">
              <Typography variant="h3" className="text-primary mb-2">
                B.Sc. Medical Laboratory Technology
              </Typography>
              <Typography variant="small" className="text-gray-500 mb-4">
                4 Years • Full Time • 60 Seats
              </Typography>
              <Typography variant="p" balance className="mb-4">
                A comprehensive program designed to train skilled medical laboratory technologists capable of performing complex diagnostic tests.
              </Typography>
              <button className="btn-primary w-full">
                <Typography variant="small" as="span" className="text-white font-semibold">
                  Learn More
                </Typography>
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-primary/10 hover:border-primary/30 transition-all">
              <Typography variant="h3" className="text-primary mb-2">
                B.Sc. Optometry
              </Typography>
              <Typography variant="small" className="text-gray-500 mb-4">
                4 Years • Full Time • 40 Seats
              </Typography>
              <Typography variant="p" balance className="mb-4">
                Train to become a skilled optometrist with expertise in eye care, vision testing, and optical dispensing.
              </Typography>
              <button className="btn-secondary w-full">
                <Typography variant="small" as="span" className="text-primary font-semibold">
                  Apply Now
                </Typography>
              </button>
            </div>
          </div>
        </section>

        {/* Accessibility Example */}
        <section className="glass-card p-8 rounded-2xl">
          <Typography variant="h2" className="text-primary mb-6 pb-4 border-b-2 border-primary/20">
            Accessible Form Example
          </Typography>
          <form className="space-y-6 max-w-md">
            <div>
              <Typography variant="h3" as="label" htmlFor="fullname" className="mb-2 block">
                Full Name
              </Typography>
              <input
                id="fullname"
                type="text"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
              <Typography variant="small" className="text-gray-500 mt-1">
                Please enter your full legal name as per government ID
              </Typography>
            </div>

            <div>
              <Typography variant="h3" as="label" htmlFor="email" className="mb-2 block">
                Email Address
              </Typography>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
              <Typography variant="small" className="text-red-500 mt-1">
                This field is required
              </Typography>
            </div>

            <button type="submit" className="btn-primary w-full">
              Submit Application
            </button>
          </form>
        </section>

        {/* Responsive Grid */}
        <section className="glass-card p-8 rounded-2xl">
          <Typography variant="h2" className="text-primary mb-6 pb-4 border-b-2 border-primary/20">
            Responsive Grid Layout
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "👨‍🏫",
                title: "Expert Faculty",
                description: "Learn from industry professionals with years of clinical and academic experience",
              },
              {
                icon: "🔬",
                title: "Modern Facilities",
                description: "State-of-the-art laboratories equipped with cutting-edge diagnostic equipment",
              },
              {
                icon: "💼",
                title: "100% Placement",
                description: "Dedicated placement cell ensuring successful career launch for all graduates",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <Typography variant="h3" className="text-primary mb-3">
                  {feature.title}
                </Typography>
                <Typography variant="p" balance>
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>
        </section>

        {/* Font Weights */}
        <section className="glass-card p-8 rounded-2xl">
          <Typography variant="h2" className="text-primary mb-6 pb-4 border-b-2 border-primary/20">
            Available Font Weights
          </Typography>
          <div className="space-y-4">
            <Typography variant="p" className="font-light">
              Font Weight 300 (Light) - Subtle and elegant
            </Typography>
            <Typography variant="p" className="font-normal">
              Font Weight 400 (Normal) - Default body text
            </Typography>
            <Typography variant="p" className="font-medium">
              Font Weight 500 (Medium) - Emphasized text
            </Typography>
            <Typography variant="p" className="font-semibold">
              Font Weight 600 (Semibold) - Subheadings
            </Typography>
            <Typography variant="p" className="font-bold">
              Font Weight 700 (Bold) - Main headings
            </Typography>
          </div>
        </section>

        {/* Technical Info */}
        <section className="glass-card p-8 rounded-2xl bg-primary/5">
          <Typography variant="h2" className="text-primary mb-4">
            Technical Specifications
          </Typography>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Typography variant="h3" className="mb-3">Font Family</Typography>
              <Typography variant="p" className="mb-2">Poppins (Google Fonts)</Typography>
              <Typography variant="small" className="text-gray-600">
                Loaded via next/font/google for optimal performance
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className="mb-3">Weights Available</Typography>
              <Typography variant="p" className="mb-2">300, 400, 500, 600, 700</Typography>
              <Typography variant="small" className="text-gray-600">
                Variable font implementation
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className="mb-3">Responsive Breakpoints</Typography>
              <Typography variant="p" className="mb-2">Mobile, Tablet (md), Desktop (lg)</Typography>
              <Typography variant="small" className="text-gray-600">
                Tailwind CSS responsive utilities
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className="mb-3">Accessibility</Typography>
              <Typography variant="p" className="mb-2">WCAG AA Compliant</Typography>
              <Typography variant="small" className="text-gray-600">
                Semantic HTML, proper contrast ratios
              </Typography>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
