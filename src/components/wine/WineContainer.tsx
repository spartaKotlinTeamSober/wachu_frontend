import { useEffect, useState } from "react";
import { getWines } from "../../api/wines";
import WineList from "./WineList";
import { Wine, WineType } from "../../models/Wine";
import { Pagination, Text } from "@mantine/core";
import SearchBar from "../common/SearchBar";
import WineFilter from "./WineFilter";

const WineContainer = () => {
  const [wines, setWines] = useState<Wine[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);

  const [price, setPrice] = useState<number>();
  const [sweetness, setSweetness] = useState<number[]>();
  const [acidity, setAcidity] = useState<number[]>();
  const [body, setBody] = useState<number[]>();
  const [tannin, setTannin] = useState<number[]>();
  const [type, setType] = useState<WineType>();

  const fetchWines = async () => {
    const winesResponse = await getWines({
      query: query,
      price: price,
      sweetness: sweetness,
      acidity: acidity,
      body: body,
      tannin: tannin,
      type: type,
      page: page - 1,
      size: 9,
    });

    setWines(winesResponse.content);
    setTotalPages(winesResponse.totalPages);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setShouldFetch(true);
  };

  const handleSearch = (query: string) => {
    setQuery(query);
    setPage(1);
    setShouldFetch(true);
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchWines();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <div style={{ margin: "20px 50px 20px 50px" }}>
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <WineFilter
        onPriceChanged={setPrice}
        onSweetnessChanged={setSweetness}
        onAcidityChanged={setAcidity}
        onBodyChanged={setBody}
        onTanninChanged={setTannin}
        onTypeChanged={setType}
      />
      {wines.length === 0 && (
        <Text ta="center" size="xl" fw={700}>
          검색 결과가 없습니다
        </Text>
      )}
      <WineList wines={wines} />
      <Pagination
        onChange={handlePageChange}
        total={totalPages}
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default WineContainer;
