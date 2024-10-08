import {
  Button,
  PasswordInput,
  SimpleGrid,
  Stack,
  TextInput,
} from "@mantine/core";
import { postKakaoLogin, postLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { email, password } = data;

    const response = await postLogin(email.toString(), password.toString());
    localStorage.setItem("token", response);

    navigate("/");
  };

  const handleKakaoLogin = async () => {
    const response = await postKakaoLogin();

    window.location.href = response;
  };

  // const handleNaverLogin = async () => {
  //   const response = await postNaverLogin();

  //   window.location.href = response;
  // };

  const buttonStyles = {
    width: "100%",
    height: "35px",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  return (
    <form style={{ width: "30%" }} onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput label="Email" placeholder="이메일" name="email" />
        <PasswordInput
          label="Password"
          placeholder="패스워드"
          name="password"
        />
        <Button fullWidth type="submit">
          로그인
        </Button>
        <Button
          style={{ ...buttonStyles, backgroundColor: "#FEE500" }}
          onClick={handleKakaoLogin}
        >
          {/* <Image h={35} fit="contain" src="src/assets/kakao_login.png" /> */}
          카카오 로그인
        </Button>
        {/* <button
          style={{ ...buttonStyles, backgroundColor: "#03c75a" }}
          onClick={handleNaverLogin}
        >
          <Image h={35} fit="contain" src="src/assets/naver_login.png" />
        </button> */}
        <Button
          fullWidth
          type="button"
          onClick={() => {
            navigate("/login/sign-up");
          }}
        >
          회원가입
        </Button>
        <Button
          fullWidth
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          돌아가기
        </Button>
        <SimpleGrid cols={2} spacing="md">
          <Button
            c={"gray"}
            variant="subtle"
            onClick={() => {
              navigate("/terms");
            }}
          >
            서비스 이용약관
          </Button>
          <Button
            c={"gray"}
            variant="subtle"
            onClick={() => {
              navigate("/privacy");
            }}
          >
            개인정보 처리방침
          </Button>
        </SimpleGrid>
      </Stack>
    </form>
  );
};

export default LoginForm;
