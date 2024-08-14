import {
  Card,
  Group,
  Button,
  Image,
  Text,
  Badge,
  Tooltip,
} from "@mantine/core";
import { Wine } from "../../../models/Wine";

interface WineRecommendCardProps {
  imageSrc: string;
  wine: Wine;
  ranking: number;
  onSelected?: () => void;
}

const WineRecommendCard: React.FC<WineRecommendCardProps> = ({
  imageSrc,
  wine,
  ranking,
  onSelected,
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={imageSrc}
          alt={wine.name}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "contain",
          }}
        />
      </Card.Section>

      <Group mt="md" mb="xs">
        <Badge>{ranking}등</Badge>
        <Tooltip label={wine.name} position="top" withArrow>
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
            {wine.name}
          </Text>
        </Tooltip>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={onSelected}>
        보러가기
      </Button>
    </Card>
  );
};

export default WineRecommendCard;
