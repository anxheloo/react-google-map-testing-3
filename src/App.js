import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Directions from "./Directions";

function App() {
  const position = { lat: 43.6532, lng: -79.3832 };

  return (
    <APIProvider apiKey="AIzaSyBP99Vf_gDpO4gDtVz96aVukYBn6fTChSw">
      <Map
        mapId="a0f9dccaba48dc35"
        defaultCenter={position}
        defaultZoom={9}
        style={{ width: "100vw", height: "100vh" }}
        fullscreenControl={false}
      >
        <Directions />
      </Map>
    </APIProvider>
  );
}

export default App;
