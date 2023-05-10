import { useAppContext } from "../contexts/AppContext";

export default function useFetchSearchMapResult() {
  const { updateTheSearchResult } = useAppContext();

  const fetchMap = (searchText: string) => {
    const params = {
      q: `${searchText}`,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params as any).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_NOMINATIM_BASE_URL}${queryString}`,

      requestOptions as any
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        updateTheSearchResult(JSON.parse(result));
      })
      .catch((err) => console.log("err: ", err));
  };

  return { fetchMap };
}
