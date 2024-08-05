import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { postLogin } from "../../api/auth";
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
            navigate("/login/sign-up");
          }}
        >
          회원가입
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
