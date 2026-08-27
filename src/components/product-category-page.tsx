import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { products } from "~/lib/product-data";
import type { productCategories } from "~/lib/site";
import { ProductDetailsModal } from "./product-details-modal";
import { LogoParticles } from "./ui/logo-particles";

type ProductGroup = (typeof productCategories)[number]["groups"][number] & {
  category: string;
};

export function ProductCategoryPage({ category }: { category: ProductGroup }) {
  const categoryProducts = products.filter((product) =>
    category.items.some((item) => item === product.name),
  );

  return (
    <main>
      <LogoParticles/>
      <section className="relative overflow-hidden bg-neutral text-neutral-content">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(1,113,187,0.3),transparent_55%,rgba(120,190,32,0.16))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <p className="mb-5 text-sm font-bold tracking-[0.28em] text-accent uppercase">
            Product portfolio
          </p>
          <h1 className="max-w-4xl text-4xl leading-tight font-black tracking-tight sm:text-6xl">
            {category.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-content/75">
            {category.category} product solutions for your operation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold tracking-[0.25em] text-primary uppercase">
            Available solutions
          </p>
          <h2 className="mt-3 text-3xl font-black text-neutral sm:text-4xl">
            Built around your operation.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <article
              key={product.id}
              className="card overflow-hidden border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <figure className="h-52">
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="card-title text-lg text-neutral">
                    {product.name}
                  </h3>
                  <span className="badge badge-primary shrink-0">
                    {product.make}
                  </span>
                </div>
                <p className="text-sm text-base-content/65">
                  {product.year} {product.make} {product.model}
                </p>
                <p className="mt-2 text-xs font-medium tracking-wider text-base-content/50 uppercase">
                  OEM: {product.oemCode}
                </p>
                <div className="card-actions mt-4">
                  <ProductDetailsModal product={product} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-base-200 px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-black text-neutral">
              Need help specifying a solution?
            </h2>
            <p className="mt-2 text-base-content/70">
              Our team can help match your requirements to the right supplier.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary rounded-full">
            Talk to an expert <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
