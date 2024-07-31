import { useNavigate } from "react-router-dom";
import { Wine } from "../../models/Wine";
import DefaultGrid from "../common/DefaultGrid";
import WineCard from "./WineCard";

const WineList = ({ wines }: { wines: Wine[] }) => {
  const navigate = useNavigate();

  const wineCardSelected = (wineId: number) => {
    navigate(`/wines/${wineId}`);
  };

  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <DefaultGrid>
        {wines.map((wine) => (
          <WineCard
            key={wine.id}
            imageSrc={
              "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            }
            wineName={wine.name}
            buttonText={"더 알아보기"}
            onSelected={() => wineCardSelected(wine.id)}
          />
        ))}
      </DefaultGrid>
    </div>
  );
};

export default WineList;
