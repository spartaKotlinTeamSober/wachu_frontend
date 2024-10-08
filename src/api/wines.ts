import { Wine, WineType } from "../models/Wine";
import { wachuApiClient } from "./client";
import { PromotionWinesApiResponse } from "./response/PromotionWinesApiResponse";
import { WineRecommendApiResponse } from "./response/WineRecommendApiResponse";
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
  preferWineId: string | undefined,
  priceWeight: number,
  tastyWeight: number,
  aromaWeight: number
): Promise<WineRecommendApiResponse[]> => {
  try {
    const response = await wachuApiClient.get(`api/v1/wines/recommend`, {
      params: {
        preferWineId: preferWineId,
        priceWeight: priceWeight,
        tastyWeight: tastyWeight,
        aromaWeight: aromaWeight,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch recommend wines");
  }
};

export const promotionWines = async (): Promise<PromotionWinesApiResponse> => {
  try {
    const response = await wachuApiClient.get("api/v1/wines/promotion");

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch promotion wines");
  }
};
