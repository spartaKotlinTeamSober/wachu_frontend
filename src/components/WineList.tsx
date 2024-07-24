import { Wine } from "../models/Wine";

const WineList = ({ wines }: { wines: Wine[] }) => {
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
