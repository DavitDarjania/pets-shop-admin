import React from "react";
import { PetCard } from "../styles/styled-components/CardSection";
import { TruncatedText } from "../utils/TruncateText";
import type { ICategorie } from "../interfaces/Categorie";
import { pets, type IPet } from "../interfaces/Pet";

const CategorieCardComp: React.FC<ICategorie> = ({
  categorieId,
  description,
  name,
}) => {
  const petCounter = pets.reduce((acc: number, curr: IPet) => {
    return curr.categorieId == categorieId ? acc + 1 : acc;
  }, 0);
  return (
    <PetCard>
      <h3 className="title">{name}</h3>
      <TruncatedText text={description} />
      <p className="pet-count">{petCounter} pet</p>
      <div className="edit-delete">
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    </PetCard>
  );
};

export default CategorieCardComp;
