import { Button, Card, Grid, Group, Image, Text } from "@mantine/core";
import dayjs from "dayjs";
import { Review } from "../../models/Review";
import { jwtDecode } from "jwt-decode";
import { deleteReview } from "../../api/reviews";
import { useNavigate } from "react-router-dom";
import { IconStar } from "@tabler/icons-react";

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

  const stars = Array.from({ length: 5 }, (_, index) => (
    <IconStar
      key={index}
      size={24}
      stroke={1.5}
      color={index < review.score ? "#ffd700" : "#e4e5e9"}
    />
  ));

  return (
    <Card shadow="sm" padding="lg" style={{ maxWidth: "80%", margin: "auto" }}>
      <Card.Section style={{ padding: "1rem 0" }}>
        {review.mediaList.map((media) => (
          <div key={media.id}>
            <Image
              src={media.mediaUrl}
              alt="리뷰 사진"
              style={{
                width: "100%",
                maxHeight: "700px",
                objectFit: "contain",
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
            <Text
              style={{
                whiteSpace: "pre-line",
                wordWrap: "break-word",
              }}
              fw={100}
            >
              {review.description}
            </Text>
          </pre>
        </Grid.Col>

        <Grid.Col span={12}>
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
        </Grid.Col>

        <Grid.Col span={12}>
          <Group gap={"sm"}>
            {review.member.profileUrl && (
              <Image
                src={review.member.profileUrl}
                alt={`${
                  review.member.nickname || `회원${review.member.id}`
                } 님의 프로필`}
                width={30}
                height={30}
                radius="50%"
                style={{
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                }}
              />
            )}
            <Text fw={50}>
              {review.member.nickname
                ? `${review.member.nickname} 님의 리뷰`
                : `회원${review.member.id}번 님의 리뷰`}
            </Text>
          </Group>
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
