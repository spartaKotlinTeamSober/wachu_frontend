// ModalComponent.tsx
import React, { useEffect, useRef, useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import DefaultGrid from "../common/DefaultGrid";
import WineCard from "./WineCard";
import SearchBar from "../common/SearchBar";
import { Wine } from "../../models/Wine";
import { getWines } from "../../api/wines";

interface WineModalProps {
  opened: boolean;
  closeModal: () => void;
  onSelected: (wineId: number) => void;
}

const WineModal: React.FC<WineModalProps> = ({
  opened,
  closeModal,
  onSelected,
}) => {
  const [wines, setWines] = useState<Wine[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const isFirstRender = useRef(true);

  const fetchWines = async () => {
    const winesResponse = await getWines({
      query: query,
      page: page - 1,
      size: 9,
    });

    setWines(winesResponse.content);
    setTotalPages(winesResponse.totalPages);
  };

  const handleSearch = (query: string) => {
    setQuery(query);
    setPage(1);
    setShouldFetch(true);
  };

  const wineCardSelected = (wineId: number) => {
    onSelected(wineId);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (shouldFetch) {
      fetchWines();
      setShouldFetch(false);
    }
  }, [page, query]);

  return (
    <div>
      <Modal opened={opened} onClose={closeModal} size="auto" title="와인 검색">
        <div style={{ margin: "20px 50px 20px 50px" }}>
          <div style={{ marginBottom: "20px" }}>
            <SearchBar onSearch={handleSearch} />
          </div>
          <DefaultGrid>
            {wines.map((wine) => (
              <WineCard
                key={wine.id}
                imageSrc={
                  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                }
                wineName={wine.name}
                buttonText={"선택하기"}
                onSelected={() => wineCardSelected(wine.id)}
              />
            ))}
          </DefaultGrid>
          <Pagination
            onChange={setPage}
            total={totalPages}
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default WineModal;
