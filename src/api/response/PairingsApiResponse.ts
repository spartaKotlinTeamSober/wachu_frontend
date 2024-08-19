import { Pairing } from "../../models/Pairing";

export interface PairingsApiResponse {
  totalPages: number;
  totalElements: number;
  size: number;
  content: Pairing[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
