import { Profile } from "../models/Profile";
import { wachuApiClient } from "./client";

export const getProfile = async (): Promise<Profile> => {
  try {
    const response = await wachuApiClient.get("api/v1/profile");

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch profile");
  }
};
