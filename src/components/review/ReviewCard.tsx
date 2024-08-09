import { Card, Text, Button } from "@mantine/core";
import { Review } from "../../models/Review";

interface ReviewCardProps {
  review: Review;
  onSelected?: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onSelected }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text fw={700}>{review.title}</Text>

      <Text
        size="sm"
        c="dimmed"
        style={{ minHeight: "100px", maxHeight: "100px" }}
      >
        {review.description}
      </Text>

      <Text fw={500}>{review.wine.name}</Text>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={onSelected}>
        보러가기
      </Button>
    </Card>
  );
};

export default ReviewCard;
