import { notFound } from "next/navigation";
import { ProductCategoryPage } from "~/components/product-category-page";
import { getProductGroup, productCategories } from "~/lib/site";

export function generateStaticParams() {
  return productCategories.flatMap((category) =>
    category.groups.map((group) => ({ slug: group.slug })),
  );
}

export default async function ProductGroupPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const group = getProductGroup(slug);

  if (!group) notFound();

  return <ProductCategoryPage category={group} />;
}
