import Filter from '../../Components/NavBar/Filter/Filter'
import { listData } from '../../lib/dummydata'
import Card from '../../Components/Card/Card'
import './Listpage.scss'
import Map from '../../Components/Map/Map'

const List = ()=>{

    const data =listData
    return (
        <>
       <div className="listPage">
           <div className="listContainer">
            <div className="wrapper">
                <Filter/>
                {data.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
           </div>
           <div className="mapContainer"> 
             <Map item={data}/>
           </div>
       </div>
        </>
    )
}

export default List