import { Wine } from "../models/Wine";
import { wachuApiClient } from "./client";
import { WineApiResponse } from "./response/WinesApiResponse";

interface RecommendWineRequest {
  preferWineId: number;
}

export const getWines = async ({
  query = "",
  price = undefined,
  sweetness = undefined,
  acidity = undefined,
  body = undefined,
  tannin = undefined,
  type = undefined,
  page = 0,
  size = 10,
  sort = "",
  sort_direction = "asc",
} = {}): Promise<WineApiResponse> => {
  try {
    const response = await wachuApiClient.get<WineApiResponse>("/v1/wines", {
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

export const getWine = async (id: string): Promise<Wine> => {
  try {
    const response = await wachuApiClient.get(`/v1/wines/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch wine");
  }
};

export const compareWine = async (
  firstWineId: string,
  secondWineId: string
): Promise<any> => {
  try {
    const response = await wachuApiClient.get(
      `/v1/wines/compare/?wineId=${firstWineId}&wineId=${secondWineId}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const recommendeWine = async (
  recommendWineRequest: RecommendWineRequest
): Promise<any> => {
  try {
    const response = await wachuApiClient.get(`/v1/wines/recommend`, {
      data: recommendWineRequest,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
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
    const response = await wachuApiClient.get("/v1/wines/promotion", {
      params: { page, size, sort },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
