import React from "react";
import { PetCard } from "../styles/styled-components/CardSection";
import { TruncatedText } from "../utils/TruncateText";
import type { IPet } from "../interfaces/Pet";
import { useNavigate } from "react-router-dom";
import { categories } from "../interfaces/Categorie";

const PetCardComp: React.FC<IPet> = ({
  categorieId,
  description,
  img,
  isPopular,
  petsId,
  price,
  stackNum,
  title,
}) => {
  const navigate = useNavigate();
  const categorieItem = categories.find((el) => el.categorieId == categorieId);
  return (
    <PetCard onClick={() => navigate(petsId)}>
      <div className="image">{img}</div>
      <h3 className="title">{title}</h3>
      <p className="category">{categorieItem?.name}</p>
      <div className="price">
        <p>${price}</p>
        <p>₾2100</p>
      </div>

      <TruncatedText text={description} />

      <div className="pop-stock">
        {isPopular && <p className="popular">Popular</p>}
        <p className="stock">Stock: {stackNum}</p>
      </div>
    </PetCard>
  );
};

export default PetCardComp;
