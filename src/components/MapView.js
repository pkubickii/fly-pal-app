import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import useLeafletScripts from "../hooks/useLeafletScripts";
import markerIconPNG from "../assets/img/icons/markers/marker-icon.png";
import L from "leaflet";

const GetIcon = () => {
  return new L.icon({
    iconUrl: markerIconPNG,
    iconSize: [25, 40],
    iconAnchor: [12, 40],
    popupAnchor: [1, -25],
  });
};

const MapView = () => {
  useLeafletScripts();

  const position2 = [40.71427, -74.00597];
  const position = [52.22977, 21.01178];

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
      <Marker position={position} icon={GetIcon()}>
        <Popup>
          Start City <br /> City Name.
        </Popup>
      </Marker>
      <Marker position={position2} icon={GetIcon()}>
        <Popup>
          End City <br /> City Name.
        </Popup>
      </Marker>
      <Polyline positions={[position, position2]}></Polyline>
    </MapContainer>
  );
};
export default MapView;
