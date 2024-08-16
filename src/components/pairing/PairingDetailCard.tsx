import { Button, Card, Grid, Image, Text } from "@mantine/core";
import { Pairing } from "../../models/Pairing";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { deletePairing } from "../../api/pairings";

const PairingDetailCard = ({ pairing }: { pairing: Pairing }) => {
  const token = localStorage.getItem("token");
  const claims = token ? jwtDecode(token) : { sub: "" };
  const navigate = useNavigate();

  const handleDelete = async () => {
    const response = await deletePairing(pairing.id.toString());

    if (response === 204) {
      alert("페어링이 삭제되었습니다.");
      navigate("/pairing");
    } else {
      alert("페어링이 삭제에 실패했습니다.");
    }
  };

  return (
    <Card shadow="sm" padding="lg" style={{ maxWidth: "50%", margin: "auto" }}>
      <Card.Section style={{ padding: "1rem 0" }}>
        <Image
          src={pairing.photoUrl ? pairing.photoUrl : "/no_image.webp"}
          alt="페어링 사진"
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "contain",
          }}
        />
      </Card.Section>

      <Grid>
        <Grid.Col span={12}>
          <Text fw={100}>{pairing.wine.name} 페어링</Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <Text fw={500}>{pairing.title}</Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <Text
            style={{
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
            fw={200}
          >
            {pairing.description}
          </Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <Text fw={50}>
            {pairing.member.nickname
              ? `${pairing.member.nickname} 님의 리뷰`
              : `회원${pairing.member.id}번 님의 리뷰`}
          </Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <Text fw={50}>
            {dayjs(pairing.createdAt).format("YYYY-MM-DD HH:mm:ss")}
          </Text>
        </Grid.Col>
      </Grid>
      {pairing.member.id && claims.sub === pairing.member.id.toString() && (
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

export default PairingDetailCard;
