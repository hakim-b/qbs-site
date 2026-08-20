import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const articlesDirectory = path.join(process.cwd(), "src/content/articles");

const articleFrontmatterSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  date: z.preprocess(
    (value) => (value instanceof Date ? value.toISOString() : value),
    z.string().min(1),
  ),
  readTime: z.coerce.number().int().positive(),
  tags: z.array(z.string().min(1)).min(1),
  image: z.url(),
});

export type Article = z.infer<typeof articleFrontmatterSchema> & {
  slug: string;
  content: string;
};

function readArticle(filename: string): Article {
  const source = fs.readFileSync(
    path.join(articlesDirectory, filename),
    "utf8",
  );
  const parsed = matter(source);
  const frontmatter = articleFrontmatterSchema.parse(parsed.data);

  return {
    ...frontmatter,
    slug: filename.replace(/\.md$/, ""),
    content: parsed.content,
  };
}

export function getArticles() {
  return fs
    .readdirSync(articlesDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map(readArticle)
    .sort((first, second) => {
      return new Date(second.date).getTime() - new Date(first.date).getTime();
    });
}

export function getArticle(slug: string) {
  return getArticles().find((article) => article.slug === slug);
}
