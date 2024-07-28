import LoginForm from "../components/login/LoginForm";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <section className={classes.loginSection}>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
