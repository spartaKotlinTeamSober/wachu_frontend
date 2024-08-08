import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Review } from "../../models/Review";
import { getReviews } from "../../api/reviews";
import { Button, Pagination, Text } from "@mantine/core";
import ReviewList from "./ReviewList";

const ReviewContainer = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [shouldFetch, setShouldFetch] = useState(true);

  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    setPage(page);
    setShouldFetch(true);
  };

  const fetchReviews = async () => {
    const reviewResponse = await getReviews(page - 1);

    setReviews(reviewResponse.content);
    setTotalPages(reviewResponse.totalPages);
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchReviews();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", width: "100%", marginTop: "40px" }}>
        <div style={{ marginLeft: "auto", marginRight: "40px" }}>
          <Button
            onClick={() => {
              navigate("write");
            }}
          >
            작성하기
          </Button>
        </div>
      </div>
      {reviews.length === 0 ? (
        <Text size="xl" fw={700} style={{ marginTop: "60px" }}>
          리뷰 게시글이 없습니다
        </Text>
      ) : (
        <>
          <ReviewList reviews={reviews} />
          <Pagination
            onChange={handlePageChange}
            total={totalPages}
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </>
      )}
    </div>
  );
};

export default ReviewContainer;
