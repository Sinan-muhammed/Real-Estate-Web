import Filter from '../../Components/NavBar/Filter/Filter'
import { listData } from '../../lib/dummydata'
import './Listpage.scss'

const List = ()=>{

    const data =listData
    return (
        <>
       <div className="listPage">
           <div className="listContainer">
            <div className="wrapper">
                <Filter/>
            </div>
           </div>
           <div className="mapContainer"> mapContainer</div>
       </div>
        </>
    )
}

export default List