import {
  Button,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { postEmailCode, postSignUp } from "../../api/auth";
import { SignUpRequest } from "../../api/request/SignUpRequest";
import { useEffect, useState } from "react";

const SignUpForm = () => {
  const [remainEmailCodeTime, setRemainEmailCodeTime] = useState<number | null>(
    null
  );
  const [email, setEmail] = useState("");

  const handleEmailCodeButton = () => {
    sendEmailCode(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { email, nickname, password, confirmPassword, code } = data;

    signUp({
      email: email.toString(),
      nickname: nickname.toString(),
      password: password.toString(),
      confirmPassword: confirmPassword.toString(),
      code: code.toString(),
    });
  };

  const sendEmailCode = async (email: string) => {
    try {
      await postEmailCode(email);
      setRemainEmailCodeTime(600);
    } catch (error) {
      console.error(error);
      alert("인증 코드 발송에 실패했습니다.");
    }
  };

  const signUp = async (params: SignUpRequest) => {
    const response = await postSignUp(params);
    console.log("🚀 ~ signUp ~ response:", response);
  };

  useEffect(() => {
    if (remainEmailCodeTime !== null && remainEmailCodeTime > 0) {
      const timer = setInterval(() => {
        setRemainEmailCodeTime((prevTime) =>
          prevTime !== null ? prevTime - 1 : null
        );
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [remainEmailCodeTime]);

  return (
    <form style={{ width: "30%" }} onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          label="Email"
          placeholder="이메일"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <Group>
          <Button onClick={handleEmailCodeButton}>
            {remainEmailCodeTime === null
              ? "인증번호 받기"
              : "인증번호를 받지 못하셨나요?"}
          </Button>
          {remainEmailCodeTime !== null && (
            <>
              <TextInput placeholder="인증 코드" name="code" />
              <Text>
                {Math.floor(remainEmailCodeTime / 60)}분{" "}
                {remainEmailCodeTime % 60}초 남았습니다.
              </Text>
            </>
          )}
        </Group>
        <TextInput label="Nickname" placeholder="닉네임" name="nickname" />
        <PasswordInput
          label="Password"
          placeholder="패스워드"
          name="password"
        />
        <PasswordInput
          label="Confirm password"
          placeholder="패스워드 확인"
          name="confirmPassword"
        />
        <Button fullWidth type="submit">
          회원가입 하기
        </Button>
        <Button
          fullWidth
          type="button"
          onClick={() => {
            window.location.href = "/login/sign-up";
          }}
        >
          로그인 화면으로
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
