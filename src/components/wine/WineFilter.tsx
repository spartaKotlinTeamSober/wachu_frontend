import {
  Grid,
  RangeSlider,
  Select,
  SimpleGrid,
  Slider,
  Text,
} from "@mantine/core";
import { WineType } from "../../models/Wine";
import { useState } from "react";

interface WineFilterProps {
  onPriceChanged: (price: number) => void;
  onSweetnessChanged: (sweetness: number[]) => void;
  onAcidityChanged: (acidity: number[]) => void;
  onBodyChanged: (body: number[]) => void;
  onTanninChanged: (tannin: number[]) => void;
  onTypeChanged: (type: WineType) => void;
}

const WineFilter = (props: WineFilterProps) => {
  const {
    onPriceChanged,
    onSweetnessChanged,
    onAcidityChanged,
    onBodyChanged,
    onTanninChanged,
    onTypeChanged,
  } = props;

  const [price, setPrice] = useState<number>(5000000);
  const [sweetness, setSweetness] = useState<number[]>([0, 5]);
  const [acidity, setAcidity] = useState<number[]>([0, 5]);
  const [body, setBody] = useState<number[]>([0, 5]);
  const [tannin, setTannin] = useState<number[]>([0, 5]);

  const priceChange = (value: number) => {
    setPrice(value);
    onPriceChanged(value);
  };

  const sweetnessChange = (value: number[]) => {
    setSweetness(value);
    onSweetnessChanged(value);
  };

  const acidityChange = (value: number[]) => {
    setAcidity(value);
    onAcidityChanged(value);
  };

  const bodyChange = (value: number[]) => {
    setBody(value);
    onBodyChanged(value);
  };

  const tanninChange = (value: number[]) => {
    setTannin(value);
    onTanninChanged(value);
  };

  return (
    <div>
      <SimpleGrid
        style={{ width: "80%", margin: "20px 50px 20px 50px" }}
        cols={1}
      >
        <Grid>
          <Grid.Col span={1}>
            <Text fw={500}>가격</Text>
          </Grid.Col>
          <Grid.Col style={{ paddingTop: "12px" }} span={5}>
            <Slider
              min={5000}
              max={5000000}
              step={5000}
              defaultValue={5000000}
              onChange={priceChange}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text fw={500}>{price}원 이하</Text>
          </Grid.Col>
          <Grid.Col span={1}>
            <Text fw={500}>당도</Text>
          </Grid.Col>
          <Grid.Col style={{ paddingTop: "12px" }} span={5}>
            <RangeSlider
              minRange={0}
              min={0}
              max={5}
              step={1}
              defaultValue={[0, 5]}
              onChange={sweetnessChange}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text fw={500}>
              {sweetness[0]} 이상 {sweetness[1]} 이하
            </Text>
          </Grid.Col>
          <Grid.Col span={1}>
            <Text fw={500}>산도</Text>
          </Grid.Col>
          <Grid.Col style={{ paddingTop: "12px" }} span={5}>
            <RangeSlider
              minRange={0.2}
              min={0}
              max={5}
              step={1}
              defaultValue={[0, 5]}
              onChange={acidityChange}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text fw={500}>
              {acidity[0]} 이상 {acidity[1]} 이하
            </Text>
          </Grid.Col>
          <Grid.Col span={1}>
            <Text fw={500}>바디</Text>
          </Grid.Col>
          <Grid.Col style={{ paddingTop: "12px" }} span={5}>
            <RangeSlider
              minRange={0.2}
              min={0}
              max={5}
              step={1}
              defaultValue={[0, 5]}
              onChange={bodyChange}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text fw={500}>
              {body[0]} 이상 {body[1]} 이하
            </Text>
          </Grid.Col>
          <Grid.Col span={1}>
            <Text fw={500}>타닌</Text>
          </Grid.Col>
          <Grid.Col style={{ paddingTop: "12px" }} span={5}>
            <RangeSlider
              minRange={0.2}
              min={0}
              max={5}
              step={1}
              defaultValue={[0, 5]}
              onChange={tanninChange}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text fw={500}>
              {tannin[0]} 이상 {tannin[1]} 이하
            </Text>
          </Grid.Col>
          <Grid.Col style={{ paddingTop: "12px" }} span={1}>
            <Text fw={500}>타입</Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Select
              placeholder="Pick value"
              data={["레드", "화이트", "로제", "스파클링", "주정강화", "기타"]}
              onChange={(type) => {
                let wineType;
                switch (type) {
                  case "레드":
                    wineType = WineType.RED;
                    break;
                  case "화이트":
                    wineType = WineType.WHITE;
                    break;
                  case "로제":
                    wineType = WineType.ROSE;
                    break;
                  case "스파클링":
                    wineType = WineType.SPARKLING;
                    break;
                  case "주정강화":
                    wineType = WineType.FORTIFIED;
                    break;
                  default:
                    wineType = WineType.UNDEFIENED;
                }
                onTypeChanged(wineType);
              }}
            />
          </Grid.Col>
          <Grid.Col span={1} />
        </Grid>
      </SimpleGrid>
    </div>
  );
};

export default WineFilter;
