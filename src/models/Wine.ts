export interface Wine {
  id: number;
  name: string;
  sweetness: number;
  acidity: number;
  body: number;
  tannin: number;
  wineType: WineType;
  aroma: string;
  price?: number;
  kind?: string;
  style?: string;
  country?: string;
  region?: string;
}

export enum WineType {
  RED = "RED",
  WHITE = "WHITE",
  ROSE = "ROSE",
  SPARKLING = "SPARKLING",
  FORTIFIED = "FORTIFIED",
  UNDEFIENED = "UNDEFIENED",
}
