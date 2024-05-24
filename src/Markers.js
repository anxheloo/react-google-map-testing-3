import { useEffect, useRef, useState, useCallback } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useMap } from "@vis.gl/react-google-maps";
import MarkerWithInfoWindow from "./marker-with-infowindow";
import MarkerWithInfoWindowAndRef from "./MarkersWithRef";
import customIcon from "./icons/vehicle-moving.svg";

const Markers = ({ points }) => {
  const map = useMap();
  const [markers, setMarkers] = useState([]);
  const clusterer = useRef();

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

  const handleClick = useCallback((event) => {
    if (!map) return;
    if (!event.latLng) return;
    console.log("marker clicked:", event.latLng.toString());
    map.panTo(event.latLng);
  });

  return (
    <>
      {points.map((point, index) => (
        <MarkerWithInfoWindowAndRef
          ref={(marker) => setMarkerRef(marker, index)}
          key={index}
          icon={customIcon}
          position={{ lat: point.lat, lng: point.lng }}
          //position={{ lat: mark[1], lng: mark[2] }}
          details={point}
          onClick={handleClick}
        ></MarkerWithInfoWindowAndRef>
      ))}
    </>
  );
};

export default Markers;
