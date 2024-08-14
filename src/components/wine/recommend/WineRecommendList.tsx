import { useNavigate } from "react-router-dom";
import { SimpleGrid } from "@mantine/core";
import WineRecommendCard from "./WineRecommendCard";
import { WineRecommendApiResponse } from "../../../api/response/WineRecommendApiResponse";

const WineRecommendList = ({
  wines,
}: {
  wines: WineRecommendApiResponse[];
}) => {
  const navigate = useNavigate();

  const wineCardSelected = (wineId: number) => {
    navigate(`/wines/${wineId}`);
  };

  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <SimpleGrid cols={2}>
        {wines.map((wineResponse, index) => (
          <WineRecommendCard
            key={wineResponse.wine.id}
            imageSrc={
              wineResponse.wine.imageUrl
                ? wineResponse.wine.imageUrl
                : "/src/assets/no_image.webp"
            }
            wineResponse={wineResponse}
            ranking={index + 1}
            onSelected={() => wineCardSelected(wineResponse.wine.id)}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default WineRecommendList;
