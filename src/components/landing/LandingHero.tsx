import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./LandingHero.module.css";
import { useNavigate } from "react-router-dom";

export function LandingHero() {
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>프로모션 와인</Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            프로모션, 이 달의 와인을 찾아보세요.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            variant="white"
            size="lg"
            onClick={() => {
              navigate("/wines/promotion");
            }}
          >
            보러가기
          </Button>
        </div>
      </div>
    </div>
  );
}
