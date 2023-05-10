import { geographicalType } from "./GeographicalType.type";

export type AppContextTpye = {
  updateTheMap: (values: geographicalType) => void;
  latitude: number;
  longitude: number;
  updateTheSearchResult: (result: any) => void;
  searchMode: boolean;
  toggleSearchMode: () => void;
  searchResult: any[];
};
