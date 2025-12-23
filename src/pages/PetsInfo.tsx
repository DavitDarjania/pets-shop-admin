import { useParams } from "react-router-dom";
import { pets, type IPet } from "../interfaces/Pet";
import { PetsInfoCard } from "../styles/styled-components/PetsInfoCard";
import { categories } from "../interfaces/Categorie";

const PetsInfo = () => {
  const { petsId } = useParams();
  const petItem = pets.find((el: IPet) => el.petsId == petsId);
  const petCategory = categories.find(
    (el) => el.categorieId == petItem?.categorieId
  );
  return (
    <PetsInfoCard>
      <div className="img-title">
        <div className="image">{petItem?.img}</div>
        <div className="title">
          <h1>{petItem?.title}</h1>
          <p className="category">{petCategory?.name}</p>
          <div className="price-box">
            <div className="price-item">
              <p className="price-tag">USD Price</p>
              <h3 className="price price-usd">${petItem?.price}</h3>
            </div>
            <div className="price-item">
              <p className="price-tag">GEL Price</p>
              <h3 className="price price-gel">₾2100</h3>
            </div>
            <div className="price-item">
              <p className="price-tag">Stock</p>
              <h3 className="price stock">{petItem?.stackNum}</h3>
            </div>
          </div>
          {petItem?.isPopular && <h4 className="popular">Popular Pet</h4>}
        </div>
      </div>
      <div className="description-box">
        <h4 className="description-title">Desciption</h4>
        <p className="description">{petItem?.description}</p>
        <div className="edit-delete">
          <button>Edit Pet</button>
          <button>Delete Pet</button>
        </div>
      </div>
    </PetsInfoCard>
  );
};

export default PetsInfo;
