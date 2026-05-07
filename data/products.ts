export type Product = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  category: string;
  material: string;
  tag: string;
  featured: boolean;
  moq: number;
  exportReady: boolean;
};

const products: Product[] = [
  {
    id: "p1",
    title: "Royal Rajasthani Tote",
    subtitle: "Hand-embroidered silk & leather luxury tote",
    description:
      "Crafted by master artisans in Jodhpur, this tote features intricate mirror-work embroidery on silk with full-grain leather trim and brass hardware.",
    price: "From $180 / unit",
    category: "Tote Bags",
    material: "Silk & Leather",
    tag: "Signature Series",
    featured: true,
    moq: 50,
    exportReady: true
  },
  {
    id: "p2",
    title: "Jodhpur Suede Clutch",
    subtitle: "Velvet-lined suede evening clutch with zardozi",
    description:
      "An evening clutch adorned with traditional zardozi goldwork on supple suede, velvet interior lining, and magnetic clasp closure.",
    price: "From $95 / unit",
    category: "Clutches",
    material: "Suede",
    tag: "Limited Batch",
    featured: true,
    moq: 100,
    exportReady: true
  },
  {
    id: "p3",
    title: "Desert Dune Satchel",
    subtitle: "Full-grain leather satchel with camel bone detailing",
    description:
      "Structured full-grain leather satchel handcrafted in the Thar Desert tradition, featuring camel bone and brass accent closures.",
    price: "From $220 / unit",
    category: "Satchels",
    material: "Full-grain Leather",
    tag: "Export Ready",
    featured: false,
    moq: 30,
    exportReady: true
  },
  {
    id: "p4",
    title: "Heritage Jute Shopper",
    subtitle: "Eco-luxury hand-blocked jute shopper bag",
    description:
      "Sustainable luxury: hand-blocked natural dyes on artisan jute with vegan leather handles. Perfect for retail and hospitality gifting.",
    price: "From $45 / unit",
    category: "Shoppers",
    material: "Jute",
    tag: "Bulk Order",
    featured: true,
    moq: 200,
    exportReady: true
  },
  {
    id: "p5",
    title: "Kundan Bridal Potli",
    subtitle: "Silk potli with kundan jewel-setting embellishments",
    description:
      "A luxurious silk potli bag adorned with kundan stone settings and intricate thread embroidery, ideal for bridal and gifting collections.",
    price: "From $65 / unit",
    category: "Potli Bags",
    material: "Silk",
    tag: "Signature Series",
    featured: true,
    moq: 50,
    exportReady: true
  },
  {
    id: "p6",
    title: "Indigo Block Bucket Bag",
    subtitle: "Organic cotton bucket bag with hand block print",
    description:
      "Natural indigo dye hand-block printed on organic cotton with vegetable-tanned leather base and drawstring closure.",
    price: "From $55 / unit",
    category: "Bucket Bags",
    material: "Cotton",
    tag: "Eco Luxury",
    featured: false,
    moq: 150,
    exportReady: true
  },
  {
    id: "p7",
    title: "Brass Minaudière",
    subtitle: "Hand-hammered brass box clutch with mirror work",
    description:
      "A statement evening piece: hand-hammered brass box clutch with antique mirror mosaic and velvet interior, chain strap included.",
    price: "From $140 / unit",
    category: "Clutches",
    material: "Brass & Velvet",
    tag: "Limited Batch",
    featured: false,
    moq: 30,
    exportReady: false
  },
  {
    id: "p8",
    title: "Mogul Messenger Bag",
    subtitle: "Vegetable-tanned leather satchel with Mughal motif",
    description:
      "Premium vegetable-tanned leather messenger bag featuring hand-carved Mughal floral motifs on the flap, with antique brass hardware.",
    price: "From $195 / unit",
    category: "Satchels",
    material: "Full-grain Leather",
    tag: "Export Ready",
    featured: false,
    moq: 25,
    exportReady: true
  },
  {
    id: "p9",
    title: "Pashmina Weekender",
    subtitle: "Cashmere-blend weekender with leather base",
    description:
      "Luxurious cashmere-blend weekender bag, handwoven in Kashmir with a structured vegetable-tanned leather base and matching luggage tag.",
    price: "From $290 / unit",
    category: "Travel Bags",
    material: "Cashmere & Leather",
    tag: "Ultra Premium",
    featured: true,
    moq: 20,
    exportReady: true
  }
];

export const categories = [
  "All",
  "Tote Bags",
  "Clutches",
  "Satchels",
  "Shoppers",
  "Potli Bags",
  "Bucket Bags",
  "Travel Bags"
];

export const materials = [
  "All",
  "Silk & Leather",
  "Suede",
  "Full-grain Leather",
  "Jute",
  "Silk",
  "Cotton",
  "Brass & Velvet",
  "Cashmere & Leather"
];

export default products;
