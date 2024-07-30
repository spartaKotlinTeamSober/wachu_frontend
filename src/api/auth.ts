import { wachuApiClient } from "./client";
import { SignUpRequest } from "./request/SignUpRequest";
import { MemberApiResponse } from "./response/MemberApiResponse";
import { SignInApiResponse } from "./response/SignInApiResponse";

export const postLogin = async (
  email: string,
  password: string
): Promise<SignInApiResponse> => {
  try {
    const response = await wachuApiClient.get(`/auth/login}`, {
      data: {
        email,
        password,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to login");
  }
};

export const postSignUp = async (
  request: SignUpRequest
): Promise<MemberApiResponse> => {
  try {
    const response = await wachuApiClient.post(`/auth/sign-up`, {
      data: {
        email: request.email,
        nickname: request.nickname,
        password: request.password,
        confirmPassword: request.confirmPassword,
        code: request.code,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to sign up");
  }
};

export const postEmailCode = async (email: string): Promise<void> => {
  try {
    await wachuApiClient.post(`/auth/sign-up/email-validation`, {
      data: {
        email,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email code");
  }
};
