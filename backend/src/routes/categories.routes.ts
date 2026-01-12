import { Router } from "express";
import { v4 as uuid } from "uuid";
import { categories } from "../data/store";

const router = Router();

router.get("/", (_req, res) => {
  res.json(categories);
});

router.get("/:id", (req, res) => {
  const category = categories.find((p) => p.categorieId === req.params.id);

  if (!category) {
    return res.sendStatus(404);
  }

  res.json(category);
});

router.post("/", (req, res) => {
  const category = {
    categorieId: uuid(),
    name: req.body.name,
    description: req.body.description,
  };

  categories.push(category);
  res.status(201).json(category);
});

router.put("/:id", (req, res) => {
  const category = categories.find((c) => c.categorieId === req.params.id);
  if (!category) return res.sendStatus(404);

  category.name = req.body.name ?? category.name;
  category.description = req.body.description ?? category.description;

  res.json(category);
});

router.delete("/:id", (req, res) => {
  const index = categories.findIndex((c) => c.categorieId === req.params.id);
  if (index === -1) return res.sendStatus(404);

  categories.splice(index, 1);
  res.sendStatus(204);
});

export default router;
