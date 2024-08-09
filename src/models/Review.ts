import { Wine } from "./Wine";

export interface Review {
  id: number;
  wine: Wine;
  memberId: number;
  title: string;
  description: string;
  score: number;
  createdAt: Date;
  mediaList: ReviewMultiMedia[];
}

export interface ReviewMultiMedia {
  id: number;
  reviewId: number;
  mediaUrl: string;
  mediaType: string;
}
