import { useEffect, useState } from "react";
import { getWines } from "../../api/wines";
import { Wine } from "../../models/Wine";
import DefaultGrid from "../common/DefaultGrid";
import { PromotionWineCard } from "../promotion/PromotionWineCard";
import { LandingHero } from "./LandingHero";
import WineCard from "../wine/WineCard";
import { useNavigate } from "react-router-dom";

const LandingContainer = () => {
  const navigate = useNavigate();
  const [wines, setWines] = useState<Wine[]>([]);
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);

  const fetchWines = async () => {
    const winesResponse = await getWines({
      page: 0,
      size: 3,
    });

    setWines(winesResponse.content);
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchWines();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <div>
      <LandingHero />
      <div style={{ margin: "50px 20px 20px 20px" }}>
        <DefaultGrid>
          {wines.map((wine) => (
            <WineCard
              key={wine.id}
              imageSrc={
                wine.imageUrl ? wine.imageUrl : "/src/assets/no_image.webp"
              }
              wineName={wine.name}
              onSelected={() => {
                navigate(`/wines/${wine.id}`);
              }}
            />
          ))}
        </DefaultGrid>
      </div>
      <div style={{ margin: "50px 20px 20px 20px" }}>
        <DefaultGrid>
          <PromotionWineCard />
          <PromotionWineCard />
          <PromotionWineCard />
        </DefaultGrid>
      </div>
    </div>
  );
};

export default LandingContainer;
