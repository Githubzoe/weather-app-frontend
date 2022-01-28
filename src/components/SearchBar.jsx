import React, { useState, useContext, useEffect, useRef } from 'react';
import { WeatherContext } from '../contexts/WeatherContext'


const SearchBar = () => {
    const { state, dispatch } = useContext(WeatherContext);
    const error = state.error
    const [location, setLocation] = useState("");
    const input = useRef();


    useEffect(() => {
        setLocation(state.location)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (location !== "") {
          dispatch({ type: "LOADING", payload: true });
          dispatch({
            type: "SETTINGS",
            payload: { ...state.settings, geoLocation: "off" },
          });
          dispatch({ type: "LOCATION", payload: location });
          input.current.blur();
        }
      };
      console.log("Error", error);

      const handleChange = (e) => {
        dispatch({ type: "ERROR", payload: null });
        setLocation(e.target.value)
      }


  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center w-10/11"
      >
        <input
          className="w-5/12 h-12 pt-10 pb-10 text-4xl text-center text-white placeholder-white bg-transparent border-b-4 w-200 border-b-white focus:outline-none focus:placeholder-opacity-100"
          ref={input}
          type="text"
          value={location}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Search by location"
        />
      </form>

      {(error) && <p className="text-3xl text-red-600">{error.message}</p>}
    </div>
  );
};

export default SearchBar;
