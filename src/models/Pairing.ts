import { Profile } from "./Profile";
import { Wine } from "./Wine";

export interface Pairing {
  id: number;
  wine: Wine;
  member: Profile;
  title: string;
  description: string;
  photoUrl?: string;
  createdAt: Date;
}
