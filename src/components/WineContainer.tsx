import { useEffect, useState } from "react";
import { getWines } from "../api/wines";
import WineList from "./WineList";
import { Wine } from "../models/Wine";

const WineContainer = () => {
  const [wines, setWines] = useState<Wine[]>([]);

  const fetchWines = async () => {
    const wines = await getWines();
    console.log("data: >> ", wines);
    setWines(wines);
  };

  useEffect(() => {
    fetchWines();
  }, []);

  return (
    <div>
      <WineList wines={wines} />
    </div>
  );
};

export default WineContainer;
