export interface Workshop {
  id: string;
  title: string;
  mentor: string;
  shortDescription: string;
  description: string;
  image: string;
  badge?: string;
  registrationLink: string;
  duration: string;
  fee: string;
}

export const workshops: Workshop[] = [
  {
    id: "ml-workshop",
    title: "Agentic AI Workshop",
    mentor: " ",
    shortDescription: "Build autonomous AI systems that plan, reason, and take actions using modern LLM-based agent frameworks.",
    description: "Dive deep into machine learning with hands-on exercises. Learn data preprocessing, model training, evaluation, and deployment.",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772028606/Agentic_AI_pihwlm.jpg",
    badge: "Hands-on",
    registrationLink: " ",
    duration: "6 hours",
    fee: " ",
  },
  {
    id: "cloud-workshop",
    title: "MERN Stack Workshop",
    mentor: " ",
    shortDescription: "Learn to develop full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    description: "Master cloud fundamentals with AWS. Set up CI/CD pipelines, containerize applications with Docker, and orchestrate with Kubernetes.",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772028606/MERN_dn2b7t.webp",
    badge: "Hands-on",
    registrationLink: " ",
    duration: "6 hours",
    fee: " ",
  },
  {
    id: "cybersecurity-workshop",
    title: "Cybersecurity Essentials Workshop",
    mentor: " ",
    shortDescription: "Master ethical hacking fundamentals, network security, and real-world threat detection and prevention techniques.",
    description: "Learn ethical hacking fundamentals, perform vulnerability assessments, and understand secure coding practices.",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772028606/Cybersecuirty_fiwzb6.jpg",
    badge: "Hands-on",
    registrationLink: " ",
    duration: "6 hours",
    fee: " ",
  },
];
