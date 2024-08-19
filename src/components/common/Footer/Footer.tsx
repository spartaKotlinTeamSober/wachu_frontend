import { Anchor, Container, Group, Stack, Text } from "@mantine/core";
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
        <Stack style={{ maxWidth: "50%" }}>
          <Text>© 2024 내일배움캠프 Kotlin 2기 - 함께 성장하는 Sober 팀</Text>
          <Text size="sm">
            이 웹사이트는 내일배움캠프 Kotlin 2기 최종 프로젝트로 개발된
            사이트입니다. 모든 콘텐츠와 이미지는 교육적 목적으로만 사용됩니다.
          </Text>
        </Stack>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}

export default Footer;
