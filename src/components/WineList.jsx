import { useEffect, useState } from "react";
import { getWines } from "../api/wines";

const WineList = () => {
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
      <ul>
        {wines.map((wine) => (
          <li key={wine.id}>name: {wine.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WineList;
