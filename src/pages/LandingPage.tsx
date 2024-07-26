import DefaultGrid from "../components/common/DefaultGrid";
import DefaultLayout from "../components/common/DefaultLayout";
import { Hero } from "../components/landing/Hero";
import { PromotionWineCard } from "../components/promotion/PromotionWineCard";
import ReviewCard from "../components/review/ReviewCard";

const LandingPage = () => {
  return (
    <DefaultLayout>
      <Hero />
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
    </DefaultLayout>
  );
};

export default LandingPage;
