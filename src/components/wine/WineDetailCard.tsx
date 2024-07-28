import { Card, Image, Text, Grid } from "@mantine/core";
import { Wine } from "../../models/Wine";

const WineDetailCard = ({ wine }: { wine: Wine }) => {
  return (
    <Card shadow="sm" padding="lg" style={{ maxWidth: 500, margin: "auto" }}>
      <Card.Section style={{ padding: "1rem 0" }}>
        <Image
          src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="와인 사진"
          height={160}
        />
      </Card.Section>

      <Grid>
        <Grid.Col span={4}>
          <Text fw={500}>이름</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Text>{wine.name}</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <Text fw={500}>가격</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Text>{wine.price}</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <Text fw={500}>타입</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Text>{wine.wineType}</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <Text fw={500}>당도</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Text>{wine.sweetness}</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <Text fw={500}>산도</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Text>{wine.acidity}</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <Text fw={500}>바디</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Text>{wine.body}</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <Text fw={500}>타닌</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Text>{wine.tannin}</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <Text fw={500}>향기</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Text>{wine.aroma}</Text>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default WineDetailCard;
