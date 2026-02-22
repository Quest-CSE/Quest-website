export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface TeamSection {
  title: string;
  members: TeamMember[];
}

export const teamSections: TeamSection[] = [
  {
    title: "Leadership",
    members: [
      { name: "Dr. R. Venkatesh", role: "Vice Chancellor" },
      { name: "Dr. S. Lakshmi", role: "Rector" },
      { name: "Dr. M. Subramaniam", role: "Registrar" },
      { name: "Dr. K. Ramachandran", role: "Principal" },
    ],
  },
  {
    title: "Department",
    members: [
      { name: "Dr. P. Natarajan", role: "Head of Department — CSE" },
      { name: "Dr. Priya Sharma", role: "Faculty Coordinator" },
      { name: "Prof. Rajesh Kumar", role: "Faculty Coordinator" },
    ],
  },
  {
    title: "Student Coordinators",
    members: [
      { name: "Arun Krishnan", role: "Overall Coordinator" },
      { name: "Sneha Menon", role: "Events Head" },
      { name: "Vikash Reddy", role: "Workshops Head" },
      { name: "Divya Patel", role: "Design & Publicity" },
    ],
  },
];

export const sponsors = [
  "TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Zoho", "Freshworks", "Accenture"
];
