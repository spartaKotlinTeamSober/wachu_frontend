import { useEffect, useState } from "react";
import { getWine, recommendWine } from "../../api/wines";
import WineList from "./WineList";
import { Wine } from "../../models/Wine";
import { Button, Grid, Text } from "@mantine/core";
import WineModal from "./WineModal";

const WineRecommendContainer = () => {
  const [preferWine, setPreferWine] = useState<Wine>();
  const [preferWineId, setPreferWineId] = useState<string>();
  const [recommendWines, setRecommendWines] = useState<Wine[]>([]);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  //   const [price, setPrice] = useState<number>();
  //   const [sweetness, setSweetness] = useState<number[]>();
  //   const [acidity, setAcidity] = useState<number[]>();
  //   const [body, setBody] = useState<number[]>();
  //   const [tannin, setTannin] = useState<number[]>();
  //   const [type, setType] = useState<WineType>();

  const fetchWine = async () => {
    if (preferWineId) {
      const wineResponse = await getWine(preferWineId);
      setPreferWine(wineResponse);
    }
  };

  const fetchRecommendWine = async () => {
    const winesResponse = await recommendWine(preferWineId);

    setRecommendWines(winesResponse);
  };

  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  const wineSelected = (wineId: number) => {
    console.log("🚀 ~ wineSelected ~ wineId:", wineId);
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
        <Grid.Col style={{ paddingTop: "14px" }} span={12}>
          <Button onClick={handleRecommendButton}>추천받기</Button>
        </Grid.Col>
      </Grid>
      <WineModal
        opened={modalOpened}
        closeModal={closeModal}
        onSelected={wineSelected}
      />
      <WineList wines={recommendWines} />
    </div>
  );
};

export default WineRecommendContainer;
