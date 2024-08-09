import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../../api/reviews";
import { Review } from "../../models/Review";
import ReviewDetailCard from "./ReviewDetailCard";

const ReviewDetailContainer = () => {
  const [review, setReview] = useState<Review>();
  const reviewId = useParams<{ id: string }>().id;
  const [shouldFetch, setShouldFetch] = useState(true);

  const fetchReview = async () => {
    const reviewResponse = await getReview(reviewId);
    setReview(reviewResponse);
  };

  useEffect(() => {
    if (shouldFetch) {
      setShouldFetch(false);
      fetchReview();
    }
  }, [shouldFetch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {review && <ReviewDetailCard review={review} />}
    </div>
  );
};

export default ReviewDetailContainer;
