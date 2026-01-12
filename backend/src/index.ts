import express from "express";
import cors from "cors";
import petsRoutes from "./routes/pets.routes";
import categoriesRoutes from "./routes/categories.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/pets", petsRoutes);
app.use("/categories", categoriesRoutes);

app.get("/", (_req, res) => {
  res.send("Pet Store API running");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
