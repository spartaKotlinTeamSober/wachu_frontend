import { wachuApiClient } from "./client";

export const getWines = async ({
  query = "",
  page = 0,
  size = 10,
  sort = "",
  sort_direction = "asc",
} = {}) => {
  try {
    const response = await wachuApiClient.get("/v1/wines", {
      params: { query, page, size, sort, sort_direction },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getWine = async (id) => {
  try {
    const response = await wachuApiClient.get(`/v1/wines/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const compareWine = async (firstWineId, secondWineId) => {
  try {
    const response = await wachuApiClient.get(
      `/v1/wines//compare/?wineId=${firstWineId}&wineId=${secondWineId}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const recommendeWine = async (recommendWineRequest) => {
  try {
    const response = await wachuApiClient.get(
      `/v1/wines/recommend`,
      recommendWineRequest
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const promotionWines = async ({
  page = 1,
  size = 10,
  sort = "name",
}) => {
  try {
    const response = await wachuApiClient.get("/v1/wines/promotion", {
      params: { page, size, sort },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
