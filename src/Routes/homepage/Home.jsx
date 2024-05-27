import SearchBar from '../../Searchbar/SearchBar'
import './Home.scss'

const Home = ()=>{
    return(
        <>
        <div className='Home'>
           <div className="txt-container">
            <div className="wrapper">
            <h1 className='title'>Find Real Estate & Get Your Dream Place </h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </p>
                 <SearchBar/>
                 <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years Of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Property Ready</h2>
                    </div>
                 </div>
            </div>
           </div>
           <div className="img-container">
            <img src="../../../public/bg.png" alt="" />
           </div>
        </div>
        </>
    )
}

export default Home