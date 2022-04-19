import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import useLeafletScripts from "../hooks/useLeafletScripts";

const MapView = () => {
  useLeafletScripts();
  const position = [40.71427, -74.00597];
  const position2 = [52.22977, 21.01178];

  return (
    <MapContainer
      bounds={[position, position2]}
      boundsOptions={{ padding: [50, 50] }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={position2}></Marker>
      <Polyline positions={[position, position2]}></Polyline>
    </MapContainer>
  );
};
export default MapView;
