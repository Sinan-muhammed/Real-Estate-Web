import { useState } from 'react'
import './slider.scss'
import PropTypes from 'prop-types';


const Slider = ({images})=>{
    const [imgIndex,setImgIndex] = useState(null)
    
    const changeSlide = (direction) =>{
        if(direction === 'left'){
            if( imgIndex === 0){
                setImgIndex(images.length-1)

            }else{
                 setImgIndex(imgIndex-1)
            }

        }else{
            if(imgIndex === images.length-1){
                 setImgIndex(0)
            }else{
             setImgIndex(imgIndex + 1 )
            }

        }
    }
    return (
        <>
        <div className="slider">
            {imgIndex !== null &&  <div className="fullSlider">
                <div className="arrow">
                    <img src="../../../public/arrow.png" alt=""  onClick={()=>changeSlide ('left')}/>
                </div>
                <div className="imgContainer">
                    <img src={images[imgIndex]} alt="" />
                </div>
                <div className="arrow">
                <img src="../../../public/arrow.png" alt="" className='right' onClick={()=>changeSlide ('right')}/>
                </div>
                <div className="close" onClick={()=> setImgIndex (null)}>X</div>
            </div>}
            <div className="bgImg">
                <img src={images[0]} alt="" onClick={()=>setImgIndex(0)} />
            </div>
            <div className="smImg">
                {images.slice(1).map((image,index)=>(                  

                    <img src={image} alt="" key={index} onClick={()=> setImgIndex(index + 1)}/>
                ))}
            </div>
        </div>
        </>
    )
}


Slider.propTypes = {
    images : PropTypes.any,
}

export default Slider