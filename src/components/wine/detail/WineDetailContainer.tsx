import { useEffect, useState } from "react";
import { Wine } from "../../../models/Wine";
import WineDetailCard from "./WineDetailCard";
import { getWine } from "../../../api/wines";
import { useParams } from "react-router-dom";

const WineDetailContainer = () => {
  const [wine, setWine] = useState<Wine>();
  const wineId = useParams<{ id: string }>().id;

  const fetchWine = async () => {
    const wineResponse = await getWine(wineId);
    setWine(wineResponse);
  };

  useEffect(() => {
    fetchWine();
  }, [wineId]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {wine && <WineDetailCard wine={wine} />}
    </div>
  );
};

export default WineDetailContainer;
