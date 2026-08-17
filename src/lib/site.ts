export const site = {
  name: "Blue Star Auto",
  shortName: "QBS",
  tagline: "Premium steering and suspension components",
  description:
    "Leading supplier of premium steering and suspension components. We specialize in delivering high-quality automotive parts with precision engineering and exceptional service.",
  email: "contact@qbs-auto.com",
  phone: "+86 532 0000 0000",
  phoneHref: "tel:+8653200000000",
  address:
    "International distribution — contact us for your regional office and warehouse support.",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
} as const;

export const mainNav = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/about", label: "About Us", icon: "users" },
  { href: "/news", label: "News", icon: "news" },
  { href: "/contact", label: "Contact", icon: "mail" },
] as const;

export const products = [
  {
    slug: "control-arm",
    name: "Control Arm",
    group: "suspension",
    href: "/products/control-arm",
    description: "Premium control arms for optimal suspension",
  },
  {
    slug: "stabilizer-link",
    name: "Stabilizer Link",
    group: "suspension",
    href: "/products/stabilizer-link",
    description: "High-quality stabilizer links for smooth handling",
  },
  {
    slug: "steering-ball-joint",
    name: "Steering Ball Joint",
    group: "steering",
    href: "/products/steering-ball-joint",
    description: "Durable steering ball joints for precise control",
  },
  {
    slug: "suspension-ball-joint",
    name: "Suspension Ball Joint",
    group: "suspension",
    href: "/products/suspension-ball-joint",
    description: "Reliable suspension ball joints for safety",
  },
  {
    slug: "tie-rod-end",
    name: "Tie Rod End",
    group: "steering",
    href: "/products/tie-rod-end",
    description: "Professional tie rod ends for stability",
  },
] as const;

export const steeringProducts = products.filter(
  (product) => product.group === "steering",
);
export const suspensionProducts = products.filter(
  (product) => product.group === "suspension",
);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
