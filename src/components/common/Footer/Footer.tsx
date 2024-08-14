import { Anchor, Container, Group } from "@mantine/core";
import classes from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const links = [
  { link: "/terms", label: "서비스 이용약관" },
  { link: "/privacy", label: "개인정보 처리방침" },
  //   { link: "#", label: "Blog" },
  //   { link: "#", label: "Careers" },
];

export function Footer() {
  const navigate = useNavigate();

  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
      }}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
          <p>@2024 wachu</p>
        </Group>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}

export default Footer;
