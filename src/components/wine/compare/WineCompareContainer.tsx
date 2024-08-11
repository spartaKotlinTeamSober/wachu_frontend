import { Button, Grid, GridCol } from "@mantine/core";
import { Wine } from "../../models/Wine";
import WineDetailCard from "./WineDetailCard";
import { useEffect, useState } from "react";
import WineModal from "./WineModal";
import { compareWine } from "../../api/wines";

const WineCompareContainer = () => {
  const [firstWine, setFirstWine] = useState<Wine>();
  const [secondWine, setSecondWine] = useState<Wine>();
  const [firstWineId, setFirstWineId] = useState<number>();
  const [secondWineId, setSecondWineId] = useState<number>();
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const [modalOpened, setModalOpened] = useState(false);

  const openModal = (index: number) => {
    console.log("🚀 ~ openModal ~ button:", index);

    setSelectedIndex(index);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  const wineSelected = (wineId: number) => {
    if (selectedIndex === 0) {
      setFirstWineId(wineId);
    } else if (selectedIndex === 1) {
      setSecondWineId(wineId);
    }

    closeModal();
  };

  const compareWines = async () => {
    if (firstWineId && secondWineId) {
      const winesResponse = await compareWine([
        firstWineId.toString(),
        secondWineId.toString(),
      ]);

      setFirstWine(winesResponse[0]);
      setSecondWine(winesResponse[1]);
    }
  };

  useEffect(() => {
    if (firstWineId && secondWineId) {
      compareWines();
    }
  }, [firstWineId, secondWineId]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid
        style={{
          width: "50%",
          margin: "50px 50px 20px 50px",
        }}
      >
        <GridCol span={6}>
          <Button fullWidth onClick={() => openModal(0)}>
            {firstWineId !== undefined ? "선택 완료" : "첫 번째 와인 선택"}
          </Button>
        </GridCol>
        <GridCol span={6}>
          <Button fullWidth onClick={() => openModal(1)}>
            {secondWineId !== undefined ? "선택 완료" : "두 번째 와인 선택"}
          </Button>
        </GridCol>
        {firstWine && (
          <GridCol span={6}>
            <WineDetailCard wine={firstWine} />
          </GridCol>
        )}
        {secondWine && (
          <GridCol span={6}>
            <WineDetailCard wine={secondWine} />
          </GridCol>
        )}
      </Grid>
      <WineModal
        opened={modalOpened}
        closeModal={closeModal}
        onSelected={wineSelected}
      />
    </div>
  );
};

export default WineCompareContainer;
