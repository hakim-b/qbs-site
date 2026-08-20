import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "~/lib/articles";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function ArticleMeta({
  article,
}: {
  article: ReturnType<typeof getArticles>[number];
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-base-content/60">
      <span className="inline-flex items-center gap-2">
        <CalendarDaysIcon className="size-4 text-primary" />
        {formatDate(article.date)}
      </span>
      <span className="inline-flex items-center gap-2">
        <ClockIcon className="size-4 text-primary" />
        {article.readTime} min read
      </span>
    </div>
  );
}

function ArticleTags({
  article,
}: {
  article: ReturnType<typeof getArticles>[number];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {article.tags.slice(0, 3).map((tag) => (
        <span key={tag} className="badge badge-info badge-soft font-semibold">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function NewsPage() {
  const articles = getArticles();
  const [latest, ...recentArticles] = articles;

  if (!latest) {
    return (
      <section className="bg-base-200 px-6 py-24">
        <div className="alert alert-info mx-auto max-w-7xl">
          No articles are available yet.
        </div>
      </section>
    );
  }

  return (
    <div className="bg-base-200">
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-20 sm:px-10 lg:px-16">
        <div className="card card-side overflow-hidden border border-base-300 bg-base-100 shadow-xl max-lg:flex-col">
          <figure className="relative min-h-72 basis-1/2 bg-neutral lg:min-h-100">
            <Image
              src={latest.image}
              alt={latest.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-neutral/70 via-neutral/20 to-transparent" />
            <span className="badge badge-accent absolute top-6 left-6 z-10 inline-flex h-fit w-fit gap-1.5 px-4 py-3 font-bold text-accent-content">
              <FireIcon className="size-4" />
              Featured
            </span>
          </figure>
          <div className="card-body justify-center gap-5 p-7 sm:p-10 lg:p-12">
            <ArticleTags article={latest} />
            <div>
              <h1 className="card-title max-w-2xl text-3xl text-neutral sm:text-4xl">
                {latest.title}
              </h1>
              <p className="mt-2 text-lg font-semibold text-primary">
                {latest.subtitle}
              </p>
            </div>
            <p className="max-w-2xl text-base leading-7 text-base-content/70">
              {latest.description}
            </p>
            <ArticleMeta article={latest} />
            <div className="card-actions border-t border-base-300 pt-6">
              <Link href={`/news/${latest.slug}`} className="btn btn-primary">
                Read Full Article
                <ArrowRightIcon className="size-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-neutral sm:text-4xl">
              Recent Articles
            </h2>
            <p className="mt-2 text-base-content/70">
              Explore our latest stories and insights
            </p>
          </div>
          <span className="badge badge-lg hidden gap-2 border-base-300 bg-base-100 px-4 py-5 text-primary shadow-sm sm:inline-flex">
            <FireIcon className="size-4" />
            Trending
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((article) => (
            <article
              key={article.slug}
              className="card overflow-hidden border border-base-300 bg-base-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <figure className="relative h-56 bg-neutral">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="badge badge-accent absolute top-4 left-4 font-bold text-accent-content">
                  {article.tags[0]}
                </span>
              </figure>
              <div className="card-body gap-4">
                <ArticleTags article={article} />
                <div>
                  <h3 className="card-title text-xl text-neutral">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-base-content/70">
                    {article.description}
                  </p>
                </div>
                <ArticleMeta article={article} />
                <div className="card-actions mt-auto border-t border-base-300 pt-4">
                  <Link
                    href={`/news/${article.slug}`}
                    className="btn btn-ghost btn-sm px-0 text-primary"
                  >
                    Read Article
                    <ArrowRightIcon className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
