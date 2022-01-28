import React, {useContext} from 'react';
import { WeatherContext } from '../contexts/WeatherContext';


const Header = () => {
  const { state } = useContext(WeatherContext);
  const currentWeather = state.currentWeather;
  
  return (
    <header
      className={`w-full p-5 font-mono text-6xl font-bold text-center text-white ${
        currentWeather ? "pt-10" : "pt-96"
      }`}
    >
      What is the weather like?
    </header>
  );
};

export default Header;
