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

export const productCategories = [
  {
    slug: "equipment-machinery",
    name: "Equipment & Machinery",
    description:
      "Production equipment, handling, cutting, and auxiliary systems.",
    groups: [
      {
        slug: "forging",
        name: "Forging",
        items: ["Excentric Press", "Hydraulic Press", "Heating oven"],
      },
      {
        slug: "welding",
        name: "Welding",
        items: ["Welding robot", "MIG welding", "Overlay welding"],
      },
      {
        slug: "machining",
        name: "Machining",
        items: ["Lathe", "Milling", "Drilling", "Machining center"],
      },
      {
        slug: "surface-treatment",
        name: "Surface Treatment",
        items: ["Electrophoresis", "Powder coating", "Sand blasting"],
      },
      {
        slug: "material-handling",
        name: "Material Handling",
        items: ["Storage shelves", "Laser marking", "Packaging"],
      },
      {
        slug: "cutting",
        name: "Cutting",
        items: ["Laser cutting", "Band saw", "Rebar cutting", "Chamfering"],
      },
      {
        slug: "auxiliary-equipment",
        name: "Auxiliary equipment",
        items: ["Compressors", "Cooling systems", "Power generators"],
      },
    ],
  },
  {
    slug: "tooling-engineering-services",
    name: "Tooling, Engineering Services",
    description:
      "Specialist tooling and testing support for industrial production.",
    groups: [
      {
        slug: "automotive-tooling",
        name: "Automotive",
        items: ["Machining tools", "Cutting tools"],
      },
      {
        slug: "plastic-injection-tooling",
        name: "Plastic Injection",
        items: [
          "Hot runner molds",
          "Cold runner molds",
          "Tooling & accessories",
        ],
      },
      {
        slug: "laboratory-testing-equipment",
        name: "Laboratory & Testing equipment",
        items: [
          "Mechanical / physical laboratory",
          "Chemical and Material testing",
          "Instruments and tools",
        ],
      },
    ],
  },
  {
    slug: "raw-materials-services",
    name: "Raw materials, Services",
    description:
      "Reliable materials and supply services for automotive production.",
    groups: [
      {
        slug: "automotive-raw-materials",
        name: "Automotive",
        items: ["Cold forgings", "Hot forgings", "Steel plate", "Castings"],
      },
      {
        slug: "plastic-injection-materials",
        name: "Plastic Injection",
        items: ["Chemicals", "Additives"],
      },
    ],
  },
  {
    slug: "maintenance-solutions",
    name: "Maintenance Solutions",
    description:
      "Wear protection and maintenance solutions that keep operations moving.",
    groups: [
      {
        slug: "wear-protection",
        name: "Wear Protection",
        items: [
          "Ceramic linings",
          "Cladded plates - overlay welding",
          "Rubber linings",
          "Castings",
        ],
      },
      {
        slug: "conveyor-screening-maintenance",
        name: "Conveyor & Screening maintenance",
        items: ["Conveyor maintenance", "Screening maintenance"],
      },
    ],
  },
] as const;

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductGroup(slug: string) {
  for (const category of productCategories) {
    const group = category.groups.find((item) => item.slug === slug);
    if (group) return { ...group, category: category.name };
  }
}

export const steeringProducts = products.filter(
  (product) => product.group === "steering",
);
export const suspensionProducts = products.filter(
  (product) => product.group === "suspension",
);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
