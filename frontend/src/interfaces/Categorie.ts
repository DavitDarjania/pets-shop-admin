export interface ICategorie {
  name: string;
  description: string;
  categorieId: string;
}

export const categories: ICategorie[] = [
  {
    name: "Dogs",
    description:
      "Loyal, friendly, and energetic companions. Dogs are great for families, active individuals, and anyone seeking unconditional love.",
    categorieId: "dogs",
  },
  {
    name: "Cats",
    description:
      "Independent, calm, and affectionate pets. Cats are perfect for apartment living and people who enjoy quiet companionship.",
    categorieId: "cats",
  },
  {
    name: "Birds",
    description:
      "Colorful and intelligent pets that bring life and sound into your home. Ideal for owners who enjoy interaction and activity.",
    categorieId: "birds",
  },
  {
    name: "Small Animals",
    description:
      "Cute and low-maintenance pets such as hamsters, rabbits, and guinea pigs. Great for kids and first-time pet owners.",
    categorieId: "small-animals",
  },
];
