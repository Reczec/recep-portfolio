export const externalLinks = {
  github: "https://github.com/Reczec",
  linkedin: "https://www.linkedin.com/in/recep-ba%C5%9F/",
  signly: "https://github.com/Reczec/signly",
} as const;

export const navigation = [
  { label: "About", href: "#about", id: "about" },
  { label: "Focus", href: "#skills", id: "skills" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const skillGroups = [
  {
    number: "01",
    title: "Software Development",
    description: "Build clear, maintainable browser-based tools with a practical focus on the user and the workflow.",
    skills: ["TypeScript", "React / Next.js", "Git / GitHub"],
  },
  {
    number: "02",
    title: "IT Systems & Infrastructure",
    description: "Approach software with an understanding of the systems, interfaces, and constraints that keep it dependable.",
    skills: ["IT systems", "APIs", "Infrastructure concepts"],
  },
  {
    number: "03",
    title: "AI / LLM Applications",
    description: "Focus on AI applications that make information and workflows more useful, understandable, and grounded.",
    skills: ["AI / LLMs", "RAG concepts", "Applied AI"],
  },
  {
    number: "04",
    title: "Automation & Agentic Workflows",
    description: "Design reviewable automation workflows that reduce repetitive work and keep people in control.",
    skills: ["Automation workflows", "Agentic workflows", "APIs"],
  },
] as const;

export type Project = {
  id: string;
  title: string;
  status: string;
  description: string;
  stack: readonly string[];
  visual: "signly" | "flow" | "context";
  repository?: string;
  caseStudy?: string;
};

export const projects: readonly Project[] = [
  {
    id: "01",
    title: "Signly",
    status: "Real project · Hackathon prototype",
    description: "A browser-based prototype for recognizing a small set of isolated ASL signs on-device.",
    stack: ["React", "TypeScript", "MediaPipe", "ONNX Runtime Web"],
    visual: "signly",
    repository: externalLinks.signly,
    caseStudy: "/projects/signly",
  },
  {
    id: "02",
    title: "Digital Medical Knowledge Base",
    status: "Academic project · Private / school project",
    description: "My diploma thesis contribution focused on the knowledge base component of a larger medical project.",
    stack: ["Knowledge base", "Information structure", "Academic project"],
    visual: "context",
    caseStudy: "/projects/medical-knowledge-base",
  },
  {
    id: "03",
    title: "CareerOS",
    status: "In progress · Currently building",
    description: "An AI-assisted career and job workflow platform concept for discovery, matching, CV tailoring, interview preparation, and automation.",
    stack: ["AI workflows", "Automation", "Career tools"],
    visual: "flow",
  },
] as const;
