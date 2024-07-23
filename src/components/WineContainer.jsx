import { useEffect, useState } from "react";
import { getWines } from "../api/wines";
import WineList from "./WineList";

const WineContainer = () => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    const fetchWines = async () => {
      const wines = await getWines();

      console.log("data: >> ", wines);

      setWines(wines);
    };

    fetchWines();
  }, []);

  return (
    <div>
      <WineList wines={wines} />
    </div>
  );
};

export default WineContainer;
