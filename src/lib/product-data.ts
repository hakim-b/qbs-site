import { z } from "zod";

const productSchema = z.object({
  id: z.string().min(1),
  imgSrc: z.url(),
  name: z.string().min(1),
  year: z.number().int().min(1900).max(2028),
  make: z.string().min(1),
  model: z.string().min(1),
  oemCode: z.string().min(1),
});

export type Product = z.infer<typeof productSchema>;

export const products: Product[] = [
  {
    id: "prod-001",
    imgSrc:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80",
    name: "Front Brake Pad Set",
    year: 2020,
    make: "Toyota",
    model: "Camry",
    oemCode: "04465-33480",
  },
  {
    id: "prod-002",
    imgSrc:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
    name: "Engine Air Filter",
    year: 2019,
    make: "Honda",
    model: "Civic",
    oemCode: "17220-5BA-A00",
  },
  {
    id: "prod-003",
    imgSrc:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    name: "Oil Filter",
    year: 2021,
    make: "Ford",
    model: "F-150",
    oemCode: "FL-500S",
  },
  {
    id: "prod-004",
    imgSrc:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    name: "LED Headlight Assembly",
    year: 2018,
    make: "Chevrolet",
    model: "Silverado 1500",
    oemCode: "84552194",
  },
  {
    id: "prod-005",
    imgSrc:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
    name: "Iridium Spark Plug",
    year: 2022,
    make: "Hyundai",
    model: "Elantra",
    oemCode: "18846-11070",
  },
  {
    id: "prod-006",
    imgSrc:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    name: "Cabin Air Filter",
    year: 2020,
    make: "Nissan",
    model: "Altima",
    oemCode: "27277-6CA0A",
  },
  {
    id: "prod-007",
    imgSrc:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    name: "Alternator",
    year: 2017,
    make: "BMW",
    model: "3 Series",
    oemCode: "12317591548",
  },
  {
    id: "prod-008",
    imgSrc:
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=80",
    name: "Water Pump",
    year: 2019,
    make: "Volkswagen",
    model: "Jetta",
    oemCode: "06A-121-012G",
  },
  {
    id: "prod-009",
    imgSrc:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    name: "Oxygen Sensor",
    year: 2021,
    make: "Mazda",
    model: "CX-5",
    oemCode: "PE01-18-861",
  },
  {
    id: "prod-010",
    imgSrc:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80",
    name: "Engine Thermostat",
    year: 2018,
    make: "Jeep",
    model: "Wrangler",
    oemCode: "68424123AA",
  },
  {
    id: "prod-011",
    imgSrc:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80",
    name: "Front Lower Control Arm",
    year: 2020,
    make: "Subaru",
    model: "Outback",
    oemCode: "20202AN010",
  },
  {
    id: "prod-012",
    imgSrc:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=80",
    name: "Automotive Battery",
    year: 2022,
    make: "Kia",
    model: "Sportage",
    oemCode: "37110-2S650",
  },
  {
    id: "prod-013",
    imgSrc:
      "https://images.unsplash.com/photo-1525609004556-c46c7dcfb2c1?auto=format&fit=crop&w=900&q=80",
    name: "Fuel Pump Module",
    year: 2016,
    make: "Dodge",
    model: "Charger",
    oemCode: "68194349AB",
  },
  {
    id: "prod-014",
    imgSrc:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80",
    name: "Serpentine Belt",
    year: 2019,
    make: "Mercedes-Benz",
    model: "C-Class",
    oemCode: "A2749930396",
  },
  {
    id: "prod-015",
    imgSrc:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    name: "Rear Shock Absorber",
    year: 2021,
    make: "Tesla",
    model: "Model 3",
    oemCode: "1044358-00-B",
  },
];
