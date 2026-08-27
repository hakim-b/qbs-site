"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Product } from "~/lib/product-data";

export function ProductDetailsModal({ product }: { product: Product }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={() => dialogRef.current?.showModal()}
      >
        View details
      </button>

      <dialog
        ref={dialogRef}
        id={`product-details-${product.id}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box max-w-4xl overflow-hidden p-0">
          <div className="relative h-56 sm:h-72">
            <Image
              src={product.imgSrc}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-neutral/65" />
            <div className="absolute inset-x-6 bottom-6 text-neutral-content sm:inset-x-10 sm:bottom-8">
              <span className="badge badge-accent mb-3">{product.make}</span>
              <h2 className="text-3xl font-black sm:text-4xl">
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-neutral-content/80">
                {product.year} {product.make} {product.model}
              </p>
            </div>
            <form method="dialog" className="absolute right-4 top-4">
              <button
                type="submit"
                aria-label="Close product details"
                className="btn btn-circle btn-sm bg-base-100/90 text-base-content"
              >
                <span aria-hidden="true" className="text-xl leading-none">
                  x
                </span>
              </button>
            </form>
          </div>

          <div className="max-h-[min(60vh,34rem)] space-y-8 overflow-y-auto p-6 sm:p-10">
            <section>
              <h3 className="text-xl font-bold text-neutral">Description</h3>
              <p className="mt-3 rounded-box border border-primary/15 bg-base-200 p-5 leading-7 text-base-content/75">
                {product.description}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-neutral">
                Technical characteristics
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.specs.map((spec) => (
                  <li
                    key={spec}
                    className="rounded-box bg-base-200 px-4 py-4 text-sm font-medium text-base-content/75"
                  >
                    <span className="mr-2 text-primary" aria-hidden="true">
                      ✓
                    </span>
                    {spec}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-neutral">
                Recommended applications
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.applications.map((application) => (
                  <span
                    key={application}
                    className="badge badge-lg border-primary/25 bg-base-100 px-4 py-4 text-sm font-semibold text-base-content/75"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </section>

            <div className="flex flex-col gap-4 border-t border-base-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium uppercase tracking-wider text-base-content/50">
                OEM: {product.oemCode}
              </p>
              <a href="/contact" className="btn btn-primary">
                Request a quote
              </a>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="submit">close</button>
        </form>
      </dialog>
    </>
  );
}
