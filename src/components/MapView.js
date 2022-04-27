import React, { useContext } from "react";
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
import { CitiesContext } from "../context/CitiesContext";

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

  const { cities } = useContext(CitiesContext);

  return (
    <MapContainer
      bounds={[cities]}
      boundsOptions={{ padding: [50, 50] }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city, index) => (
        <div key={index}>
          <Marker position={city} icon={GetIcon()}>
            <Popup>
              City City <br /> City Name.
            </Popup>
          </Marker>
        </div>
      ))}
      ;<Polyline positions={[cities]}></Polyline>
    </MapContainer>
  );
};
export default MapView;
