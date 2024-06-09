import React, { useState,useEffect } from 'react'
 import serach_icon from "../assets/search.png";
 import cloud_icon from "../assets/cloud.png";
 import humidity_icon from "../assets/humidity.png";
 import wind_icon from "../assets/wind.png";
 import axios from "axios"
 import "./weather.css"
const Weather = () => {
  const[city,setCity]=useState('')
  const [weatherData, setWeatherData] = useState();
  const [searchCity, setSearchCity] = useState('');
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=4392abda5ef6198bd8d8b3ac9dd75ef4&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (searchCity !== "") {
      fetchData();
    }
    setCity('')
  }, [searchCity]);

  const getaData=()=>{
    const we=setSearchCity(city)
    console.log(we)
  }
   
  
  return (
    <div className="weather">
        <div className="search-bar">
            <input type="text" value={city} placeholder='Search' onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={getaData}> <img src={serach_icon} alt=""/></button>
        </div>

        {weatherData !==undefined ? <><div className='details'>
          <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt=""/>
        <div className='pra' style={{fontSize:"20px"}}>
        <p className='degree'>{weatherData.main.temp} &#8451;</p>
        <p className='nme'>{weatherData.name}</p>
        </div>
        </div>
         <div className="weather-details" style={{ position: "absolute",bottom:"50px"}}>
          <div className="col">
          <img src={humidity_icon}/>
          <div className="pra-we">
            <p>{weatherData.main.humidity}%</p>
            <span>humidity</span>
          </div>
          </div>

         
         
        


       
          <div className="col">
          <img src={wind_icon}/>
          <div className="pra-we">
            <p>{weatherData.wind.speed} m/s</p>
            <span></span>
          </div>
          </div>
</div></>:"No DATA"}
        {/* <div className='details'>
          <img src="http://openweathermap.org/img/w/50d.png" alt=""/>
        <div className='pra' style={{fontSize:"20px"}}>
        <p className='degree'>24 &#8451;</p>
        <p className='nme'>London</p>
        </div>
        </div>
         <div className="weather-details" style={{ position: "absolute",bottom:"50px"}}>
          <div className="col">
          <img src={humidity_icon}/>
          <div className="pra-we">
            <p>91%</p>
            <span>humidity</span>
          </div>
          </div>

         
         
        


       
          <div className="col">
          <img src={wind_icon}/>
          <div className="pra-we">
            <p>3.4km/hr</p>
            <span></span>
          </div>
          </div>
</div> */}
         
         
        </div>
        
        

    
  )
}

export default Weather