import React, {useContext} from 'react';
import { WeatherContext } from '../contexts/WeatherContext'

const Forecast = () => {
    const { state } = useContext(WeatherContext);
    const forecastWeathers =state.forecastWeather
    console.log(forecastWeathers);

    const getDayOfWeek = (date) => {
        return new Date(date).toLocaleString('en-us', {weekday:'long'})
    }

  return (
    <div className="flex">
      {forecastWeathers?.map((weather) => (
        <div
          key={weather.date}
          className="flex flex-col items-center justify-center h-48 p-1 text-center bg-opacity-50 border cursor-pointer w-36 b-gray-400 rounded-3xl bg-slate-100"
        >
          <div className="flex flex-col font-bold text-gray-900 text-md">
            <span className="uppercase">{getDayOfWeek(weather.date)}</span>
          </div>
          <div className="flex items-center justify-center w-12 h-12">
            <img src={weather.icon} alt="" />
          </div>
          <p className="h-8 mb-5 text-gray-700">{weather.condition}</p>
          <div className="mb-1 text-2xl font-bold text-gray-900">
            {weather.maxTemp}º
            <span className="mx-1 font-normal text-gray-700">/</span>
            {weather.minTemp}º
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
