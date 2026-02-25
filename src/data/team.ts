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
      { name: "Prof. T. Kishen Kumar Reddy Garu", role: "Vice Chancellor" , image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771828691/VC_vtxtet.jpg"},
      { name: "Dr K Vijaya Kumar Reddy Garu", role: "Rector" , image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771828692/IMG-20260221-WA0050_pwipcb.jpg"},
      { name: "Prof. K Venkateswara Rao Garu", role: "Registrar", image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771933709/IMG-20260221-WA0051_mztdjv.jpg" },
      { name: "Dr.G.Venkata Narasimha Reddy Garu", role: "Principal", image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771828690/IMG-20260221-WA0053_xwzkie.jpg" },
      { name: "Dr. K P Supreethi Garu", role: "Head of Department CSE", image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771828666/IMG-20260221-WA0047_heqaiq.jpg" },
    ],
  },
  {
    title: "Department",
    members: [
      { name: "	Dr B Padmaja Rani Garu", role: "Faculty Coordinator"  , image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771934923/WhatsApp_Image_2026-02-23_at_12.22.09_PM_g9gpdq.jpg"},
      { name: "Prof. Santhi sree Garu", role: "Faculty Coordinator"  , image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771935042/IMG-20260223-WA0018_dk8vhk.jpg"},
    ],
  },
  {
    title: "Student Coordinators",
    members: [
      { name: "Arun Krishnan", role: "Overall Coordinator",image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771935348/Varshith_ddp336.jpg"},
      { name: "Arun Krishnan", role: "Overall Coordinator",image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771935124/akarsh_pyyg11.jpg"},
      { name: "Sneha Menon", role: "Events Head",image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771935225/chandana_xj1fw8.jpg"},
      { name: "Vikash Reddy", role: "Workshops Head", image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771935429/suchira_q48gmd.jpg"},
    ],
  },
];

export const sponsors = [
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821652/footlog_s7lqoe.png", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821652/algorand_full_logo_black_wmqpvr.png", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821651/images_ukpjlw.png", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821646/989fb302-e418-48ae-b2dd-6ce0b53b74bf_esrup8.jpg", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821646/images_1_opfcnu.jpg", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821644/images_2_dfygtx.png",
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821645/images_1_oghooo.png", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821645/174809608586_bw8qzt.webp"
];
