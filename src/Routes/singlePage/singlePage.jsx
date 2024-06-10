import Slider from '../../Components/slider/slider'
import './singlePage.scss'
import {singlePostData, userData} from '../../lib/dummydata'
import Map from '../../Components/Map/Map'


const Single = ()=>{
    return (
        <>
        <div className="singlePage">
            <div className="detail">
                <div className="wrapper">
                    <Slider images={singlePostData.images}/>
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src="../../../public/pin.png" alt="" />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className="price">
                                    $ {singlePostData.price}
                                </div>
                            </div>
                                <div className="user">
                                    <img src={userData.img} alt="" />
                                    <span>{userData.name}</span>
                                </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="../../../public/utility.png" alt="" />
                            <div className="featureText">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="../../../public/pet.png" alt="" />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                <p>Pets Allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="../../../public/fee.png" alt="" />
                            <div className="featureText">
                                <span>Property fees</span>
                                <p>Must have 3x the rent in total household income</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                      <div className="sizes">
                        <div className="size">
                            <img src="../../../public/size.png" alt="" />
                            <span>80 sqft</span>
                        </div>
                        <div className="size">
                            <img src="../../../public/bed.png" alt="" />
                            <span>2 beds</span>
                        </div>
                        <div className="size">
                            <img src="../../../public/bath.png" alt="" />
                            <span>1 bathroom</span>
                        </div>
                      </div> 
                    <div className="sizes"></div>
                    <p className="title">Near by places </p>
                      <div className="listHorizontal">
                        <div className="feature">
                            <img src="../../../public/school.png" alt="" />
                         <div className="featureText">
                            <span>School</span>
                            <p>250m away</p>
                         </div>
                       </div>
                        <div className="feature">
                            <img src="../../../public/bus.png" alt="" />
                         <div className="featureText">
                            <span>Bus Stop</span>
                            <p>100m away</p>
                         </div>
                       </div>
                        <div className="feature">
                            <img src="../../../public/restaurant.png" alt="" />
                         <div className="featureText">
                            <span>Restaurant</span>
                            <p>200m away</p>
                         </div>
                       </div>
                      </div> 
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]}/>
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="../../../public/chat.png" alt="" />
                            Send a Message
                        </button>
                        <button>
                            <img src="../../../public/save.png" alt="" />
                            Save the Place
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 

export default Single