import { Wine } from "./Wine";

export interface Pairing {
  id: number;
  wine: Wine;
  memberId: number;
  title: string;
  description: string;
  photoUrl?: string;
  createdAt: Date;
}
