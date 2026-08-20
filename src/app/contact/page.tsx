import {
  CheckBadgeIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { LogoParticles } from "~/components/ui/logo-particles";
import { site } from "~/lib/site";

function ContactPage() {
  return (
    <div className="relative isolate overflow-hidden bg-base-200">
      <LogoParticles className="pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(17rem,0.8fr)_minmax(0,1.6fr)] lg:px-16 lg:py-16">
        <div className="flex flex-col gap-6">
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body flex-row items-start gap-4 p-6">
              <span className="grid size-14 shrink-0 place-items-center rounded-box bg-primary text-primary-content shadow-lg shadow-primary/20">
                <EnvelopeIcon className="size-7" />
              </span>
              <div>
                <h2 className="card-title text-lg text-neutral">Email Us</h2>
                <p className="mt-1 text-sm text-base-content/60">
                  Drop us a line anytime
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="link link-primary mt-2 inline-block font-semibold"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body flex-row items-start gap-4 p-6">
              <span className="grid size-14 shrink-0 place-items-center rounded-box bg-accent text-accent-content shadow-lg shadow-accent/20">
                <PhoneIcon className="size-7" />
              </span>
              <div>
                <h2 className="card-title text-lg text-neutral">Call Us</h2>
                <p className="mt-1 text-sm text-base-content/60">
                  Monday to Friday, 9am-6pm
                </p>
                <a
                  href={site.phoneHref}
                  className="link link-primary mt-2 inline-block font-semibold"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body flex-row items-start gap-4 p-6">
              <span className="grid size-14 shrink-0 place-items-center rounded-box bg-neutral text-neutral-content shadow-lg shadow-neutral/20">
                <MapPinIcon className="size-7" />
              </span>
              <div>
                <h2 className="card-title text-lg text-neutral">Visit Us</h2>
                <p className="mt-1 text-sm text-base-content/60">
                  Come say hello
                </p>
                <address className="mt-2 not-italic font-medium leading-6 text-base-content/80">
                  {site.address}
                </address>
              </div>
            </div>
          </div>

          <div className="card border border-accent/30 bg-accent/10 shadow-sm">
            <div className="card-body gap-4 p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-accent text-accent-content">
                  <CheckBadgeIcon className="size-6" />
                </span>
                <h2 className="card-title text-lg text-neutral">
                  Trusted Partner
                </h2>
              </div>
              <p className="leading-6 text-base-content/80">
                Delivering professional solutions. Your success is our priority.
              </p>
            </div>
          </div>
        </div>

        <div className="card border border-base-300 bg-base-100 shadow-xl">
          <div className="card-body p-6 sm:p-8 lg:p-10">
            <h1 className="card-title text-3xl text-neutral sm:text-4xl">
              Send us a Message
            </h1>
            <p className="mt-1 text-base text-base-content/60 sm:text-lg">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            <form
              className="mt-7 grid gap-5"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-control gap-2">
                  <span className="label-text font-semibold text-neutral">
                    First Name <span className="text-error">*</span>
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    autoComplete="given-name"
                    required
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control gap-2">
                  <span className="label-text font-semibold text-neutral">
                    Last Name <span className="text-error">*</span>
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    autoComplete="family-name"
                    required
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-control gap-2">
                  <span className="label-text font-semibold text-neutral">
                    Email Address <span className="text-error">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    required
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control gap-2">
                  <span className="label-text font-semibold text-neutral">
                    Phone Number <span className="text-error">*</span>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+XX XX XX XX XX"
                    autoComplete="tel"
                    required
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <label className="form-control gap-2">
                <span className="label-text font-semibold text-neutral">
                  Subject <span className="text-error">*</span>
                </span>
                <input
                  type="text"
                  name="subject"
                  placeholder="What can we help you with?"
                  required
                  className="input input-bordered w-full"
                />
              </label>

              <label className="form-control gap-2">
                <span className="label-text font-semibold text-neutral">
                  Message <span className="text-error">*</span>
                </span>
                <textarea
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  maxLength={2000}
                  required
                  className="textarea textarea-bordered min-h-36 w-full resize-y"
                />
                <span className="label-text-alt self-end text-base-content/50">
                  0/2000
                </span>
              </label>

              <button type="submit" className="btn btn-primary mt-2 w-fit">
                Send Message
                <PaperAirplaneIcon className="size-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
