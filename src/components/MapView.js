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
import { FlightsContext } from "../context/FlightsContext";
import { IndexContext } from "../context/IndexContext";

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

  const { flights } = useContext(FlightsContext);
  // console.log(JSON.stringify(flights, null, 2));
  const {index} = useContext(IndexContext);

  let markerCords = [];
  let cityNames = [];

  flights.forEach((flight) => {
    cityNames.push(flight.path.map((path) => [path.name]));
    markerCords.push(flight.path.map((path) => [path.lat, path.lng]));
  }
  );

  return (
    <MapContainer
      bounds={[markerCords[index]]}
      boundsOptions={{ padding: [50, 50] }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerCords[index].map((marker , id) => (
        <div key={id}>
          <Marker position={marker} icon={GetIcon()}>
          <Popup>
            {cityNames[index][id]}
          </Popup>
          </Marker>
        </div>
      ))};
      <Polyline positions={[markerCords[index]]}></Polyline>
    </MapContainer>
  );
};
export default MapView;
