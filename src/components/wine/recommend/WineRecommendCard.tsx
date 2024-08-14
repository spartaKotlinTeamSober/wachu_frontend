import {
  Card,
  Group,
  Button,
  Image,
  Text,
  Badge,
  Tooltip,
  Grid,
} from "@mantine/core";
import { WineRecommendApiResponse } from "../../../api/response/WineRecommendApiResponse";

interface WineRecommendCardProps {
  imageSrc: string;
  wineResponse: WineRecommendApiResponse;
  ranking: number;
  onSelected?: () => void;
}

const WineRecommendCard: React.FC<WineRecommendCardProps> = ({
  imageSrc,
  wineResponse: wineResponse,
  ranking,
  onSelected,
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={imageSrc}
          alt={wineResponse.wine.name}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "contain",
          }}
        />
      </Card.Section>

      <Group mt="md" mb="xs">
        <Badge>{ranking}등</Badge>
        <Tooltip label={wineResponse.wine.name} position="top" withArrow>
          <Text
            fw={500}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
              fontSize: "clamp(12px, 2vw, 16px)",
            }}
          >
            {wineResponse.wine.name}
          </Text>
        </Tooltip>
      </Group>

      <Grid gutter={{ base: 3 }}>
        <Grid.Col span={3} style={{ paddingLeft: "12px" }}>
          <Text size="lg">추천도</Text>
        </Grid.Col>
        <Grid.Col span={9}>
          <Text size="lg">
            {(wineResponse.totalSimilarity * 100).toFixed(2)}%
          </Text>
        </Grid.Col>
        <Grid.Col span={3} style={{ paddingLeft: "12px" }}>
          <Text size="sm" c={"gray"}>
            맛 유사도
          </Text>
        </Grid.Col>
        <Grid.Col span={9}>
          <Text size="sm" c={"gray"}>
            {(wineResponse.similarityMap["tasty"] * 100).toFixed(2)}%
          </Text>
        </Grid.Col>
        <Grid.Col span={3} style={{ paddingLeft: "12px" }}>
          <Text size="sm" c={"gray"}>
            가격 유사도
          </Text>
        </Grid.Col>
        <Grid.Col span={9}>
          <Text size="sm" c={"gray"}>
            {(wineResponse.similarityMap["price"] * 100).toFixed(2)}%
          </Text>
        </Grid.Col>
        <Grid.Col span={3} style={{ paddingLeft: "12px" }}>
          <Text size="sm" c={"gray"}>
            향기 유사도
          </Text>
        </Grid.Col>
        <Grid.Col span={9}>
          <Text size="sm" c={"gray"}>
            {(wineResponse.similarityMap["aroma"] * 100).toFixed(2)}%
          </Text>
        </Grid.Col>
      </Grid>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={onSelected}>
        보러가기
      </Button>
    </Card>
  );
};

export default WineRecommendCard;
