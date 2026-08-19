/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import Link from "next/link";
import { HeroSlider } from "~/components/hero-slider";
import { LogoParticles } from "~/components/ui/logo-particles";
import TitledCard from "~/components/ui/titled-card";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <div className="hero relative isolate min-h-screen overflow-hidden bg-base-200">
        <LogoParticles />
        <div
          className="pointer-events-none absolute -top-8 right-[12%] size-80 rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[8%] bottom-16 size-56 rounded-[2rem] bg-accent/15 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-8 left-[22%] size-64 rounded-full bg-info/15 blur-3xl"
          aria-hidden
        />
        <div className="hero-content relative z-10 flex-col lg:flex-row-reverse">

          <TitledCard
            imageSrc="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80"
            altText="Control arms"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
          />

          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              QBS specializes in manufacturing premium steering and suspension
              components with unmatched precision and reliability.
            </p>
            <Link
              href="/about"
              className="btn btn-primary rounded-full! border-none! px-8 text-primary-content transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
