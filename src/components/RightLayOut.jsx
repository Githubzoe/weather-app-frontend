import React from 'react';
import Forecast from './Forecast';
import SearchBar from './SearchBar';

const RightLayOut = () => {
  return (
    <div className="flex flex-col xl:ml-10">
        <Forecast />
    </div>
    )
};

export default RightLayOut;
