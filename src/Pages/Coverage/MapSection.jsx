// MapSection.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize:[25 ,41],
    iconAnchor:[12 , 41]
});
const position = [23.8103, 90.4125];

export default function MapSection() {
  return (
    <div className="w-full h-96 mt-6">
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={false}
        className="h-full w-full rounded-lg shadow"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <Marker position={position} icon={markerIcon}>
          <Popup>We are available across Bangladesh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
