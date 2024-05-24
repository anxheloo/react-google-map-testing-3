import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useCallback, useState } from "react";

// RENDERIN A CUSTOM MAP WITH A CUSTOM ADVANCED MARKER WITH AN INFO WINDOW

function App() {
  const position = { lat: 53.54, lng: 10 };

  return (
    <APIProvider apiKey="AIzaSyBP99Vf_gDpO4gDtVz96aVukYBn6fTChSw">
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId="a0f9dccaba48dc35"></Map>
      </div>
    </APIProvider>
  );
}

export default App;
