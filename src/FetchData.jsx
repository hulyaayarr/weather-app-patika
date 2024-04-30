import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
const FetchData = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const getCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) / 1.8).toFixed(0);
  };

  const fetchData = async () => {
    if (!city) {
      return;
    }
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=P4SNV3AVLASGNSZBAAZPYRJG4&contentType=json`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div>
      {weatherData
        ? weatherData.days.slice(0, 7).map((day, index) => (
            <p key={index}>
              {city}
              Day {index + 1}: {getCelsius(day.temp)} °C
            </p>
          ))
        : "Loading..."}
    </div>
  );
};

FetchData.propTypes = {
  city: PropTypes.string.isRequired, // 'city' prop is required and should be a string
};
export default FetchData;
