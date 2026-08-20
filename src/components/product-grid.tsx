"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { products } from "~/lib/product-data";
import { LogoParticles } from "./ui/logo-particles";

export function ProductGrid() {
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return products;

    return products.filter((product) =>
      product.make.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <section
      id="products"
      className="relative isolate overflow-hidden bg-base-200 px-6 py-20 lg:px-8"
    >
      <LogoParticles className="-z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(circle_at_20%_20%,oklch(var(--p)/0.2)_1px,transparent_1px),radial-gradient(circle_at_80%_70%,oklch(var(--s)/0.18)_1px,transparent_1px)] [background-size:42px_42px,68px_68px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Find your fit
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Premium parts for every drive
          </h2>

          <p className="mt-4 text-base-content/70">
            Search our catalog by vehicle make to find the right replacement
            component.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="flex-1">
            <span className="sr-only">Search products by make</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by make, e.g. Toyota"
              className="input input-bordered w-full bg-base-100 shadow-sm"
            />
          </label>

          <fieldset
            className="join self-start sm:self-auto"
            aria-label="Product layout"
          >
            <button
              type="button"
              aria-label="Display products in a grid"
              aria-pressed={layout === "grid"}
              onClick={() => setLayout("grid")}
              className={`join-item btn ${
                layout === "grid" ? "btn-primary" : "btn-outline"
              }`}
            >
              Grid
            </button>

            <button
              type="button"
              aria-label="Display products in a list"
              aria-pressed={layout === "list"}
              onClick={() => setLayout("list")}
              className={`join-item btn ${
                layout === "list" ? "btn-primary" : "btn-outline"
              }`}
            >
              List
            </button>
          </fieldset>
        </div>

        {filteredProducts.length > 0 ? (
          <div
            className={
              layout === "grid"
                ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                : "grid gap-4"
            }
          >
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className={`card overflow-hidden border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  layout === "list" ? "sm:card-side" : ""
                }`}
              >
                <figure
                  className={
                    layout === "list"
                      ? "h-52 shrink-0 sm:h-auto sm:w-56"
                      : "h-56"
                  }
                >
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
                    <h3 className="card-title text-lg">{product.name}</h3>
                    <span className="badge badge-primary">{product.make}</span>
                  </div>

                  <p className="text-sm text-base-content/65">
                    {product.year} {product.make} {product.model}
                  </p>

                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-base-content/50">
                    OEM: {product.oemCode}
                  </p>

                  <div className="card-actions mt-4">
                    <button type="button" className="btn btn-primary btn-sm">
                      View details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-base-300 bg-base-100 px-6 py-14 text-center">
            <h3 className="text-xl font-semibold">No products found</h3>
            <p className="mt-2 text-base-content/65">
              Try searching for another vehicle make.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
