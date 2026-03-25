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
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1774462162/project_expo_orhpvw.png",
    host: "Sri Vatchav : 77807 31663",
    rules: ["Come prepared with your Presentation & Poster for demonstration", "•	Teams must demonstrate their project to the judges."],
    entryFee: "150/- (Spot Registration Available)",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScUYnB0PTvFiy0YdOo4uGPgnCB6nyKLrgGLqeGYXiK79HoTzQ/viewform",
    rewards: ["Winner Prize: ₹2000/-"],
    facultyCoordinators: [
      "Dr. B.Padmaja Rani","Dr. K Santhi Sree",
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
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1774437889/BLIND_CODE_yhglyb.jpg",
    host: "Karthik",
    rules: [
      "Participants will code with monitors turned OFF.",
      "The problem statement will be provided, and participants must write the correct code without seeing the monitor.",
      "The fastest coder with the correct output wins.",
      "No modifications allowed after code submission.",
      "Turning on the monitor leads to Instant Disqualification",
    ],
    entryFee: "Round 1: FREE | Round 2: ₹100/- (Early Bird) [Actual: ₹120]",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdDhPrdY3JqJGGdMd7wEhEiNO-0kaI02MwCzkDg_T_9yQjsTw/viewform",
    rewards: ["1st Place: ₹1500", "2nd Place: ₹1000", "Participation Certificates for Round 2 qualifiers"],
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
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1774437963/0001_rtyyct.jpg",
    host: "Rashmi",
    rules: [
      "5 mins for discussion and strategy",
      "First coder: Codes for 15 mins",
      "Second coder: Takes over and completes the code in 15 mins",
    ],
    judgingCriteria: "Code correctness, efficiency & teamwork",
    entryFee: "Round 1: FREE | Round 2: ₹180 per team",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeuIkl_a0Fsbfd8fVcnWlCzXBxDkMp7GM_HL5Vir9b2nBl03A/viewform",
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
    id: "Debugging",
    title: "Debugging",
    shortDescription: "Test your logical skills in Round 1, then fix errors in the debugging challenge!",
    description:
      "Round 1 tests your logical skills with an online aptitude test. Round 2 is a debugging challenge where you fix errors and prove your coding skills. Mode can be Online or Offline.",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1774437890/debugging_vcf1d2.jpg",
    host: "Tulasi",
    rules: [
      "Round 1: Online Aptitude Test (FREE) – Test your logical skills!",
      "Round 2: Debugging Challenge – Fix the errors & prove your coding skills!",
      "Mode: Online/Offline",
    ],
    entryFee: "Round 1: FREE",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfaFVZNLDGz9VmBiGIXSpTzWY_bWr3dNWMZV28P3pJC0gUB0g/viewform?usp=header",
    rewards: ["Winner: ₹1500", "Runner up: ₹1000"],
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
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1774437891/ideathon_final_vdrmxb.jpg",
    host: "Keerthi",
    rules: [
      "Round 1: Choose one domain, pick a problem statement, propose an effective solution through Presentation(Online, FREE)",
      "Round 2: Present your idea (prototype optional) to an expert panel (Offline, fee applies only if qualified)",
    ],
    entryFee: "Round 1: FREE | Round 2: ₹80 per person (if qualified)",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSesmMvQ936Zft-es6x6puOL_NJNG8LzDSRc5AJvIl7ooz3NJg/viewform",
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
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1774437035/WhatsApp_Image_2026-03-25_at_4.30.26_PM_oq8w6o.jpg",
    host: "Prakash",
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
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc1ifGN-3GZEc9yylCwUEmSlyiEHuLEjXdsk-fDCR-NGpAxMQ/viewform",
    rewards: [
      "Winner – ₹2000",
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
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1774432178/WhatsApp_Image_2026-03-24_at_10.16.03_PM_xq0hog.jpg",
    host: "Ramudu",
    rules: [
      "Teams of exactly 2 members",
      "All rounds conducted offline",
      "Round 1: Each team assigned a motion to argue for or against, structured rebuttals",
      "Round 2 & 3: Topics given 15 minutes before start",
    ],
    entryFee: "₹150 per team (2 members)",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMBrit7nd5nCiPSuZFozA5F1zmjXwXlWr9-Mn33sX3bdLZkg/viewform",
    rewards: ["1st Prize: ₹2000", "2nd Prize: ₹1000", "Prizes for winners and runners-up", "Participation certificates for all"],
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
    id: "tech-auction",
    title: "Tech Auction",
    shortDescription: "Bid your points to answer technical questions! Highest bidder gets to answer – correct or pay the price.",
    description:
      "Tech Auction is a thrilling point-bidding competition! Each participant starts with 100 points. Bid points to answer technical questions – the highest bidder gets the chance to answer. Correct answers add points, wrong answers deduct them. Points cannot go below zero. Top scorers from the online Round 1 qualify for the offline Tech Auction finale.",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1774437892/techauction_1_qusn05.jpg",
    host: "Jahnavi",
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
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfgVAduyNYv1xDkPYywGBIM6HGWbXQnLwVBhmw7rs6TB_ozrA/viewform",
    rewards: ["Prize Money: ₹2000", "Tech Auction Champion – highest total points wins"],
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
        fee: "₹200 per team (2 members) | ₹130 for single participant",

      },
    ],
  },
    {
    id: "battle-of-brains",
    title: "Battle of Brains",
    shortDescription: "Exciting quiz competition testing knowledge in sports and movies.",
    description:
      "Battle of Brains is a fun and exciting quiz competition that tests participants’ knowledge in sports and movies. Participants must think quickly and answer questions correctly to score points and win the game.",
    image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1774437889/battle_of_brains_1_blr3xk.jpg",
    host: "",
    rules: [
      "Questions will be asked by the host during the event.",
      "Participants must answer within the allotted time.",
      "Correct answers will earn points.",
      "The participant/team with the maximum points at the end will win.",
      "The host’s decision will be final.",
    ],
    entryFee: "₹100 per participant",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdGk0OTswtUMEfB2Q6xGDjG2uTWkU5YRCTuPhoNi_BzHMmqhQ/viewform",
    rewards: [
      "Winner: ₹1500",
      "Runner-Up: ₹1000",
    ],
  },

  {
    id: "spin-the-wheel",
    title: "Spin the Wheel",
    shortDescription: "Fun tech-based mini challenges testing creativity, teamwork, and quick thinking.",
    description:
      "Spin the Wheel is a fun and interactive event filled with exciting mini-challenges related to technology, creativity, and teamwork. Teams will spin the wheel to randomly select a challenge and complete it within the given time.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
    host: "",
    rules: [
      "Teams spin the wheel to randomly select a challenge.",
      "Each challenge must be completed within the allotted time.",
      "Challenges test creativity, technical knowledge, communication, and teamwork.",
      "Points will be awarded based on performance in each challenge.",
      "Top teams qualify for the final spin.",
      "The Top 3 teams face the Final Boss Spin to determine the winner.",
      "The host’s decision will be final.",
    ],
    entryFee: "₹80 per participant",
    registrationLink: "",
    rewards: [
      "Winner: ₹1200",
    ],
    rounds: [
      {
        title: "Mini Challenges",
        details: [
          "AI Prompt Challenge – Write the prompt that generated a strange AI image within 45 seconds.",
          "Poll the Crew – Audience suggests solutions if the team gets stuck on a tech task.",
          "Blindfold Tech Drawing – One teammate draws a tech logo while blindfolded using partner directions.",
          "Ping vs Pong – Rapid-fire tech word association game with 2-second response limit.",
          "Emoji Codebreaker – Guess tech brands or concepts from emojis within 10 seconds.",
          "Prompt-to-Picasso – One participant describes an AI prompt while the partner draws it.",
          "Live Quest Leaderboard – Scores displayed live to track team rankings.",
          "Final Boss Spin – Top 3 teams spin again for the final grand challenge.",
        ],
      },
    ],
  },
];
