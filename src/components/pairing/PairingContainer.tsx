import { Button, Pagination, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Pairing } from "../../models/Pairing";
import PairingList from "./PairingList";
import { getPairings } from "../../api/pairings";
import { useNavigate } from "react-router-dom";

const PairingContainer = () => {
  const [pairings, setPairings] = useState<Pairing[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [shouldFetch, setShouldFetch] = useState(true);

  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    setPage(page);
    setShouldFetch(true);
  };

  const fetchPairings = async () => {
    const pairingResponse = await getPairings(page - 1);
    console.log("🚀 ~ fetchPairings ~ pairingResponse:", pairingResponse);

    setPairings(pairingResponse.content);
    setTotalPages(pairingResponse.totalPages);
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchPairings();
      setShouldFetch(false);
    }
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
      <div style={{ display: "flex", width: "100%", marginTop: "40px" }}>
        <div style={{ marginLeft: "auto", marginRight: "40px" }}>
          <Button
            onClick={() => {
              navigate("write");
            }}
          >
            작성하기
          </Button>
        </div>
      </div>
      {pairings.length === 0 ? (
        <Text size="xl" fw={700} style={{ marginTop: "60px" }}>
          페어링 게시글이 없습니다
        </Text>
      ) : (
        <>
          <PairingList pairings={pairings} />
          <Pagination
            onChange={handlePageChange}
            total={totalPages}
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </>
      )}
    </div>
  );
};

export default PairingContainer;
