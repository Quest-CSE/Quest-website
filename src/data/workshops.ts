export interface Workshop {
  id: string;
  title: string;
  mentor: string;
  mentorImage: string;
  shortDescription: string;
  description: string;
  image: string;
  badge?: string;
  registrationLink: string;
  duration: string;
  fee: string;
  prerequisites?: string[];
  topics?: string[];
}

export const workshops: Workshop[] = [
  {
    id: "ml-workshop",
    title: "Agentic AI Workshop",
    mentor: "",
    mentorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    shortDescription: "Build autonomous AI systems that plan, reason, and take actions using modern LLM-based agent frameworks.",
    description: "Dive deep into machine learning with hands-on exercises. Learn data preprocessing, model training, evaluation, and deployment. This workshop is designed for students who want to build real-world ML projects from scratch.",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772028606/Agentic_AI_pihwlm.jpg",
    badge: "Hands-on",
    registrationLink: "https://forms.google.com",
    duration: "6 hours",
    fee: "",
    prerequisites: ["Basic Python knowledge", "Familiarity with NumPy & Pandas", "Laptop with Python 3.8+ installed"],
    topics: ["Data Preprocessing", "Supervised Learning", "Model Evaluation", "Neural Networks Intro", "Model Deployment"],
  },
  {
    id: "cloud-workshop",
    title: "MERN Stack Workshop",
    mentor: "",
    mentorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    shortDescription: "Learn to develop full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    description: "Master cloud fundamentals with AWS. Set up CI/CD pipelines, containerize applications with Docker, and orchestrate with Kubernetes. Ideal for students looking to break into DevOps and cloud engineering roles.",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772028606/MERN_dn2b7t.webp",
    badge: "Limited Seats",
    registrationLink: "https://forms.google.com",
    duration: "8 hours",
    fee: "",
    prerequisites: ["Basic Linux commands", "Understanding of networking", "Laptop required"],
    topics: ["AWS Fundamentals", "Docker Containers", "CI/CD Pipelines", "Kubernetes Orchestration", "Infrastructure as Code"],
  },
  {
    id: "cybersecurity-workshop",
    title: "Cybersecurity Essentials Workshop",
    mentor: "",
    mentorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    shortDescription: "Master ethical hacking fundamentals, network security, and real-world threat detection and prevention techniques.",
    description: "Learn ethical hacking fundamentals, perform vulnerability assessments, and understand secure coding practices. This workshop provides real-world scenarios and hands-on labs for aspiring security professionals.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    badge: "Hands-on",
    registrationLink: "https://forms.google.com",
    duration: "5 hours",
    fee: "",
    prerequisites: ["Basic networking knowledge", "Familiarity with Linux", "Laptop with VirtualBox installed"],
    topics: ["Ethical Hacking Basics", "Vulnerability Scanning", "Web App Security", "Secure Coding", "Incident Response"],
  },
];