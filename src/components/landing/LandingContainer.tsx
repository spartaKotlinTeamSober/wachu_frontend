import { useEffect, useState } from "react";
import DefaultGrid from "../common/DefaultGrid";
import { LandingHero } from "./LandingHero";
import { useNavigate } from "react-router-dom";
import { getReviews } from "../../api/reviews";
import { getPairings } from "../../api/pairings";
import { Review } from "../../models/Review";
import { Pairing } from "../../models/Pairing";
import PairingCard from "../pairing/PairingCard";
import ReviewCard from "../review/ReviewCard";
import { Stack, Text } from "@mantine/core";

const LandingContainer = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [pairings, setPairings] = useState<Pairing[]>([]);
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);

  const fetchReviews = async () => {
    try {
      const reviewResponse = await getReviews(0, 9);
      const shuffledReviews = reviewResponse.content.sort(
        () => Math.random() - 0.5
      );
      const randomReviews = shuffledReviews.slice(0, 3);
      setReviews(randomReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const fetchPairings = async () => {
    try {
      const pairingResponse = await getPairings(0, 9);
      const shuffledPairings = pairingResponse.content.sort(
        () => Math.random() - 0.5
      );
      const randomPairings = shuffledPairings.slice(0, 3);
      setPairings(randomPairings);
    } catch (error) {
      console.error("Error fetching pairings:", error);
    }
  };

  const pairingCardSelected = (pairingId: number) => {
    navigate(`/pairing/${pairingId}`);
  };

  const reviewCardSelected = (reviewId: number) => {
    navigate(`/review/${reviewId}`);
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchReviews();
      fetchPairings();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <div>
      <LandingHero />
      <div style={{ margin: "50px 20px 20px 20px" }}>
        <Stack gap="md">
          <Text size="xl" fw={700}>
            페어링
          </Text>
          <DefaultGrid>
            {pairings.map((pairing) => (
              <div key={pairing.id}>
                <PairingCard
                  pairing={pairing}
                  onSelected={() => pairingCardSelected(pairing.id)}
                />
              </div>
            ))}
          </DefaultGrid>

          <Text style={{ marginTop: "30px" }} size="xl" fw={700}>
            리뷰
          </Text>
          <DefaultGrid>
            {reviews.map((review) => (
              <div key={review.id}>
                <ReviewCard
                  review={review}
                  onSelected={() => reviewCardSelected(review.id)}
                />
              </div>
            ))}
          </DefaultGrid>
        </Stack>
      </div>
    </div>
  );
};

export default LandingContainer;
