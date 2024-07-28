import { Wine } from "../models/Wine";
import DefaultGrid from "./common/DefaultGrid";
import WineCard from "./wine/WineCard";

const WineList = ({ wines }: { wines: Wine[] }) => {

  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <DefaultGrid>
        {wines.map((wine) => (
          <WineCard
            key={wine.id}
            imageSrc={
              "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            }
            wineName={wine.name}
            buttonText={"더 알아보기"}
          />
        ))}
      </DefaultGrid>
    </div>
  );
};

export default WineList;
