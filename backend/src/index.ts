// Utilities 
import getVehiclesTrams from "./utils/getVehiclesTrams";
import IVehicle from "./interfaces/IVehicle";

// Modules
import socketio from "socket.io"
import express from "express";
import http from "http";
import cors from "cors";
import path from "path";
require("dotenv").config();

// Variables
const app = express();
const server = http.createServer(app);
const io = new socketio.Server(server, { cors: { origin: "*" } });
let trams: Array<IVehicle> = [];



app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, "./../../frontend/public")));
app.get("/api/vehicles/trams", async (req: express.Request, res: express.Response) => res.json(trams));

server.listen(process.env.PORT, async () => {
  console.clear();
  trams = await getVehiclesTrams();
  io.emit("vehicles-trams", trams);

  setInterval(async () => {
    trams = await getVehiclesTrams();
    io.emit("vehicles-trams", trams);
  }, Number(process.env.REFRESH_INTERVAL));
});
