import { Wine } from "./Wine";

export interface PromotionWine {
  closedAt: Date;
  openedAt: Date;
  promotionId: number;
  promotionStatus: string;
  wine: Wine;
}
