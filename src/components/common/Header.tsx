import { Group, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./Header.module.css";

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

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <h1>Wachu</h1>
        </Group>
        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        </Group>
      </div>
    </header>
  );
}

export default Header;
