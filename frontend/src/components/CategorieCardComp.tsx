import React from "react";
import { PetCard } from "../styles/styled-components/CardSection";
import { TruncatedText } from "../utils/TruncateText";
import type { ICategorie } from "../interfaces/Categorie";
import { type IPet } from "../interfaces/Pet";
import useFetch from "../hooks/useFetch";
import utilDelete from "../utils/utilDelete";
import { useNavigate } from "react-router-dom";

interface ICategorieWithRefetch extends ICategorie {
  reFetch?: () => void;
}
const CategorieCardComp: React.FC<ICategorieWithRefetch> = ({
  categorieId,
  description,
  name,
  reFetch,
}) => {
  const navigate = useNavigate();
  const { data } = useFetch<IPet>("http://localhost:3000/pets");
  const petCounter = data?.reduce((acc: number, curr: IPet) => {
    return curr.categorieId == categorieId ? acc + 1 : acc;
  }, 0);
  const onDelete = (id: string) => {
    utilDelete("http://localhost:3000/categories", id).then(() => reFetch!());
  };
  return (
    <PetCard>
      <h3 className="title">{name}</h3>
      <TruncatedText text={description} />
      <p className="pet-count">{petCounter} pet</p>
      <div className="edit-delete">
        <button
          onClick={() => navigate(`/category/edit/${categorieId}`)}
          type="button"
        >
          Edit
        </button>
        <button onClick={() => onDelete(categorieId)} type="button">
          Delete
        </button>
      </div>
    </PetCard>
  );
};

export default CategorieCardComp;
