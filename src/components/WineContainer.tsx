import { useEffect, useState } from "react";
import { getWines } from "../api/wines";
import WineList from "./WineList";
import { Wine } from "../models/Wine";
import { Pagination } from "@mantine/core";

const WineContainer = () => {
  const [wines, setWines] = useState<Wine[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchWines = async () => {
    const winesResponse = await getWines({ page: page - 1, size: 9 });

    setWines(winesResponse.content);
    setTotalPages(winesResponse.totalPages);
  };

  useEffect(() => {
    fetchWines();
  }, [page]);

  return (
    <div>
      <WineList wines={wines} />
      <Pagination
        onChange={setPage}
        total={totalPages}
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default WineContainer;
