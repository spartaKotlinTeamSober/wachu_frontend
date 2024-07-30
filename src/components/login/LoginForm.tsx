import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { postLogin } from "../../api/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { email, password } = data;

    setEmail(email.toString());
    setPassword(password.toString());
    setShouldFetch(true);
  };

  const login = async () => {
    const response = await postLogin(email, password);
    console.log("🚀 ~ login ~ response:", response);

    setShouldFetch(false);
  };

  useEffect(() => {
    if (shouldFetch) {
      login();
    }
  }, [shouldFetch]);

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
          fullWidth
          type="button"
          onClick={() => {
            window.location.href = "/login/sign-up";
          }}
        >
          회원가입
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
