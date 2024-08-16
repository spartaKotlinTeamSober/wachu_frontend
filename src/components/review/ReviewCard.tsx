import { Card, Text, Button } from "@mantine/core";
import { Review } from "../../models/Review";

interface ReviewCardProps {
  review: Review;
  onSelected?: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onSelected }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
        }}
        fw={700}
      >
        {review.title}
      </Text>

      <Text
        size="sm"
        c="dimmed"
        style={{
          marginTop: "10px",
          minHeight: "100px",
          maxHeight: "100px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {review.description}
      </Text>

      <Text
        style={{
          marginTop: "10px",
          marginBottom: "-10px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        fw={700}
      >
        {review.wine.name} 리뷰
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={onSelected}>
        보러가기
      </Button>
    </Card>
  );
};

export default ReviewCard;
