import { Card, Image, Text, Button, Group } from "@mantine/core";
import { Review } from "../../models/Review";

interface ReviewCardProps {
  review: Review;
  onSelected?: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onSelected }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{review.wine.name}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {review.description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={onSelected}>
        보러가기
      </Button>
    </Card>
  );
};

export default ReviewCard;
