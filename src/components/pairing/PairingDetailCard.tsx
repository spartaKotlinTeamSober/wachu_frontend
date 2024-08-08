import { Card, Grid, Image, Text } from "@mantine/core";
import { Pairing } from "../../models/Pairing";
import dayjs from "dayjs";

const PairingDetailCard = ({ pairing }: { pairing: Pairing }) => {
  return (
    <Card shadow="sm" padding="lg" style={{ maxWidth: 500, margin: "auto" }}>
      <Card.Section style={{ padding: "1rem 0" }}>
        <Image
          src={
            pairing.photoUrl ? pairing.photoUrl : "/src/assets/no_image.webp"
          }
          alt="페어링 사진"
          height={500}
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
          <Text fw={200}>{pairing.description}</Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <Text fw={50}>
            {dayjs(pairing.createdAt).format("YYYY-MM-DD HH:mm:ss")}
          </Text>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default PairingDetailCard;
