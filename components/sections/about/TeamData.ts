export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  experience: string;
  description: string;
  specialties: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "James Whitfield",
    position: "Managing Partner",
    image: "/images/team1.png",
    experience: "18+ Years",
    description:
      "James leads the firm's litigation and corporate law division with more than 18 years of courtroom success and strategic legal advisory.",

    specialties: [
      "Corporate Law",
      "Civil Litigation",
      "Business Disputes",
      "Legal Consultation",
    ],
  },

  {
    id: 2,
    name: "Elena Warren",
    position: "Senior Attorney",
    image: "/images/team2.png",
    experience: "14+ Years",
    description:
      "Elena specializes in family law, property disputes and mediation, helping clients reach practical legal solutions.",

    specialties: [
      "Family Law",
      "Property Law",
      "Mediation",
      "Child Custody",
    ],
  },

  {
    id: 3,
    name: "Marcus Reyes",
    position: "Corporate Lawyer",
    image: "/images/team3.png",
    experience: "12+ Years",
    description:
      "Marcus advises startups, enterprises and investors on contracts, mergers and corporate compliance.",

    specialties: [
      "Corporate Law",
      "Commercial Contracts",
      "Business Formation",
      "Compliance",
    ],
  },

  {
    id: 4,
    name: "Sophia Adler",
    position: "Litigation Specialist",
    image: "/images/team4.png",
    experience: "10+ Years",
    description:
      "Sophia represents clients in complex civil litigation while maintaining a strong record of favorable verdicts.",

    specialties: [
      "Civil Litigation",
      "Court Representation",
      "Legal Research",
      "Case Strategy",
    ],
  },
];