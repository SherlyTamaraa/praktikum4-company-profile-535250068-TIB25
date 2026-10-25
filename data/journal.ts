export type JournalArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
  color: string;
};

export const journal: JournalArticle[] = [
  {
    slug: "finding-your-scent",
    title: "Finding your everyday scent",
    category: "SCENT GUIDE",
    date: "12 October 2026",
    excerpt:
      "Finding a fragrance that feels like you does not have to be complicated.",
    content: [
      "Choosing a fragrance is a personal experience. The scent you enjoy may depend on your mood, your surroundings, and the little moments in your day.",
      "Start with notes you already enjoy. Fresh citrus, soft florals, warm vanilla, and clean musk can each create a different impression.",
      "Take your time when trying a fragrance. Let it settle on your skin and see how it develops throughout the day.",
    ],
    color: "peach",
  },

  {
    slug: "the-beauty-of-slow-mornings",
    title: "The beauty of slow mornings",
    category: "EVERYDAY NOTES",
    date: "15 October 2026",
    excerpt:
      "A small morning ritual can make an ordinary day feel a little more special.",
    content: [
      "Slow mornings are not always about having more time. Sometimes, they are about giving yourself a few quiet minutes before the day begins.",
      "Open a window, make your favorite drink, and choose a fragrance that matches the feeling you want to carry with you.",
      "Little rituals do not need to be perfect. They only need to make an ordinary moment feel like your own.",
    ],
    color: "sage",
  },

  {
    slug: "understanding-fragrance-notes",
    title: "A little guide to fragrance notes",
    category: "FRAGRANCE 101",
    date: "20 October 2026",
    excerpt:
      "Top, heart, and base notes work together to create a fragrance that changes over time.",
    content: [
      "A fragrance is often described through three layers: top notes, heart notes, and base notes.",
      "Top notes are usually the first scents you notice. Heart notes appear as the fragrance develops, while base notes provide depth and tend to last longer.",
      "Understanding these layers can help you explore fragrances and find combinations that suit your preferences.",
    ],
    color: "yellow",
  },
];
