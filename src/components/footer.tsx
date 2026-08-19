import {
  ArrowUpRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ProductIcon,
  YoutubeIcon,
} from "~/components/icons";
import { Logo } from "~/components/logo";
import { Aurora } from "~/components/ui/aurora";
import { site, steeringProducts, suspensionProducts } from "~/lib/site";

const auroraColors = ["#0171bb", "#78be20", "#0693e3"] as const;

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

const socialLinks = [
  { href: site.social.facebook, label: "Facebook", icon: FacebookIcon },
  { href: site.social.instagram, label: "Instagram", icon: InstagramIcon },
  { href: site.social.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: site.social.youtube, label: "YouTube", icon: YoutubeIcon },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral text-neutral-content">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
      >
        <Aurora
          colorStops={auroraColors}
          amplitude={1.1}
          blend={0.55}
          speed={0.6}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-10 border-primary/20 border-b pb-12 lg:grid-cols-2">
          <div className="space-y-5">
            <Logo onDark />
            <p className="max-w-md text-neutral-content/70 leading-relaxed">
              {site.description}
            </p>
            <div className="flex gap-2 pt-1">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="btn btn-circle btn-sm btn-outline border-primary/40 text-info hover:border-primary hover:bg-primary hover:text-primary-content"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 font-bold text-info text-lg uppercase tracking-wide">
              Get In Touch
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-4 rounded-box border border-primary/20 bg-neutral-content/5 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-field bg-primary/20 text-info">
                  <MapPinIcon className="size-4" />
                </span>
                <div>
                  <p className="mb-1 font-semibold text-info text-xs uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-neutral-content/70 text-sm">
                    {site.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-box border border-info/20 bg-neutral-content/5 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-field bg-info/20 text-info">
                  <PhoneIcon className="size-4" />
                </span>
                <div>
                  <p className="mb-1 font-semibold text-info text-xs uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href={site.phoneHref}
                    className="link link-hover text-neutral-content/70 text-sm"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-box border border-accent/20 bg-neutral-content/5 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-field bg-accent/20 text-accent">
                  <EnvelopeIcon className="size-4" />
                </span>
                <div>
                  <p className="mb-1 font-semibold text-accent text-xs uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="link link-hover text-neutral-content/70 text-sm"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer sm:footer-horizontal mb-10 gap-8">
          <nav>
            <h2 className="footer-title text-neutral-content opacity-100">
              Company
            </h2>
            {companyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-hover link inline-flex items-center gap-2 text-neutral-content/70"
              >
                {item.label}
                <ArrowUpRightIcon className="size-3.5 opacity-50" />
              </Link>
            ))}
          </nav>

          <nav>
            <h2 className="footer-title text-neutral-content opacity-100">
              Steering Parts
            </h2>
            {steeringProducts.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="link-hover link inline-flex items-center gap-2 text-neutral-content/70"
              >
                <ProductIcon
                  slug={product.slug}
                  className="size-3.5 text-info"
                />
                {product.name}
              </Link>
            ))}
          </nav>

          <nav>
            <h2 className="footer-title text-neutral-content opacity-100">
              Suspension Parts
            </h2>
            {suspensionProducts.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="link-hover link inline-flex items-center gap-2 text-neutral-content/70"
              >
                <ProductIcon
                  slug={product.slug}
                  className="size-3.5 text-accent"
                />
                {product.name}
              </Link>
            ))}
          </nav>

          <nav className="max-w-xs">
            <h2 className="footer-title text-neutral-content opacity-100">
              Need Assistance?
            </h2>
            <p className="text-neutral-content/70 text-sm leading-relaxed">
              Looking for steering or suspension parts? Contact our team for
              product details, availability, or a quotation.
            </p>
            <Link href="/contact" className="btn mt-2">
              Get a Quote
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-primary/20 border-t pt-6 text-neutral-content/60 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-info">{site.name}</span>. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="link link-hover">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link link-hover">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
