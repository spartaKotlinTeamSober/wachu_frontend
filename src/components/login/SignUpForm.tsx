import {
  Button,
  Group,
  Image,
  PasswordInput,
  rem,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { postEmailCode, postSignUp } from "../../api/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { IconUpload, IconX, IconPhoto } from "@tabler/icons-react";

const SignUpForm = () => {
  const [file, setFile] = useState<FileWithPath[]>();
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const [remainEmailCodeTime, setRemainEmailCodeTime] = useState<number | null>(
    null
  );
  const [email, setEmail] = useState("");

  const handleEmailCodeButton = () => {
    if (email === "") {
      alert("이메일을 입력해주세요.");
      return;
    }
    sendEmailCode(email);
  };

  const handleEmailChange = (event) => {
    const value = event.currentTarget.value;
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { email, nickname, password, confirmPassword, code } = data;

    if (
      email === "" ||
      nickname === "" ||
      password === "" ||
      confirmPassword === "" ||
      code === ""
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const params = {
      email: email.toString(),
      nickname: nickname.toString(),
      password: password.toString(),
      confirmPassword: confirmPassword.toString(),
      code: code.toString(),
    };

    const response = await postSignUp(params, file && file[0]);

    if (response) {
      navigate("/");
    }
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
      <Text>프로필 사진</Text>
      <div
        style={{
          border: "1px dashed var(--mantine-color-dimmed)",
        }}
      >
        <Dropzone
          onDrop={(file) => setFile(file)}
          maxSize={5 * 1024 ** 2}
          maxFiles={1}
          multiple={false}
          accept={["image/*"]}
        >
          <Group
            justify="center"
            gap="xl"
            mih={200}
            style={{ pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-red-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-dimmed)",
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>
            <div>
              <Text size="xl" inline>
                이미지를 드래그하거나 클릭해서 넣어주세요.
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                5MB 이하의 이미지 파일만 업로드 가능합니다.
              </Text>
            </div>
          </Group>
        </Dropzone>
      </div>
      {file && (
        <div
          style={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          <Image
            src={URL.createObjectURL(file[0])}
            height={64}
            width={64}
            fit="cover"
            style={{ maxWidth: "64px", maxHeight: "64px" }}
          />
        </div>
      )}
      <Stack style={{ marginTop: "12px" }} gap="md">
        <TextInput
          label="Email"
          placeholder="이메일"
          name="email"
          value={email}
          onChange={handleEmailChange}
          error={
            !isValid && email.length > 0
              ? "올바른 이메일 주소를 입력하세요"
              : null
          }
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
        {remainEmailCodeTime !== null && (
          <Text size="xs">메일 발송에 최대 1분정도 소요될 수 있습니다.</Text>
        )}
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
            navigate("/login");
          }}
        >
          로그인 화면으로
        </Button>
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
      </Stack>
    </form>
  );
};

export default SignUpForm;
