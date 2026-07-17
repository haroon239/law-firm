export type ServiceIconName =
  | "briefcase"
  | "heart"
  | "shield"
  | "scale"
  | "building"
  | "globe"
  | "lightbulb"
  | "users";

export interface LegalService {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: ServiceIconName;
  services: string[];
  benefits: string[];
}

export const legalServices: LegalService[] = [
  {
    slug: "corporate-law",
    title: "Corporate Law",
    shortDescription: "Helping businesses with contracts, compliance, governance, and complex transactions.",
    description: "Our corporate law team provides practical legal counsel throughout the business lifecycle. We help founders, executives, and established organizations make informed decisions, manage risk, and pursue sustainable growth.",
    icon: "briefcase",
    services: ["Business formation and restructuring", "Commercial contracts and negotiations", "Corporate governance and compliance", "Mergers, acquisitions, and due diligence"],
    benefits: ["Clear, commercially focused advice", "Proactive risk management", "Solutions tailored to your industry"],
  },
  {
    slug: "family-law",
    title: "Family Law",
    shortDescription: "Compassionate legal support for divorce, custody, maintenance, and family disputes.",
    description: "Family matters require sensitivity, discretion, and strong advocacy. We guide clients through difficult transitions with clear advice and a strategy focused on protecting their rights and long-term wellbeing.",
    icon: "heart",
    services: ["Divorce and separation", "Child custody and visitation", "Maintenance and financial settlements", "Mediation and negotiated agreements"],
    benefits: ["Confidential and compassionate support", "Child-focused solutions", "Strong negotiation and court representation"],
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    shortDescription: "Protecting your rights with strategic defense and experienced courtroom representation.",
    description: "When your liberty and reputation are at stake, early and decisive legal representation matters. Our defense lawyers assess every detail, protect your rights, and build a focused strategy for the strongest possible outcome.",
    icon: "shield",
    services: ["Pre-charge legal advice", "Bail and trial representation", "White-collar and financial offenses", "Appeals and post-conviction matters"],
    benefits: ["Rapid and confidential response", "Thorough evidence review", "Experienced courtroom advocacy"],
  },
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    shortDescription: "Resolving complex legal disputes through negotiation, mediation, and litigation.",
    description: "We represent individuals and businesses in high-stakes disputes. Our litigators combine careful preparation with a commercial understanding of cost, timing, and risk to pursue the right resolution.",
    icon: "scale",
    services: ["Contract and commercial disputes", "Property and ownership claims", "Professional negligence matters", "Mediation, arbitration, and trial"],
    benefits: ["Early case and risk assessment", "Strategic dispute resolution", "Clear communication at every stage"],
  },
  {
    slug: "real-estate-law",
    title: "Real Estate Law",
    shortDescription: "Legal guidance for residential, commercial, development, and property matters.",
    description: "Our property lawyers help clients complete transactions confidently and resolve property issues efficiently. We provide careful due diligence and practical advice for owners, investors, and developers.",
    icon: "building",
    services: ["Property purchases and sales", "Commercial leases", "Title review and due diligence", "Development and ownership disputes"],
    benefits: ["Detailed transaction review", "Efficient document preparation", "Protection against property risk"],
  },
  {
    slug: "immigration-law",
    title: "Immigration Law",
    shortDescription: "Professional assistance with visas, citizenship, residency, and immigration matters.",
    description: "Immigration processes can be complex and time-sensitive. We help individuals, families, and employers understand their options, prepare strong applications, and respond effectively to legal challenges.",
    icon: "globe",
    services: ["Work and business visas", "Family immigration", "Permanent residency and citizenship", "Appeals and immigration reviews"],
    benefits: ["Clear eligibility assessment", "Careful application preparation", "Timely case updates"],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    shortDescription: "Protecting trademarks, copyrights, patents, trade secrets, and creative assets.",
    description: "Ideas and brand assets are central to modern business value. We help clients secure, commercialize, and enforce intellectual property rights with strategies aligned to their commercial goals.",
    icon: "lightbulb",
    services: ["Trademark registration and enforcement", "Copyright and licensing", "IP portfolio strategy", "Infringement and ownership disputes"],
    benefits: ["Stronger brand protection", "Commercial licensing support", "Effective enforcement strategies"],
  },
  {
    slug: "business-consultation",
    title: "Business Consultation",
    shortDescription: "Strategic legal advice for startups, investors, entrepreneurs, and growing companies.",
    description: "We work as a trusted legal partner to business owners and leadership teams. Our advice connects legal requirements with real commercial priorities, helping clients move forward with confidence.",
    icon: "users",
    services: ["Startup and founder advisory", "Risk and compliance reviews", "Partnership and shareholder matters", "Ongoing external legal counsel"],
    benefits: ["Practical business perspective", "Flexible ongoing support", "Decisions backed by legal clarity"],
  },
];

export function getService(slug: string) {
  return legalServices.find((service) => service.slug === slug);
}
