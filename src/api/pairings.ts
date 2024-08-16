import { Pairing } from "../models/Pairing";
import { wachuApiClient } from "./client";
import { PairingCreateRequest } from "./request/PairingCreateRequest";
import { PairingsApiResponse } from "./response/PairingsApiResponse";

export const getPairings = async (
  page: number,
  size = 9
): Promise<PairingsApiResponse> => {
  try {
    const response = await wachuApiClient.get("api/v1/pairings", {
      params: {
        page: page,
        size: size,
        sort: "id,desc",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch pairings");
  }
};

export const getPairing = async (id: string | undefined): Promise<Pairing> => {
  try {
    const response = await wachuApiClient.get(`api/v1/pairings/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch pairing");
  }
};

export const postPairing = async (
  request: PairingCreateRequest,
  imageFile: File
): Promise<Pairing> => {
  try {
    const formData = new FormData();
    formData.append(
      "pairingRequest",
      new Blob(
        [
          JSON.stringify({
            wineId: request.wineId,
            title: request.title,
            description: request.description,
          }),
        ],
        { type: "application/json" }
      )
    );
    formData.append("image", imageFile);

    const response = await wachuApiClient.post("api/v1/pairings", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create pairing");
  }
};

export const deletePairing = async (
  id: string | undefined
): Promise<number> => {
  try {
    const response = await wachuApiClient.delete(`api/v1/pairings/${id}`);

    return response.status;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete pairing");
  }
};
