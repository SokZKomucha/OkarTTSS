import IVehicle from "./../interfaces/IVehicle";

export default async function getVehiclesTrams(): Promise<Array<IVehicle>> {
  const request = await fetch("http://www.ttss.krakow.pl/internetservice/geoserviceDispatcher/services/vehicleinfo/vehicles");
  const response = await request.json();
  return response.vehicles.filter((e: any) => !e?.isDeleted);
}