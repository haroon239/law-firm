import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { ArticleContent } from "@/components/sections/blog/ArticleContent";
import { blogPosts } from "@/data/blogPosts";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((candidate) => candidate.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | AG&R Legal Insights`,
    description: post.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((candidate) => candidate.slug === slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#080b12] text-white">
      <Header />
      <main>
        <div className="relative">
          <Navigation />
          <ArticleContent post={post} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
