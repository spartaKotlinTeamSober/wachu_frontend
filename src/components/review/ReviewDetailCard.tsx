import { Card, Grid, Image, Text } from "@mantine/core";
import dayjs from "dayjs";
import { Review } from "../../models/Review";

const ReviewDetailCard = ({ review }: { review: Review }) => {
  return (
    <Card shadow="sm" padding="lg" style={{ maxWidth: 500, margin: "auto" }}>
      <Card.Section style={{ padding: "1rem 0" }}>
        {review.mediaList.map((media) => (
          <div>
            <Image src={media.mediaUrl} alt="리뷰 사진" height={500} />
          </div>
        ))}
      </Card.Section>

      <Grid>
        <Grid.Col span={12}>
          <Text fw={100}>{review.wine.name}</Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <Text fw={500}>{review.title}</Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <pre>
            <Text fw={100}>{review.description}</Text>
          </pre>
        </Grid.Col>

        <Grid.Col span={12}>
          <Text fw={50}>
            {dayjs(review.createdAt).format("YYYY-MM-DD HH:mm:ss")}
          </Text>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default ReviewDetailCard;
