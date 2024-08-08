import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPairing } from "../../api/pairings";
import { Pairing } from "../../models/Pairing";
import PairingDetailCard from "./PairingDetailCard";

const PairingDetailContainer = () => {
  const [pairing, setPairing] = useState<Pairing>();
  const pairingId = useParams<{ id: string }>().id;

  const fetchPairing = async () => {
    const pairingResponse = await getPairing(pairingId);
    setPairing(pairingResponse);
  };

  useEffect(() => {
    fetchPairing();
  }, [pairingId]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {pairing && <PairingDetailCard pairing={pairing} />}
    </div>
  );
};

export default PairingDetailContainer;
