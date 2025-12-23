import { useNavigate } from "react-router-dom";
import CategorieCardComp from "../components/CategorieCardComp";
import { categories } from "../interfaces/Categorie";
import { AddLink } from "../styles/styled-components/AddLink";
import { CardSection } from "../styles/styled-components/CardSection";

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <AddLink>
        <h2>All Categories</h2>
        <button type="button" onClick={() => navigate("/add-category")}>
          + Add New Category
        </button>
      </AddLink>
      <CardSection>
        {categories.map(({ description, name, categorieId }) => (
          <CategorieCardComp
            key={categorieId}
            categorieId={categorieId}
            description={description}
            name={name}
          />
        ))}
      </CardSection>
    </>
  );
};

export default CategoriesPage;
