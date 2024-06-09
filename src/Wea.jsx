import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wea = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Your City');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4392abda5ef6198bd8d8b3ac9dd75ef4&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [city]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" value={city} onChange={handleChange} />
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Wea