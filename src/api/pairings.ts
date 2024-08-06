import { wachuApiClient } from "./client";
import { PairingsApiResponse } from "./response/PairingsApiResponse";

export const getPairings = async (
  page: number
): Promise<PairingsApiResponse> => {
  try {
    const response = await wachuApiClient.get("api/v1/pairings", {
      params: {
        page: page,
        size: 9,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch pairings");
  }
};
