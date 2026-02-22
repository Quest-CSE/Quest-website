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
    title: "Machine Learning with Python",
    mentor: "Dr. Srinivas Rao",
    shortDescription: "Hands-on workshop covering ML fundamentals, model building, and deployment using scikit-learn and TensorFlow.",
    description: "Dive deep into machine learning with hands-on exercises. Learn data preprocessing, model training, evaluation, and deployment.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    badge: "Hands-on",
    registrationLink: "https://forms.google.com",
    duration: "6 hours",
    fee: "₹500",
  },
  {
    id: "cloud-workshop",
    title: "Cloud Computing & DevOps",
    mentor: "Mr. Arjun Patel, AWS Solutions Architect",
    shortDescription: "Learn cloud infrastructure, CI/CD pipelines, Docker, and Kubernetes in this intensive workshop.",
    description: "Master cloud fundamentals with AWS. Set up CI/CD pipelines, containerize applications with Docker, and orchestrate with Kubernetes.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    badge: "Limited Seats",
    registrationLink: "https://forms.google.com",
    duration: "8 hours",
    fee: "₹600",
  },
  {
    id: "cybersecurity-workshop",
    title: "Cybersecurity Essentials",
    mentor: "Ms. Deepika Nair, CISSP",
    shortDescription: "Explore ethical hacking, vulnerability assessment, and secure coding practices in this intensive session.",
    description: "Learn ethical hacking fundamentals, perform vulnerability assessments, and understand secure coding practices.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    badge: "Hands-on",
    registrationLink: "https://forms.google.com",
    duration: "5 hours",
    fee: "₹450",
  },
];
