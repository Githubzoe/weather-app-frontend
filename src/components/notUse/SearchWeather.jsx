// import React, { useState, useEffect } from "react";
// import axios from 'axios'

// export const SearchWeather = () => {
//   const [location, setLocation] = useState('');
//   const [weather, setWeather] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     requestWeather();
//   };

//   useEffect(() => {
//     requestWeather();
//   }, []); 

//   const config = {
//     headers: {
//       "location":location
//     }
//   }

//   async function requestWeather() {
//     const res = await axios.get(`http://localhost:8000` , config);

//     console.log(res.data);
//     // setWeather();
//   }

//   return (
//     <div className="w-11/12 mx-auto my-0">
//       <form
//         className="flex items-center justify-center pb-20"
//         onSubmit={handleSubmit}
//       >
//         <label className="search-label" htmlFor="location"></label>
//         <input
//           className="h-12 bg-transparent border-b-4 outline-none w-96 border-b-white focus:outline-none"
//           type="text"
//           value={location}
//           placeholder="Search by city or suburb"
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         {/* <button className="px-3 py-2 mb-2 text-5xl font-bold text-white border-none rounded color hover:opacity-50">
//           +
//         </button> */}
//       </form>
//     </div>
//   );
// };



// import React, { useState, useContext, useEffect, useRef } from "react";
// import { WeatherContext } from "../../contexts/WeatherContext";
// import axios from 'axios'

// export const SearchWeather = () => {
//   const { state, dispatch } = useContext(WeatherContext);
//   const error = state.error;
//   const [location, setLocation] = useState("");
//   // const input = useRef();

//   const config = {
//     headers: {
//       "location": location
//     }
//   }

//   useEffect(() => {
//     const requestWeather = async () => {
//       const res = await axios.get(`http://localhost:8000` , config);
//       console.log(res.data);
//     }
//     requestWeather();
//   },[])

//   useEffect(() => {
//     setLocation(state.location);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (location !== "") {
//       dispatch({ type: "LOADING", payload: true });
//       dispatch({ type: "LOCATION", payload: location });
//       // input.current.blur();
//     }
//   };
//   console.log("Error", error);

//   const handleChange = (e) => {
//     dispatch({ type: "ERROR", payload: null });
//     setLocation(e.target.value);
//   };

//   return (
//     <div className="">
//       <form onSubmit={handleSubmit} className="">
//         <input
//           className="h-12 text-white bg-transparent border-b-4 w-96 border-b-white focus:outline-none"
//           // ref={input}
//           type="text"
//           value={location}
//           onChange={(e) => {
//             handleChange(e);
//           }}
//           placeholder="Search by location"
//         />
//       </form>

//       {error ? <p>{error.message}</p> : ""}
//     </div>
//   );
// };
