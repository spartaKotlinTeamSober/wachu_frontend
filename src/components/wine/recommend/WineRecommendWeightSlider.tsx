import { SimpleGrid, Grid, Slider, Text } from "@mantine/core";
import { useState } from "react";

interface WineWeightProps {
  onPriceChanged: (price: number) => void;
  onTastyChanged: (tasty: number) => void;
  onAromaChanged: (aroma: number) => void;
}

const WineRecommendWeightSlider = (props: WineWeightProps) => {
  const { onPriceChanged, onTastyChanged, onAromaChanged } = props;

  const [price, setPrice] = useState<number>(0);
  const [tasty, setTasty] = useState<number>(0);
  const [aroma, setAroma] = useState<number>(0);

  const priceChange = (value: number) => {
    setPrice(value);
    onPriceChanged(value);
  };

  const tastyChange = (value: number) => {
    setTasty(value);
    onTastyChanged(value);
  };

  const armoaChange = (value: number) => {
    setAroma(value);
    onAromaChanged(value);
  };

  return (
    <div>
      <SimpleGrid cols={1}>
        <Grid>
          <Grid.Col span={1}>
            <Text fw={500}>가격 가중치</Text>
          </Grid.Col>
          <Grid.Col style={{ paddingTop: "12px" }} span={5}>
            <Slider
              min={0}
              max={50}
              step={1}
              defaultValue={0}
              onChange={priceChange}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text fw={500}>{price}%</Text>
          </Grid.Col>
          <Grid.Col span={1}>
            <Text fw={500}>맛 가중치</Text>
          </Grid.Col>
          <Grid.Col style={{ paddingTop: "12px" }} span={5}>
            <Slider
              min={0}
              max={50}
              step={1}
              defaultValue={0}
              onChange={tastyChange}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text fw={500}>{tasty}%</Text>
          </Grid.Col>
          <Grid.Col span={1}>
            <Text fw={500}>향기 가중치</Text>
          </Grid.Col>
          <Grid.Col style={{ paddingTop: "12px" }} span={5}>
            <Slider
              min={0}
              max={50}
              step={1}
              defaultValue={0}
              onChange={armoaChange}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text fw={500}>{aroma}%</Text>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </div>
  );
};

export default WineRecommendWeightSlider;
