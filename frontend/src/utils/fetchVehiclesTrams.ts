import IVehicle from "../interfaces/IVehicle";

export default async function fetchVehiclesTrams(): Promise<Array<IVehicle>> {
  const request = await fetch("/api/vehicles/trams");
  const response = await request.json();
  return response;
}