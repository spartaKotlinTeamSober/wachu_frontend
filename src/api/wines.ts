import { Wine } from "../models/Wine";
import { wachuApiClient } from "./client";

interface WinePaginationParams {
  query?: string;
  page?: number;
  size?: number;
  sort?: string;
  sort_direction?: "asc" | "desc";
}

interface RecommendWineRequest {
  preferWineId: number;
}

export const getWines = async ({
  query = "",
  page = 0,
  size = 10,
  sort = "",
  sort_direction = "asc",
}: WinePaginationParams = {}): Promise<Wine[]> => {
  try {
    const response = await wachuApiClient.get("/v1/wines", {
      params: { query, page, size, sort, sort_direction },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getWine = async (id: number): Promise<Wine | null> => {
  try {
    const response = await wachuApiClient.get(`/v1/wines/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const compareWine = async (
  firstWineId: number,
  secondWineId: number
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
