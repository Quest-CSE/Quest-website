export interface EventRound {
  title: string;
  details: string[];
  fee?: string;
}

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
  rewards?: string[];
  rounds?: EventRound[];
  facultyCoordinators?: string[];
  teamSize?: string;
  date?: string;
  languages?: string;
  requirements?: string[];
  judgingCriteria?: string;
  paymentNote?: string;
}

export const events: EventItem[] = [
  {
    id: "project-expo",
    title: "Project Expo",
    shortDescription: "Showcase your innovative projects with PPT & poster. Spot registration available.",
    description:
      "Present your innovative projects to a panel of experts. Come prepared with your PPT and poster for demonstration. Spot registration is available on the day of the event.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    host: "CSE Department, JNTUH-UCESTH",
    rules: ["Come prepared with your PPT & Poster for demonstration", "Spot registration available"],
    entryFee: "Free Registration (Spot Registration Available)",
    registrationLink: "",
    rewards: ["Winner Prize: ₹3000/- per team"],
    facultyCoordinators: [
      "Dr. K.P Supreethi (Head of the Department)",
      "Dr. K. Suresh Babu",
      "Dr. E. Hemalatha",
    ],
    requirements: ["Come prepared with your PPT & Poster for demonstration"],
  },
  {
    id: "blind-code",
    title: "Blind Code",
    shortDescription:
      "Write code without looking at the screen! Solve problems with your monitor turned off.",
    description:
      "Blind Code is a unique programming competition where you write code without looking at the screen! Participants are given a coding problem and a limited time to solve it with their screens turned off. The fastest coder with the correct output wins.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    host: "CSE Department, JNTUH-UCESTH",
    rules: [
      "Participants will be assigned a computer with the screen turned off.",
      "The problem statement will be provided, and participants must write the correct code without seeing it.",
      "The fastest coder with the correct output wins.",
      "No modifications allowed after code submission.",
      "Turning on the monitor = Instant Disqualification",
    ],
    entryFee: "Round 1: FREE | Round 2: ₹100/- (Early Bird) [Actual: ₹120]",
    registrationLink: "",
    rewards: ["1st Place: ₹2000", "2nd Place: ₹1000", "Participation Certificates for Round 2 qualifiers"],
    rounds: [
      {
        title: "Round 1 (Online)",
        details: [
          "General aptitude & mental ability test – 30 MCQs in 30 minutes",
          "Conducted on HackerEarth",
          "Test link will be sent to your registered email",
          "Registration Fee: FREE",
        ],
      },
      {
        title: "Round 2 (Offline)",
        details: [
          "Only qualified participants from Round 1 move to this stage",
          "Time management + coding efficiency = Key to success!",
          "Syntax, semantics, and problem-solving under strict time constraints",
          "Problems will be of intermediate level",
          "Date: 16-04-2025",
          "Registration Fee: ₹100/- (Early Bird) [Actual: ₹120]",
        ],
        fee: "₹100/- (Early Bird)",
      },
    ],
    date: "16-04-2025",
    languages: "C / C++ / Java",
  },
  {
    id: "relay-code",
    title: "Relay Code",
    shortDescription:
      "Team-based coding competition where coordination and speed matter as much as logic!",
    description:
      "RELAY CODE is a National Level Technical Event conducted by the CSE Department, JNTUH-UCESTH, as part of QUEST'25. Coordination and speed matter as much as logic! First coder codes for 15 mins, then the second coder takes over and completes the code in 15 mins. Judging is based on code correctness, efficiency & teamwork.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    host: "CSE Department, JNTUH-UCESTH",
    rules: [
      "5 mins for discussion & strategy",
      "First coder: Codes for 15 mins",
      "Second coder: Takes over and completes the code in 15 mins",
    ],
    judgingCriteria: "Code correctness, efficiency & teamwork",
    entryFee: "Round 1: FREE | Round 2: ₹180 per team",
    registrationLink: "",
    rewards: ["1st Prize: ₹2000", "2nd Prize: ₹1000", "Certificates for all Round 2 participants"],
    teamSize: "2 Members",
    rounds: [
      {
        title: "Round 1: Online MCQ Test",
        details: [
          "General Aptitude + DSA Basics",
          "Mode: Unstop",
          "20 MCQs, 25 mins",
          "No Registration Fee",
          "Top teams qualify for Round 2",
        ],
      },
      {
        title: "Round 2: Onsite Coding Challenge",
        details: [
          "Entry Fee: ₹180 per team",
          "Time: 30 mins (15 mins per participant)",
          "Languages: C / C++ / Java / Python",
        ],
        fee: "₹180 per team",
      },
    ],
    languages: "C / C++ / Java / Python",
  },
  {
    id: "troubleshoot",
    title: "Trouble Shoot",
    shortDescription: "Test your logical skills in Round 1, then fix errors in the debugging challenge!",
    description:
      "Round 1 tests your logical skills with an online aptitude test. Round 2 is a debugging challenge where you fix errors and prove your coding skills. Mode can be Online or Offline.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    host: "CSE Department, JNTUH-UCESTH",
    rules: [
      "Round 1: Online Aptitude Test (FREE) – Test your logical skills!",
      "Round 2: Debugging Challenge – Fix the errors & prove your coding skills!",
      "Mode: Online or Offline",
    ],
    entryFee: "Round 1: FREE",
    registrationLink: "",
    rewards: ["Winner: ₹3000", "Runner up: ₹1500"],
    rounds: [
      {
        title: "Round 1",
        details: ["Online Aptitude Test (FREE)", "Test your logical skills!"],
      },
      {
        title: "Round 2",
        details: ["Debugging Challenge – Fix the errors & prove your coding skills!", "Mode: Online or Offline"],
      },
    ],
  },
  {
    id: "ideathon",
    title: "Ideathon",
    shortDescription: "Choose a domain, propose a solution via PPT, and present to an expert panel.",
    description:
      "Round 1: Choose one domain, pick a problem statement, and propose an effective solution through an impressive PPT presentation. This round is conducted online and is completely free. Round 2: Present your idea (prototype optional) to an expert panel specialized in your chosen domain. This round is held offline during the fest, and a participation fee applies only if you qualify.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    host: "CSE Department, JNTUH-UCESTH",
    rules: [
      "Round 1: Choose one domain, pick a problem statement, propose an effective solution through PPT (Online, FREE)",
      "Round 2: Present your idea (prototype optional) to an expert panel (Offline, fee applies only if qualified)",
    ],
    entryFee: "Round 1: FREE | Round 2: ₹100 per person (if qualified)",
    registrationLink: "",
    rewards: [
      "Win exciting cash prizes",
      "Certificates for Winners, Runners-Up, and all candidates shortlisted for Round 2",
      "Network, collaborate, and interact with innovative minds and experts",
    ],
    teamSize: "1 to 3 members per team",
    rounds: [
      {
        title: "Round 1",
        details: [
          "Choose one domain, pick a problem statement",
          "Propose an effective solution through an impressive PPT presentation",
          "Conducted online – completely free",
        ],
      },
      {
        title: "Round 2",
        details: [
          "Present your idea (prototype optional) to an expert panel",
          "Specialized in your chosen domain",
          "Held offline during the fest",
          "Entry Fee: ₹100 per person (only if you qualify)",
        ],
        fee: "₹100 per person",
      },
    ],
  },
  {
    id: "kbc",
    title: "Kaun Banega Codepati (KBC)",
    shortDescription: "Ultimate test of speed and knowledge – Fastest Finger Round & Hot Seat!",
    description:
      "Prepare for the ultimate test of speed and knowledge! A thrilling two-round competition. Round 1: Free online Menti quiz. Round 2: Live showdown with Fastest Finger Round and The Hot Seat. Use lifelines like Phone a Friend or 50-50. Accumulate prize money by answering correctly!",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
    host: "CSE Department, JNTUH-UCESTH",
    rules: [
      "Round 1: Online Menti Quiz (Free) – Top performers shortlisted",
      "Round 2: Offline Showdown (Entry Fee: ₹90)",
      "Fastest Finger Round: Rapid-fire MCQs, fastest three advance to play against host",
      "The Hot Seat: 10 challenging questions, lifelines (Phone a Friend, 50-50)",
      "Answer within stipulated time",
      "Wrong answer = lose all accumulated money",
      "Option to quit and claim prize money at any point",
    ],
    entryFee: "Round 1: FREE | Round 2: ₹90",
    registrationLink: "",
    rewards: [
      "All participants who play with the host receive prize money",
      "Prize money awarded based on performance in the game",
    ],
    rounds: [
      {
        title: "Round 1",
        details: ["Online Menti Quiz (Free)", "Top performers shortlisted for Round 2"],
      },
      {
        title: "Round 2: Fastest Finger Round",
        details: [
          "Rapid-fire multiple-choice questions",
          "Fastest three to answer correctly advance to play against host",
          "Process repeats until top 20% selected",
        ],
      },
      {
        title: "Round 2: The Hot Seat",
        details: [
          "10 challenging questions from the host",
          "Lifelines: Phone a Friend, 50-50",
          "Answer within stipulated time",
          "Accumulate prize money – wrong answer loses all",
          "Option to quit and claim winnings at any point",
        ],
        fee: "₹90",
      },
    ],
  },
  {
    id: "debate",
    title: "Debate",
    shortDescription: "Three rounds of structured debate – Qualifier, Semi-Finals, and Grand Finale.",
    description:
      "The tournament comprises three rounds of debate. Teams of exactly 2 members compete in an offline format. Round 1: Qualifier Clash with structured rebuttals. Round 2: Semi-Finals with topics given 15 minutes before start. Round 3: Grand Finale – the best team wins.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    host: "CSE Department, JNTUH-UCESTH",
    rules: [
      "Teams of exactly 2 members",
      "All rounds conducted offline",
      "Round 1: Each team assigned a motion to argue for or against, structured rebuttals",
      "Round 2 & 3: Topics given 15 minutes before start",
    ],
    entryFee: "₹120 per team (2 members)",
    registrationLink: "",
    rewards: ["Prizes for winners and runners-up", "Participation certificates for all"],
    teamSize: "2 members",
    paymentNote: "Payment details will be shared after registration.",
    rounds: [
      {
        title: "Round 1: The Qualifier Clash",
        details: [
          "Format: Offline",
          "Duration: 20-25 mins",
          "Each team assigned a motion to argue for or against",
          "Structured rebuttals – top teams advance",
        ],
      },
      {
        title: "Round 2: Semi-Finals",
        details: [
          "Duration: 20-25 mins",
          "Debate topics given 15 minutes before start",
          "Only the sharpest teams reach the final",
        ],
      },
      {
        title: "Round 3: Grand Finale",
        details: [
          "Format: Offline",
          "Duration: 20-25 mins",
          "Topics given 15 minutes in advance",
          "The best team wins",
        ],
      },
    ],
    date: "Registration Deadline: 07/04/25",
  },
];
