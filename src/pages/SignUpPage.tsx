import SignUpForm from "../components/login/SignUpForm";
import classes from "./SignUpPage.module.css";

const SignUpPage = () => {
  return (
    <section className={classes.signUpSection}>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
