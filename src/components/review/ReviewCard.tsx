import { Card, Text, Button, Group } from "@mantine/core";
import { Review } from "../../models/Review";
import { IconStar } from "@tabler/icons-react";

interface ReviewCardProps {
  review: Review;
  onSelected?: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onSelected }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <IconStar
      key={index}
      size={24}
      stroke={1.5}
      color={index < review.score ? "#ffd700" : "#e4e5e9"}
    />
  ));

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        fw={700}
      >
        {review.wine.name} 리뷰
      </Text>

      <Text
        style={{
          maxWidth: "100%",
        }}
        fw={500}
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "-5px",
        }}
      >
        <Group>{stars}</Group>
      </div>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={onSelected}>
        보러가기
      </Button>
    </Card>
  );
};

export default ReviewCard;
