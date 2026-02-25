export interface EventItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  host: string;
  rules: string[];
  entryFee: string;
  registrationLink: string;
}

export const events: EventItem[] = [
  {
    id: "code-clash",
    title: "Code Clash",
    shortDescription: "Competitive programming contest with algorithmic challenges across multiple rounds.",
    description: "Battle it out in an intense competitive programming contest. Solve algorithmic challenges across multiple rounds and prove your coding prowess.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    host: "Dr. Priya Sharma",
    rules: ["Individual participation", "3 rounds of increasing difficulty", "Languages: C, C++, Java, Python", "No external libraries allowed", "Time limit: 2 hours per round"],
    entryFee: "₹150",
    registrationLink: "https://forms.google.com",
  },
  {
    id: "debug-den",
    title: "Debug Den",
    shortDescription: "Find and fix bugs in provided code snippets within the time limit.",
    description: "Put your debugging skills to the test. Find and fix bugs in provided code snippets across different languages and difficulty levels.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    host: "Prof. Rajesh Kumar",
    rules: ["Team of 2", "5 bug-ridden programs per round", "Partial scoring allowed", "Time: 90 minutes"],
    entryFee: "₹200 per team",
    registrationLink: "https://forms.google.com",
  },
  {
    id: "tech-quiz",
    title: "Tech Quiz",
    shortDescription: "Test your knowledge of CS fundamentals, current tech trends, and trivia.",
    description: "A buzzer-round style quiz covering CS fundamentals, emerging technologies, tech history, and industry trivia.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    host: "Dr. Anita Desai",
    rules: ["Team of 3", "Prelims + Finals", "Buzzer round in finals", "No electronic devices"],
    entryFee: "₹100 per team",
    registrationLink: "https://forms.google.com",
  },
  {
    id: "paper-presentation",
    title: "Paper Presentation",
    shortDescription: "Present your research papers on cutting-edge computer science topics.",
    description: "Showcase your research on any cutting-edge topic in computer science. Judged by industry experts and senior faculty.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    host: "Dr. Vikram Mehta",
    rules: ["Team of 1–3", "IEEE format required", "10 min presentation + 5 min Q&A", "Abstract submission mandatory"],
    entryFee: "₹250 per team",
    registrationLink: "https://forms.google.com",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Showdown",
    shortDescription: "Design intuitive and beautiful interfaces for a given problem statement.",
    description: "Design an intuitive, beautiful user interface for a surprise problem statement. Tools of your choice — Figma, Adobe XD, or even pen and paper.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
    host: "Ms. Kavitha Rangan",
    rules: ["Individual or team of 2", "Any design tool allowed", "Time: 3 hours", "Presentation required"],
    entryFee: "₹150",
    registrationLink: "https://forms.google.com",
  },
  {
    id: "hackathon",
    title: "24-Hr Hackathon",
    shortDescription: "Build a working prototype in 24 hours. Open themes with mentorship provided.",
    description: "A full-day hackathon where teams build working prototypes for real-world problems. Mentorship and refreshments provided.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    host: "Tech Club & Industry Partners",
    rules: ["Team of 3–5", "Open theme", "Must demo working prototype", "Pre-registration required", "Laptops mandatory"],
    entryFee: "₹500 per team",
    registrationLink: "https://forms.google.com",
  },
  {
    id: "debug-den",
    title: "Debug Den",
    shortDescription: "Find and fix bugs in provided code snippets within the time limit.",
    description: "Put your debugging skills to the test. Find and fix bugs in provided code snippets across different languages and difficulty levels.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    host: "Prof. Rajesh Kumar",
    rules: ["Team of 2", "5 bug-ridden programs per round", "Partial scoring allowed", "Time: 90 minutes"],
    entryFee: "₹200 per team",
    registrationLink: "https://forms.google.com",
  },
  {
    id: "debug-den",
    title: "Debug Den",
    shortDescription: "Find and fix bugs in provided code snippets within the time limit.",
    description: "Put your debugging skills to the test. Find and fix bugs in provided code snippets across different languages and difficulty levels.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    host: "Prof. Rajesh Kumar",
    rules: ["Team of 2", "5 bug-ridden programs per round", "Partial scoring allowed", "Time: 90 minutes"],
    entryFee: "₹200 per team",
    registrationLink: "https://forms.google.com",
  },
  {
    id: "debug-den",
    title: "Debug Den",
    shortDescription: "Find and fix bugs in provided code snippets within the time limit.",
    description: "Put your debugging skills to the test. Find and fix bugs in provided code snippets across different languages and difficulty levels.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    host: "Prof. Rajesh Kumar",
    rules: ["Team of 2", "5 bug-ridden programs per round", "Partial scoring allowed", "Time: 90 minutes"],
    entryFee: "₹200 per team",
    registrationLink: "https://forms.google.com",
  },
  {
    id: "debug-den",
    title: "Debug Den",
    shortDescription: "Find and fix bugs in provided code snippets within the time limit.",
    description: "Put your debugging skills to the test. Find and fix bugs in provided code snippets across different languages and difficulty levels.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    host: "Prof. Rajesh Kumar",
    rules: ["Team of 2", "5 bug-ridden programs per round", "Partial scoring allowed", "Time: 90 minutes"],
    entryFee: "₹200 per team",
    registrationLink: "https://forms.google.com",
  },
];
