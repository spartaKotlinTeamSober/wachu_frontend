import { Wine, WineType } from "../models/Wine";
import { wachuApiClient } from "./client";
import { WineApiResponse } from "./response/WinesApiResponse";

export const getWines = async ({
  query = "",
  price = undefined as number | undefined,
  sweetness = undefined as number[] | undefined,
  acidity = undefined as number[] | undefined,
  body = undefined as number[] | undefined,
  tannin = undefined as number[] | undefined,
  type = undefined as WineType | undefined,
  page = 0,
  size = 10,
  sort = "",
  sort_direction = "asc",
} = {}): Promise<WineApiResponse> => {
  try {
    const response = await wachuApiClient.get<WineApiResponse>("api/v1/wines", {
      params: {
        query,
        price,
        sweetness,
        acidity,
        body,
        tannin,
        type,
        page,
        size,
        sort,
        sort_direction,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch wines");
  }
};

export const getWine = async (id: string | undefined): Promise<Wine> => {
  try {
    const response = await wachuApiClient.get(`api/v1/wines/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch wine");
  }
};

export const compareWine = async (wineId: string[]): Promise<Wine[]> => {
  try {
    const response = await wachuApiClient.get(`api/v1/wines/comparison`, {
      params: {
        wineId: wineId,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch comparison wines");
  }
};

export const recommendWine = async (
  preferWineId: string | undefined
): Promise<Wine[]> => {
  try {
    const response = await wachuApiClient.get(`api/v1/wines/recommend`, {
      params: preferWineId,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch recommend wines");
  }
};

interface PromotionWinesParams {
  page?: number;
  size?: number;
  sort?: string;
}

export const promotionWines = async ({
  page = 1,
  size = 10,
  sort = "name",
}: PromotionWinesParams = {}): Promise<Wine[]> => {
  try {
    const response = await wachuApiClient.get("api/v1/wines/promotion", {
      params: { page, size, sort },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
