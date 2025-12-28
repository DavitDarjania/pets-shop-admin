import { useParams } from "react-router-dom";
import { MainForm } from "../styles/styled-components/MainForm";
import useFetchEach from "../hooks/useFetchEach";
import type { IPet } from "../interfaces/Pet";
import useFetch from "../hooks/useFetch";
import type { ICategorie } from "../interfaces/Categorie";
import utilUpdate from "../utils/utilUpdate";
import { useEffect, useState } from "react";

const EditPet = () => {
  const { editPetId } = useParams();
  const { data } = useFetch<ICategorie>("http://localhost:3000/categories");
  const [form, setForm] = useState<IPet | null>(null);

  const { data: dataPets } = useFetchEach<IPet>(
    "http://localhost:3000/pets",
    editPetId!
  );
  useEffect(() => {
    if (dataPets) {
      setForm(dataPets);
    }
  }, [dataPets]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const forma = event.currentTarget;

    const formData = new FormData(forma);

    // Extract values and convert types
    const collectedData: IPet = {
      title: formData.get("title") as string,
      categorieId: formData.get("categoryId") as string, // make sure you send ID here
      price: formData.get("price") as string,
      description: formData.get("description") as string,
      isPopular: formData.get("isPopular") === "on", // checkbox
      stackNum: Number(formData.get("stackNum")),
      img: formData.get("img") as string,
      petsId: form!.petsId, // backend generates this automatically
    };

    try {
      const createdPet = await utilUpdate(
        "http://localhost:3000/pets",
        editPetId!,
        collectedData
      );
      console.log("Updated Pet:", createdPet);

      // reset form
      forma.reset();
    } catch (err) {
      console.error("Error creating pet:", err);
    }
  };
  if (!form) return <p>Loading...</p>;

  return (
    <MainForm onSubmit={onSubmit}>
      <h1 className="title">Edit Pet</h1>
      <div className="default-label-box">
        <label htmlFor="pet-name">Pet Name</label>
        <input
          type="text"
          id="pet-name"
          name="title"
          defaultValue={form.title}
          required
        />
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
          defaultValue={form.price}
          required
        />
      </div>

      <div className="default-label-box">
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          id="stock"
          name="stackNum"
          defaultValue={form.stackNum}
          min={0}
          required
        />
      </div>

      <div className="default-label-box">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={form.description}
          required
        />
      </div>

      <div className="default-label-box">
        <label htmlFor="pet-emoji">Pet Emoji</label>
        <input
          type="text"
          id="pet-emoji"
          name="img"
          defaultValue={form.img}
          required
        />
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          name="isPopular"
          id="is-popular"
          defaultChecked={form.isPopular}
        />
        <label htmlFor="is-popular">Popular Pet</label>
      </div>
      <div className="form-btns">
        <button type="reset">Cancel</button>
        <button type="submit">Save Pet</button>
      </div>
    </MainForm>
  );
};

export default EditPet;
