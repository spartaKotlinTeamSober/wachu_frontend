import { Pairing } from "../../models/Pairing";
import DefaultGrid from "../common/DefaultGrid";
import PairingCard from "./PairingCard";

const PairingList = ({ pairings }: { pairings: Pairing[] }) => {
  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <DefaultGrid>
        {pairings.map((pairing) => (
          <div key={pairing.id}>
            <PairingCard pairing={pairing} />
          </div>
        ))}
      </DefaultGrid>
    </div>
  );
};

export default PairingList;
