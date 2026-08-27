import { z } from "zod";
import { productCategories } from "~/lib/site";

const productSchema = z.object({
  id: z.uuid(),
  imgSrc: z.url(),
  name: z.string().min(1),
  year: z.number().int().min(1900).max(2028),
  make: z.string().min(1),
  model: z.string().min(1),
  oemCode: z.string().min(1),
  description: z.string().min(1),
  specs: z.array(z.string().min(1)).min(1),
  applications: z.array(z.string().min(1)).min(1),
});

export type Product = z.infer<typeof productSchema>;

const productImages = [
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
  "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
  "https://images.unsplash.com/photo-1565610222536-ef125c59da2e",
  "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
  "https://images.unsplash.com/photo-1605152276897-4f618f831968",
];

const productNames = productCategories.flatMap((category) =>
  category.groups.flatMap((group) => group.items),
);

function toProductId(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export const products: Product[] = productNames.map((name, index) => ({
  id: toProductId(name),
  imgSrc: `${productImages[index % productImages.length]}?auto=format&fit=crop&w=900&q=85`,
  name,
  year: 2025 - (index % 5),
  make: "QBS Industrial",
  model: `${name} Series ${String((index % 3) + 1).padStart(2, "0")}`,
  oemCode: `QBS-${String(index + 1).padStart(4, "0")}`,
  description: `${name} engineered for dependable performance, consistent results, and long service life in demanding production environments.`,
  specs: [
    "Precision-engineered components",
    "Designed for reliable continuous operation",
    "Quality inspected before dispatch",
    "Available with application-specific support",
  ],
  applications: [
    "Automotive production",
    "Industrial manufacturing",
    "Maintenance operations",
  ],
}));
