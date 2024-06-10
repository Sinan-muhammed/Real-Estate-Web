import Slider from '../../Components/slider/slider'
import './singlePage.scss'
import {singlePostData, userData} from '../../lib/dummydata'


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
                <div className="wrapper"></div>
            </div>
        </div>
        </>
    )
} 

export default Single