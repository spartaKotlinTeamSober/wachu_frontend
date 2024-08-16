import { Review } from "../models/Review";
import { wachuApiClient } from "./client";
import { ReviewCreateRequest } from "./request/ReviewCreateRequest";
import { ReviewsApiResponse } from "./response/ReviewsApiResponse";

export const getReviews = async (page: number): Promise<ReviewsApiResponse> => {
  try {
    const response = await wachuApiClient.get("api/v1/reviews", {
      params: {
        page: page,
        size: 9,
        sort: "id,desc",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch review");
  }
};

export const getReview = async (id: string | undefined): Promise<Review> => {
  try {
    const response = await wachuApiClient.get(`api/v1/reviews/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch review");
  }
};

export const postReview = async (
  request: ReviewCreateRequest,
  imageFiles: File[] | undefined
): Promise<Review> => {
  try {
    const formData = new FormData();
    formData.append(
      "reviewRequest",
      new Blob(
        [
          JSON.stringify({
            wineId: request.wineId,
            title: request.title,
            description: request.description,
            score: request.score,
          }),
        ],
        { type: "application/json" }
      )
    );

    if (imageFiles && imageFiles.length > 0) {
      Array.from(imageFiles).forEach((file) => {
        formData.append("images", file);
      });
    }

    const response = await wachuApiClient.post("api/v1/reviews", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create review");
  }
};

export const deleteReview = async (id: string | undefined): Promise<number> => {
  try {
    const response = await wachuApiClient.delete(`api/v1/reviews/${id}`);

    return response.status;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete review");
  }
};
