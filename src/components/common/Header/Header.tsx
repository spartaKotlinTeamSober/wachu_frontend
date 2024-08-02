import { Group, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const links = [
  { link: "/wines/recommend", label: "추천받기" },
  { link: "/wines/compare", label: "비교하기" },
  { link: "/", label: "리뷰" },
  { link: "/", label: "페어링" },
];

export function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={() => navigate(link.link)}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <a
            key={"/"}
            href={"/"}
            className={classes.link}
            onClick={() => navigate("/")}
          >
            <h1>Wachu</h1>
          </a>
        </Group>
        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          {!token && (
            <a
              key={"/login"}
              href={"/login"}
              className={classes.link}
              onClick={(event) => {
                event.preventDefault();
                navigate("/login");
              }}
            >
              로그인
            </a>
          )}
          <IconSearch
            onClick={() => navigate("/wines")}
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        </Group>
      </div>
    </header>
  );
}

export default Header;
