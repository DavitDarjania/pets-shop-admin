import { IPet } from "../models/pet";
import { ICategorie } from "../models/category";

export const pets: IPet[] = [
  {
    petsId: "pet-1",
    title: "Golden Retriever",
    categorieId: "cat-1",
    price: "1200",
    description: "A friendly and intelligent dog, great for families.",
    isPopular: true,
    stackNum: 5,
    img: "🐕",
  },
  {
    petsId: "pet-2",
    title: "British Shorthair",
    categorieId: "cat-2",
    price: "900",
    description: "Calm and affectionate cat with a plush coat.",
    isPopular: true,
    stackNum: 3,
    img: "🐈",
  },
  {
    petsId: "pet-3",
    title: "Parrot",
    categorieId: "cat-3",
    price: "350",
    description: "Smart bird that can learn to mimic sounds.",
    isPopular: false,
    stackNum: 10,
    img: "🦜",
  },
  {
    petsId: "pet-4",
    title: "Duck",
    categorieId: "cat-3",
    price: "150",
    description: "Cute and social water bird.",
    isPopular: false,
    stackNum: 7,
    img: "🦆",
  },
  {
    petsId: "pet-5",
    title: "Gecko",
    categorieId: "cat-4",
    price: "200",
    description: "Easy-to-care reptile for beginners.",
    isPopular: false,
    stackNum: 4,
    img: "🦎",
  },
];
export const categories: ICategorie[] = [
  {
    categorieId: "cat-1",
    name: "Dogs",
    description: "Friendly and loyal pets",
  },
  {
    categorieId: "cat-2",
    name: "Cats",
    description: "Independent and graceful pets",
  },
  {
    categorieId: "cat-3",
    name: "Birds",
    description: "Colorful and cheerful companions",
  },
  {
    categorieId: "cat-4",
    name: "Reptiles",
    description: "Exotic cold-blooded animals",
  },
];
