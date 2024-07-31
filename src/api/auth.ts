import { wachuApiClient } from "./client";
import { SignUpRequest } from "./request/SignUpRequest";
import { MemberApiResponse } from "./response/MemberApiResponse";
import { SignInApiResponse } from "./response/SignInApiResponse";

export const postLogin = async (
  email: string,
  password: string
): Promise<SignInApiResponse> => {
  try {
    const response = await wachuApiClient.post(`/auth/login`, {
      email: email,
      password: password,
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
  console.log("🚀 ~ request:", request);
  try {
    const response = await wachuApiClient.post(`/auth/sign-up`, {
      email: request.email,
      nickname: request.nickname,
      password: request.password,
      confirmPassword: request.confirmPassword,
      code: request.code,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postEmailCode = async (email: string): Promise<void> => {
  try {
    const data = { email: email };
    await wachuApiClient.post(`/auth/sign-up/email-validation`, data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email code");
  }
};
