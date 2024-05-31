import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.scss'
import 'leaflet/dist/leaflet.css'
import Pin from '../Pin/Pin'

const Map = ({item})=>{
    return (
        <>
        <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false} className='map'>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    {item.map(item=>(
        <Pin item={item} key={item.id}/>
    ))}
</MapContainer>
        </>
    )
}

export default Map