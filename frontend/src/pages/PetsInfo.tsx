import { useNavigate, useParams } from "react-router-dom";
import { type IPet } from "../interfaces/Pet";
import { PetsInfoCard } from "../styles/styled-components/PetsInfoCard";
import { type ICategorie } from "../interfaces/Categorie";
import useFetch from "../hooks/useFetch";
import utilDelete from "../utils/utilDelete";

const PetsInfo = () => {
  const navigate = useNavigate();
  const { petsId } = useParams();
  const { data } = useFetch<IPet>("http://localhost:3000/pets");
  const { data: categoryData } = useFetch<ICategorie>(
    "http://localhost:3000/categories"
  );
  const petItem = data?.find((el: IPet) => el.petsId == petsId);
  const petCategory = categoryData?.find(
    (el) => el.categorieId == petItem?.categorieId
  );
  const onDelete = (id: string) => {
    utilDelete("http://localhost:3000/pets", id);
  };
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
          <button onClick={() => navigate(`/edit/${petsId}`)}>Edit Pet</button>
          <button
            onClick={() => {
              onDelete(petItem!.petsId);
              navigate("/");
            }}
          >
            Delete Pet
          </button>
        </div>
      </div>
    </PetsInfoCard>
  );
};

export default PetsInfo;
