import { useEffect, useRef, useState, useCallback } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useMap } from "@vis.gl/react-google-maps";
import { AdvancedMarker } from "@vis.gl/react-google-maps";

const Markers = ({ points }) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {points.map((point, index) => (
        <AdvancedMarker
          position={{ lat: point.lat, lng: point.lng }}
          key={point.key}
          ref={(marker) => setMarkerRef(marker, point.key)}
        >
          <span> 🌳 </span>
        </AdvancedMarker>
      ))}
    </>
  );
};

export default Markers;
