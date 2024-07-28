import { Group, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./Header.module.css";
import WineModal from "../../wine/WineModal";
import { useState } from "react";

const links = [
  { link: "/recommend", label: "Features" },
  { link: "/pairing", label: "Pricing" },
  { link: "/review", label: "Learn" },
];

export function Header() {
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  const wineDetails = (wineId: number) => {
    console.log("🚀 ~ wineDetails ~ wineId:", wineId);
  };

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group className={classes.logo}>
          <h1>Wachu</h1>
        </Group>
        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <IconSearch
            onClick={openModal}
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
          <WineModal
            opened={modalOpened}
            closeModal={closeModal}
            onSelected={wineDetails}
          />
        </Group>
      </div>
    </header>
  );
}

export default Header;
