import Link from "next/link";
import { site } from "~/lib/site";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span
        className={`relative grid size-11 place-items-center rounded-box shadow-sm transition group-hover:scale-105 lg:size-12 ${
          onDark
            ? "bg-base-100 text-neutral"
            : "bg-neutral text-neutral-content"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          className="size-6"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M16 3.2 19.4 12h9.1l-7.4 5.4 2.8 8.8L16 20.9l-7.9 5.3 2.8-8.8L3.5 12h9.1L16 3.2Z" />
        </svg>
        <span className="absolute inset-x-1 bottom-1 h-0.5 rounded-full bg-accent" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-black tracking-tight ${
            onDark ? "text-neutral-content" : "text-neutral"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`mt-1 block text-[10px] font-semibold tracking-[0.28em] uppercase ${
            onDark ? "text-info" : "text-primary"
          }`}
        >
          {site.shortName} Auto
        </span>
      </span>
    </Link>
  );
}
