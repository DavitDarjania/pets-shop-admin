export interface IPet {
  petsId: string;
  title: string;
  categorieId: string;
  price: string;
  description: string;
  isPopular: boolean;
  stackNum: number;
  img: string;
}

export const pets: IPet[] = [
  {
    petsId: "1",
    title: "Golden Retriever",
    categorieId: "dogs",
    price: "1200",
    description:
      "Friendly, intelligent, and devoted dogs. Great family pets that love children and are highly trainable. These beautiful golden companions bring joy and loyalty to every household.",
    isPopular: true,
    stackNum: 5,
    img: "🐶",
  },
  {
    petsId: "2",
    title: "Persian Cat",
    categorieId: "cats",
    price: "800",
    description:
      "Calm, affectionate, and beautiful cats. They enjoy lounging around and are perfect for families or individuals seeking a relaxed companion.",
    isPopular: false,
    stackNum: 3,
    img: "🐱",
  },
  {
    petsId: "3",
    title: "Parrot",
    categorieId: "birds",
    price: "300",
    description:
      "Colorful, intelligent, and social birds. Great for those who enjoy interactive and lively pets. These beautiful creatures can mimic sounds and bond closely with their owners.",
    isPopular: true,
    stackNum: 7,
    img: "🦜",
  },
  {
    petsId: "4",
    title: "Hamster",
    categorieId: "small-animals",
    price: "50",
    description:
      "Cute, small, and easy to care for pets. Perfect for kids or anyone who wants a low-maintenance companion. These tiny animals are playful and fun to watch.",
    isPopular: false,
    stackNum: 12,
    img: "🐹",
  },
];
