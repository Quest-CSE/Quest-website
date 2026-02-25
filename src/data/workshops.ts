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
    image: "https://unsplash.com/photos/an-abstract-image-of-a-sphere-with-dots-and-lines-nGoCBxiaRO0",
    badge: "Hands-on",
    registrationLink: " ",
    duration: "6 hours",
    fee: " ",
  },
  {
    id: "cloud-workshop",
    title: "Cloud Computing & DevOps",
    mentor: " ",
    shortDescription: "Learn to develop full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    description: "Master cloud fundamentals with AWS. Set up CI/CD pipelines, containerize applications with Docker, and orchestrate with Kubernetes.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    badge: "Hands-on",
    registrationLink: " ",
    duration: "6 hours",
    fee: " ",
  },
  {
    id: "cybersecurity-workshop",
    title: "Cybersecurity Essentials",
    mentor: " ",
    shortDescription: "Master ethical hacking fundamentals, network security, and real-world threat detection and prevention techniques.",
    description: "Learn ethical hacking fundamentals, perform vulnerability assessments, and understand secure coding practices.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    badge: "Hands-on",
    registrationLink: " ",
    duration: "6 hours",
    fee: " ",
  },
];
