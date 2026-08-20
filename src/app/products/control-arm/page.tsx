import Image from "next/image";
import { ProductGrid } from "~/components/product-grid";

export default function ControlArmPage() {
  return (
    <main>
      <section className="overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
              Premium suspension components
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Control arms built for confident control.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-primary-foreground/80">
              Upgrade your vehicle with premium control arms engineered for
              strength, precision, and a smoother driving experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-full btn btn-success px-6 py-3 text-sm font-semibold"
              >
                Explore products
              </a>

              <a
                href="#products"
                className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold btn btn-ghost"
              >
                Browse catalog
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary-foreground/10 blur-2xl" />

            <Image
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=85"
              alt="Automotive suspension and control arm components"
              className="relative h-[360px] w-full rounded-3xl object-cover shadow-2xl sm:h-[460px]"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>

      <ProductGrid />
    </main>
  );
}
