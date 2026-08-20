import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getArticle, getArticles } from "~/lib/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function headingId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getSections(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace(/^## /, ""));
}

export async function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  return article
    ? { title: article.title, description: article.description }
    : { title: "Article not found" };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const sections = getSections(article.content);

  return (
    <div className="bg-base-200">
      <header className="bg-neutral px-6 pt-12 pb-28 text-neutral-content sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex flex-wrap justify-center gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-accent badge-soft font-bold uppercase"
              >
                #{tag}
              </span>
            ))}
          </div>
          <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg font-semibold text-neutral-content/75 sm:text-xl">
            {article.subtitle}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-neutral-content/65">
            <span className="inline-flex items-center gap-2">
              <CalendarDaysIcon className="size-4 text-accent" />
              {formatDate(article.date)}
            </span>
            <span aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-2">
              <ClockIcon className="size-4 text-accent" />
              {article.readTime} min read
            </span>
          </div>
        </div>
      </header>

      <main className="relative mx-auto -mt-10 grid max-w-7xl gap-8 px-6 pb-20 sm:px-10 lg:grid-cols-[minmax(0,2fr)_minmax(17rem,0.85fr)] lg:px-16">
        <article
          id="article-introduction"
          className="overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-xl"
        >
          <div className="relative aspect-video min-h-64 bg-neutral sm:min-h-96">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="prose prose-slate max-w-none px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: () => null,
                h2: ({ children }) => (
                  <h2 id={headingId(String(children))}>{children}</h2>
                ),
                h3: ({ children }) => <h3>{children}</h3>,
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </article>

        <aside className="self-start lg:sticky lg:top-28">
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body p-5 sm:p-6">
              <h2 className="card-title text-lg text-neutral">
                <span className="grid size-9 place-items-center rounded-field bg-accent/15 text-accent">
                  <ChartBarIcon className="size-5" />
                </span>
                In this article
              </h2>
              <nav className="mt-3 rounded-box border border-base-300 p-4">
                <ul className="space-y-3 text-sm font-semibold">
                  <li>
                    <a
                      href="#article-introduction"
                      className="link-hover flex items-start gap-2 text-neutral"
                    >
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      {article.title}
                    </a>
                  </li>
                  {sections.map((section) => (
                    <li key={section}>
                      <a
                        href={`#${headingId(section)}`}
                        className="link-hover flex items-start gap-2 text-neutral"
                      >
                        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                        {section}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <Link
            href="/news"
            className="btn btn-ghost mt-4 w-full justify-start"
          >
            <ArrowLeftIcon className="size-4" />
            Back to News
          </Link>
        </aside>
      </main>
    </div>
  );
}
