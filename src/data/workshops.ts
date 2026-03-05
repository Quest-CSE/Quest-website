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
    id: "agentic-ai",
    title: "Agentic AI Workshop",
    mentor: "Sandeep",
    mentorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    shortDescription: "Build autonomous AI systems that plan, reason, and take actions using modern LLM-based agent frameworks.",
    description: "An Agentic AI Workshop designed for B.Tech students to explore how AI agents can plan, decide, and perform tasks autonomously. The session introduces core concepts of agent-based AI with simple examples and hands-on insights into building intelligent systems.",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772028606/Agentic_AI_pihwlm.jpg",
    badge: "Hands-on",
    registrationLink: "https://forms.google.com",
    duration: "6 hours",
    fee: "₹1000",
    prerequisites: ["Basic Python knowledge", "Familiarity with NumPy & Pandas", "Laptop with Python 3.8+ installed","Basic Machine Learnning and Artificial Intelligence","LLM Integration","API & Tool Use"],
    topics: ["Fundamentals of Agentic AI", "Agent Frameworks & Tools", "LangChain/LangGraph/CrewAI", "Practical Projects", "Agentic AI Workflow"],
  },
  {
    id: "mern-workshop",
    title: "MERN Stack Workshop",
    mentor: "Bhaskar",
    mentorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    shortDescription: "Learn to develop full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    description: "Learn to develop full-stack web applications using MongoDB, Express.js, React, and Node.js",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772028606/MERN_dn2b7t.webp",
    badge: "Limited Seats",
    registrationLink: "https://forms.google.com",
    duration: "6 hours",
    fee: "",
    prerequisites: ["HTML", "JavaScript", "Laptop required"],
    topics: ["AWS Fundamentals", "Docker Containers", "CI/CD Pipelines", "Kubernetes Orchestration", "Infrastructure as Code"],
  },
  {
    id: "cybersecurity-workshop",
    title: "Cybersecurity Essentials Workshop",
    mentor: "Jaya Krishna",
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
