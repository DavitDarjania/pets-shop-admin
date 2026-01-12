import { useNavigate } from "react-router-dom";
import PetCardComp from "../components/PetCardComp";
import { type IPet } from "../interfaces/Pet";
import { AddLink } from "../styles/styled-components/AddLink";
import { CardSection } from "../styles/styled-components/CardSection";
import useFetch from "../hooks/useFetch";

const PetsPage = () => {
  const navigate = useNavigate();
  const { data } = useFetch<IPet>("http://localhost:3000/pets");
  return (
    <>
      <AddLink>
        <h2>All Pets</h2>
        <button type="button" onClick={() => navigate("/add-pet")}>
          + Add New Pet
        </button>
      </AddLink>
      <CardSection>
        {data?.map(
          ({
            categorieId,
            description,
            isPopular,
            petsId,
            price,
            stackNum,
            title,
            img,
          }) => (
            <PetCardComp
              key={petsId}
              categorieId={categorieId}
              description={description}
              isPopular={isPopular}
              petsId={petsId}
              price={price}
              stackNum={stackNum}
              title={title}
              img={img}
            />
          )
        )}
      </CardSection>
    </>
  );
};

export default PetsPage;
