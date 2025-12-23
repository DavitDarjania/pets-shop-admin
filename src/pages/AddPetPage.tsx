import { useNavigate } from "react-router-dom";
import { BackTo } from "../styles/styled-components/BackTo";
import { MainForm } from "../styles/styled-components/MainForm";

const AddPetPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackTo type="button" onClick={() => navigate("/")}>
        ⇠ Back To Pets
      </BackTo>
      <MainForm>
        <h1 className="title">Add New Pet</h1>
        <div className="default-label-box">
          <label htmlFor="pet-name">Pet Name</label>
          <input type="text" id="pet-name" name="title" required />
        </div>

        <div className="default-label-box">
          <label htmlFor="category">Category</label>
          <select id="category" name="categoryId" required>
            <option value="">Select category</option>
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
            <option value="birds">Birds</option>
            <option value="small-animals">Small Animals</option>
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
