"use client";
import Map from "react-map-gl";

export default function CepMap({
  latitude,
  longitude,
}: {
  latitude: any;
  longitude: any;
}) {
  return (
    <Map
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 18,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      style={{ width: "90%", height: 700 }}
      mapboxAccessToken="pk.eyJ1Ijoicm9hY3UiLCJhIjoiY2xhcmMzMXpyMThkYjN2bnZoZDhoNTlyeiJ9.TQJEyuVsnPmqtgzeuKCKWw"
    ></Map>
  );
}
