import Image from "next/image";
import Link from "next/link";
import logo from "~/../public/assets/logo.png";
import { site } from "~/lib/site";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" aria-label={site.name} className="inline-flex items-center">
      <Image
        src={logo}
        alt={site.name}
        className={onDark ? "h-16 w-auto" : "h-14 w-auto"}
        priority={!onDark}
      />
    </Link>
  );
}
