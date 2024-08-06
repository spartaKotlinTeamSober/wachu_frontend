import { useEffect, useState } from "react";
import { promotionWines } from "../../api/wines";
import { Wine } from "../../models/Wine";
import WineList from "./WineList";
import { Text } from "@mantine/core";

const WinePromotionContainer = () => {
  const [wines, setWines] = useState<Wine[]>([]);

  const fetchPromotionWines = async () => {
    try {
      const response = await promotionWines();

      if (Array.isArray(response)) {
        setWines(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPromotionWines();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {wines.length === 0 ? (
        <Text size="xl" fw={700} style={{ marginTop: "60px" }}>
          프로모션중인 와인이 없습니다
        </Text>
      ) : (
        <WineList wines={wines} />
      )}
    </div>
  );
};

export default WinePromotionContainer;
