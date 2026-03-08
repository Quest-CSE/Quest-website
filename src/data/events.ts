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
    shortDescription: "Showcase your innovative projects with PPT & poster.",
    description:
      "Present your innovative projects to a panel of experts. Come prepared with your PPT and poster for demonstration.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    host: "",
    rules: ["Come prepared with your Presentation & Poster for demonstration", "•	Teams must demonstrate their project to the judges."],
    entryFee: "Free Registration (Spot Registration Available)",
    registrationLink: "",
    rewards: ["Winner Prize: ₹2000/-"],
    facultyCoordinators: [
      "Dr. K.P Supreethi",
    ],
    requirements: ["Come prepared with your Presentation & Poster for demonstration"],
  },
  {
    id: "blind-code",
    title: "Blind Code",
    shortDescription:
      "Write code without looking at the screen! Solve problems with your eyes closed.",
    description:
      "Blind Code is a unique programming competition where you write code without looking at the screen! Participants are given a coding problem and a limited time to solve it with their eyes closed off. The fastest coder with the correct output wins.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    host: "",
    rules: [
      "Participants will code with monitors turned OFF.",
      "The problem statement will be provided, and participants must write the correct code without seeing the monitor.",
      "The fastest coder with the correct output wins.",
      "No modifications allowed after code submission.",
      "Turning on the monitor leads to Instant Disqualification",
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
          "Registration Fee: ₹100/- (Early Bird) [Actual: ₹120]",
        ],
        fee: "₹100/- (Early Bird)",
      },
    ],
    date: "09-04-2026",
    languages: "C / C++ / Java",
  },
  {
    id: "relay-code",
    title: "Relay Code",
    shortDescription:
      "Team-based coding competition where coordination and speed matter as much as logic!",
    description:
      "RELAY CODE is a National Level Technical Event conducted by the CSE Department, JNTUH-UCESTH, as part of QUEST'26. Coordination and speed matter as much as logic! First coder codes for 15 mins, then the second coder takes over and completes the code in 15 mins. Judging is based on code correctness, efficiency & teamwork.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    host: "",
    rules: [
      "5 mins for discussion and strategy",
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
          "Platform: Unstop",
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
      "Mode: Online/Offline",
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
    shortDescription: "Choose a domain, propose a solution via Presentation, and present to an expert panel.",
    description:
      "Round 1: Choose one domain, pick a problem statement, and propose an effective solution through an impressive PPT presentation. This round is conducted online and is completely free. Round 2: Present your idea (prototype optional) to an expert panel specialized in your chosen domain. This round is held offline during the fest, and a participation fee applies only if you qualify.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    host: "",
    rules: [
      "Round 1: Choose one domain, pick a problem statement, propose an effective solution through Presentation(Online, FREE)",
      "Round 2: Present your idea (prototype optional) to an expert panel (Offline, fee applies only if qualified)",
    ],
    entryFee: "Round 1: FREE | Round 2: ₹80 per person (if qualified)",
    registrationLink: "",
    rewards: [
      "Winner – ₹1500",
      "Certificates for Winners, Runners-Up, and all candidates shortlisted for Round 2",
      "Network, collaborate, and interact with innovative minds and experts",
    ],
    teamSize: "1 to 2 members per team",
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
    title: "Kaun Banega Codepati(KBC)",
    shortDescription: "Ultimate test of speed and knowledge – Fastest Finger Round & Hot Seat!",
    description:
      "Prepare for the ultimate test of speed and knowledge! A thrilling two-round competition.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
    host: "",
    rules: [
      "Round 1: Online Menti Quiz (Free) – Top performers shortlisted",
      "Round 2: Offline Showdown (Entry Fee: ₹120)",
      "Fastest Finger Round: Rapid-fire MCQs, fastest three advance to play against host",
      "The Hot Seat: 10 challenging questions, lifelines (Phone a Friend, 50-50)",
      "Answer within stipulated time",
      "Wrong answer = lose all accumulated money",
      "Option to quit and claim prize money at any point",
    ],
    entryFee: "Round 1: FREE | Round 2: ₹120",
    registrationLink: "",
    rewards: [
      "Winner – ₹2500",
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
    host: "",
    rules: [
      "Teams of exactly 2 members",
      "All rounds conducted offline",
      "Round 1: Each team assigned a motion to argue for or against, structured rebuttals",
      "Round 2 & 3: Topics given 15 minutes before start",
    ],
    entryFee: "₹150 per team (2 members)",
    registrationLink: "",
    rewards: ["Winner: ₹2000", "Prizes for winners and runners-up", "Participation certificates for all"],
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
  {
    id: "skribble",
    title: "Skribble",
    shortDescription: "Draw the word while others guess! Top scorers from each room advance to the Grand Finale.",
    description:
      "Skribble is a fun drawing-and-guessing game! Participants are grouped into rooms of 5-8 players. One player draws a given word while others guess it in the chat or on paper within 60 seconds. Points are awarded based on how fast the correct answer is guessed. The artist also gains points if their drawing is recognized. Top scorers from each room advance to the Grand Finale round.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&h=400&fit=crop",
    host: "CSE Department, JNTUH-UCESTH",
    rules: [
      "Individual participation – participants are grouped into rooms of 5-8 players",
      "One player draws a given word while others guess it in the chat/on paper within 60 seconds",
      "Points awarded based on how fast the correct answer is guessed",
      "The artist also gains points if their drawing is recognized",
      "Top scorers from each room advance to the Grand Finale round",
    ],
    entryFee: "To be announced",
    registrationLink: "",
    rewards: ["Prizes for Grand Finale winners"],
    rounds: [
      {
        title: "Qualifier Round",
        details: [
          "Participants grouped into rooms of 5-8 players",
          "One player draws, others guess within 60 seconds",
          "Points for speed of correct guess + artist points if drawing is recognized",
          "Top scorers from each room advance",
        ],
      },
      {
        title: "Grand Finale",
        details: ["Top scorers from each room compete for the ultimate prize"],
      },
    ],
  },
  {
    id: "tech-auction",
    title: "Tech Auction",
    shortDescription: "Bid your points to answer technical questions! Highest bidder gets to answer – correct or pay the price.",
    description:
      "Tech Auction is a thrilling point-bidding competition! Each participant starts with 100 points. Bid points to answer technical questions – the highest bidder gets the chance to answer. Correct answers add points, wrong answers deduct them. Points cannot go below zero. Top scorers from the online Round 1 qualify for the offline Tech Auction finale.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    host: "",
    rules: [
      "1.	Each team will be given a fixed number of starting points at the beginning of the event.",
      "2.	The host will announce a technical question or topic.",
      "3.	Teams can bid their points if they are confident about answering the question.",
      "4.	The team that places the highest bid will get the chance to answer.",
      "5.	If the team answers correctly, the bid points will be added to their score.",
      "6.	If the answer is incorrect, the bid points will be deducted from their score.",
      "7.	Teams must think carefully before bidding, as high risk can lead to high loss or high reward.",
      "8.	The team with the highest total points at the end of the event will be declared the winner.",
    ],
    entryFee: "Round 1: FREE | Round 2: To be announced",
    registrationLink: "",
    rewards: ["Winner: ₹2500", "Tech Auction Champion – highest total points wins"],
    rounds: [
      {
        title: "Round 1 (Online)",
        details: [
          "Aptitude & MCQs",
          "30 Questions | 30 Minutes",
          "Conducted online",
          "Registration: FREE",
          "Top 10 participants with highest points qualify for Round 2",
        ],
        fee: "FREE",
      },
      {
        title: "Round 2 (Offline): Tech Auction",
        details: [
          "Only top 10 finalists from Round 1 participate",
          "Each participant starts with 100 points",
          "Participants bid points to answer technical questions",
          "Highest bidder gets the chance to answer",
          "Correct → +Bid Points | Wrong → −Bid Points",
          "Points cannot go below zero",
          "Double or Nothing (final phase): Last 3 questions – participants can choose to double their bid. Correct → 2× points added | Wrong → 2× points deducted",
          "Participant with the highest total points is declared the Tech Auction Champion",
        ],
        fee: "₹200 per team (2 members)", "₹130 for single participant

      },
    ],
  },
];
