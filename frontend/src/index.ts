// Utilities
import IVehicle from "./interfaces/IVehicle";
import iconTram from "./utils/iconTram";
import fetchVehiclesTrams from "./utils/fetchVehiclesTrams";

// Modules
import { io } from "socket.io-client";
import * as leaflet from "leaflet";

// Variables
const socket = io("/");
const map = leaflet.map("map").setView([50.06226502, 19.96021671], 13);
const layerTrams = leaflet.layerGroup().addTo(map);
const degFactor = 3.6e6;

// Maptiler
leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`
}).addTo(map);



(async () => {
  const trams = await fetchVehiclesTrams();
  trams.forEach(e => {
    leaflet.marker([e.latitude / degFactor, e.longitude / degFactor], { icon: iconTram }).bindPopup(e.name).addTo(layerTrams);
  });
})();

socket.on("vehicles-trams", (trams: Array<IVehicle>) => {
  layerTrams.clearLayers();
  trams.forEach(e => {
    leaflet.marker([e.latitude / degFactor, e.longitude / degFactor], { icon: iconTram }).bindPopup(e.name).addTo(layerTrams);
  });
})