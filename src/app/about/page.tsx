import {
  ArrowTrendingUpIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import CardSwap, { Card } from "~/components/ui/card-swap";
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

      <section className="relative overflow-hidden bg-neutral px-6 py-24 text-neutral-content sm:px-10 lg:px-16 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,147,227,0.18),transparent_42%),linear-gradient(115deg,rgba(1,113,187,0.16),transparent_45%,rgba(120,190,32,0.07))]"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(120,190,32,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(1,113,187,0.16)_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-block bg-primary px-4 py-2 text-xs font-bold tracking-[0.35em] text-primary-content uppercase">
              Our journey
            </p>
            <h2 className="text-4xl leading-tight font-black tracking-tight uppercase sm:text-6xl">
              Built on <span className="text-accent">trust.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-content/70 sm:text-lg">
              From a focused beginning to a dependable source for steering and
              suspension components, every step has strengthened the way we
              serve our partners.
            </p>
          </div>

          <ul className="timeline timeline-vertical timeline-snap-icon mt-16 w-full">
            <li>
              <div className="timeline-start mb-10 text-right text-sm font-bold tracking-[0.25em] text-accent uppercase md:mb-0">
                Step 01
              </div>
              <div className="timeline-middle">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-content shadow-lg shadow-primary/30 ring-8 ring-neutral">
                  <RocketLaunchIcon className="size-6" />
                </div>
              </div>
              <div className="timeline-end mb-10 w-full md:mb-0 md:max-w-md">
                <div className="card border border-neutral-content/10 bg-neutral-content/10 shadow-xl">
                  <div className="card-body p-6 sm:p-8">
                    <h3 className="card-title text-2xl text-neutral-content">
                      The beginning
                    </h3>
                    <p className="text-neutral-content/70">
                      QBS begins with a clear purpose: make dependable
                      automotive components easier to source.
                    </p>
                  </div>
                </div>
              </div>
              <hr className="bg-primary" />
            </li>

            <li>
              <hr className="bg-accent" />
              <div className="timeline-start mb-10 w-full md:mb-0 md:max-w-md">
                <div className="card border border-neutral-content/10 bg-neutral-content/10 shadow-xl">
                  <div className="card-body p-6 sm:p-8">
                    <h3 className="card-title text-2xl text-neutral-content">
                      Trusted partnerships
                    </h3>
                    <p className="text-neutral-content/70">
                      We build lasting relationships with manufacturers who
                      share our standards for fit, durability, and consistency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-middle">
                <div className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-content shadow-lg shadow-accent/20 ring-8 ring-neutral">
                  <UserGroupIcon className="size-6" />
                </div>
              </div>
              <div className="timeline-end mb-10 md:mb-0 md:pl-4">
                <span className="text-sm font-bold tracking-[0.25em] text-accent uppercase">
                  Step 02
                </span>
              </div>
              <hr className="bg-primary" />
            </li>

            <li>
              <hr className="bg-primary" />
              <div className="timeline-start mb-10 text-right text-sm font-bold tracking-[0.25em] text-accent uppercase md:mb-0">
                Step 03
              </div>
              <div className="timeline-middle">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-content shadow-lg shadow-primary/30 ring-8 ring-neutral">
                  <Squares2X2Icon className="size-6" />
                </div>
              </div>
              <div className="timeline-end mb-10 w-full md:mb-0 md:max-w-md">
                <div className="card border border-neutral-content/10 bg-neutral-content/10 shadow-xl">
                  <div className="card-body p-6 sm:p-8">
                    <h3 className="card-title text-2xl text-neutral-content">
                      A wider selection
                    </h3>
                    <p className="text-neutral-content/70">
                      Our range grows across vehicle makes and models, giving
                      partners more of the parts they need in one place.
                    </p>
                  </div>
                </div>
              </div>
              <hr className="bg-accent" />
            </li>

            <li>
              <hr className="bg-accent" />
              <div className="timeline-start mb-10 w-full md:mb-0 md:max-w-md">
                <div className="card border border-neutral-content/10 bg-neutral-content/10 shadow-xl">
                  <div className="card-body p-6 sm:p-8">
                    <h3 className="card-title text-2xl text-neutral-content">
                      Quality, every time
                    </h3>
                    <p className="text-neutral-content/70">
                      Rigorous sourcing and careful product selection keep
                      quality at the center of every component we offer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-middle">
                <div className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-content shadow-lg shadow-accent/20 ring-8 ring-neutral">
                  <ShieldCheckIcon className="size-6" />
                </div>
              </div>
              <div className="timeline-end mb-10 md:mb-0 md:pl-4">
                <span className="text-sm font-bold tracking-[0.25em] text-accent uppercase">
                  Step 04
                </span>
              </div>
              <hr className="bg-primary" />
            </li>

            <li>
              <hr className="bg-primary" />
              <div className="timeline-start mb-10 text-right text-sm font-bold tracking-[0.25em] text-accent uppercase md:mb-0">
                Step 05
              </div>
              <div className="timeline-middle">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-content shadow-lg shadow-primary/30 ring-8 ring-neutral">
                  <ArrowTrendingUpIcon className="size-6" />
                </div>
              </div>
              <div className="timeline-end w-full md:max-w-md">
                <div className="card border border-accent/40 bg-primary/15 shadow-xl">
                  <div className="card-body p-6 sm:p-8">
                    <h3 className="card-title text-2xl text-neutral-content">
                      Moving forward
                    </h3>
                    <p className="text-neutral-content/70">
                      We keep improving our selection, service, and support so
                      every partnership is ready for the road ahead.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-base-200 px-6 pt-24 pb-32 sm:px-10 sm:pb-36 lg:px-16 lg:py-32">
        <LogoParticles />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-[linear-gradient(135deg,transparent_0%,rgba(1,113,187,0.08)_100%)]" />
        <div className="relative mx-auto grid min-h-[38rem] w-full max-w-7xl items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <div className="max-w-xl">
            <p className="mb-5 inline-block bg-accent px-4 py-2 text-xs font-bold tracking-[0.35em] text-accent-content uppercase">
              What guides us
            </p>
            <h2 className="text-4xl leading-[0.95] font-black tracking-tight text-neutral uppercase sm:text-6xl">
              The principles
              <br />
              <span className="text-primary">behind every part.</span>
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-base-content/70">
              Our mission, vision, and values shape every supplier we choose,
              every component we inspect, and every partnership we build.
            </p>
            <div className="mt-10 flex items-center gap-4 text-sm font-bold tracking-[0.25em] text-neutral uppercase">
              <span className="h-px w-12 bg-accent" />
              Built for the road ahead
            </div>
          </div>

          <div className="relative mx-auto h-[34rem] w-full max-w-[42rem] max-[768px]:h-[32rem]">
            <CardSwap
              width="min(34rem, 76vw)"
              height="32rem"
              cardDistance={56}
              verticalDistance={42}
              delay={3000}
              pauseOnHover
              skewAmount={4}
              easing="elastic"
            >
              <Card
                customClass="overflow-hidden border-primary/40 bg-neutral text-neutral-content shadow-2xl"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(18,20,75,0.08) 20%, rgba(18,20,75,0.94) 100%), url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1000&q=85')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex h-full flex-col justify-end p-8 sm:p-10">
                  <span className="mb-auto text-6xl font-black text-neutral-content/30">
                    01
                  </span>
                  <p className="mb-3 text-xs font-bold tracking-[0.35em] text-accent uppercase">
                    Our vision
                  </p>
                  <h3 className="text-4xl font-black uppercase">
                    Trust in motion
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-neutral-content/75">
                    To be the trusted source for premium steering and suspension
                    components across every vehicle platform.
                  </p>
                </div>
              </Card>

              <Card
                customClass="overflow-hidden border-accent/50 bg-neutral text-neutral-content shadow-2xl"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(18,20,75,0.04) 20%, rgba(18,20,75,0.94) 100%), url('https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1000&q=85')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex h-full flex-col justify-end p-8 sm:p-10">
                  <span className="mb-auto text-6xl font-black text-neutral-content/30">
                    02
                  </span>
                  <p className="mb-3 text-xs font-bold tracking-[0.35em] text-accent uppercase">
                    Our mission
                  </p>
                  <h3 className="text-4xl font-black uppercase">
                    Made to matter
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-neutral-content/75">
                    To deliver exceptional solutions through rigorous quality
                    standards and expert support.
                  </p>
                </div>
              </Card>

              <Card
                customClass="overflow-hidden border-primary/40 bg-neutral text-neutral-content shadow-2xl"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(18,20,75,0.04) 20%, rgba(18,20,75,0.94) 100%), url('https://images.unsplash.com/photo-1530046339912-5a0af2a4a9d3?auto=format&fit=crop&w=1000&q=85')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex h-full flex-col justify-end p-8 sm:p-10">
                  <span className="mb-auto text-6xl font-black text-neutral-content/30">
                    03
                  </span>
                  <p className="mb-3 text-xs font-bold tracking-[0.35em] text-accent uppercase">
                    Our values
                  </p>
                  <h3 className="text-4xl font-black uppercase">
                    Quality first
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-neutral-content/75">
                    Precision engineering, transparent communication, and an
                    unwavering commitment to automotive excellence.
                  </p>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
