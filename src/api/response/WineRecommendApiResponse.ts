import { Wine } from "../../models/Wine";

export interface WineRecommendApiResponse {
  wine: Wine;
  similarityMap: Record<string, number>;
  totalSimilarity: number;
}
