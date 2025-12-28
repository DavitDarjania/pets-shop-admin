import { useNavigate } from "react-router-dom";
import CategorieCardComp from "../components/CategorieCardComp";
import { type ICategorie } from "../interfaces/Categorie";
import { AddLink } from "../styles/styled-components/AddLink";
import { CardSection } from "../styles/styled-components/CardSection";
import useFetch from "../hooks/useFetch";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const { data, reFetch } = useFetch<ICategorie>(
    "http://localhost:3000/categories"
  );
  return (
    <>
      <AddLink>
        <h2>All Categories</h2>
        <button type="button" onClick={() => navigate("/add-category")}>
          + Add New Category
        </button>
      </AddLink>
      <CardSection>
        {data?.map(({ description, name, categorieId }) => (
          <CategorieCardComp
            key={categorieId}
            categorieId={categorieId}
            description={description}
            name={name}
            reFetch={reFetch}
          />
        ))}
      </CardSection>
    </>
  );
};

export default CategoriesPage;
