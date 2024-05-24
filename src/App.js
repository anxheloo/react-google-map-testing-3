import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useCallback, useState } from "react";

// RENDERIN A CUSTOM MAP WITH A CUSTOM ADVANCED MARKER WITH AN INFO

function App() {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState(false);
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  );

  const position = { lat: 53.54, lng: 10 };

  return (
    <APIProvider apiKey="AIzaSyBP99Vf_gDpO4gDtVz96aVukYBn6fTChSw">
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId="a0f9dccaba48dc35">
          <AdvancedMarker
            position={position}
            onClick={handleMarkerClick}
            ref={markerRef}
          >
            <Pin
              background={"grey"}
              borderColor={"black"}
              glyphColor={"black"}
            ></Pin>
          </AdvancedMarker>

          {infoWindowShown && (
            <InfoWindow
              anchor={marker}
              onCloseClick={() => setInfoWindowShown((isShown) => !isShown)}
            >
              Im in Hamburg
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

export default App;
