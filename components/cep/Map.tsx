"use client";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PlaceIcon from "@mui/icons-material/Place";

export default function CepMap({
  latitude,
  longitude,
}: {
  latitude: any;
  longitude: any;
}) {
  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 18,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      style={{ width: "90%", height: 700 }}
      mapboxAccessToken="pk.eyJ1Ijoicm9hY3UiLCJhIjoiY2xhcmMzMXpyMThkYjN2bnZoZDhoNTlyeiJ9.TQJEyuVsnPmqtgzeuKCKWw"
    >
      <Marker longitude={longitude} latitude={latitude} anchor="bottom">
        <PlaceIcon color="primary" sx={{ height: 90, width: 90 }} />
      </Marker>
    </Map>
  );
}
