import { Grid, Button, Text, GridCol, Modal, Group } from "@mantine/core";
import { useEffect, useState } from "react";
import { getWine, recommendWine } from "../../../api/wines";
import { Wine } from "../../../models/Wine";
import WineModal from "../WineModal";
import WineRecommendList from "./WineRecommendList";
import WineRecommendWeightSlider from "./WineRecommendWeightSlider";
import { WineRecommendApiResponse } from "../../../api/response/WineRecommendApiResponse";
import { IconInfoCircle } from "@tabler/icons-react";

const WineRecommendContainer = () => {
  const [preferWine, setPreferWine] = useState<Wine>();
  const [preferWineId, setPreferWineId] = useState<string>();
  const [recommendWines, setRecommendWines] = useState<
    WineRecommendApiResponse[]
  >([]);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const [price, setPrice] = useState<number>(0);
  const [tasty, setTasty] = useState<number>(0);
  const [aroma, setAroma] = useState<number>(0);

  const fetchWine = async () => {
    if (preferWineId) {
      const wineResponse = await getWine(preferWineId);
      setPreferWine(wineResponse);
    }
  };

  const fetchRecommendWine = async () => {
    const winesResponse = await recommendWine(
      preferWineId,
      price,
      tasty,
      aroma
    );

    setRecommendWines(winesResponse);
  };

  const [modalOpened, setModalOpened] = useState(false);
  const [infoModalOpened, setInfoModalOpened] = useState(false);

  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  const wineSelected = (wineId: number) => {
    closeModal();
    setPreferWineId(wineId.toString());
  };

  const handleRecommendButton = () => {
    if (!preferWineId) {
      alert("선호 와인을 선택해주세요.");
      return;
    }

    setShouldFetch(true);
  };

  useEffect(() => {
    fetchWine();
  }, [preferWineId]);

  useEffect(() => {
    if (shouldFetch) {
      fetchRecommendWine();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <div style={{ margin: "20px 50px 20px 50px" }}>
      <Grid>
        <Grid.Col style={{ paddingTop: "14px" }} span={1}>
          <Text fw={500}>선호 와인</Text>
        </Grid.Col>
        <Grid.Col span={1}>
          <Button onClick={openModal}>와인 선택</Button>
        </Grid.Col>
        <Grid.Col style={{ paddingTop: "14px" }} span={4}>
          <Text fw={500}>{preferWine?.name || ""}</Text>
        </Grid.Col>
        <GridCol span={12}>
          <WineRecommendWeightSlider
            onPriceChanged={(value) => setPrice(value)}
            onTastyChanged={(value) => setTasty(value)}
            onAromaChanged={(value) => setAroma(value)}
          />
        </GridCol>
        <Grid.Col style={{ paddingTop: "14px" }} span={12}>
          <Group>
            <Button onClick={handleRecommendButton}>추천받기</Button>
            <Button
              variant="subtle"
              color="blue"
              onClick={() => setInfoModalOpened(true)}
            >
              <IconInfoCircle size={16} />
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
      <WineModal
        opened={modalOpened}
        closeModal={closeModal}
        onSelected={wineSelected}
      />
      <WineRecommendList wines={recommendWines} />
      <>
        <Modal
          opened={infoModalOpened}
          onClose={() => setInfoModalOpened(false)}
          title="와인 추천 로직"
          size="auto"
        >
          <Text
            style={{
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            선택한 선호 와인의 가격, 맛, 향을 기반으로 추천 와인을 찾아드립니다.
            <br />
            가격은 Min-Max Scaling을 통해 0~1 사이의 값으로 변환하였습니다.
            <br />
            향은 OpenAI Embedding API를 사용해 벡터화하여 선호 와인과 코사인
            유사도를 계산하였습니다.
            <br />
            추천 와인은 계산이 끝난 유사도를 종합한 점수를 기반으로 정렬하여
            제공됩니다.
          </Text>
        </Modal>
      </>
    </div>
  );
};

export default WineRecommendContainer;
