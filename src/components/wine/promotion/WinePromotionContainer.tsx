import { useEffect, useState } from "react";
import { Text } from "@mantine/core";
import { promotionWines } from "../../../api/wines";
import { Wine } from "../../../models/Wine";
import WineList from "../WineList";

const WinePromotionContainer = () => {
  const [wines, setWines] = useState<Wine[]>([]);
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);

  const fetchPromotionWines = async () => {
    try {
      const response = await promotionWines();
      setShouldFetch(false);

      if (Array.isArray(response.content)) {
        const wines = response.content.map((item) => item.wine);
        setWines(wines);
      }
    } catch (error) {
      setShouldFetch(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPromotionWines();
  }, [shouldFetch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {shouldFetch === false && wines.length === 0 ? (
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
