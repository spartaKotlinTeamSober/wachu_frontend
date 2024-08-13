import { Card, Image, Text, Grid } from "@mantine/core";
import { Wine } from "../../../models/Wine";

const WineDetailCard = ({ wine }: { wine: Wine }) => {
  const parseTextToObject = (text: string): Record<string, string[]> => {
    const result: Record<string, string[]> = {};

    const cleanedText = text.replace(/{|}/g, "");
    const pairs = cleanedText.split("], ");

    pairs.forEach((pair) => {
      const [key, value] = pair.split("=");

      if (key && value) {
        const valuesArray = value
          .replace(/\[|\]/g, "")
          .split(",")
          .map((val) => val.trim());
        result[key.trim()] = valuesArray;
      }
    });

    return result;
  };

  const aromas = parseTextToObject(wine.aroma);

  return (
    <Card shadow="sm" padding="lg" style={{ maxWidth: 500, margin: "auto" }}>
      <Card.Section style={{ padding: "1rem 0" }}>
        <Image
          src={wine.imageUrl ? wine.imageUrl : "/src/assets/no_image.webp"}
          alt="와인 사진"
          style={{
            maxWidth: "100%",
            maxHeight: "500px",
            objectFit: "cover",
          }}
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
        {Object.entries(aromas).map(([, values], index) =>
          values.map((value, valueIndex) => (
            <>
              <Grid.Col span={4}>
                <Text
                  fw={500}
                  style={{
                    visibility:
                      index === 0 && valueIndex === 0 ? "visible" : "hidden",
                  }}
                >
                  향기
                </Text>
              </Grid.Col>
              <Grid.Col span={8}>
                <Text>{value}</Text>
              </Grid.Col>
            </>
          ))
        )}
      </Grid>
    </Card>
  );
};

export default WineDetailCard;
