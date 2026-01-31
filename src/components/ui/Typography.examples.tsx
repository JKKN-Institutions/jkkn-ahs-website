/**
 * Typography Component - Usage Examples
 *
 * This file demonstrates various ways to use the Typography component
 * in your Next.js application.
 */

import Typography from "./Typography";

// ============================================================================
// EXAMPLE 1: Basic Usage
// ============================================================================
export function BasicUsageExample() {
  return (
    <div className="space-y-6">
      <Typography variant="h1">Main Page Title</Typography>
      <Typography variant="h2">Section Subtitle</Typography>
      <Typography variant="h3">Sub-heading</Typography>
      <Typography variant="p">
        This is a paragraph with normal body text. Perfect for general content.
      </Typography>
      <Typography variant="small">
        Helper text or small print information
      </Typography>
    </div>
  );
}

// ============================================================================
// EXAMPLE 2: Text Alignment
// ============================================================================
export function AlignmentExample() {
  return (
    <div className="space-y-4">
      <Typography variant="h2" align="left">
        Left Aligned Heading
      </Typography>
      <Typography variant="h2" align="center">
        Center Aligned Heading
      </Typography>
      <Typography variant="h2" align="right">
        Right Aligned Heading
      </Typography>
      <Typography variant="p" align="justify">
        This paragraph will be justified, meaning text will be aligned along
        both the left and right margins, creating a clean, professional look.
      </Typography>
    </div>
  );
}

// ============================================================================
// EXAMPLE 3: Custom Colors
// ============================================================================
export function ColorExample() {
  return (
    <div className="space-y-4">
      {/* Using Tailwind classes */}
      <Typography variant="h1" className="text-primary">
        Primary Color Heading
      </Typography>
      <Typography variant="h2" className="text-secondary">
        Secondary Color Heading
      </Typography>

      {/* Using custom CSS colors */}
      <Typography variant="h3" color="#0b6d41">
        Custom Hex Color
      </Typography>
      <Typography variant="p" color="rgb(11, 109, 65)">
        Custom RGB Color
      </Typography>

      {/* Using gradient text */}
      <Typography variant="h1" className="text-gradient">
        Gradient Text Heading
      </Typography>
    </div>
  );
}

// ============================================================================
// EXAMPLE 4: Balanced Text for Better Readability
// ============================================================================
export function BalancedTextExample() {
  return (
    <div className="max-w-2xl">
      <Typography variant="h1" balance>
        This is a Long Heading That Benefits from Text Balance
      </Typography>
      <Typography variant="p" balance>
        Text balancing ensures that text wraps in a visually pleasing way,
        preventing awkward single words on the last line. This is especially
        useful for headings and important paragraphs.
      </Typography>
    </div>
  );
}

// ============================================================================
// EXAMPLE 5: Custom Element with Typography Styling
// ============================================================================
export function CustomElementExample() {
  return (
    <div className="space-y-4">
      {/* Render h1 styles but as a div */}
      <Typography variant="h1" as="div">
        This is a div styled as h1
      </Typography>

      {/* Render h2 styles but as a span */}
      <Typography variant="h2" as="span">
        This is a span styled as h2
      </Typography>

      {/* Useful for SEO when you need multiple h1 styles but only one semantic h1 */}
      <Typography variant="h1" as="p">
        Styled as h1 but semantically a paragraph
      </Typography>
    </div>
  );
}

// ============================================================================
// EXAMPLE 6: Landing Page Hero Section
// ============================================================================
export function HeroSectionExample() {
  return (
    <section className="text-center py-20 px-4">
      <Typography variant="h1" balance className="text-gradient mb-4">
        Welcome to JKKN Allied Health Sciences
      </Typography>
      <Typography variant="h2" balance className="text-gray-600 mb-6">
        Excellence in Healthcare Education
      </Typography>
      <Typography variant="p" balance className="max-w-2xl mx-auto">
        Empowering the next generation of healthcare professionals through
        innovative education, hands-on training, and a commitment to excellence.
      </Typography>
    </section>
  );
}

// ============================================================================
// EXAMPLE 7: Course Information Card
// ============================================================================
export function CourseCardExample() {
  return (
    <div className="glass-card p-6 rounded-2xl">
      <Typography variant="h3" className="text-primary mb-2">
        B.Sc. Medical Laboratory Technology
      </Typography>
      <Typography variant="small" className="text-gray-500 mb-4">
        4 Years • Full Time
      </Typography>
      <Typography variant="p" balance>
        A comprehensive program designed to train skilled medical laboratory
        technologists capable of performing complex diagnostic tests and
        supporting healthcare delivery.
      </Typography>
    </div>
  );
}

// ============================================================================
// EXAMPLE 8: About Section with Mixed Typography
// ============================================================================
export function AboutSectionExample() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Typography variant="h1" align="center" className="text-primary">
        About Our Institution
      </Typography>

      <Typography variant="h2" className="text-gradient mt-8">
        Our Mission
      </Typography>
      <Typography variant="p" balance>
        To provide world-class education in allied health sciences, fostering
        innovation, research, and compassionate care in healthcare professionals.
      </Typography>

      <Typography variant="h2" className="text-gradient mt-8">
        Our Vision
      </Typography>
      <Typography variant="p" balance>
        To be a leading institution recognized globally for excellence in
        allied health sciences education, research, and community service.
      </Typography>

      <Typography variant="small" className="text-gray-500 mt-8">
        Established in 2010 • Accredited by NAAC with A+ Grade
      </Typography>
    </div>
  );
}

// ============================================================================
// EXAMPLE 9: Accessible Form with Typography
// ============================================================================
export function FormExample() {
  return (
    <form className="space-y-4 max-w-md">
      <div>
        <Typography variant="h3" as="label" htmlFor="name" className="mb-2 block">
          Full Name
        </Typography>
        <input
          id="name"
          type="text"
          className="w-full px-4 py-2 rounded-lg border"
          aria-required="true"
        />
        <Typography variant="small" className="text-gray-500 mt-1">
          Please enter your full legal name
        </Typography>
      </div>

      <div>
        <Typography variant="h3" as="label" htmlFor="email" className="mb-2 block">
          Email Address
        </Typography>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-2 rounded-lg border"
          aria-required="true"
        />
        <Typography variant="small" className="text-red-500 mt-1">
          This field is required
        </Typography>
      </div>
    </form>
  );
}

// ============================================================================
// EXAMPLE 10: Responsive Grid Layout with Typography
// ============================================================================
export function GridLayoutExample() {
  const features = [
    {
      title: "Expert Faculty",
      description: "Learn from industry professionals with years of experience",
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art laboratories and equipment",
    },
    {
      title: "100% Placement",
      description: "Dedicated placement cell ensuring career success",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="glass-card p-6 rounded-2xl">
          <Typography variant="h3" className="text-primary mb-3">
            {feature.title}
          </Typography>
          <Typography variant="p" balance>
            {feature.description}
          </Typography>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// ACCESSIBILITY NOTES
// ============================================================================
/**
 * The Typography component is built with accessibility in mind:
 *
 * 1. Semantic HTML: Uses proper heading hierarchy (h1, h2, h3)
 * 2. Text Contrast: Ensure text meets WCAG AA standards (4.5:1 for normal text)
 * 3. Font Sizing: Responsive sizes that scale well across devices
 * 4. Line Height: Optimized for readability (1.5-1.75 for body text)
 * 5. Custom Elements: Use 'as' prop when you need visual style without semantic meaning
 *
 * BEST PRACTICES:
 * - Only one h1 per page for SEO
 * - Maintain logical heading hierarchy (don't skip levels)
 * - Use 'balance' prop for headings to prevent orphans
 * - Ensure color contrast meets accessibility standards
 * - Test with screen readers and keyboard navigation
 */
