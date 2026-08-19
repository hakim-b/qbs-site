import {
  Cog6ToothIcon,
  CubeIcon,
  CubeTransparentIcon,
  EnvelopeIcon,
  HomeIcon,
  LinkIcon,
  NewspaperIcon,
  UserGroupIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        width="20"
        height="20"
        x="2"
        y="2"
        rx="5"
        ry="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="17.5"
        x2="17.51"
        y1="6.5"
        y2="6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        width="4"
        height="12"
        x="2"
        y="9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m10 15 5-3-5-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const productIcons = {
  "control-arm": Cog6ToothIcon,
  "stabilizer-link": LinkIcon,
  "steering-ball-joint": WrenchIcon,
  "suspension-ball-joint": CubeTransparentIcon,
  "tie-rod-end": CubeIcon,
} as const;

export function ProductIcon({
  slug,
  ...props
}: IconProps & { slug: keyof typeof productIcons }) {
  const Component = productIcons[slug];
  return <Component {...props} />;
}

const navIcons = {
  home: HomeIcon,
  users: UserGroupIcon,
  news: NewspaperIcon,
  mail: EnvelopeIcon,
} as const;

export function NavIcon({
  name,
  ...props
}: IconProps & { name: keyof typeof navIcons }) {
  const Component = navIcons[name];
  return <Component {...props} />;
}
