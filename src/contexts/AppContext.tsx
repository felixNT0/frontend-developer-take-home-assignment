import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { createContext, useContext, useState } from "react";
import { AppContextTpye } from "../types/AppContextType.type";
import { geographicalType } from "../types/GeographicalType.type";

export const AppContext = createContext<AppContextTpye>({
  updateTheMap: () => {},
  latitude: 0,
  longitude: 0,
  updateTheSearchResult: () => {},
  searchMode: false,
  toggleSearchMode: () => {},
  searchResult: [],
});

const AppContextProvider = ({ children }: any) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongtitude] = useState(0);
  const [searchResult, setSearchResult] = useState([]);
  const [searchMode, setSearchMode] = useState(false);

  const updateTheMap = (values: geographicalType) => {
    setLatitude(values.latitude);
    setLongtitude(values.longitude);
  };

  const updateTheSearchResult = (result: any) => {
    setSearchResult(result);
  };

  const toggleSearchMode = () => {
    setSearchMode(!searchMode);
  };
  return (
    <AppContext.Provider
      value={{
        updateTheMap,
        latitude,
        longitude,
        updateTheSearchResult,
        searchResult,
        searchMode,
        toggleSearchMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
