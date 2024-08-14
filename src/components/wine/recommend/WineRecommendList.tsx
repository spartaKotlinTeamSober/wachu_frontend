import { useNavigate } from "react-router-dom";
import { Wine } from "../../../models/Wine";
import { SimpleGrid } from "@mantine/core";
import WineRecommendCard from "./WineRecommendCard";

const WineRecommendList = ({ wines }: { wines: Wine[] }) => {
  const navigate = useNavigate();

  const wineCardSelected = (wineId: number) => {
    navigate(`/wines/${wineId}`);
  };

  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <SimpleGrid cols={2}>
        {wines.map((wine, index) => (
          <WineRecommendCard
            key={wine.id}
            imageSrc={
              wine.imageUrl ? wine.imageUrl : "/src/assets/no_image.webp"
            }
            wine={wine}
            ranking={index + 1}
            onSelected={() => wineCardSelected(wine.id)}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default WineRecommendList;
