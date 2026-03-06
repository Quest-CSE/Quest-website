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
    registrationLink: "https://forms.gle/uXja94piQkZrSZaz6",
    duration: "6 hours",
    fee: "₹1000",
    prerequisites: ["Basic Python knowledge", "Familiarity with NumPy & Pandas", "Laptop with Python 3.8+ installed","Basic Machine Learnning and Artificial Intelligence","LLM Integration","API & Tool Use"],
    topics: ["Fundamentals of Agentic AI", "Agent Frameworks & Tools", "LangChain/LangGraph/CrewAI", "Practical Projects", "Agentic AI Workflow"],
  },
  {
    id: "mern-workshop",
    title: "MERN Stack Workshop",
    mentor: "Bhaskara Sai Chitturi",
    mentorImage: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772769036/Screenshot_2026-03-06_091948-removebg-preview_ift5fq.png",
    shortDescription: "An introductory workshop where students learn to build modern full-stack web applications using the MERN stack—MongoDB, Express.js, React, and Node.js.",
    description: "This workshop introduces participants to the MERN stack, a popular JavaScript-based technology stack used for building scalable web applications. Students will learn how the frontend, backend, and database work together to create dynamic applications. Through demonstrations and hands-on examples, participants will explore building a simple full-stack application using React for the frontend, Node.js and Express for the backend, and MongoDB for data storage.",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772817379/MERN_Stack_tq06ux.jpg",
    badge: "Hands-on",
    registrationLink: "https://forms.gle/uXja94piQkZrSZaz6",
    duration: "6 hours",
    fee: "₹1000",
    prerequisites: ["HTML", "CSS", "JavaScript", "Basic programming knowledge", "Laptop with internet connection"],
    topics:["Introduction to MERN Stack", "MongoDB basics", "Node.js fundamentals", "Express.js for backend APIs", "React basics", "REST API integration", "Building a simple full-stack application"],
  },
  {
    id: "cybersecurity-workshop",
    title: "Cybersecurity Essentials Workshop",
    mentor: "Jaya Krishna Rao Sompalle",
    mentorImage: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772694750/jayakrishna-hacking-trainer-hyderabad_oqiiqa.jpg",
    shortDescription: "An introductory workshop that helps students understand the fundamentals of cybersecurity, common cyber threats, and basic techniques used to protect systems and data.",
    description: "This workshop introduces students to the core concepts of cybersecurity and the importance of protecting digital systems from cyber threats. Participants will learn about common attacks such as Phishing, Malware, and Denial-of-Service attack, along with the basic principles used to defend against them. The session will also cover ethical hacking fundamentals, security best practices, and simple demonstrations of cybersecurity tools used to identify vulnerabilities. By the end of the workshop, students will gain a foundational understanding of how cybersecurity works and how to stay safe in the digital world.",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772817379/Cybersecurity_oxlhyg.jpg",
    badge: "Hands-on",
    registrationLink: "https://forms.gle/uXja94piQkZrSZaz6",
    duration: "6 hours",
    fee: "₹1000",
    prerequisites: ["Basic computer knowledge", "Basic networking concepts", "Understanding of operating systems", "Laptop with internet connection"],
    topics: ["Introduction to Cybersecurity", "Common cyber threats and attacks", "Basics of network security", "Ethical hacking fundamentals", "Password and data security", "Information Security", "Cybersecurity best practices"],
  },
];
