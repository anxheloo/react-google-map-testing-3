import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import trees from "./trees.js";
import Markers from "./Markers.js";

function App() {
  const position = { lat: 43.64, lng: -79.4 };

  return (
    <APIProvider apiKey="AIzaSyBP99Vf_gDpO4gDtVz96aVukYBn6fTChSw">
      <div style={{ height: "100vh", width: "100%" }}>
        <Map defaultZoom={9} defaultCenter={position} mapId="a0f9dccaba48dc35">
          <Markers points={trees}></Markers>
        </Map>
      </div>
    </APIProvider>
  );
}

export default App;
