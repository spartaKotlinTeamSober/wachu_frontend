import { Pairing } from "../../models/Pairing";

const PairingList = ({ pairings }: { pairings: Pairing[] }) => {
  return pairings.map((pairing) => (
    <div key={pairing.id}>
      <h2>{pairing.title}</h2>
      <p>{pairing.description}</p>
    </div>
  ));
};

export default PairingList;
