export type Perfume = {
  slug: string;
  name: string;
  notes: string;
  description: string;
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
  color: string;
};

export const perfumes: Perfume[] = [
  {
    slug: "peach-day",
    name: "peach day",
    notes: "Peach · Jasmine · Musk",
    description:
      "A soft, cheerful fragrance for slow mornings and brighter days.",
    topNotes: "Peach, Mandarin",
    heartNotes: "Jasmine, Rose",
    baseNotes: "Musk, Vanilla",
    color: "peach",
  },

  {
    slug: "after-rain",
    name: "after rain",
    notes: "Bergamot · Green Tea · Musk",
    description:
      "A fresh scent inspired by the calm air after a rainy afternoon.",
    topNotes: "Bergamot, Lemon",
    heartNotes: "Green Tea, Violet",
    baseNotes: "White Musk, Cedar",
    color: "sage",
  },
  
  {
    slug: "sunlit-morning",
    name: "sunlit morning",
    notes: "Citrus · White Tea · Cedar",
    description:
      "A light, warm fragrance inspired by sunshine through the window.",
    topNotes: "Orange, Lemon",
    heartNotes: "White Tea, Neroli",
    baseNotes: "Cedar, Amber",
    color: "yellow",
  },
];
