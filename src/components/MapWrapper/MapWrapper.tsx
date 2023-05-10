import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";
// import L from "leaflet";
function MapWrapper({ children }: any) {
  return (
    <MapContainer
      //   center={[0,0]}
      //   zoom={0}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </MapContainer>
  );
}

export default MapWrapper;
