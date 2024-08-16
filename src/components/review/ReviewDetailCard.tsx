import { Button, Card, Grid, Image, Text } from "@mantine/core";
import dayjs from "dayjs";
import { Review } from "../../models/Review";
import { jwtDecode } from "jwt-decode";
import { deleteReview } from "../../api/reviews";
import { useNavigate } from "react-router-dom";

const ReviewDetailCard = ({ review }: { review: Review }) => {
  const token = localStorage.getItem("token");
  const claims = token ? jwtDecode(token) : { sub: "" };
  const navigate = useNavigate();

  const handleDelete = async () => {
    const response = await deleteReview(review.id.toString());

    if (response === 204) {
      alert("리뷰가 삭제되었습니다.");
      navigate("/review");
    } else {
      alert("리뷰 삭제에 실패했습니다.");
    }
  };

  return (
    <Card shadow="sm" padding="lg" style={{ maxWidth: "80%", margin: "auto" }}>
      <Card.Section style={{ padding: "1rem 0" }}>
        {review.mediaList.map((media) => (
          <div key={media.id}>
            <Image
              src={media.mediaUrl}
              alt="리뷰 사진"
              style={{
                maxWidth: "100%",
                maxHeight: "700px",
                objectFit: "cover",
              }}
            />
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
      {review.member.id && claims.sub === review.member.id.toString() && (
        <Button
          color="red"
          style={{ marginLeft: "auto", marginRight: "0px", width: "100px" }}
          onClick={handleDelete}
        >
          삭제
        </Button>
      )}
    </Card>
  );
};

export default ReviewDetailCard;
