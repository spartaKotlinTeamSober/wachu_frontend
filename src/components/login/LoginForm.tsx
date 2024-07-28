import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { email, password } = data;
  };

  return (
    <form className={classes.LoginForm} onSubmit={handleSubmit}>
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
      </Stack>
    </form>
  );
};

export default LoginForm;
