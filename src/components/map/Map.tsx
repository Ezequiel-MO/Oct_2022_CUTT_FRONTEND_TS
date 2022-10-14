import { Vendor } from './Vendor'

const Map = () => {
  const hotel = new Vendor('Hotel', 'H10 Casanova', -72.9573, 53.7776)

  return <div>{JSON.stringify(hotel)}</div>
}

export default Map
