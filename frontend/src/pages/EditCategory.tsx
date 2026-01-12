import { useEffect, useRef, useState } from "react";
import { MainForm } from "../styles/styled-components/MainForm";
import utilUpdate from "../utils/utilUpdate";
import { useNavigate, useParams } from "react-router-dom";
import useFetchEach from "../hooks/useFetchEach";
import type { ICategorie } from "../interfaces/Categorie";

const EditCategory = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { editCaregoryId } = useParams();
  const [form, setForm] = useState<ICategorie | null>(null);
  const navigate = useNavigate();

  const { data, reFetch } = useFetchEach<ICategorie>(
    "http://localhost:3000/categories",
    editCaregoryId!
  );
  useEffect(() => {
    if (data) {
      setForm(data);
    }
  }, [data]);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const collectedData = { name, description };

    try {
      const createdCategory = await utilUpdate(
        "http://localhost:3000/categories",
        editCaregoryId!,
        collectedData
      );
      console.log("Updated:", createdCategory);
      formRef.current?.reset();
    } catch (err) {
      console.error("Error:", err);
    }
    navigate("/categories");
  };
  return (
    <MainForm onSubmit={onSubmit} ref={formRef}>
      <h1 className="title">Add New Category</h1>
      <div className="default-label-box">
        <label htmlFor="pet-name">Category Title</label>
        <input
          type="text"
          id="pet-name"
          name="name"
          defaultValue={form?.name}
          required
        />
      </div>

      <div className="default-label-box">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={form?.description}
          required
        />
      </div>
      <div className="form-btns">
        <button type="reset">Cancel</button>
        <button type="submit">Save Category</button>
      </div>
    </MainForm>
  );
};

export default EditCategory;
