import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Scale, ShieldCheck, UserRound } from "lucide-react";
import { BlogPost, blogPosts } from "@/data/blogPosts";

export function ArticleContent({ post }: { post: BlogPost }) {
  const blocks = post.content.split("\n\n");
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <article className="w-full bg-[#080b12] text-white">
      <header className="relative isolate flex min-h-[680px] items-end overflow-hidden sm:min-h-[760px]">
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-black/45" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <Link href="/blog" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-sm">{post.category}</span>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-7xl">{post.title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl sm:leading-9">{post.excerpt}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2"><UserRound className="h-4 w-4 text-amber-300" /> AG&amp;R Legal Team</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-amber-300" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-300" /> {post.readingTime}</span>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-14 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:px-8">
          <div className="min-w-0">
            <p className="border-l-2 border-amber-300 pl-5 font-serif text-xl leading-8 text-slate-200 sm:pl-7 sm:text-2xl sm:leading-9">{post.excerpt}</p>
            <div className="mt-10 max-w-3xl">
              {blocks.map((block, index) => block.startsWith("## ") ? (
                <h2 key={block} className="mb-5 mt-10 font-serif text-2xl font-bold leading-tight text-white first:mt-0 sm:text-3xl">{block.replace("## ", "")}</h2>
              ) : (
                <p key={index} className="mb-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">{block}</p>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-300/10 via-[#111827] to-[#111827] p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-300 text-neutral-950"><Scale className="h-6 w-6" /></div>
              <h2 className="mt-5 font-serif text-2xl font-bold text-white sm:text-3xl">Need advice tailored to your situation?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">General information is a useful starting point, but every legal matter is different. Speak with our team for clear, confidential guidance.</p>
              <Link href="/contact#contact-form" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-200 to-[#c99b3d] px-6 py-3 text-sm font-bold text-neutral-950 transition hover:brightness-110">Schedule Consultation <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Article Details</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4"><dt className="text-slate-500">Category</dt><dd className="text-right font-semibold text-white">{post.category}</dd></div>
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4"><dt className="text-slate-500">Published</dt><dd className="text-right text-slate-200">{post.date}</dd></div>
                <div className="flex items-center justify-between gap-4"><dt className="text-slate-500">Reading time</dt><dd className="text-right text-slate-200">{post.readingTime}</dd></div>
              </dl>
            </div>
            <div className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-6">
              <ShieldCheck className="h-6 w-6 text-amber-300" />
              <h3 className="mt-4 font-serif text-xl font-bold text-white">Legal Disclaimer</h3>
              <p className="mt-2 text-xs leading-6 text-slate-400">This article provides general information and does not constitute legal advice or create an attorney-client relationship.</p>
            </div>
          </aside>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="border-t border-white/10 bg-[#0b0f18] py-16 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Continue Reading</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">Related Legal Insights</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="group grid overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition hover:border-amber-300/40 sm:grid-cols-[180px_1fr]">
                  <div className="relative min-h-48 overflow-hidden sm:min-h-full"><Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, 180px" className="object-cover transition duration-500 group-hover:scale-105" /></div>
                  <div className="p-6"><p className="text-xs font-bold uppercase tracking-wider text-amber-300">{item.category}</p><h3 className="mt-3 font-serif text-xl font-bold leading-snug text-white">{item.title}</h3><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 group-hover:text-amber-300">Read Article <ArrowRight className="h-4 w-4" /></span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
