import React, { useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import useLeafletScripts from '../hooks/useLeafletScripts'
import markerIconPNG from '../assets/img/icons/markers/marker-icon.png'
import L from 'leaflet'
import { FlightsContext } from '../context/FlightsContext'
import { IndexContext } from '../context/IndexContext'
import { useMap } from 'react-leaflet'

const MapBoundsRefresh = (props) => {
  const map = useMap()
  //console.log("map center:", map.getCenter());
  map.fitBounds(props.bounds)
  //console.log("new bounds: ", props.bounds);
  return null
}

const GetIcon = () => {
  return new L.icon({
    iconUrl: markerIconPNG,
    iconSize: [25, 40],
    iconAnchor: [12, 40],
    popupAnchor: [1, -25],
  })
}

const MapView = () => {
  useLeafletScripts()

  const { flights } = useContext(FlightsContext)
  //console.log(JSON.stringify(flights, null, 2));
  const { index } = useContext(IndexContext)

  let markerCords = []
  let cityNames = []
  let cityCodes = []

  flights.forEach((flight) => {
    cityNames.push(flight.path.map((path) => [path.name]))
    cityCodes.push(flight.path.map((path) => [path.iataCode]))
    markerCords.push(flight.path.map((path) => [path.lat, path.lng]))
  })
  let bounds = markerCords[index]
  return (
    <MapContainer
      bounds={bounds}
      boundsOptions={{ padding: [100, 100] }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerCords[index].map((marker, id) => (
        <div key={id}>
          <Marker position={marker} icon={GetIcon()}>
            <Popup>
              <h4>{cityNames[index][id]}</h4>
              <img
                style={{
                  backgroundImage: 'url(/spinner.gif)',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                height="160px"
                width="240px"
                src={`http://localhost:8080/api/airport_image?city="${cityNames[index][id]}"&code="${cityCodes[index][id]}"`}
              />
            </Popup>
          </Marker>
        </div>
      ))}
      ;<Polyline positions={[markerCords[index]]}></Polyline>
      <MapBoundsRefresh bounds={bounds} />
    </MapContainer>
  )
}
export default MapView
