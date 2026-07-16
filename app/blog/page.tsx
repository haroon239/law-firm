// app/blog/page.tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { BlogHero } from "@/components/sections/blog/BlogHero";
import { FeaturedArticle } from "@/components/sections/blog/FeaturedArticle";
import { blogPosts } from "@/data/blogPosts";
import { LatestArticles } from "@/components/sections/blog/LatestArticle";
import { NewsletterSection } from "@/components/sections/blog/NewsletterSection";
export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <div className="relative">
          <Navigation />
          <BlogHero />
          <FeaturedArticle post={featuredPost} />
        <LatestArticles posts={blogPosts} />
        <NewsletterSection/>
          {/* Baaki blog posts ki grid yahan add kar sakte hain agle step mein */}
        </div>
      </main>
      <Footer />
    </div>
  );
}