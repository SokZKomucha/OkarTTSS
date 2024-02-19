import * as leaflet from "leaflet";

const iconTram = new leaflet.Icon({
  iconUrl: "./images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  shadowUrl: "./images/marker-shadow.png",
  shadowSize: [41, 41],
  popupAnchor: [0, -41]
});

export default iconTram;
