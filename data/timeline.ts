export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

const timeline: TimelineEvent[] = [
  {
    year: "1984",
    title: "The First Workshop",
    description:
      "Founded in the heart of Rajasthan, Marudhar Handicrafts began as a single artisan workshop in Jodhpur's old city, producing hand-embroidered bags for local markets."
  },
  {
    year: "1991",
    title: "First Export Order",
    description:
      "A boutique buyer from London discovered Marudhar at the Delhi Handicrafts Expo. Our first international shipment of zardozi totes launched a global chapter."
  },
  {
    year: "1998",
    title: "Artisan Guild Formation",
    description:
      "We established the Marudhar Artisan Guild — a cooperative uniting over 60 master craftspeople across Rajasthan, Gujarat, and Kashmir under fair-trade principles."
  },
  {
    year: "2005",
    title: "Luxury Retail Partnerships",
    description:
      "Marudhar collections entered luxury retail floors in the UK, UAE, and the USA, with bespoke lines commissioned by boutique hotel groups and designer labels."
  },
  {
    year: "2012",
    title: "Heritage Certification",
    description:
      "Certified by the Craft Council of India for authentic heritage techniques. Our zardozi and leather carving lines received the Geographical Indication (GI) tag."
  },
  {
    year: "2018",
    title: "Sustainability Charter",
    description:
      "Launched the Green Artisan initiative — 100% natural dyes, responsibly sourced leather, and zero-waste packaging protocols across all export lines."
  },
  {
    year: "2024",
    title: "40 Years, 28 Countries",
    description:
      "Celebrating four decades of luxury craft with 120+ artisan partners, presence in 28 global markets, and a new flagship digital export studio for B2B buyers worldwide."
  }
];

export default timeline;
