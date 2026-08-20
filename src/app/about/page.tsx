import {
  CheckBadgeIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { LogoParticles } from "~/components/ui/logo-particles";

function About() {
  return (
    <main className="bg-base-200">
      <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <LogoParticles />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="mb-10 inline-block bg-primary px-5 py-2 text-xs font-bold tracking-[0.4em] text-primary-content uppercase sm:text-sm">
              Premium Selection
            </p>
            <h1 className="max-w-3xl text-6xl leading-[0.88] font-black tracking-tight text-neutral uppercase sm:text-8xl lg:text-9xl">
              Quality
              <br />
              <span className="text-accent">Trusted.</span>
            </h1>
          </div>
          <div className="max-w-2xl border-l-4 border-accent pl-8 text-xl leading-relaxed text-slate-500 sm:pl-10 sm:text-2xl lg:mt-14">
            <p>
              QBS specializes in premium steering and suspension components. We
              carefully source from{" "}
              <strong className="font-bold text-slate-600">
                trusted manufacturers and maintain rigorous quality standards,
              </strong>{" "}
              ensuring every part we offer delivers the reliability and
              performance your vehicle deserves.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-6 pb-24 sm:px-10 md:grid-cols-3 lg:px-16">
        <div className="aura text-success">
          <div className="card bg-base-100 h-full w-full card-xl shadow-sm text-base-content">
            <div className="card-body">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-lg shadow-primary/20">
                  <CheckBadgeIcon className="size-7" />
                </div>
                <span className="text-4xl font-black text-base-200">01</span>
              </div>
              <h2 className="card-title uppercase">Quality Assurance</h2>
              <p>
                We partner with certified manufacturers who maintain strict
                quality standards. Every component we source meets or exceeds
                OEM specifications, ensuring you receive parts that fit
                perfectly and perform reliably in real-world driving conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="aura text-success">
          <div className="card bg-base-100 h-full w-full card-xl shadow-sm text-base-content">
            <div className="card-body">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-lg shadow-primary/20">
                  <Squares2X2Icon className="size-7" />
                </div>
                <span className="text-4xl font-black text-base-200">02</span>
              </div>
              <h2 className="card-title uppercase">Extensive Selection</h2>
              <p>
                Our curated inventory spans thousands of SKUs across all major
                vehicle makes and models. From domestic to import, vintage to
                modern, we maintain relationships with top-tier suppliers to
                ensure you always have access to the right part when you need
                it.
              </p>
            </div>
          </div>
        </div>

        <div className="aura text-success">
          <div className="card bg-base-100 h-full w-full card-xl shadow-sm text-base-content">
            <div className="card-body">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-lg shadow-primary/20">
                  <ShieldCheckIcon className="size-7" />
                </div>
                <span className="text-4xl font-black text-base-200">03</span>
              </div>
              <h2 className="card-title uppercase">Expert Support</h2>
              <p>
                Our knowledgeable team brings years of automotive experience to
                help you find the perfect match for your vehicle. We provide
                detailed fitment information, installation guidance, and ongoing
                support to ensure your complete satisfaction with every
                purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
