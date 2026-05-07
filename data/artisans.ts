export type Artisan = {
  id: string;
  name: string;
  craft: string;
  location: string;
  years: number;
  bio: string;
  specialty: string;
};

const artisans: Artisan[] = [
  {
    id: "a1",
    name: "Ramesh Kumawat",
    craft: "Zardozi Embroidery",
    location: "Barmer, Rajasthan",
    years: 32,
    bio: "Third-generation zardozi master whose family has practiced the art of goldwork embroidery since the Mughal era. Ramesh trains a workshop of 18 artisans, producing pieces sought by luxury houses in Milan and Paris.",
    specialty: "Gold & Silver Thread Embroidery"
  },
  {
    id: "a2",
    name: "Fatima Bai",
    craft: "Mirror & Patch Work",
    location: "Kutch, Gujarat",
    years: 25,
    bio: "A luminary of traditional Kutchi mirror work, Fatima's geometric compositions have won national craft awards. Her workshop exclusively supplies premium textiles to international fashion exporters.",
    specialty: "Kutchi Abhla Bharat"
  },
  {
    id: "a3",
    name: "Gopal Singh Rathore",
    craft: "Leather Carving",
    location: "Jodhpur, Rajasthan",
    years: 28,
    bio: "Gopal inherited his carving tools from a lineage of royal craftsmen who served the Maharajas of Jodhpur. Today, his precision leather carving adorns luxury export bags sold in Harrods and Galeries Lafayette.",
    specialty: "Mughal Motif Leather Work"
  },
  {
    id: "a4",
    name: "Kavita Sharma",
    craft: "Block Printing",
    location: "Sanganer, Jaipur",
    years: 18,
    bio: "An innovator in traditional hand block printing, Kavita merges centuries-old wooden block patterns with contemporary organic dye chemistry, creating export-ready textiles with zero synthetic chemicals.",
    specialty: "Natural Dye Block Printing"
  },
  {
    id: "a5",
    name: "Abdul Razzak Khan",
    craft: "Brass Metalwork",
    location: "Moradabad, UP",
    years: 35,
    bio: "Recognized by the Indian government for excellence in metal craft, Abdul's workshop produces hand-hammered brass hardware and minaudière cases using techniques unchanged for 400 years.",
    specialty: "Hand-hammered Brassware"
  },
  {
    id: "a6",
    name: "Meena Devi",
    craft: "Kashmiri Pashmina Weaving",
    location: "Srinagar, Kashmir",
    years: 22,
    bio: "One of fewer than 100 certified kani weavers in Kashmir, Meena's intricately patterned pashmina textiles require months per piece and are recognized by the GI tag for authentic Kashmiri craftsmanship.",
    specialty: "Kani Shawl & Fabric Weaving"
  }
];

export default artisans;
