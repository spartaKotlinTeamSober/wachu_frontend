import { Group, Image, Menu, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { postLogout } from "../../../api/auth";

const links = [
  { link: "/wines/recommend", label: "추천받기" },
  { link: "/wines/compare", label: "비교하기" },
  { link: "/review", label: "리뷰" },
  { link: "/pairing", label: "페어링" },
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

  const handleLogout = async () => {
    await postLogout();
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <a
            key={"/"}
            href={"/"}
            className={classes.link}
            onClick={() => navigate("/")}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src="/wine_glass.png"
              alt="Wine Glass"
              width={30}
              height={30}
            />
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
          {token && (
            <Menu trigger="hover" openDelay={100} closeDelay={400}>
              <Menu.Target>
                <a className={classes.link}>내 정보</a>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  key={"/profile"}
                  className={classes.link}
                  onClick={(event) => {
                    event.preventDefault();
                    handleProfile();
                  }}
                >
                  프로필
                </Menu.Item>
                <Menu.Item
                  key={"/logout"}
                  className={classes.link}
                  onClick={(event) => {
                    event.preventDefault();
                    handleLogout();
                  }}
                >
                  로그아웃
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
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
