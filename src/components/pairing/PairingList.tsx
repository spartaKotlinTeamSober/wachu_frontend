import { useNavigate } from "react-router-dom";
import { Pairing } from "../../models/Pairing";
import DefaultGrid from "../common/DefaultGrid";
import PairingCard from "./PairingCard";

const PairingList = ({ pairings }: { pairings: Pairing[] }) => {
  const navigate = useNavigate();

  const pairingCardSelected = (pairingId: number) => {
    navigate(`/pairing/${pairingId}`);
  };

  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <DefaultGrid>
        {pairings.map((pairing) => (
          <div key={pairing.id}>
            <PairingCard
              pairing={pairing}
              onSelected={() => pairingCardSelected(pairing.id)}
            />
          </div>
        ))}
      </DefaultGrid>
    </div>
  );
};

export default PairingList;
