export class Vendor {
  type: string
  name: string
  location: {
    lat: number
    lng: number
  }
  constructor(type: string, name: string, lat: number, lng: number) {
    this.type = type
    this.name = name
    this.location = {
      lat,
      lng
    }
  }
}
