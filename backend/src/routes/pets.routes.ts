import { Router } from "express";
import { v4 as uuid } from "uuid";
import { pets } from "../data/store";

const router = Router();

router.get("/", (_req, res) => {
  res.json(pets);
});

router.post("/", (req, res) => {
  const pet = {
    petsId: uuid(),
    title: req.body.title,
    categorieId: req.body.categorieId,
    price: req.body.price,
    description: req.body.description,
    isPopular: req.body.isPopular,
    stackNum: req.body.stackNum,
    img: req.body.img,
  };

  pets.push(pet);
  res.status(201).json(pet);
});
router.get("/:id", (req, res) => {
  const pet = pets.find((p) => p.petsId === req.params.id);

  if (!pet) {
    return res.sendStatus(404);
  }

  res.json(pet);
});

router.put("/:id", (req, res) => {
  const pet = pets.find((p) => p.petsId === req.params.id);
  if (!pet) return res.sendStatus(404);

  Object.assign(pet, req.body);
  res.json(pet);
});

router.delete("/:id", (req, res) => {
  const index = pets.findIndex((p) => p.petsId === req.params.id);
  if (index === -1) return res.sendStatus(404);

  pets.splice(index, 1);
  res.sendStatus(204);
});

export default router;
