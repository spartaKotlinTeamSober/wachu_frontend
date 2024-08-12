import { Profile } from "../models/Profile";
import { wachuApiClient } from "./client";
import { SignUpRequest } from "./request/SignUpRequest";

export const postLogin = async (
  email: string,
  password: string
): Promise<string> => {
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

export const postSignUp = async (request: SignUpRequest): Promise<Profile> => {
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

export const postLogout = async (): Promise<void> => {
  try {
    await wachuApiClient.post(`/auth/logout`);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to logout");
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

export const postKakaoLogin = async (): Promise<string> => {
  try {
    const response = await wachuApiClient.get(`/oauth2/login/kakao`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to login with Kakao");
  }
};

export const postNaverLogin = async (): Promise<string> => {
  try {
    const response = await wachuApiClient.get(`/oauth2/login/naver`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to login with Naver");
  }
};
