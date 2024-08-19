// ModalComponent.tsx
import React, { useEffect, useState } from "react";
import { Modal, Pagination, Text } from "@mantine/core";
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

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setShouldFetch(true);
  };

  useEffect(() => {
    if (opened) {
      fetchWines();
    }
  }, [opened]);

  useEffect(() => {
    if (shouldFetch) {
      fetchWines();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <div>
      <Modal opened={opened} onClose={closeModal} size="auto" title="와인 검색">
        <div style={{ margin: "20px 50px 20px 50px" }}>
          <div style={{ marginBottom: "20px" }}>
            <SearchBar onSearch={handleSearch} />
          </div>
          <DefaultGrid>
            {wines.length === 0 && (
              <Text ta="center" size="xl" fw={700}>
                검색 결과가 없습니다
              </Text>
            )}
            {wines.map((wine) => (
              <WineCard
                key={wine.id}
                imageSrc={wine.imageUrl ? wine.imageUrl : "/no_image.webp"}
                wineName={wine.name}
                buttonText={"선택하기"}
                onSelected={() => wineCardSelected(wine.id)}
              />
            ))}
          </DefaultGrid>
          <Pagination
            onChange={handlePageChange}
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
