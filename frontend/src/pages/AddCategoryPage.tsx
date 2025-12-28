import { useNavigate } from "react-router-dom";
import { BackTo } from "../styles/styled-components/BackTo";
import { MainForm } from "../styles/styled-components/MainForm";
import utilPost from "../utils/utilPost";
import { useRef } from "react";

const AddCategoryPage = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const collectedData = { name, description };

    try {
      const createdCategory = await utilPost(
        "http://localhost:3000/categories",
        collectedData
      );
      console.log("Created:", createdCategory);
      formRef.current?.reset();
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <>
      <BackTo type="button" onClick={() => navigate("/categories")}>
        ⇠ Back To Categories
      </BackTo>
      <MainForm onSubmit={onSubmit} ref={formRef}>
        <h1 className="title">Add New Category</h1>
        <div className="default-label-box">
          <label htmlFor="pet-name">Category Title</label>
          <input type="text" id="pet-name" name="name" required />
        </div>

        <div className="default-label-box">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required />
        </div>
        <div className="form-btns">
          <button type="reset">Cancel</button>
          <button type="submit">Save Category</button>
        </div>
      </MainForm>
    </>
  );
};

export default AddCategoryPage;
