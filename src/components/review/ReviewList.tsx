import { useNavigate } from "react-router-dom";
import { Review } from "../../models/Review";
import DefaultGrid from "../common/DefaultGrid";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
    const navigate = useNavigate();
  
    const reviewCardSelected = (reviewId: number) => {
      navigate(`/review/${reviewId}`);
    };
  
    return (
      <div style={{ width: "90%", margin: "30px auto" }}>
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
      </div>
    );
}

export default ReviewList