import { useNavigate } from "react-router-dom";
import { BackTo } from "../styles/styled-components/BackTo";
import { MainForm } from "../styles/styled-components/MainForm";

const AddCategoryPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackTo type="button" onClick={() => navigate("/categories")}>
        ⇠ Back To Categories
      </BackTo>
      <MainForm>
        <h1 className="title">Add New Category</h1>
        <div className="default-label-box">
          <label htmlFor="pet-name">Category Title</label>
          <input type="text" id="pet-name" name="title" required />
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
