import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext'

const CurrentWeather = () => {
    const { state } = useContext(WeatherContext);
    const current = state.currentWeather

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center bg-opacity-50 border cursor-pointer w-96 h-96 rounded-3xl bg-slate-100">
      <div className="flex flex-col font-bold text-gray-900 text-md">
        <span className="m-3 text-2xl uppercase">{current?.location}</span>
        <span className="mb-4 uppercase">Today</span>
      </div>
      <div className="flex items-center justify-center w-32 h-32">
        <img src={current?.icon} alt="" className="w-96" />
      </div>
      <p className="mb-2 text-2xl text-gray-700">{current?.condition}</p>
      <div className="mb-6 text-6xl font-bold text-gray-900">
        {current?.temp}º
          </div>
    </div>
  );
};

export default CurrentWeather;
