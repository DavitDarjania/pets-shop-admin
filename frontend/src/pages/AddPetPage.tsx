import { useNavigate } from "react-router-dom";
import { BackTo } from "../styles/styled-components/BackTo";
import { MainForm } from "../styles/styled-components/MainForm";
import type React from "react";
import useFetch from "../hooks/useFetch";
import type { ICategorie } from "../interfaces/Categorie";
import utilPost from "../utils/utilPost";
import type { IPet } from "../interfaces/Pet";

const AddPetPage = () => {
  const navigate = useNavigate();
  const { data } = useFetch<ICategorie>("http://localhost:3000/categories");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);

    // Extract values and convert types
    const collectedData: IPet = {
      title: formData.get("title") as string,
      categorieId: formData.get("categoryId") as string, // make sure you send ID here
      price: formData.get("price") as string,
      description: formData.get("description") as string,
      isPopular: formData.get("isPopular") === "on", // checkbox
      stackNum: Number(formData.get("stackNum")),
      img: formData.get("img") as string,
      petsId: "", // backend generates this automatically
    };

    try {
      const createdPet = await utilPost(
        "http://localhost:3000/pets",
        collectedData
      );
      console.log("Created Pet:", createdPet);

      // reset form
      form.reset();
    } catch (err) {
      console.error("Error creating pet:", err);
    }
  };

  return (
    <>
      <BackTo type="button" onClick={() => navigate("/")}>
        ⇠ Back To Pets
      </BackTo>
      <MainForm onSubmit={onSubmit}>
        <h1 className="title">Add New Pet</h1>
        <div className="default-label-box">
          <label htmlFor="pet-name">Pet Name</label>
          <input type="text" id="pet-name" name="title" required />
        </div>

        <div className="default-label-box">
          <label htmlFor="category">Category</label>
          <select id="category" name="categoryId" required>
            <option value="">Select category</option>
            {data?.map((el) => (
              <option key={el.categorieId} value={el.categorieId}>
                {el.name}
              </option>
            ))}
          </select>
        </div>

        <div className="default-label-box">
          <label htmlFor="price">Price (USD)</label>
          <input
            type="number"
            id="price"
            name="price"
            min={0}
            step={0.01}
            required
          />
        </div>

        <div className="default-label-box">
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" name="stackNum" min={0} required />
        </div>

        <div className="default-label-box">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required />
        </div>

        <div className="default-label-box">
          <label htmlFor="pet-emoji">Pet Emoji</label>
          <input type="text" id="pet-emoji" name="img" required />
        </div>

        <div className="form-check">
          <input type="checkbox" name="isPopular" id="is-popular" />
          <label htmlFor="is-popular">Popular Pet</label>
        </div>
        <div className="form-btns">
          <button type="reset">Cancel</button>
          <button type="submit">Save Pet</button>
        </div>
      </MainForm>
    </>
  );
};

export default AddPetPage;
