export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    number: "01",
    title: "WEBSITE DEVELOPMENT",
    tagline: "Architecture, Code & Responsiveness",
    description:
      "Professional responsive websites built around the business, audience, and project requirements.",
    deliverables: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "E-commerce websites",
      "Responsive web applications",
    ],
  },
  {
    id: "ui-ux-design",
    number: "02",
    title: "UI/UX & DESIGN",
    tagline: "Interfaces, Aesthetics & Identity",
    description:
      "Modern interfaces and visual design systems that communicate the brand clearly across digital experiences.",
    deliverables: [
      "UI/UX design",
      "Website design",
      "Graphic design",
      "Social media creatives",
      "Marketing graphics",
    ],
  },
  {
    id: "content-creation",
    number: "03",
    title: "CONTENT CREATION",
    tagline: "Strategic Copy & Human Voice",
    description:
      "Clear, purposeful content that gives businesses a consistent digital voice.",
    deliverables: [
      "Website content",
      "Social media content",
      "Captions",
      "Marketing copy",
      "Creative communication",
    ],
  },
  {
    id: "social-media-management",
    number: "04",
    title: "SOCIAL MEDIA MANAGEMENT",
    tagline: "Curated Strategy & Creative Output",
    description:
      "Consistent social media planning, creative production, publishing, and ongoing channel management.",
    deliverables: [
      "Social media planning",
      "Instagram management",
      "Content creation",
      "Posts and carousels",
      "Reels and short-form video",
      "Audience engagement",
    ],
  },
  {
    id: "seo",
    number: "05",
    title: "SEO",
    tagline: "Search Foundations & Local Discovery",
    description:
      "Search-focused foundations that help establish a clear, technically sound website structure.",
    deliverables: [
      "On-page SEO",
      "Technical SEO foundations",
      "Metadata and OpenGraph",
      "Search-friendly website structure",
      "Local visibility",
      "Google Business setup",
    ],
  },
  {
    id: "digital-management",
    number: "06",
    title: "DIGITAL MANAGEMENT",
    tagline: "Continuous Stewardship & Upkeep",
    description:
      "Ongoing digital support that keeps websites, content, and core digital systems maintained and up to date.",
    deliverables: [
      "Website updates",
      "Content updates",
      "Maintenance",
      "Security checks",
      "Digital technical support",
      "Ongoing improvements",
    ],
  },
];
