export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  phone: string;
}

export interface TeamSection {
  title: string;
  members: TeamMember[];
}

export const teamSections: TeamSection[] = [
  {
    title: "College Management",
    members: [
      { name: "Prof. T. Kishen Kumar Reddy", role: "Vice Chancellor" , image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771828691/VC_vtxtet.jpg", phone : null},
      { name: "Dr K Vijaya Kumar Reddy", role: "Rector" , image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771828692/IMG-20260221-WA0050_pwipcb.jpg", phone : null},
      { name: "Prof. K Venkateswara Rao", role: "Registrar", image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771933709/IMG-20260221-WA0051_mztdjv.jpg", phone : null},
      { name: "Dr.G.Venkata Narasimha Reddy", role: "Principal", image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771828690/IMG-20260221-WA0053_xwzkie.jpg", phone : null },
    ],
  },
   {
    title: "Department",
    members: [
      { name: "Dr. K Santhi Sree", role: "Head of Department CSE & Faculty Coordinator", image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771935042/IMG-20260223-WA0018_dk8vhk.jpg", phone : null},
      { name: "	Dr B Padmaja Rani", role: "Faculty Coordinator"  , image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771934923/WhatsApp_Image_2026-02-23_at_12.22.09_PM_g9gpdq.jpg", phone : null},
    ],
  },
 
  {
    title: "Student Coordinators",
    members: [
      { name: "Apuri Varshith Rao", role: "Main Coordinator",image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771935348/Varshith_ddp336.jpg",phone : "+91 93921 36155"},
      { name: "Dyawarashetty Akarsh", role: " Treasurer",image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771935124/akarsh_pyyg11.jpg", phone : "+91 88856 40223"},
      { name: "Navathe Chandana", role: "Sponsorship Coordinator",image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771935225/chandana_xj1fw8.jpg", phone : "+91 99511 84828"},
      { name: "Challa Suchira Reddy", role: "Marketing Coordinator", image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1771935429/suchira_q48gmd.jpg", phone : "+91 81257 24625"},
      { name: "Kagitha Shreetan Goud", role: "Sponsorship Coordinator", image: "https://res.cloudinary.com/dvvijlfio/image/upload/v1772021599/WhatsApp_Image_2026-02-25_at_15.54.18_cuxokl.jpg", phone : "+91 83748 50969 "}
    ],
  },
];

export const sponsors = [
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821652/footlog_s7lqoe.png", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821652/algorand_full_logo_black_wmqpvr.png", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821651/images_ukpjlw.png", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821646/989fb302-e418-48ae-b2dd-6ce0b53b74bf_esrup8.jpg", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821646/images_1_opfcnu.jpg", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1772025681/uboi_so8c4t.png",
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821645/images_1_oghooo.png", 
  "https://res.cloudinary.com/dvvijlfio/image/upload/v1771821645/174809608586_bw8qzt.webp"
];
