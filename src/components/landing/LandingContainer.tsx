import DefaultGrid from "../common/DefaultGrid";
import { PromotionWineCard } from "../promotion/PromotionWineCard";
import ReviewCard from "../review/ReviewCard";
import { LandingHero } from "./LandingHero";

const LandingContainer = () => {
  return (
    <div>
      <LandingHero />
      <div style={{ margin: "50px 20px 20px 20px" }}>
        <DefaultGrid>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
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
