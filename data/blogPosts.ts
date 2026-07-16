// data/blogPosts.ts
export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string; // full article body, HTML-safe paragraphs separated by \n\n
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "expert-legal-knowledge-professional-guidance",
    category: "Corporate Law",
    title: "Expert Legal Knowledge & Professional Guidance",
    date: "March 18, 2026",
    readingTime: "5 min read",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    image: "/images/blog/featured.png",
    featured: true,
  },
  {
    slug: "understanding-corporate-litigation",
    category: "Litigation",
    title: "Understanding Corporate Litigation Strategies",
    date: "March 10, 2026",
    readingTime: "4 min read",
    excerpt:
      "A practical overview of how businesses can prepare for and navigate complex litigation matters.",
    content: `Corporate litigation can be complex and time-consuming. This article explores key strategies businesses should consider...

Every case is different, and preparation is the key to success in any litigation matter.`,
    image: "/images/blog/blog1.png",
  },
  {
    slug: "family-law-what-you-need-to-know",
    category: "Family Law",
    title: "Family Law: What You Need to Know",
    date: "March 2, 2026",
    readingTime: "6 min read",
    excerpt:
      "Navigating family law matters can be emotionally and legally challenging. Here's what to expect.",
    content: `Family law covers a broad range of matters including divorce, custody, and property division...

Working with an experienced attorney can make the process significantly smoother.`,
    image: "/images/blog/blog2.png",
  },
];