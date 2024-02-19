import IPath from "./IPath"

export default interface IVehicle {
  path?: Array<IPath>
  heading: number
  latitude: number
  longitude: number
  name: string
  tripId: string
  id: string
  color: string
  category: string
}