import React, { useContext, useEffect } from "react";
import axios from "axios";

import { WeatherContext } from "./contexts/WeatherContext";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import RightLayOut from "./components/RightLayOut";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import LocationIcon from "./components/shared/LocationIcon";

const App = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const location = state.location;
  const currentWeather = state.currentWeather;
  console.log(location);

  const config = {
    headers: {
      location: location,
    },
  };

  useEffect(async () => {
    const getWeather = async () => {
      dispatch({ type: "LOADING", payload: true });
      const tempForecast = [];
      const response = await axios.get(`http://localhost:8000/`, config);
      console.log("response", response);
      if (response.status === 400) {
        console.log("Error");
        dispatch({ type: "ERROR", payload: { code: response.data.error.code, message: response.data.error.message }});
        dispatch({ type: "CURRENT", payload: null});
        dispatch({ type: "FORECAST", payload: null });    
      } else {
        let currentWeatherData = {
          temp: response.data.current.temp_c,
          condition: response.data.current.condition.text,
          icon: response.data.current.condition.icon,
          location: response.data.location.name,
        };
        await response.data.forecast.forecastday.forEach(async (snapshot) => {
          let forecastWeatherData = {
            date: snapshot.date,
            maxTemp: snapshot.day.maxtemp_c,
            minTemp: snapshot.day.mintemp_c,
            condition: snapshot.day.condition.text,
            icon: snapshot.day.condition.icon,
          };
          tempForecast.push(forecastWeatherData);
        });
        dispatch({ type: "CURRENT", payload: currentWeatherData });
        dispatch({ type: "FORECAST", payload: tempForecast });
      }
    };
    await getWeather();
    dispatch({ type: "LOADING", payload: false });
  }, [location]);

  return (
    <div
      className="w-screen h-screen bg-blue-50"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1502912274126-08f31a73a5f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2046&q=80)",
      }}
    >
      <Header />
      <SearchBar />
      {currentWeather && (
        <div className="flex flex-wrap items-center justify-center">
          <CurrentWeather />
          <RightLayOut />
        </div>
      )}
    </div>
  );
};

export default App;